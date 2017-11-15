var Data1 = [];
var Data2 = [];
var Data3 = [];
var arr = [];
$(document).ready(function(){
	 var startTime = new Date().getTime();
	 var urlData1 = "data/data1.json";
	 var urlData2 = "data/data2.json";
	 var urlData3 = "data/data3.json";

	$.get(urlData1,function(data){
		var length = data.length;
		for (let i =0;i<length;i++){
				for (let key in data[i]){
					arr.push(data[i][key]);
					if(arr.length === 8){
						Data1.push(arr);
						arr = [];
					}
				}
		}
	})

	$.get(urlData2,function(data){
			var length = data.length;
			for (let i =0;i<length;i++){
					for (let key in data[i]){
						Data2.push(data[i][key]);
					}
			}
		})	

	$.get(urlData3,function(data){
				var objkey = Object.values(data);
				var length = Object.values(data).length;
				for(let i = 0;i<length;i++){
					Data3.push(objkey[i]);
				}
			})

});

$(document).on('click','tr',function(){
	$(this).toggleClass('selected');
})

$(document).on('click','.star',function(event){
	event.stopPropagation();
	$(this).toggleClass('selected');
})
