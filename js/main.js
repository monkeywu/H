var Data1 = [];
var Data2 = [];
var Data3 = [];
var arr1 = [];
var arr2 = [];

function checkData2(callback){
	for(let i =0;i<Data2.length;i++){
		for(let j = 0;j<Data2.length;j++){
			if(Data1[i][0] === Data2[j][0] ){
				Data1[i].push(Data2[j][1]);
			}
		}
	}
	callback();
}

function checkData3(){
	for(let i =0;i<Data3.length;i++){
		for(let j = 0;j<Data3.length;j++){
			if(Data1[i][4] === Data3[j].cell4 ){
				Data1[i].push(Data3[j].cell9);
			}
		}
	}
}

function addData(){
	$('table').append('<tbody></tbody>');
	for(let i =0;i<Data1.length;i++){
		$('tbody').append('<tr><td><span class="star"></span>'+Data1[i][0]+'</td><td>'+Data1[i][1]+'</td><td>'+Data1[i][2]+'</td><td>'+Data1[i][3]+'</td><td>'+Data1[i][4]+'</td><td>'+Data1[i][5]+'</td><td>'+Data1[i][6]+'</td><td>'+Data1[i][7]+'</td><td>'+Data1[i][8]+'</td><td>'+Data1[i][9]+'</td></tr>');
	}
}

$(document).ready(function(){
	 var startTime = new Date().getTime();
	 var urlData1 = "data/data1.json";
	 var urlData2 = "data/data2.json";
	 var urlData3 = "data/data3.json";

	$.get(urlData1,function(data){
		var length = data.length;
		for (let i =0;i<length;i++){
				for (let key in data[i]){
					arr1.push(data[i][key]);
					if(arr1.length === 8){
						Data1.push(arr1);
						arr1 = [];
					}
				}
		}
		addData(checkData2(checkData3));
	})

	$.get(urlData2,function(data){
			var length = data.length;
			for (let i =0;i<length;i++){
					for (let key in data[i]){
						arr2.push(data[i][key]);
						if(arr2.length === 2){
							Data2.push(arr2);
							arr2 = [];
						}
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
