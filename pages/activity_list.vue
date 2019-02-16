<template>
  <div id="app">
      <top-nav/>
      <left-nav/>
      <activityList/>
      <zenFooter/>
  </div>
</template>

<script>
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";
import activityList from "@/components/activity_list.vue";

export default {
  name: "app",
  components: {
    topNav,leftNav,zenFooter,activityList
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>
