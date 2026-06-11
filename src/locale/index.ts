import af from "./locale_af";
import ar from "./locale_ar";
import be from "./locale_be";
import bg from "./locale_bg";
import bs from "./locale_bs";
import ca from "./locale_ca";
import cn from "./locale_cn";
import cs from "./locale_cs";
import da from "./locale_da";
import de from "./locale_de";
import de_at from "./locale_de_at";
import el from "./locale_el";
import en from "./locale_en";
import es from "./locale_es";
import es_mx from "./locale_es_mx";
import et from "./locale_et";
import fa from "./locale_fa";
import fi from "./locale_fi";
import fr from "./locale_fr";
import fr_ca from "./locale_fr_ca";
import ga from "./locale_ga";
import he from "./locale_he";
import hr from "./locale_hr";
import hu from "./locale_hu";
import id from "./locale_id";
import it from "./locale_it";
import jp from "./locale_jp";
import kr from "./locale_kr";

import LocaleManager from "./locale_manager";

import lt from "./locale_lt";
import lv from "./locale_lv";
import mk from "./locale_mk";
import ms from "./locale_ms";
import nb from "./locale_nb";
import nl from "./locale_nl";
import nl_be from "./locale_nl_be";
import no from "./locale_no";
import pl from "./locale_pl";
import pt from "./locale_pt";
import pt_br from "./locale_pt_br";
import ro from "./locale_ro";
import ru from "./locale_ru";
import si from "./locale_si";
import sk from "./locale_sk";
import sq from "./locale_sq";
import sv from "./locale_sv";
import th from "./locale_th";
import tr from "./locale_tr";
import ua from "./locale_ua";
import vi from "./locale_vi";
import zh_hk from "./locale_zh_hk";
import zh_tw from "./locale_zh_tw";

export default function(){
	return new LocaleManager({
		af,
		ar,
		be,
		bg,
		bs,
		ca,
		cn,
		cs,
		da,
		de,
		de_at,
		el,
		en,
		es,
		es_mx,
		et,
		fa,
		fi,
		fr,
		fr_ca,
		ga,
		he,
		hr,
		hu,
		id,
		it,
		jp,
		kr,
		lt,
		lv,
		mk,
		ms,
		nb,
		nl,
		nl_be,
		no,
		pl,
		pt,
		pt_br,
		ro,
		ru,
		si,
		sk,
		sq,
		sv,
		th,
		tr,
		ua,
		vi,
		zh_hk,
		zh_tw
	});
}