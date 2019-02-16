var meeting = 1, activity = 2, ceremony = 3;
function formCheck(mode){
    if($("#me_name").val()==""){
		if(mode == meeting){alert("請填寫會議名稱!");}
		if(mode == activity){alert("請填寫活動名稱!");}
		if(mode == ceremony){alert("請填寫法會名稱!");}
		$("#me_name").focus();
		return false;}

	if($("#me_place").val()==""){
		if(mode == meeting){alert("請填寫會議地點!");}
		if(mode == activity){alert("請填寫活動地點!");}
		if(mode == ceremony){alert("請填寫法會地點!");}
		$("#me_place").focus();
		return false;}

	if($("#me_date").val()==""){
		if(mode == meeting){alert("請填寫會議日期!");}
		if(mode == activity){alert("請填寫活動日期!");}
		if(mode == ceremony){alert("請填寫法會日期!");}
		$("#me_place").focus();
		return false;} 
	if(!checkDate($("#me_date").val(),mode)){
		$("#me_date").focus();
		return false;}

	if($("#me_start_time").val()==""){
		if(mode == meeting){alert("請填寫會議開始時間!");}
		if(mode == activity){alert("請填寫活動開始時間!");}
		if(mode == ceremony){alert("請填寫法會開始時間!");}
		$("#me_start_time").focus();
		return false;}

	if($("#me_end_time").val()==""){
		if(mode == meeting){alert("請填寫會議結束時間!");}
		if(mode == activity){alert("請填寫活動結束時間!");}
		if(mode == ceremony){alert("請填寫法會結束時間!");}
		$("#me_end_time").focus();
		return false;}
	if(!checkTime($("#me_date").val(),$("#me_start_time").val(),$("#me_end_time").val())){
		$("#me_end_time").focus();
		return false;}

	return confirm("確定送出嗎?");
}

function checkDate(date,mode) {
	
	var currDate = Date.parse(new Date().toDateString());
	var setDate = Date.parse(date);
	
	if(setDate.valueOf() < currDate.valueOf()){
		if(mode == meeting){alert("會議時間不可比今天的日期早!");}
		if(mode == activity){alert("活動時間不可比今天的日期早!");}
		if(mode == ceremony){alert("法會時間不可比今天的日期早!");}
		return false;
	}else {return true; }
	
}

function checkTime(date,start,end){
	start = date + " " +start;
	end = date + " " +end;
	if(Date.parse(end).valueOf() < Date.parse(start).valueOf()){
		alert("結束時間不可比開始時間早!");
		return false;
	}
	return true;
}
