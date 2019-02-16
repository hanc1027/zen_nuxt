<template>
  <div id="app">
      <top-nav/>
      <left-nav/>
      <home/>
      <zenFooter/>
  </div>
</template>

<script>
import home from "@/components/home.vue";
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";

export default {
  name: "app",
  components: {
    home,topNav,leftNav,zenFooter
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>
