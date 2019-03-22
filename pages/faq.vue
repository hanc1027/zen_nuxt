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
            <a href>Q&A</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-question-sign"></i> Q&A
              </h2>
            </div>
            <div class="box-content">
              <img src="img/repair.jpg">
            </div>
          </div>
        </div>
        <!--/span-->
      </div>
      <!--/row-->
    </div>
    <!--/#content.col-md-0-->
  </div>
</template>

<script>

export default {
  name: "app",
  data(){
    return{
    }
  },
  layout:'fun_page'
};
</script>

<style>
</style>
