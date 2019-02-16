<template>
  <div id="app">
      <top-nav/>
      <left-nav/>
      <memberData/>
      <zenFooter/>
  </div>
</template>

<script>
import memberData from "@/components/member-data.vue";
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";

export default {
  name: "app",
  components: {
    memberData,topNav,leftNav,zenFooter
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>
