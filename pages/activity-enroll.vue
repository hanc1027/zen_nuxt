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
            <a href>活動報名系統</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-pencil"></i> 活動報名系統
              </h2>
            </div>
            <div class="box-content">
              <a
                href="https://www.surveycake.com/admin/tw/"
                title="Survey Cake表單系統"
                data-placement="right"
                data-toggle="tooltip"
                class="btn btn-warning"
                target="_blank"
              >報名表製作系統</a>
              <br>
              <br>
              <font color="green">
                <i>
                  <font color="red">
                    <b>註 :</b>
                  </font> Survey Cake帳號密碼請洽資料保管組Line群組
                </i>
              </font>
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
  layout: "fun_page"
};
</script>