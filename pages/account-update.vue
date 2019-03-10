<template>
  <div id="content" class="col-lg-10 col-sm-10">
    <!-- content starts -->
    <div>
      <ul class="breadcrumb">
        <li>
          <a href>中區禪悅社</a>
        </li>
        <li>
          <a href>帳號修改</a>
        </li>
      </ul>
    </div>
    <updateAccountForm :update_admin_list="loadedAdmin" @submit="onSubmitted"/>
  </div>
  <!--/#content.col-md-0-->
</template>

<script>
import axios from "axios";
import updateAccountForm from "@/components/forms/updateAccountForm";
export default {
  components: {
    updateAccountForm
  },
  layout: "fun_page",

  methods: {
    onSubmitted(listData) {
      const addID = {
        ...listData,
        accountId: this.$route.query.id
      };
      this.$store
        .dispatch("editedAccount", addID)
        .then(() => {
          this.$router.push("/account");
        })
        .catch(e => console.log(e));
    }
  },
  asyncData(context) {
    return axios
      .get(
        "https://zen-nuxt.firebaseio.com/admin_member/" +
          context.query.id +
          ".json"
      )
      .then(res => {
        return {
          loadedAdmin: {...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error());
  }
};
</script>