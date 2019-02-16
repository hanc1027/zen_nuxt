<template>
  <div id="app">
      <top-nav/>
      <left-nav/>
      <centralOrg/>
      <zenFooter/>
  </div>
</template>

<script>
import centralOrg from "@/components/central-org.vue";
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";

export default {
  name: "app",
  components: {
    centralOrg,topNav,leftNav,zenFooter
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>
