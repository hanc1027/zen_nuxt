<template>
  <div id="app">
    <noscript>
      <div class="alert alert-block col-md-12">
        <h4 class="alert-heading">Warning!</h4>
        <p>
          您的瀏覽器需有
          <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>
          才可觀看
        </p>
      </div>
    </noscript>

    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <a href>中區禪悅社</a>
          </li>
          <li>
            <a href>活動列表</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-list-alt"></i> 活動列表
              </h2>
            </div>

            <div class="box-content">
              <nuxt-link class="btn btn-default btn-sm" to="add-activity">
                <i class="glyphicon glyphicon-plus"></i> 新增活動
              </nuxt-link>
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
                              <th width="10%" bgcolor="#CCCCCC">
                                <p></p>
                              </th>
                              <th width="15%" bgcolor="#CCCCCC">
                                <p>活動名稱</p>
                              </th>
                              <th width="15%" bgcolor="#CCCCCC">
                                <p>活動地點</p>
                              </th>
                              <th width="15%" bgcolor="#CCCCCC">
                                <p>活動日期</p>
                              </th>
                              <th width="15%" bgcolor="#CCCCCC">
                                <p>開始時間</p>
                              </th>
                              <th width="15%" bgcolor="#CCCCCC">
                                <p>結束時間</p>
                              </th>
                              <th width="10%" bgcolor="#CCCCCC">
                                <p>新增者</p>
                              </th>
                            </tr>

                            <tr v-for="(actli,key,id) in activity_list" :id="key">
                              <td width="10%" align="center" bgcolor="#FFFFFF">
                                <p>
                                  <nuxt-link :to="{path:'activity-list-update',query:{id:key}}">修改</nuxt-link>
                                  <br>
                                  <a href @click="deleteActivity(key)">刪除</a>
                                </p>
                              </td>
                              <td width="15%" align="center" bgcolor="#FFFFFF">
                                <p>{{actli.name}}</p>
                              </td>
                              <td width="15%" align="center" bgcolor="#FFFFFF">
                                <p>{{actli.place}}</p>
                              </td>
                              <td width="15%" align="center" bgcolor="#FFFFFF">
                                <p>{{actli.date}}</p>
                              </td>
                              <td width="15%" align="center" bgcolor="#FFFFFF">
                                <p>{{actli.start_time}}</p>
                              </td>
                              <td width="15%" align="center" bgcolor="#FFFFFF">
                                <p>{{actli.end_time}}</p>
                              </td>
                              <td width="10%" align="center" bgcolor="#FFFFFF">
                                <p>{{actli.who_add}}</p>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  layout: "fun_page",
  asyncData(context) {
    return axios
      .get("https://zen-nuxt.firebaseio.com/activity_list.json")
      .then(res => {
        return {
          activity_list: res.data
        };
      })
      .catch(e => context.error(e));
  },
  methods: {
    deleteActivity(dataId) {
      var confirmDel = confirm(
        "您確定要刪除這個活動嗎?\n若確定刪除，則無法恢復"
      );
      if (confirmDel) {
        axios
          .delete(
            "https://zen-nuxt.firebaseio.com/activity_list/" + dataId + ".json"
          )
          .then(res => {
            location.reload();
          });
      }
    }
  }
};
</script>

<style>
</style>
