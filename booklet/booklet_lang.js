/**
 * booklet_lang.js 1.0 (29-Dec-2010) (c) by Christian Effenberger 
 * Don't expect to mutch. All translations made by babel fish only.
 * Parses ISO 2 letter (Alpha-2 code, ISO 639-1).

 * Distributed under the 3 General Public License Agreements.
 * This program is free software: you can redistribute it and/or 
 * modify it under the terms of the GNU General Public License or 
 * GNU Lesser General Public License or GNU Affero General Public 
 * License as published by the Free Software Foundation, either 
 * version 3 of the Licenses, or (at your option) any later versions.
 * This program is distributed in the hope that it will be useful, 
 * but WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 *
 * syntax: get_Booklet_Language(string)
**/

function get_Booklet_Language(v) { 
	if(!v||typeof(v)!=='string'||v.length!=2) {
		v=(typeof(navigator.language)==='string'?navigator.language:typeof(navigator.browserLanguage)==='string'?navigator.browserLanguage:'').substr(0,2);
	}
	switch(v) {
		case "zh":
			var cvi_bt_cn=new Object();
				cvi_bt_cn.overlaytext="装货图象...";
				cvi_bt_cn.playbutton="戏剧或停留";
				cvi_bt_cn.nextbutton="其次";
				cvi_bt_cn.prevbutton="早先";
				cvi_bt_cn.firstbutton="首先";
				cvi_bt_cn.lastbutton="为时";
				cvi_bt_cn.fwardbutton="5x 向前";
				cvi_bt_cn.bwardbutton="5x 向后";
				cvi_bt_cn.menubutton="回到内容";
				cvi_bt_cn.listbutton="版本记录或epilog";
				cvi_bt_cn.tablebutton="目录";
				return cvi_bt_cn;
		break;
		case "ja":
			var cvi_bt_jp=new Object();
				cvi_bt_jp.overlaytext="ローディングのイメージ...";
				cvi_bt_jp.playbutton="演劇か休止";
				cvi_bt_jp.nextbutton="次に";
				cvi_bt_jp.prevbutton="前";
				cvi_bt_jp.firstbutton="最初に";
				cvi_bt_jp.lastbutton="最後";
				cvi_bt_jp.fwardbutton="5x 前方";
				cvi_bt_jp.bwardbutton="5x 後方に";
				cvi_bt_jp.menubutton="目次に戻る";
				cvi_bt_jp.listbutton="押印かepilog";
				cvi_bt_jp.tablebutton="目録";
				return cvi_bt_jp;
		break;
		case "ko":
			var cvi_bt_kr=new Object();
				cvi_bt_kr.overlaytext="선적 심상...";
				cvi_bt_kr.playbutton="놀이또는쉼";
				cvi_bt_kr.nextbutton="다음";
				cvi_bt_kr.prevbutton="이전";
				cvi_bt_kr.firstbutton="첫째로";
				cvi_bt_kr.lastbutton="마지막";
				cvi_bt_kr.fwardbutton="5x 앞으로";
				cvi_bt_kr.bwardbutton="5x 뒤에";
				cvi_bt_kr.menubutton="목차 등을 맞댄";
				cvi_bt_kr.listbutton="인장 또는 epilog";
				cvi_bt_kr.tablebutton="목차";
				return cvi_bt_kr;
		break;
		case "ru":
			var cvi_bt_ru=new Object();
				cvi_bt_ru.overlaytext="Изображения нагрузки...";
				cvi_bt_ru.playbutton="игра/перерыв";
				cvi_bt_ru.nextbutton="затем";
				cvi_bt_ru.prevbutton="предыдуще";
				cvi_bt_ru.firstbutton="во первых";
				cvi_bt_ru.lastbutton="последнее";
				cvi_bt_ru.fwardbutton="5x передне";
				cvi_bt_ru.bwardbutton="5x ОН назад";
				cvi_bt_ru.menubutton="назад к содержанию";
				cvi_bt_ru.listbutton="отпечаток/epilog";
				cvi_bt_ru.tablebutton="содержание";
				return cvi_bt_ru;
		break;
		case "el":
			var cvi_bt_gr=new Object();
				cvi_bt_gr.overlaytext="Εικόνες φόρτωσης...";
				cvi_bt_gr.playbutton="παιχνίδι/μικρή διακοπή";
				cvi_bt_gr.nextbutton="έπειτα";
				cvi_bt_gr.prevbutton="προηγούμενος";
				cvi_bt_gr.firstbutton="πρώτα";
				cvi_bt_gr.lastbutton="διαρκέστε";
				cvi_bt_gr.fwardbutton="5x διαβιβάστε";
				cvi_bt_gr.bwardbutton="5x προς τα πίσω";
				cvi_bt_gr.menubutton="πίσω στο περιεχόμενο";
				cvi_bt_gr.listbutton="σφραγίδα/epilog";
				cvi_bt_gr.tablebutton="πίνακας περιεχομένων";
				return cvi_bt_gr;
		break;
		case "pt":
			var cvi_bt_pt=new Object();
				cvi_bt_pt.overlaytext="Imagens do carregamento...";
				cvi_bt_pt.playbutton="jogo/pausa";
				cvi_bt_pt.nextbutton="seguinte";
				cvi_bt_pt.prevbutton="precedente";
				cvi_bt_pt.firstbutton="primeiro";
				cvi_bt_pt.lastbutton="último";
				cvi_bt_pt.fwardbutton="5x para diante";
				cvi_bt_pt.bwardbutton="5x para trás";
				cvi_bt_pt.menubutton="de volta aos índices";
				cvi_bt_pt.listbutton="impressão/epilog";
				cvi_bt_pt.tablebutton="índice";
				return cvi_bt_pt;
		break;
		case "es":
			var cvi_bt_es=new Object();
				cvi_bt_es.overlaytext="Imágenes del cargamento...";
				cvi_bt_es.playbutton="juego/pausa";
				cvi_bt_es.nextbutton="siguiente";
				cvi_bt_es.prevbutton="anterior";
				cvi_bt_es.firstbutton="primero";
				cvi_bt_es.lastbutton="&uacute;ltimo";
				cvi_bt_es.fwardbutton="5x delantero";
				cvi_bt_es.bwardbutton="5x al revés";
				cvi_bt_es.menubutton="de nuevo a contenido";
				cvi_bt_es.listbutton="impresión/epilog";
				cvi_bt_es.tablebutton="contenido";	
				return cvi_bt_es;
		break;
		case "it":
			var cvi_bt_it=new Object();
				cvi_bt_it.overlaytext="Immagini di caricamento...";
				cvi_bt_it.playbutton="gioco/pausa";
				cvi_bt_it.nextbutton="dopo";
				cvi_bt_it.prevbutton="precedente";
				cvi_bt_it.firstbutton="primo";
				cvi_bt_it.lastbutton="ultimo";
				cvi_bt_it.fwardbutton="5x di andata";
				cvi_bt_it.bwardbutton="5x indietro";
				cvi_bt_it.menubutton="di nuovo al soddisfare";
				cvi_bt_it.listbutton="stampa/epilog";
				cvi_bt_it.tablebutton="indice";	
				return cvi_bt_it;
		break;
		case "fr":
			var cvi_bt_fr=new Object();
				cvi_bt_fr.overlaytext="Images de chargement...";
				cvi_bt_fr.playbutton="jeu/pause";
				cvi_bt_fr.nextbutton="après";
				cvi_bt_fr.prevbutton="précédent";
				cvi_bt_fr.firstbutton="d'abord";
				cvi_bt_fr.lastbutton="bout";
				cvi_bt_fr.fwardbutton="5x en avant";
				cvi_bt_fr.bwardbutton="5x vers l'arrière";
				cvi_bt_fr.menubutton="de nouveau au contenu";
				cvi_bt_fr.listbutton="impression/epilog";
				cvi_bt_fr.tablebutton="table des matières";
				return cvi_bt_fr;
		break;
		case "nl":
			var cvi_bt_nl=new Object();
				cvi_bt_nl.overlaytext="De beelden van de lading...";
				cvi_bt_nl.playbutton="spel/pauze";
				cvi_bt_nl.nextbutton="volgende";
				cvi_bt_nl.prevbutton="vorige";
				cvi_bt_nl.firstbutton="eerste";
				cvi_bt_nl.lastbutton="laatste";
				cvi_bt_nl.fwardbutton="5x voorwaartse";
				cvi_bt_nl.bwardbutton="5x achteruit";
				cvi_bt_nl.menubutton="terug naar inhoud";
				cvi_bt_nl.listbutton="afdruk/epiloog";
				cvi_bt_nl.tablebutton="inhoudstafel";
				return cvi_bt_nl;
		break;
		case "de":
			var cvi_bt_de=new Object();
				cvi_bt_de.overlaytext="Lade Bilder...";
				cvi_bt_de.playbutton="Abspielen/Pause";
				cvi_bt_de.nextbutton="Nächste Seite";
				cvi_bt_de.prevbutton="Vorige Seite";
				cvi_bt_de.firstbutton="Erste Seite";
				cvi_bt_de.lastbutton="Letzte Seite";
				cvi_bt_de.fwardbutton="5 Seiten Forwärts";
				cvi_bt_de.bwardbutton="5 Seiten Rückwärts";
				cvi_bt_de.menubutton="Zurück zu den Bildern";
				cvi_bt_de.listbutton="Impressum/Epilog";
				cvi_bt_de.tablebutton="Bilderübersicht";
				return cvi_bt_de;
		break;
		case "en":
		default: 
			var cvi_bt_en=new Object();
				cvi_bt_en.overlaytext="Loading images...";
				cvi_bt_en.playbutton="play/pause";
				cvi_bt_en.nextbutton="next";
				cvi_bt_en.prevbutton="previous";
				cvi_bt_en.firstbutton="first";
				cvi_bt_en.lastbutton="last";
				cvi_bt_en.fwardbutton="5x forward";
				cvi_bt_en.bwardbutton="5x backward";
				cvi_bt_en.menubutton="back to contents";
				cvi_bt_en.listbutton="imprint/epilog";
				cvi_bt_en.tablebutton="table of contents";
				return cvi_bt_en;
		break;
	} 
	return false;
}		