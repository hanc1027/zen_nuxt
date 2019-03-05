<template>
  <div id="app">
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <a href="">中區禪悅社</a>
          </li>
          <li>
            <nuxt-link to="signature">會議簽到</nuxt-link>
          </li>
          <li>
            <a href="">會議新增</a>
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
  components: {
    addMeetingForm
  },
  layout: "fun_page",
  methods: {
    onSubmitted(listData) {
      axios
        .post("https://zen-nuxt.firebaseio.com/meeting_list.json", listData)
        .then(result => {
          alert("會議已新增！");
          this.$router.push({ path: "/signature-list" });
        })
        .catch(e => console.log(e));
    }
  }
};
</script>
<style>
</style>
