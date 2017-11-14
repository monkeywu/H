$(document).ready(function(){
	 console.time('time');
	 var urlData1 = "data/data1.json";
	 var urlData2 = "data/data2.json";
	 var urlData3 = "data/data3.json";
	$.get(urlData1,function(data){
		var length = data.length;
		$('table').append('<tbody></tbody>');
		for (let i =0;i<length;i++){
				$('tbody').append('<tr></tr>');
			for (let key in data[i]) {
				if(key === "key"){
					$('tr').last().append('<td><span class="star"></span>'+data[i][key]+'</td>');	
				} else {
					$('tr').last().append('<td>'+data[i][key]+'</td>');	
				}
			}
		}

		$.get(urlData2,function(data){
			for(let i = 0;i<data.length;i++){
				var dataKey = $('tbody').find('tr').eq(i).find('td').eq(0).text();
					for(let j =0;j<1000;j++){
						var key = data[j].key
						if(key === dataKey){
							$('tbody').find('tr').eq(i).append('<td>'+data[j].cell8+'</td>');
						}
					}
			}

			$.get(urlData3,function(data){
			var objkey = Object.values(data);
			var length = Object.values(data).length;
			for(let i = 0;i<length;i++){
				var dataKey = $('tbody').find('tr').eq(i).find('td').eq(4).text();
					for(let j =0;j<1000;j++){
						var key = objkey[j].cell4
						if(key === dataKey){
							$('tbody').find('tr').eq(i).append('<td>'+objkey[j].cell9+'</td>');
						}
					}
				}
				console.timeEnd('time');
			})
		})	

	})
});

$(document).on('click','tr',function(){
	console.log(this);
	$(this).toggleClass('selected');
})

$(document).on('click','.star',function(event){
	event.stopPropagation();
	$(this).toggleClass('selected');
})
