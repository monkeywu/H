$(document).ready(function(){
	 var urlData1 = "data/data1.json";
	 var urlData2 = "data/data2.json";
	 var urlData3 = "data/data3.json";
	$.get(urlData1,function(data){
		var length = data.length;
		for (let i =0;i<length;i++){
			for (let key in data[i]) {
			    console.log(data[i][key]);
			    //$('tr').append('<tr><td>'+data[i][key]+'</td></tr>');
			}
		}	
	})
});