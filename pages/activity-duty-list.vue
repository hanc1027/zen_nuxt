<template>
  <div>
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <a href="">中區禪悅社</a>
          </li>
          <li>
            <a href="">執事表列表</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-list-alt"></i> 執事表列表
              </h2>
            </div>
            <div class="box-content">
              <table width="780" border="0" align="center" cellpadding="4" cellspacing="0">
                <tr>
                  <td class="tdbline">
                    <table width="100%" border="0" cellspacing="0" cellpadding="10">
                      <tr valign="top">
                        <td class="tdrline">
                          <table
                            width="100%"
                            border="0"
                            cellpadding="2"
                            cellspacing="1"
                            bgcolor="#F0F0F0"
                            style="border:2px black solid;"
                            rules="ALL"
                          >
                            <tr>
                              <th width="10%" bgcolor="#CCCCCC">&nbsp;</th>
                              <th width="20%" bgcolor="#CCCCCC">
                                <p>活動名稱</p>
                              </th>
                              <th width="20%" bgcolor="#CCCCCC">
                                <p>活動日期</p>
                              </th>
                              <th width="20%" bgcolor="#CCCCCC">
                                <p>總召集人</p>
                              </th>
                              <th width="20%" bgcolor="#CCCCCC">
                                <p>查詢鈕</p>
                              </th>
                            </tr>

                            <tr>
                              <td width="10%" align="center" bgcolor="#FFFFFF">
                                <p>
                                  <a href>修改</a>
                                  <br>
                                  <a href onClick="return deletesure();">刪除</a>
                                </p>
                              </td>
                              <td width="20%" align="center" bgcolor="#FFFFFF">
                                <p></p>
                              </td>
                              <td width="20%" align="center" bgcolor="#FFFFFF">
                                <p></p>
                              </td>
                              <td width="20%" align="center" bgcolor="#FFFFFF">
                                <p></p>
                              </td>
                              <td width="20%" align="center" bgcolor="#FFFFFF">
                                <p>
                                  <center>
                                    <a href>
                                      <button class="btn btn-default btn-sm">查看</button>
                                    </a>
                                  </center>
                                </p>
                              </td>
                            </tr>
                          </table>
                          <hr size="1">
                          <table
                            width="98%"
                            border="0"
                            align="center"
                            cellpadding="4"
                            cellspacing="0"
                          >
                            <tr>
                              <td valign="middle">
                                <p>活動總數：</p>
                              </td>
                              <td align="right">
                                <p>
                                  <a href>第一頁</a> |
                                  <a href>上一頁</a>
                                  |
                                  <a href>下一頁</a> |
                                  <a href>最末頁</a>
                                </p>
                              </td>
                            </tr>
                          </table>
                          <p>&nbsp;</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
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
