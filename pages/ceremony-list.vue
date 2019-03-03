<template>
    <div>
        <div id="content" class="col-lg-10 col-sm-10">
            <!-- content starts -->
        <div>
    <ul class="breadcrumb">
        <li><a href="#">中區禪悅社</a></li>
        <li><a href="#">法會列表</a></li>
    </ul>
</div>

<div class="row">
    <div class="box col-md-12">
        <div class="box-inner">
            <div class="box-header well" data-original-title="">
                <h2><i class="glyphicon glyphicon-list-alt"></i> 法會列表</h2>
            </div>
            <div class="box-content">
<table width="780" border="0" align="center" cellpadding="4" cellspacing="0">

  <tr>
    <td class="tdbline"><table width="100%" border="0" cellspacing="0" cellpadding="10">
      <tr valign="top">
        <td class="tdrline">
          <table width="100%" border="0" cellpadding="2" cellspacing="1" bgcolor="#F0F0F0" style="border:2px black solid;" RULES=ALL>
            <tr>
             <th width="10%" bgcolor="#CCCCCC">&nbsp;</th>
              <th width="13%" bgcolor="#CCCCCC"><p>法會名稱</p></th>
              <th width="13%" bgcolor="#CCCCCC"><p>法會地點</p></th>
              <th width="13%" bgcolor="#CCCCCC"><p>法會日期</p></th>
              <th width="13%" bgcolor="#CCCCCC"><p>開始時間</p></th>
              <th width="13%" bgcolor="#CCCCCC"><p>結束時間</p></th>
              <th width="10%" bgcolor="#CCCCCC"><p>新增者</p></th>
            </tr>
            
            <tr>
            <td width="10%" align="center" bgcolor="#FFFFFF"><p>
                <a href="">修改</a><br>
                <a href="" onClick="return deletesure();">刪除</a></p></td>';?>
              <td width="13%" align="center" bgcolor="#FFFFFF"><p></p></td>
              <td width="13%" align="center" bgcolor="#FFFFFF"><p></p></td>
              <td width="13%" align="center" bgcolor="#FFFFFF"><p></p></td>
              <td width="13%" align="center" bgcolor="#FFFFFF"><p></p></td>
              <td width="13%" align="center" bgcolor="#FFFFFF"><p></p></td>
              <td width="10%" align="center" bgcolor="#FFFFFF"><p></p></td>
            </tr>
           
           </table>          
          <hr size="1" />
          <table width="98%" border="0" align="center" cellpadding="4" cellspacing="0">
            <tr>
              <td valign="middle"><p>法會總數：</p></td>
              <td align="right"><p>
                  <a href="">第一頁</a> | <a href="">上一頁</a> |
                  <a href="">下一頁</a> | <a href="">最末頁</a>
              </p></td>
            </tr>
          </table><p>&nbsp;</p>
          </td>
      </tr>
    </table></td>
  </tr>
</table>

            </div>
        </div>
    </div>
    <!--/span-->
</div><!--/row-->

    </div><!--/#content.col-md-0-->
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