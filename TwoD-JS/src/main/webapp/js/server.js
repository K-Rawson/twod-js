Server = function() {
};

Server.prototype.loadWorld = function(x, y, callback) {
	var xmlHttp = null;

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = callback;
	xmlhttp.open("GET", "services/world?x=" + x + "y=" + y, true);
	xmlhttp.send();

};