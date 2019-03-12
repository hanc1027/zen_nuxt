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
import Cookie from "js-cookie";
import axios from "axios";

export default {
  middleware: ["check-auth", "auth"],
  components: {
    topNav,
    leftNav,
    zenFooter
  },
  methods: {
    getAdminId() {
      axios
        .get("https://zen-nuxt.firebaseio.com/admin_member.json")
        .then(res => {
          for (var fireBaseId in res.data) {
            if (Cookie.get("mainEmail") == res.data[fireBaseId].email) {
              Cookie.set("admId", fireBaseId);
            }
          }
        });
    }
  },
  mounted() {
    this.getAdminId();
  }
};
</script>

<style>
</style>
