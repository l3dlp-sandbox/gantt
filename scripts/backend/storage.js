const striptags = require("striptags");

class Storage {
    constructor(data, initItem) {
        this._data = data;
        this._initItem = initItem;
        this._initialData = cloneData(data);
    }
    all() {
        return this._data;
    }
    // Discards all runtime changes and restores the original seed data.
    reset() {
        this._data = cloneData(this._initialData);
        return this._data;
    }
    get(id, table) {
        return this._data[table].find(function(entry) {
            return id === entry.id;
        });
    }
    delete(id, table) {
        this._data[table] = this._data[table].filter(function(entry) {
            return id !== entry.id;
        });
    }
    update(id, table, newData) {
        validateDates(newData);
        return this._data[table].find(function(entry, index, arr) {
            if (id == entry.id) {
                var preparedItem = newData;
                console.log(table)
                if(this._initItem && this._initItem[table]){
                    preparedItem = this._initItem[table](preparedItem);
                }
                arr[index] = _addId(id, sanitizeObject(preparedItem));
                return true;
            }
        }.bind(this));
    }
    insert(table, data) {
        validateDates(data);
        data.id = uid();
        var preparedItem = data;
        if(this._initItem && this._initItem[table]){
            preparedItem = this._initItem[table](data);
        }
        this._data[table].push(sanitizeObject(preparedItem));
        return data;
    }
}

var seed = Date.now();
function uid(){
    return seed++;
}

var DATE_FIELDS = ["start_date", "end_date"];

// Accepts ISO date strings (e.g. "2023-04-01T00:00:00.000Z")
// or "YYYY-MM-DD HH:mm:ss" (seconds optional, matching the sample date format).
function isValidDate(value){
    if(typeof value !== "string"){
        return false;
    }
    var isoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/;
    var dateTimePattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$/;
    if(!isoPattern.test(value) && !dateTimePattern.test(value)){
        return false;
    }
    return !isNaN(Date.parse(value));
}

function validateDates(data){
    if(!data){
        return;
    }
    for(var i = 0; i < DATE_FIELDS.length; i++){
        var field = DATE_FIELDS[i];
        if(data[field] !== undefined && data[field] !== null && !isValidDate(data[field])){
            throw new Error("Invalid date value for field '" + field + "'");
        }
    }
}

function sanitizeObject(data){
    for(var i in data){
        if(typeof data[i] === "string"){
            data[i] = striptags(data[i]);
        }else if(typeof data[i] === "object"){
            sanitizeObject(data[i]);
        }
    }
    return data;
}

function _addId(id, data) {
    return Object.assign(data, {id: id});
}

function cloneData(data){
    return JSON.parse(JSON.stringify(data));
}

module.exports = Storage;