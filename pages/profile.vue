<template>
  <div>
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <nuxt-link to="/home">中區禪悅社</nuxt-link>
          </li>
          <li>
            <a href>個人資料</a>
          </li>
        </ul>
        <profileForm/>
      </div>
    </div>
  </div>
</template>

<script>
import profileForm from "@/components/forms/profileForm";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    profileForm
  },
  layout: "fun_page"
};
</script>

<style>
</style>