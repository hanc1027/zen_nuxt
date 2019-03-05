<template>
  <div>
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <a href>中區禪悅社</a>
          </li>
          <li>
            <a href>法訊新增</a>
          </li>
        </ul>
      </div>
      <addCeremonyForm @submit="onSubmitted"/>
    </div>
    <!--/#content.col-md-0-->
  </div>
</template>

<script>
import axios from "axios";
import addCeremonyForm from "@/components/forms/addCeremonyForm";

export default {
  name: "app",
  data() {
    return {};
  },
  layout: "fun_page",
  components:{
      addCeremonyForm
  },
  methods: {
    onSubmitted(listData) {
      //axios.post() 新增資料
      axios
        .post("https://zen-nuxt.firebaseio.com/ceremony_list.json", listData)
        .then(result => {
          alert("法訊已新增！");
          this.$router.push("/ceremony-list");
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

<style>
</style>
