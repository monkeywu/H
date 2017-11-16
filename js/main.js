var Data1 = [];
var Data2 ={};
var Data3 = [];
var arr1 = [];
var arr2 = [];
var startTime = new Date().getTime();

function checkData2(){
	Data2.sort();
	for(let i =0;i<Data2.length;i++){
			if(Data1[i][0] === Data2[i][0] ){
				Data1[i].push(Data2[i][1]);
			}
	}
	console.log('2');
}

function checkData3(){
	Data3.sort();
	for(let i =0;i<Data3.length;i++){
			if(Data1[i][4] === Data3[i].cell4 ){
				Data1[i].push(Data3[i].cell9);
			}
	}
	var endTime = new Date().getTime();
	var costTime = Math.floor(endTime - startTime )
	$('.usuage').html(costTime);
	console.log('3');
}

function addData(){
	$('table').append('<tbody></tbody>');
	for(let i =0;i<Data1.length;i++){
		$('tbody').append('<tr><td><span class="star"></span>'+Data1[i][0]+'</td><td>'+Data1[i][1]+'</td><td>'+Data1[i][2]+'</td><td>'+Data1[i][3]+'</td><td>'+Data1[i][4]+'</td><td>'+Data1[i][5]+'</td><td>'+Data1[i][6]+'</td><td>'+Data1[i][7]+'</td><td>'+Data1[i][8]+'</td><td>'+Data1[i][9]+'</td></tr>');
	}
	console.log('1');
}

$(document).ready(function(){
	 var urlData1 = "data/data1.json";
	 var urlData2 = "data/data2.json";
	 var urlData3 = "data/data3.json";

	ajax1 = $.get(urlData1,function(data){
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
	})

	ajax2 = $.get(urlData2,function(data){
			var length = data.length;
			for (let i =0;i<length;i++){
					console.log(data[i]);
					Data2 += data[i];
			}
		})	

	ajax3 = $.get(urlData3,function(data){
				var objkey = Object.values(data);
				var length = Object.values(data).length;
				for(let i = 0;i<length;i++){
					Data3.push(objkey[i]);
				}
			})

	　$.when(ajax1, ajax2, ajax3).done(function(){

   　　　　 checkData2();
   		   checkData3();
   		   addData();
　　　　}).fail(function(){
　　
   　　　　 alert("fail");
    
　　　　});

});

$(document).on('click','tr',function(){
	$(this).toggleClass('selected');
	$(this).siblings().removeClass('selected');
})

$(document).on('click','.star',function(event){
	event.stopPropagation();
	$(this).toggleClass('selected');
})


