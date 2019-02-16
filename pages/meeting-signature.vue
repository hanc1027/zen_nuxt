<template>
  <div id="app">
      <top-nav/>
      <left-nav/>
      <meetingSignature/>
      <zenFooter/>
  </div>
</template>

<script>
import meetingSignature from "@/components/meeting-signature.vue";
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";

export default {
  name: "app",
  components: {
    meetingSignature,topNav,leftNav,zenFooter
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>
