<template>
  <div>
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <nuxt-link to="/home">中區禪悅社</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/activity_list">活動列表</nuxt-link>
          </li>
          <li>
            <a href>活動更新</a>
          </li>
        </ul>
      </div>
      <updateActivityForm :update_activity_list="loadedActivity" @submit="onSubmitted"/>
    </div>
    <!--/#content.col-md-0-->
  </div>
</template>

<script>
import axios from "axios";
import updateActivityForm from "@/components/forms/updateActivityForm";

export default {
  name: "app",
  components: {
    updateActivityForm
  },
  layout: "fun_page",
  asyncData(context) {
    return axios
      .get(
        "https://zen-nuxt.firebaseio.com/activity_list/" +
          context.query.id +
          ".json"
      )
      .then(res => {
        return {
          loadedActivity: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error());
  },
  methods: {
    onSubmitted(listData) {
      const addID = {
        ...listData,
        activityId: this.$route.query.id
      };
      this.$store
        .dispatch("editedActivity", addID)
        .then(() => {
          this.$router.push("activity_list");
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

<style>
</style>
