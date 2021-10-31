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
        .get("https://zen-nuxt.firebaseio.com/zen-nuxt/admin_member.json")
        .then(res => {
          for (var fireBaseId in res.data) {
            if (Cookie.get("mainEmail") == res.data[fireBaseId].email) {
              Cookie.set("admId", fireBaseId);
              Cookie.set("admName", res.data[fireBaseId].name);
              Cookie.set("admFahao", res.data[fireBaseId].fahao);
              Cookie.set("admDepartment", res.data[fireBaseId].department);
              Cookie.set("admGrade", res.data[fireBaseId].grade);
              Cookie.set("admSchool", res.data[fireBaseId].school);
              Cookie.set("admCadre", res.data[fireBaseId].cadre);
              Cookie.set("admGroup1", res.data[fireBaseId].group1);
              Cookie.set("admGroup2", res.data[fireBaseId].group2);
              Cookie.set("admGroup3", res.data[fireBaseId].group3);
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
