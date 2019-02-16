<template>
  <div id="app">
      <top-nav/>
      <left-nav/>
      <calender/>
      <zenFooter/>
  </div>
</template>

<script>
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";
import calender from "@/components/calender.vue";

export default {
  name: "app",
  components: {
    topNav,leftNav,zenFooter,calender
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>
