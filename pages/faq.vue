<template>
  <div id="app">
      <top-nav/>
      <left-nav/>
      <faq/>
      <zenFooter/>
  </div>
</template>

<script>
import faq from "@/components/faq.vue";
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";

export default {
  name: "app",
  components: {
    faq,topNav,leftNav,zenFooter
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>
