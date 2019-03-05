<template>
  <div>
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <a href="">中區禪悅社</a>
          </li>
          <li>
            <a href="">註冊系統</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <form
          role="form"
          method="POST"
          name="formJoin"
          id="formJoin"
          onSubmit="return checkForm();"
        >
          <div class="box col-md-12">
            <div class="box-inner">
              <div class="box-header well" data-original-title>
                <h2>
                  <i class="glyphicon glyphicon-pencil"></i> 新進幹部帳號註冊
                </h2>
              </div>
              <div class="box-content">
                <br>

                <label class="control-label">姓名</label>
                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user blue"></i>
                  </span>
                  <input
                    name="new_name"
                    id="new_name"
                    type="text"
                    class="form-control"
                    placeholder="Original name"
                  >
                </div>
                <br>

                <label class="control-label">帳號 (6至12個字元)</label>
                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user balck"></i>
                  </span>
                  <input
                    name="new_username"
                    id="new_username"
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  >
                  <!-- <span class="input-group-addon"><i>驗證</i></span> -->
                </div>
                <div class="errDiv">帳號</div>
                <br>

                <label class="control-label">密碼 (6至20個字元)</label>
                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-lock balck"></i>
                  </span>
                  <input
                    name="new_passwd"
                    id="new_passwd"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  >
                  <span class="input-group-addon" onclick="showPasswd(1);">
                    <i class="glyphicon glyphicon-eye-open black"></i>
                  </span>
                </div>
                <br>

                <label class="control-label">確認密碼</label>
                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-hand-right green"></i>
                  </span>
                  <input
                    name="new_passwd_check"
                    id="new_passwd_check"
                    type="password"
                    class="form-control"
                    placeholder="Confirm_Password"
                  >
                  <span class="input-group-addon" onclick="showPasswd(2);">
                    <i class="glyphicon glyphicon-eye-open black"></i>
                  </span>
                </div>
                <br>

                <label class="control-label">性別</label>
                <br>
                <label class="radio-inline">
                  <input type="radio" name="new_gender" id="male" value="男" checked>男
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_gender" id="female" value="女">女
                </label>
                <br>
                <br>

                <label class="control-label">電子郵件</label>
                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-envelope red"></i>
                  </span>
                  <input
                    name="new_email"
                    id="new_email"
                    type="text"
                    class="form-control"
                    placeholder="E-mail"
                  >
                </div>
                <br>

                <div class="control-group">
                  <label class="control-label">學校</label>
                  <div class="control">
                    <select name="new_school" id="new_school" data-rel="chosen">
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
                </div>
                <br>

                <label class="control-label">科系</label>
                <br>
                <span class="label label-primary">科系請使用簡稱，例如：資訊管理學系 -> 資管</span>
                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-star green"></i>
                  </span>
                  <input
                    name="new_department"
                    id="new_department"
                    type="text"
                    class="form-control"
                    placeholder="Department"
                  >
                </div>
                <br>

                <label class="control-label">級別</label>
                <br>
                <label class="radio-inline">
                  <input type="radio" name="new_grade" id="grade_one" value="一" checked>一
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_grade" id="grade_two" value="二">二
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_grade" id="grade_three" value="三">三
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_grade" id="grade_four" value="四">四
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_grade" id="master_one" value="碩一">碩一
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_grade" id="master_two" value="碩二">碩二
                </label>
                <br>
                <br>

                <label class="control-label">校內幹部職稱</label>
                <br>
                <label class="radio-inline">
                  <input type="radio" name="new_cadre" id="cadre_zero" value="幹部" checked>幹部
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_cadre" id="cadre_first" value="社長">社長
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_cadre" id="cadre_second" value="副社長">副社長
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_cadre" id="cadre_third" value="其他">其他
                  <input type="text" name="other_reason">​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
                </label>
                <br>
                <br>

                <label class="control-label">中區組別1</label>
                <br>
                <label class="radio-inline">
                  <input type="radio" name="new_group1" id="group1_activity" value="活動組" checked>活動組
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_group1" id="group1_data" value="資料保管組">資料保管組
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_group1" id="group1_art" value="美工設計組">美工設計組
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_group1" id="group1_public" value="公關組">公關組
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_group1" id="group1_equipment" value="設備組">設備組
                </label>
                <br>
                <br>

                <label class="control-label">中區組別2</label>
                <br>
                <label class="radio-inline">
                  <input type="radio" name="new_group2" id="group2_activity" value="活動組">活動組
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_group2" id="group2_data" value="資料保管組">資料保管組
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_group2" id="group2_art" value="美工設計組">美工設計組
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_group2" id="group2_public" value="公關組">公關組
                </label>
                <label class="radio-inline">
                  <input type="radio" name="new_group2" id="group2_equipment" value="設備組">設備組
                </label>
                <br>
                <br>

                <label class="control-label">法名</label>
                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user yellow"></i>
                  </span>
                  <input
                    name="new_fahao"
                    id="new_fahao"
                    type="text"
                    class="form-control"
                    placeholder="Name in religion"
                  >
                </div>
                <br>

                <div id="group3">
                  <label class="control-label">中區總副召(只有總副召才可指派)</label>
                  <br>
                  <label class="radio-inline">
                    <input type="radio" name="new_group3" id="1" value="總召">總召
                  </label>
                  <label class="radio-inline">
                    <input type="radio" name="new_group3" id="2" value="副召">副召
                  </label>
                  <br>
                  <br>
                </div>

                <font color="red">
                  <i>P.s.以上資料全為必填</i>
                </font>
                <br>
                <br>
                <input name="action" type="hidden" id="action" value="join">
                <button type="submit" class="btn btn-default">提交</button>
              </div>
            </div>
          </div>
          <!--/span-->
        </form>
      </div>
      <!--/row-->
    </div>
    <!--/#content.col-md-0-->
  </div>
</template>

<script>
export default {
  layout: "fun_page"
};
</script>