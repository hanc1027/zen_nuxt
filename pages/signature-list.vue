<template>
  <div id="app">
      <top-nav/>
      <left-nav/>
      <signatureList />
      <zenFooter/>
  </div>
</template>

<script>
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";
import signatureList from "@/components/signature-list.vue";

export default {
  name: "app",
  components: {
    topNav,leftNav,zenFooter,signatureList 
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>
