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
            <a href>執事表列表</a>
          </li>
          <li>
            <a href>-執事分配表</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-search"></i> -執事分配表
              </h2>
            </div>
            <div class="box-content">
              <center>
                <h3>
                  <font color="black">-執事分配表</font>
                </h3>
              </center>
              <br>
              <center>
                <table
                  width="80%"
                  cellpadding="2"
                  cellspacing="1"
                  bgcolor="#F0F0F0"
                  style="border:5px #808080 groove;"
                  rules="ALL"
                >
                  <tr>
                    <td width="20%" bgcolor="#CCCCCC">
                      <center>
                        <b>
                          <h4>活動名稱</h4>
                        </b>
                      </center>
                    </td>
                    <td width="30%" bgcolor="#FFFFFF">
                      <center>
                        <h4>
                          <font color="black"></font>
                        </h4>
                      </center>
                    </td>
                    <td width="20%" bgcolor="#CCCCCC">
                      <center>
                        <b>
                          <h4>活動日期</h4>
                        </b>
                      </center>
                    </td>
                    <td width="30%" bgcolor="#FFFFFF">
                      <center>
                        <h4>
                          <font color="black"></font>
                        </h4>
                      </center>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%" align="center" bgcolor="#CCCCCC">
                      <center>
                        <b>
                          <h4>活動地點</h4>
                        </b>
                      </center>
                    </td>
                    <td width="80%" align="center" bgcolor="#FFFFFF" colspan="3">
                      <h4>
                        <font color="black"></font>
                      </h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="100%" align="center" bgcolor="#CCCCCC" colspan="4">
                      <center>
                        <b>
                          <h4>執 事 分 配</h4>
                        </b>
                      </center>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%" align="center" bgcolor="#CCCCCC">
                      <center>
                        <b>
                          <h4>總召集人</h4>
                        </b>
                      </center>
                    </td>
                    <td width="80%" align="center" bgcolor="#FFFFFF" colspan="3">
                      <h4>
                        <font color="black"></font>
                      </h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%" align="center" bgcolor="#CCCCCC">
                      <center>
                        <b>
                          <h4>副召集人</h4>
                        </b>
                      </center>
                    </td>
                    <td width="80%" align="center" bgcolor="#FFFFFF" colspan="3">
                      <h4>
                        <font color="black"></font>
                      </h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%" align="center" bgcolor="#CCCCCC">
                      <center>
                        <b>
                          <h4>執行秘書</h4>
                        </b>
                      </center>
                    </td>
                    <td width="80%" align="center" bgcolor="#FFFFFF" colspan="3">
                      <h4>
                        <font color="black"></font>
                      </h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%" align="center" bgcolor="#CCCCCC">
                      <center>
                        <b>
                          <h4>活動組</h4>
                        </b>
                      </center>
                    </td>
                    <td width="80%" align="center" bgcolor="#FFFFFF" colspan="3">
                      <h4>
                        <font color="black"></font>
                      </h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%" align="center" bgcolor="#CCCCCC">
                      <center>
                        <b>
                          <h4>總務組</h4>
                        </b>
                      </center>
                    </td>
                    <td width="80%" align="center" bgcolor="#FFFFFF" colspan="3">
                      <h4>
                        <font color="black"></font>
                      </h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%" align="center" bgcolor="#CCCCCC">
                      <center>
                        <b>
                          <h4>美宣組</h4>
                        </b>
                      </center>
                    </td>
                    <td width="80%" align="center" bgcolor="#FFFFFF" colspan="3">
                      <h4>
                        <font color="black"></font>
                      </h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%" align="center" bgcolor="#CCCCCC">
                      <center>
                        <b>
                          <h4>生輔組</h4>
                        </b>
                      </center>
                    </td>
                    <td width="80%" align="center" bgcolor="#FFFFFF" colspan="3">
                      <h4>
                        <font color="black"></font>
                      </h4>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%" align="center" bgcolor="#CCCCCC">
                      <center>
                        <b>
                          <h4>資料組</h4>
                        </b>
                      </center>
                    </td>
                    <td width="80%" align="center" bgcolor="#FFFFFF" colspan="3">
                      <h4>
                        <font color="black"></font>
                      </h4>
                    </td>
                  </tr>
                </table>
              </center>
              <br>
              <br>
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
  data() {
    return {};
  },
  layout: "fun_page"
};
</script>

<style>
</style>
