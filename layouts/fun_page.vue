<template>
  <div>
    <top-nav/>
    <left-nav/>
    <nuxt/>
    <zenFooter/>
  </div>
</template>

<script>
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";

export default {
  middleware: ["check-auth", "auth"],
  components: {
    topNav,
    leftNav,
    zenFooter
  }
};
</script>

<style>
</style>
