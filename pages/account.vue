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
            <a href="">帳號管理</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-list"></i> 帳號列表
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
                                <p>姓名</p>
                              </th>
                              <th width="20%" bgcolor="#CCCCCC">
                                <p>帳號</p>
                              </th>
                              <th width="20%" bgcolor="#CCCCCC">
                                <p>加入時間</p>
                              </th>
                              <!-- 視情況開此權限 -->
                              <!-- <th width="20%" bgcolor="#CCCCCC">
                                <p>上次登入</p>
                              </th> -->
                            </tr>

                            <tr v-for="(adm,key) in admin_list" :id="key">
                              <td width="10%" align="center" bgcolor="#FFFFFF">
                                <p>
                                   <nuxt-link :to="{path:'account-update',query:{id:key}}">修改</nuxt-link>
                                  <br>
                                  <a href @click="deleteAdmin(key)">刪除</a>
                                </p>
                              </td>
                              <td width="20%" align="center" bgcolor="#FFFFFF">
                                <p>{{adm.name}}</p>
                              </td>
                              <td width="20%" align="center" bgcolor="#FFFFFF">
                                <p>{{adm.email}}</p>
                              </td>
                              <td width="20%" align="center" bgcolor="#FFFFFF">
                                <p>{{adm.joinDate}}</p>
                              </td>
                              <!-- <td width="20%" align="center" bgcolor="#FFFFFF">
                                <p></p>
                              </td> -->
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
                                <p>資料筆數：</p>
                              </td>
                              <td align="right">
                                <p>
                                  <a href="">第一頁</a> |
                                  <a href="">上一頁</a> |
                                  <a href="">下一頁</a> |
                                  <a href="">最末頁</a>
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
import axios from 'axios';

export default {
  layout: "fun_page",
  asyncData(context) {
    return axios
      .get("https://zen-nuxt.firebaseio.com/admin_member.json")
      .then(res => {
        return {
          admin_list: res.data
        };
      })
      .catch(e => context.error(e));
  },
  methods: {
    deleteAdmin(dataId) {
      var confirmDel = confirm(
        "您確定要刪除這個活動嗎?\n若確定刪除，則無法恢復"
      );
      if (confirmDel) {
        let deleteUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/deleteAccount?key="+ process.env.fbAPIKey;
        this.$store.dispatch("delete_admin", dataId);
      }
    }
  }
};
</script>