function getNewContent(){
	var request = getHTTPObject();
	if(request){
		request.onreadystatechange = function(){
		debugger;
		alert(request.readyState);
			if(request.readyState==4){
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		};
		request.open("GET","example.txt",true);
		request.send(null);
	}else{
		alert("don't support XMLHttpRequest")
	}	
}
addLoadEvent(getNewContent);