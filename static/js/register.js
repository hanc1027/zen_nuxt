function checkForm(){
    if($("#new_name").val()==""){
		alert("請填寫姓名!");
		$("#new_name").focus();
		return false;}
	if($("#new_username").val()==""){		
        alert("請填寫帳號!");
        $("#new_username").focus();
		return false;
	}else{
        u_id = $("#new_username").val();
		if(u_id.length<6 || u_id.length>12){
			alert( "帳號長度只能6至12個字元!" );
			$("#new_username").focus();
			return false;}
		for(idx=0;idx<u_id.length;idx++){
			if(!(( u_id.charAt(idx)>='a'&&u_id.charAt(idx)<='z')||(u_id.charAt(idx)>='0'&& u_id.charAt(idx)<='9')||( u_id.charAt(idx)=='_'))){
				alert( "帳號只能是數字,英文字母及「_」等符號,其他的符號都不能使用!" );
				$("#new_username").focus();
				return false;}
			if(u_id.charAt(idx)=='_'&&u_id.charAt(idx+1)=='_'){
				alert( "「_」符號不可相連 !\n" );
				$("#new_username").focus();
				return false;}
		}
	}
	if(!check_passwd($("#new_passwd").val(),$("#new_passwd_check").val())){
		$("#new_passwd").focus();
		return false;}	
    if($("#new_email").val()==""){
        alert("請填寫電子郵件!");
        $("#new_email").focus();
        return false;}
    if(!checkmail($("#new_email").val())){
		$("#new_email").focus();
		return false;}
    if($("#new_department").val()=="NULL"){
        alert("請填寫科系!");
        $("#new_department").focus();
        return false;}
    return confirm('確定送出嗎？');
}

function check_passwd(pw1,pw2){
	if(pw1==''){
		alert("密碼不可為空白!");
		return false;}
	for(var idx=0;idx<pw1.length;idx++){
		if(pw1.charAt(idx) == ' ' || pw1.charAt(idx) == '\"'){
			alert("密碼不可以含有空白或雙引號 !\n");
			return false;}
		if(pw1.length<6 || pw1.length>20){
			alert( "密碼長度只能6到20個字母 !\n" );
			return false;}
		if(pw1!= pw2){
			alert("密碼二次輸入不一樣,請重新輸入 !\n");
			return false;}
	}
	return true;
}

function checkmail(myEmail) {
    var filter  = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(filter.test(myEmail.val())){
		return true;}
	alert("電子郵件格式不正確");
	return false;
}


var open1 = 0, open2 = 0;
function showPasswd(which){
    if(which == 1){
        var $password = $('#new_passwd');
            if(open1 == 0){
                $passwordInput = $('<input name="new_passwd" id="new_passwd" type="text" class="form-control">');
                $password.replaceWith($passwordInput.val($password.val()));
                open1 = 1;
            } else {
            $passwordInput = $('<input name="new_passwd" id="new_passwd" type="password" class="form-control">');
            $password.replaceWith($passwordInput.val($password.val()));
            open1 = 0;
        }
    } else {
        var $password = $('#new_passwd_check');
            if(open2 == 0){
                $passwordInput = $('<input name="new_passwd_check" id="new_passwd_check" type="text" class="form-control">');
                $password.replaceWith($passwordInput.val($password.val()));
                open2 = 1;
            } else {
            $passwordInput = $('<input name="new_passwd_check" id="new_passwd_check" type="password" class="form-control">');
            $password.replaceWith($passwordInput.val($password.val()));
            open2 = 0;
        }
    }
}

function show(){
	// schoolList();
}

var school = ['東海大學','靜宜大學','逢甲大學','亞洲大學','弘光科技大學','中興大學','台中教育大學',
			  '暨南大學','彰化師範大學','台中科技大學','中國醫藥大學','聯合大學','大葉大學'];
function schoolList() {
    var schoollist="";
    schoollist = '<select name="new_school" id="new_school" data-rel="chosen">';
    for(var i=0;i<school.length;i++){
        schoollist += "<option value='"+school[i]+"'>"+school[i]+"</option>";
    }
	schoollist += "</select>";
	$(".controls").html(schoollist);
}
