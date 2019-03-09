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
      <nuxt-link to="home" class="navbar-brand">
        <img alt="ZenJoy Logo" src="img/logo.jpg" class="hidden-xs">
        <span>中區禪悅社</span>
      </nuxt-link>

      <!-- user dropdown starts -->
      <div class="btn-group pull-right">
        <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
          <i class="glyphicon glyphicon-user"></i>
          <span class="hidden-sm hidden-xs">{{adm_username}}</span>
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <nuxt-link to="/profile">個人資料</nuxt-link>
          </li>
          <li class="divider"></li>
          <li>
            <a href @click="onLogout">登出</a>
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
import axios from "axios";

export default {
  data() {
    return {
      adm_username: ""
    };
  },
  methods: {
    getData() {
      const adm = this;
      axios
        .get("https://zen-nuxt.firebaseio.com/admin_member.json")
        .then(res => {
          this.adm_username = res.data[0].username;
        })
        .catch(e => console.log(e));
    },
    props: {
      email:"adminEmail"
    },
    onLogout() {
      alert("您已登出。");
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  },
  mounted() {
    this.getData();
    console.log("NewEmail=",this.email)
  }
};
</script>

