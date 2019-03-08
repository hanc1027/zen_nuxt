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
            <a href>活動新增</a>
          </li>
        </ul>
      </div>

      <addActivityForm @submit="onSubmitted"/>
    </div>
    <!--/#content.col-md-0-->
  </div>
</template>

<script>
import axios from "axios";
import addActivityForm from "@/components/forms/addActivityFrom";

export default {
  head: {
    title: "中區禪悅社-活動新增"
  },
  components: {
    addActivityForm
  },
  layout: "fun_page",
  methods: {
    onSubmitted(listData) {
      this.$store.dispatch("addActivity", listData).then(() => {
        this.$router.push("/activity_list");
      });
    }
  }
};
</script>