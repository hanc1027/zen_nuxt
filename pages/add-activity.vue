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
            <a href="#">活動新增</a>
          </li>
        </ul>
      </div>

      <addActivityForm @submit="onSubmitted"/>

    </div>
    <!--/#content.col-md-0-->
  </div>
</template>

<script>
import axios from 'axios';
import addActivityForm from "@/components/forms/addActivityFrom";

export default {
  components: {
    addActivityForm
  },
  layout: "fun_page",
  methods: {
    onSubmitted(listData) {
      axios.post('https://zen-nuxt.firebaseio.com/activity_list.json', listData)
        .then(result => console.log(result))
        .catch(e => console.log(e))

     alert("活動已新增！")
     this.$router.push("/activity_list")
    }
  }
};
</script>