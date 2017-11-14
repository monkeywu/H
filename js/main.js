$(document).ready(function(){
	 var urlData1 = "data/data1.json";
	 var urlData2 = "data/data2.json";
	 var urlData3 = "data/data3.json";
	$.get(urlData1,function(data){
		var length = data.length;
		var trString = '<tr>'
		for (let i =0;i<length;i++){
			for (let key in data[i]) {
			    trString += '<td>'+data[i][key]+'</td>'
			    //$('tr').after('<td>'+data[i][key]+'</td>');
			}
			trString += '</tr>'
			$('tr').append(trString);
		}	
	})
});