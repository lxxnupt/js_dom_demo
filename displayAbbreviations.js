function displayAbbreviations(){
	//获得所有缩略词
	var abbreviations = document.getElementsByTagName("abbr");
	if(abbreviations.length<1){
		return false;
	}
	var defs = new Array();
	//遍历这些缩略词，key为缩写，value为全称，存到defs数组
	for(var i=0;i<abbreviations.length;i++){
		var current_abbr = abbreviations[i];
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	var dlist = document.createElement("dl");
	for(key in defs){
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);  