<template>
  <!-- topbar starts -->
  <div class="navbar navbar-default" role="navigation">
    <div class="navbar-inner">
      <button type="button" class="navbar-toggle pull-left animated flip">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <nuxt-link to="#" class="navbar-brand">
        <img alt="ZenJoy Logo" src="img/logo.jpg" class="hidden-xs">
        <span>中區禪悅社</span>
      </nuxt-link>

      <!-- user dropdown starts -->
      <div class="btn-group pull-right">
        <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
          <i class="glyphicon glyphicon-user"></i>
          <span class="hidden-sm hidden-xs">{{admin_list.username}}</span>
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a href="#">個人資料</a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">登出</a>
          </li>
        </ul>
      </div>
      <!-- user dropdown ends -->
      <ul class="collapse navbar-collapse nav navbar-nav top-menu">
        <li>
          <a href="https://www.facebook.com/centralzenjoy/" target="_blank">
            <i class="glyphicon glyphicon-globe"></i>
            FB粉專
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- topbar ends -->
</template>

<script>
// const admRef = firebase.database().ref("/admin_member/0");

export default {
  data() {
    return {
      admin_list: {}
    };
  },
  methods: {
     show(){
     let show_item = this;
      admRef.on("value", function(data) {
        show_item.admin_list = data.val();
      });
    }
  },
  mounted() {
    // this.show();
  }
};
</script>

