<template>
  <div id="app">
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
            <a href="#">會議新增</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-cog"></i> 會議新增
              </h2>
            </div>
            <!-- <button onclick="meetingForm();"></button> -->
            <form role="form" method="POST" onSubmit="return formCheck(1);">
              <div class="box-content">
                <br>
                <div class="input-group col-md-3">
                  <span class="input-group-addon">
                    <b>
                      <i style="color:rgb(25, 40, 150)">會議名稱</i>
                    </b>
                  </span>
                  <input
                    name="me_name"
                    id="me_name"
                    type="text"
                    class="form-control"
                    placeholder="Meeting Name"
                  >
                </div>
                <br>

                <div class="input-group col-md-3">
                  <span class="input-group-addon">
                    <b>
                      <i style="color:rgb(25, 40, 150)">會議地點</i>
                    </b>
                  </span>
                  <input
                    name="me_place"
                    id="me_place"
                    type="text"
                    class="form-control"
                    placeholder="Meeting Place"
                  >
                </div>
                <br>

                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <b>
                      <i style="color:rgb(25, 40, 150)">會議日期</i>
                    </b>
                  </span>
                  <input name="me_date" id="me_date" type="date">
                </div>
                <br>

                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <b>
                      <i style="color:rgb(25, 40, 150)">開始時間</i>
                    </b>
                  </span>
                  <input name="me_start_time" id="me_start_time" type="time">
                </div>
                <br>

                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <b>
                      <i style="color:rgb(25, 40, 150)">結束時間</i>
                    </b>
                  </span>
                  <input name="me_end_time" id="me_end_time" type="time">
                </div>
                <br>

                <input name="action" type="hidden" id="action" value="join">
                <button type="submit" class="btn btn-default">新增</button>
              </div>
            </form>
          </div>
        </div>
        <!--/span-->
      </div>
      <!--/row-->
    </div>
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
