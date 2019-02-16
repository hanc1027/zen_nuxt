<template>
  <div id="app">
      <top-nav/>
      <left-nav/>
      <dataq/>
      <zenFooter/>
  </div>
</template>

<script>
import dataq from "@/components/dataq.vue";
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";

export default {
  name: "app",
  components: {
    dataq,topNav,leftNav,zenFooter
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>
