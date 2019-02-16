<template>
  <div id="app">
      <top-nav/>
      <left-nav/>
      <signature/>
      <zenFooter/>
  </div>
</template>

<script>
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";
import signature from "@/components/signature.vue";

export default {
  name: "app",
  components: {
    topNav,leftNav,zenFooter,signature
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>
