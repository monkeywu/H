$(document).ready(function(){
	 var urlData1 = "data/data1.json";
	 var urlData2 = "data/data2.json";
	 var urlData3 = "data/data3.json";
	$.get(urlData1,function(data){
		var length = data.length;
		console.log(length);
		for (let i =0;i<length;i++){
				$('thead').after('<tr>'+i+'</tr>');
			for (let key in data[i]) {
			    //$('tr').last().append(data[i][key]);
			    //$('tr').after('<td>'+data[i][key]+'</td>');
			}
		}	
	})
});