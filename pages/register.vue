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
      <registerForm @submit="onSubmitted"/>
    </div>
    <!--/#content.col-md-0-->
  </div>
</template>

<script>
import registerForm from "@/components/forms/registerForm";

export default {
  layout: "fun_page",
  components: {
    registerForm
  },
  methods: {
    onSubmitted(listData) {
       this.$store.dispatch("addMember", listData).then(() => {
          this.$router.push({ path: "/account" });
      });
    }
  }
};
</script>