$(document).ready(function(){
	 var urlData1 = "data/data1.json";
	 var urlData2 = "data/data2.json";
	 var urlData3 = "data/data3.json";
	$.get(urlData1,function(data){
		var length = data.length;
		console.log(length);
		$('table').append('<tbody></tbody>');
		for (let i =0;i<length;i++){
				$('tbody').append('<tr></tr>');
			for (let key in data[i]) {
			    $('tr').last().append('<td>'+data[i][key]+'</td>');
			    $('tbody tr td:first-child').append('<span class="stat"></span>');
			}
		}	
	})
});