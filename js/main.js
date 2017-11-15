var Data1;
var Data2;
var Data3;

$(document).ready(function(){
	 var startTime = new Date().getTime();
	 var urlData1 = "data/data1.json";
	 var urlData2 = "data/data2.json";
	 var urlData3 = "data/data3.json";

	$.get(urlData1,function(data){
		var length = data.length;
		for (let i =0;i<length;i++){
				Data1 += data[i].key+','+data[i].cell1+','+data[i].cell2+','+data[i].cell3+','+data[i].cell4+','+data[i].cell5+','+data[i].cell6+','+data[i].cell7
		}
		console.log(Data1);
	})

	$.get(urlData2,function(data){
			console.log('data2:'+data)
		})	

	$.get(urlData3,function(data){
				console.log('data3:'+data)
			})

});

$(document).on('click','tr',function(){
	$(this).toggleClass('selected');
})

$(document).on('click','.star',function(event){
	event.stopPropagation();
	$(this).toggleClass('selected');
})
