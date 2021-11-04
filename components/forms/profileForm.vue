<template>
  <div class="row">
    <form role="form" @submit.prevent="onSave">
      <div class="box col-md-12">
        <div class="box-inner">
          <div class="box-header well" data-original-title>
            <h2><i class="glyphicon glyphicon-user"></i> 個人資料</h2>
          </div>
          <div class="box-content">
            <br />

            <label class="control-label">姓名:</label> {{name}} <br>
            <label class="control-label">學校:</label> {{school}}<br>
            <label class="control-label">系級:</label> {{department}}{{grade}}<br>
            <label class="control-label">職位:</label> {{cadre}}<br>
            <label class="control-label">組別1:</label> {{group1}}<br>
            <label class="control-label">組別2:</label> {{group2}}<br><br>

            <div class="alert alert-info">若需更改個人資料，請洽資料保管組</div>
          </div>
        </div>
      </div>
      <!--/span-->
    </form>
  </div>
  <!--/row-->
</template>

<script>
import Cookie from "js-cookie";

export default {
  head: {
    title: "中區禪悅社-個人資料",
  },
  name: "app",
  layout: "fun_page",
  data() {
    return {
        name: "",
        school: "",
        department: "",
        grade: "",
        cadre: "",
        group1: "",
        group2: "",
    };
  },
  methods: {
    getData() {
        this.name = Cookie.get("admName");
        this.school = Cookie.get("admSchool");
        this.department = Cookie.get("admDepartment");
        this.grade = Cookie.get("admGrade");
        this.cadre = Cookie.get("admCadre");
        this.group1 = Cookie.get("admGroup1");
        this.group2 = Cookie.get("admGroup2");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>