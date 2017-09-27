function addClass(element,value){
	if(!element.className){
		element.className = value;
	}else{
		newClassName = element.className + " " + value;
		element.className = newClassName;
	}
}
function getNextElement(node){
	if(node.nodeType==1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}	
	return null;
}
function styleHeaderSiblings(){
	debugger;
	if(!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName("h1");
	var elem;
	for(var i=0;i<headers.length;i++){
		elem = getNextElement(headers[i].nextSibling);
		addClass(elem,"intro");
		//elem.style.fontWeight = "bold";
		//elem.style.fontSize = "1.2em";
	}
}
addLoadEvent(styleHeaderSiblings);