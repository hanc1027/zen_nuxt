<template>
  <div class="row">
    <form role="form" @submit.prevent="onSave">
      <div class="box col-md-12">
        <div class="box-inner">
          <div class="box-header well" data-original-title>
            <h2>
              <i class="glyphicon glyphicon-pencil"></i> 新進幹部帳號註冊
            </h2>
          </div>
          <div class="box-content">
            <br>

            <label class="control-label" >姓名</label>
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
                v-model="addAdmin_list.name"
              >
            </div>
            <br>

            <label class="control-label">帳號 (電子郵件)</label>
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
                v-model="addAdmin_list.email"
              >
              <!-- <span class="input-group-addon"><i>驗證</i></span> -->
            </div>

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
                v-model="addAdmin_list.password"
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
                v-model="verifypwd"
              >
              <span class="input-group-addon" onclick="showPasswd(2);">
                <i class="glyphicon glyphicon-eye-open black"></i>
              </span>
            </div>
            <br>

            <label class="control-label">性別</label>
            <br>
            <label class="radio-inline">
              <input
                type="radio"
                name="new_gender"
                id="male"
                value="男"
                v-model="addAdmin_list.gender"
              >男
            </label>
            <label class="radio-inline">
              <input
                type="radio"
                name="new_gender"
                id="female"
                value="女"
                v-model="addAdmin_list.gender"
              >女
            </label>
            <br>
            <br>

            <div class="control-group">
              <label class="control-label">學校</label>
              <div class="control">
                <select
                  name="new_school"
                  id="new_school"
                  data-rel="chosen"
                  v-model="addAdmin_list.school"
                >
                  <option v-for="item in allSchool" :value="item.value">{{item.text}}</option>
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
                v-model="addAdmin_list.department"
              >
            </div>
            <br>

            <label class="control-label">級別</label>
            <br>
            <label class="radio-inline" v-for="item in allGrade">
              <input
                type="radio"
                name="new_grade"
                :id="item.id"
                :value="item.value"
                v-model="addAdmin_list.grade"
              >
              {{item.text}}
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
            <label class="radio-inline" v-for="item in allGroup">
              <input type="radio" name="new_group1" :id="item.id1" :value="item.value" v-model="addAdmin_list.group1">
              {{item.text}}
            </label>
            <br>
            <br>

            <label class="control-label">中區組別2</label>
            <br>
            <label class="radio-inline" v-for="item in allGroup">
              <input type="radio" name="new_group2" :id="item.id2" :value="item.value" v-model="addAdmin_list.group2">
              {{item.text}}
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
                v-model="addAdmin_list.fahao"
              >
            </div>
            <br>

            <div id="group3">
              <label class="control-label">中區總副召(只有總副召才可指派)</label>
              <br>
              <label class="radio-inline">
                <input
                  type="radio"
                  name="new_group3"
                  id="1"
                  value="總召"
                  v-model="addAdmin_list.group3"
                >總召
              </label>
              <label class="radio-inline">
                <input
                  type="radio"
                  name="new_group3"
                  id="2"
                  value="副召"
                  v-model="addAdmin_list.group3"
                >副召
              </label>
              <br>
              <br>
            </div>

            <font color="red">
              <i>P.s.以上資料全為必填</i>
            </font>
            <br>
            <br>
            <button type="submit" class="btn btn-default">提交</button>
          </div>
        </div>
      </div>
      <!--/span-->
    </form>
  </div>
  <!--/row-->
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "js/register.js" },]
    };
  },
  data() {
    return {
      verifypwd:"",
      addAdmin_list: {
        name: "",
        email: "",
        password: "",
        gender: "男",
        school: "東海大學",
        department: "",
        grade: "一",
        cadre: "",
        group1: "活動組",
        group2: "",
        group3: "",
        fahao: "",
        who_add: ""
      },
      allSchool: [
        { text: "東海大學", value: "東海大學" },
        { text: "靜宜大學", value: "靜宜大學" },
        { text: "逢甲大學", value: "逢甲大學" },
        { text: "亞洲大學", value: "亞洲大學" },
        { text: "弘光科技大學", value: "弘光科技大學" },
        { text: "中興大學", value: "中興大學" },
        { text: "台中教育大學", value: "台中教育大學" },
        { text: "暨南大學", value: "暨南大學" },
        { text: "彰化師範大學", value: "彰化師範大學" },
        { text: "台中科技大學", value: "台中科技大學" },
        { text: "中國醫藥大學", value: "中國醫藥大學" },
        { text: "大葉大學", value: "大葉大學" }
      ],
      allGrade: [
        { id: "grade_one", text: "一", value: "一"},
        { id: "grade_two", text: "二", value: "二" },
        { id: "grade_three", text: "三", value: "三" },
        { id: "grade_four", text: "四", value: "四" },
        { id: "master_one", text: "碩一", value: "碩一" },
        { id: "master_two", text: "碩二", value: "碩二" }
      ],
      allGroup: [
        {
          id1: "group1_activity",
          id2: "group2_activity",
          text: "活動組",
          value: "活動組",
        },
        {
          id1: "group1_data",
          id2: "group2_data",
          text: "資料保管組",
          value: "資料保管組"
        },
        {
          id1: "group1_art",
          id2: "group2_art",
          text: "美工設計組",
          value: "美工設計組"
        },
        {
          id1: "group1_public",
          id2: "group2_public",
          text: "公關組",
          value: "公關組"
        },
        {
          id1: "group1_equipment",
          id2: "group2_equipment",
          text: "設備組",
          value: "設備組"
        }
      ]
    };
  },
  methods: {
    onSave() {
      if (!checkForm(this)) {
        return false;
      } else {
        // Save the post
        this.$emit("submit", this.addAdmin_list);
        // 註冊新帳戶
        let authUrl =
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
          process.env.fbAPIKey;
        this.$axios
          .$post(authUrl, {
            email: this.addAdmin_list.email,
            password: this.addAdmin_list.password,
            returnSecureToken: true
          })
          .then(result => {
            console.log(result);
          })
          .catch(e => console.log(e));
      }
    }
  }
};
</script>