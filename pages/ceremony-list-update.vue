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
            <nuxt-link to="/ceremony-list">法會列表</nuxt-link>
          </li>
          <li>
            <a href>法會更新</a>
          </li>
        </ul>
      </div>

      <updateCeremonyForm :update_ceremony_list="loadedCeremony" @submit="onSubmitted"/>
    </div>
    <!--/#content.col-md-0-->
  </div>
</template>

<script>
import axios from "axios";
import updateCeremonyForm from "@/components/forms/updateCeremonyForm";

export default {
  name: "app",
  components: {
    updateCeremonyForm
  },
  layout: "fun_page",
  asyncData(context) {
    return axios
      .get(
        "https://zen-nuxt.firebaseio.com/ceremony_list/" +
          context.query.id +
          ".json"
      )
      .then(res => {
        return {
          loadedCeremony: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error());
  },
  methods: {
    onSubmitted(listData) {
      const addID = {
        ...listData,
        ceremonyId: this.$route.query.id
      };
      this.$store
        .dispatch("editedCeremony", addID)
        .then(() => {
          this.$router.push("/ceremony-list");
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

<style>
</style>