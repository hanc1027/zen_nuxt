<template>
  <div>
    <top-nav email="adminEmail"/>
    <left-nav/>
    <nuxt />
    <zenFooter/>
  </div>
</template>

<script>
import topNav from "@/components/top_nav.vue";
import leftNav from "@/components/left_nav.vue";
import zenFooter from "@/components/footer.vue";
import Cookie from 'js-cookie'

export default {
  middleware:['check-auth','auth'],
    components: {
    topNav,leftNav,zenFooter
  },
  data(){
    return {
      adminEmail:""
    }
  },
  mounted(){
    this.adminEmail = Cookie.get('mainEmail');
    // console.log("mainEmail=",Cookie.get('mainEmail'))
  }
  
}
</script>

<style>

</style>
