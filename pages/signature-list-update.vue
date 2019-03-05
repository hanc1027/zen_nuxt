<template>
  <div>
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <a href="#">中區禪悅社</a>
          </li>
          <li>
            <nuxt-link to="signature">會議簽到</nuxt-link>
          </li>
          <li>
            <a href="#">會議更新</a>
          </li>
        </ul>
      </div>
      <updateMeetingForm :update_meeting_list="loadedMeeting" @submit="onSubmitted" />
    </div>

    <!--/#content.col-md-0-->
  </div>
</template>

<script>
import axios from "axios"
import updateMeetingForm from "@/components/forms/updateMeetingForm";

export default {
  name: "app",
  components: {
    updateMeetingForm
  },
  data() {
    return {
        update_meeting:""
    };
  },
  layout: "fun_page",
  asyncData(context) {
    return axios
      .get(
        "https://zen-nuxt.firebaseio.com/meeting_list/" +
          context.query.id +
          ".json"
      )
      .then(res => {
        return {
          loadedMeeting: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error());
  },
  methods:{
     onSubmitted(listData) {
         //axios.put() 修改資料
      axios.put('https://zen-nuxt.firebaseio.com/meeting_list/'+this.$route.query.id+'.json', listData)
        .then(result => {
            alert("會議已更新！")
            this.$router.push("signature-list")
        })
        .catch(e => console.log(e))
     
    }
  }
};
</script>

<style>
</style>