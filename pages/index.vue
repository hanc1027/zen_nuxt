<template>
  <div class="ch-container">
    <div class="row">
      <div class="row">
        <div class="col-md-12 center login-header">
          <h2>中區禪悅社後台管理</h2>
        </div>
        <!--/span-->
      </div>
      <!--/row-->
      <div class="row">
        <div class="well col-lg-4 col-md-6 col-xs-10 center login-box">
          <form class="form-horizontal" @submit.prevent="onSubmit">
            <fieldset>
              <div class="input-group input-group-lg">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-envelope blue"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="帳號"
                  name="username"
                  id="username"
                  v-model="email"
                >
                <!--value="<?php //if(isset($_COOKIE["remUser"]) && ($_COOKIE["remUser"]!="")) echo $_COOKIE["remUser"];?>"-->
              </div>

              <div class="clearfix"></div>
              <br>

              <div class="input-group input-group-lg">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-lock blue"></i>
                </span>
                <input
                  type="password"
                  class="form-control"
                  placeholder="密碼"
                  name="passwd"
                  id="passwd"
                  v-model="password"
                >
                <!-- value="<?php //if(isset($_COOKIE["remPass"]) && ($_COOKIE["remPass"]!="")) echo $_COOKIE["remPass"];?>" -->
              </div>
              <div class="clearfix"></div>

              <div class="input-prepend">
                <!-- <label class="remember" for="remember"><input type="checkbox" id="remember"> 記住我</label> -->
              </div>
              <div class="clearfix"></div>
              <p class="center col-lg-6 col-md-8 col-xs-10">
                <button type="submit" class="btn btn-primary">登入</button>
              </p>
            </fieldset>
          </form>
          <div v-if="isShow" class="alert alert-danger">輸入帳號或密碼錯誤!</div>
          <div class="alert alert-info">若忘記密碼或新進幹部，請洽資料保管組</div>
        </div>
        <!--/span-->
      </div>
      <!--/row-->
    </div>
    <!--/fluid-row-->
  </div>
  <!--/.fluid-container-->
  <!-- external javascript -->
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
      isShow:false
    };
  },
  methods: {
    onSubmit() {
      const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

      //  const emailRule = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

      if (this.email == "") {
        alert("請輸入Email")
      } else if (!emailRule.test(this.email)){
        alert("請輸入正確的Email格式")
      } else if (this.password == "") {
        alert("請輸入密碼")
      }
      this.$store
        .dispatch("authenticateUser", {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("home");
        })
      if (!this.$store.getters.isAuthenticated) {
        this.isShow = false;
      }
    },
  },
  beforeCreate(){
    if(this.$store.getters.yesLogout){
      this.$router.push('home')
    }
  }
};
</script>

<style>
</style>
