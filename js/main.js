$(document).ready(function(){
	var urlData1 = "data/data1.json";
	var urlData2 = "data/data2.json";
	var urlData3 = "data/data3.json";
	var xhr = new XMLHttpRequest();
	xhr.open('get','urlData1',false);
	xhr.send('null');
	var data = JSON.parse(xhr.responseText);
	console.log(data);
});