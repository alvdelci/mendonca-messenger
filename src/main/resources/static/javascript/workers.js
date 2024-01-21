
const baseUrl = 'https://192.168.0.103:8443/';
var menssage;

setInterval(function() {
    console.log('get menssages');
    
    var parameters = {}
    location.search.slice(1).split("&").forEach( function(key_value) { var kv = key_value.split("="); parameters[kv[0]] = kv[1]; })

    var userName = parameters['userName'];
    
    var xhttp = new XMLHttpRequest();
	var finalURl = baseUrl + 'message/retrieveMessages/'+userName;

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {			
			menssage = xhttp.responseText;
            postMessage(menssage);
              
		}else{
			postMessage(this.status);
		}
			
	};
	xhttp.open('GET', finalURl, false);
	xhttp.send();
    
}, 600);
