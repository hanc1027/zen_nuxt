<template>
  <div id="app">
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <nuxt-link to="/home">中區禪悅社</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/signature">會議簽到</nuxt-link>
          </li>
          <li>
            <a href>會議新增</a>
          </li>
        </ul>
      </div>

      <addMeetingForm @submit="onSubmitted"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import addMeetingForm from "@/components/forms/addMeetingForm";

export default {
  head:{
    title:"中區禪悅社-會議新增"
  },
  components: {
    addMeetingForm
  },
  layout: "fun_page",
  methods: {
    onSubmitted(listData) {
       this.$store.dispatch("addMeeting", listData).then(() => {
          this.$router.push({ path: "/signature-list" });
      });
    }
  }
};
</script>
<style>
</style>
