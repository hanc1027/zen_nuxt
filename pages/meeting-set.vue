<template>
  <div id="app">
      <top-nav/>
      <left-nav/>
      <meeting-set/>
      <zenFooter/>
  </div>
</template>

<script>
import meetingSet from "@/components/meeting-set.vue";
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";

export default {
  name: "app",
  components: {
    meetingSet,topNav,leftNav,zenFooter
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>
