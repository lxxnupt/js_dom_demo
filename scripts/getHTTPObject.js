function getHTTPObject(){
	//检测是否IE浏览器，返回不同的HTTPObject对象，略
	return new XMLHttpRequest();
}