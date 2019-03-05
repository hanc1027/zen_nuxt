<template>
       <div>
        <div id="content" class="col-lg-10 col-sm-10">
            <!-- content starts -->
        <div>
        <ul class="breadcrumb">
        <li><a href="">中區禪悅社</a></li>
        <li><a href="">個人資料</a></li>
        </ul>
        </div>

<form action="" method="POST" name="formJoin" id="formJoin" onSubmit="return checkForm();">
<div class="row">
    <div class="box col-md-12">
        <div class="box-inner">
            <div class="box-header well" data-original-title="">
                <h2><i class="glyphicon glyphicon-pencil"></i> 帳戶資料</h2>
            </div>
            <div class="box-content"><br>

            <label class="control-label">帳號<br></label>
                <br><br>

                <label class="control-label">密碼 (6至20個字元)</label>
                <div class="input-group col-md-4">
                    <span class="input-group-addon">
                    <i class="glyphicon glyphicon-lock balck"></i></span>
                    <input name="new_passwd" id="new_passwd" type="password" class="form-control" placeholder="Password">
                    <input name="m_passwdo" type="hidden" id="m_passwdo" value="">
                    <span class="input-group-addon" onclick="showPasswd(1);"><i class="glyphicon glyphicon-eye-open black"></i></span>
                </div><br>

                <label class="control-label">確認密碼</label>
                <div class="input-group col-md-4">
                    <span class="input-group-addon">
                    <i class="glyphicon glyphicon-hand-right green"></i></span>
                    <input name="new_passwd_check" id="new_passwd_check" type="password"  class="form-control" placeholder="Confirm_Password">
                    <span class="input-group-addon" onclick="showPasswd(2);"><i class="glyphicon glyphicon-eye-open black"></i></span>
                </div><br>
                </div> <!--待刪-->
            </div>
        </div>
    </div>

    <div class="box col-md-12">
        <div class="box-inner">
            <div class="box-header well" data-original-title="">
                <h2><i class="glyphicon glyphicon-pencil"></i> 個人資料</h2>
            </div>
            <div class="box-content"><br>
            <label class="control-label">姓名</label>
                <div class="input-group col-md-4">
                    <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user blue"></i></span>
                    <input name="new_name" id="new_name" type="text" class="form-control" value="<?php echo $row_RecMember['adm_name']?>">
                </div><br>

                

                <label class="control-label">性別</label><br>
                    <label class="radio-inline"><input type="radio" name="new_gender" id="male" value="男">男
                    </label>
                    <label class="radio-inline"><input type="radio" name="new_gender" id="female" value="女">女</label>
                <br><br>

                <label class="control-label">電子郵件</label>
                <div class="input-group col-md-4">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope red"></i></span>
                    <input name="new_email" id="new_email" type="text" class="form-control" value="">
                </div><br>

                <div class="control-group">
                    <label class="control-label">學校</label>
                    <div class="control">
                    <select name="new_school" id="new_school" data-rel="chosen">
                            <option selected="selected"></option>
                            <option value="東海大學">東海大學</option>
                            <option value="靜宜大學">靜宜大學</option>
                            <option value="逢甲大學">逢甲大學</option>
                            <option value="亞洲大學">亞洲大學</option>
                            <option value="弘光科技大學">弘光科技大學</option>
                            <option value="中興大學">中興大學</option>
                            <option value="台中教育大學">台中教育大學</option>
                            <option value="暨南大學">暨南大學</option>
                            <option value="彰化師範大學">彰化師範大學</option>
                            <option value="台中科技大學">台中科技大學</option>
                            <option value="中國醫藥大學">中國醫藥大學</option>
                            <option value="聯合大學">聯合大學</option>
                            <option value="大葉大學">大葉大學</option>
                        </select>
                    </div>
                </div><br>

                <label class="control-label">科系</label><br>
                <span class="label label-primary">科系請使用簡稱，例如：資訊管理學系 -> 資管</span>
                <div class="input-group col-md-4">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-star green"></i></span>
                    <input name="new_department" id="new_department" type="text" class="form-control" value="<?php echo $row_RecMember['adm_department'];?>">
                </div><br>

                <label class="control-label">級別</label><br>
                    <label class="radio-inline"><input type="radio" name="new_grade" id="grade_one" value="一">一</label>
                    <label class="radio-inline"><input type="radio" name="new_grade" id="grade_two" value="二">二</label>
                    <label class="radio-inline"><input type="radio" name="new_grade" id="grade_three" value="三">三</label>
                    <label class="radio-inline"><input type="radio" name="new_grade" id="grade_four" value="四">四</label>
                    <label class="radio-inline"><input type="radio" name="new_grade" id="master_one" value="碩一">碩一</label>
                    <label class="radio-inline"><input type="radio" name="new_grade" id="master_two" value="碩二">碩二</label>
                    <br><br>

                <label class="control-label">校內幹部職稱</label><br>
                <br><br>

                <label class="control-label">中區組別1</label><br>
                <br><br>

                <label class="control-label">中區組別2</label><br>
                <br><br>
                    
        <p align="center">
            <input name="m_id" type="hidden" id="m_id" value="">
            <input name="action" type="hidden" id="action" value="update">
            <button type="submit" class="btn btn-default" name="Submit2">修改資料</button>
            <button type="reset" class="btn btn-default" name="Submit3">重設資料</button>
            <button type="reset" class="btn btn-default" name="Submit" onClick="javascript:location.href='home.php'">回主頁</button>
          </p>
            </div>
        </div>
    </div>
</form>
    <!--/span-->
</div><!--/row-->

    </div><!--/#content.col-md-0-->
    </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  layout: "fun_page"
};
</script>

<style>
</style>