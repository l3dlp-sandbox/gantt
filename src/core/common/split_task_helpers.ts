export default class SplitTasksHelper {

	_datastore: any = null;

	constructor (datastore: any) {
		this._datastore = datastore;
	}
	isSplitItem = (item: any) => {
		return (item.render == "split" && this._datastore.hasChild(item.id));
	};
	isSubrowSplitItem = (item: any) => {
		return (item.split_placement == "subrow");
	};
	isDefaultSplitItem = (item: any) => {
		return (item.split_placement == "auto" || item.split_placement === undefined);
	};
	isInlineSplitItem = (item: any) => {
		return (item.split_placement == "inline");
	};
};