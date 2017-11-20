var Data1 = [];
var Data2 = [];
var Data3 = [];
var arr1 = [];
var arr2 = [];

//網頁讀取開始時間
var startTime = new Date().getTime();

//將Data2內資料整理
function checkData2(){

	Data2 = Data2.sort(function (a, b) {
	    return a.key.slice(1) - b.key.slice(1)
	});
}

//將Data3內資料整理
function checkData3(){

	Data3 = Data3.sort(function (a, b) {
	    return a.cell4.match(/\d+/g)[0] - b.cell4.match(/\d+/g)[0];
	});

	}
//讀取結束後將秒數輸出至html上
	var endTime = new Date().getTime();
	var costTime = Math.floor(endTime - startTime )
	$('.usuage').html(costTime);
}

//將比對完的data1輸出至html上
function addData(){
	$('table').append('<tbody></tbody>');
	for(let i =0;i<Data1.length;i++){
		$('tbody').append('<tr><td><span class="star"></span>'+Data1[i].key+'</td><td>'+Data1[i].cell1+'</td><td>'+Data1[i].cell2+'</td><td>'+Data1[i].cell3+'</td><td>'+Data1[i].cell4+'</td><td>'+Data1[i].cell5+'</td><td>'+Data1[i].cell6+'</td><td>'+Data1[i].cell7+'</td><td>'+Data2[i].cell8+'</td><td>'+Data3[i].cell9+'</td></tr>');
	}
}

$(document).ready(function(){
	 var urlData1 = "data/data1.json";
	 var urlData2 = "data/data2.json";
	 var urlData3 = "data/data3.json";
	 //從data1讀取json，每八筆資料組成一個小陣列，再丟到Data1以供之後輸出
	ajax1 = $.get(urlData1,function(data){
		var length = data.length;
		for (let i =0;i<length;i++){
				Data1.push(data[i]);
		}
	})
	//從data2讀取json，再丟到Data2以供之後輸出
	ajax2 = $.get(urlData2,function(data){
			var length = data.length;
			for (let i =0;i<length;i++){
					Data2.push(data[i]);
			}
		})	
	//從data3讀取json，再把資料丟到Data3以供之後輸出
	ajax3 = $.get(urlData3,function(data){
				var objkey = Object.values(data);
				var length = Object.values(data).length;
				for(let i = 0;i<length;i++){
					Data3.push(objkey[i]);
				}
			})
	//當三筆ajax都讀取完後執行function
	　$.when(ajax1, ajax2, ajax3).done(function(){
		var endTime = new Date().getTime();
		var costTime = Math.floor(endTime - startTime );
		$('.usuage').html(costTime); 
   　　　checkData2();
   		checkData3();
   		addData();
　　　　}).fail(function(){
　　
   　　　　 alert("fail");
    
　　　　});

});

//點擊增加selected class

$(document).on('click','tr',function(){
	$(this).toggleClass('selected');
})

$(document).on('click','.star',function(event){
	event.stopPropagation();
	$(this).toggleClass('selected');
})


