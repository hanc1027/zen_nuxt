<template>
  <div id="app">
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <a href>中區禪悅社</a>
          </li>
          <li>
            <nuxt-link to="signature">會議簽到</nuxt-link>
          </li>
          <li>
            <a href>會議簽到狀況</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-list-alt"></i> 會議簽到狀況
              </h2>
            </div>
            <div class="box-content">
              <nuxt-link class="btn btn-default btn-sm" to="meeting-set">
                <i class="glyphicon glyphicon-plus"></i> 新增會議
              </nuxt-link>
              <form style="float:right" onSubmit="return checkMeetingSearch();">
                <!-- 還須製作checkMeetingSearch()函式 -->
                <input
                  name="meeting_search"
                  id="meeting_search"
                  type="text"
                  class="form-control"
                  placeholder="會議名稱搜尋"
                >
                <input name="action" type="hidden" id="action" value="find">
                <!-- <button type="submit" class="btn btn-default">提交</button> -->
              </form>
            </div>
            <br>

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
                              <th width="13%" bgcolor="#CCCCCC">
                                <p>會議名稱</p>
                              </th>
                              <th width="13%" bgcolor="#CCCCCC">
                                <p>會議地點</p>
                              </th>
                              <th width="13%" bgcolor="#CCCCCC">
                                <p>會議日期</p>
                              </th>
                              <th width="13%" bgcolor="#CCCCCC">
                                <p>開始時間</p>
                              </th>
                              <th width="13%" bgcolor="#CCCCCC">
                                <p>結束時間</p>
                              </th>
                              <th width="13%" bgcolor="#CCCCCC">
                                <p>參與人數</p>
                              </th>
                              <th width="10%" bgcolor="#CCCCCC">
                                <p>新增者</p>
                              </th>
                            </tr>

                            <tr v-for="(meeting,key) in meeting_list" :id="key">
                              <td width="10%" align="center" bgcolor="#FFFFFF">
                                <p>
                                  <!-- /signature-list-update?id={{key}}-->
                                  <nuxt-link :to="{path:'signature-list-update',query:{id:key}}">修改</nuxt-link>
                                  <br>
                                  <a href @click="deleteMeeting(key)">刪除</a>
                                </p>
                              </td>
                              <td width="13%" align="center" bgcolor="#FFFFFF">
                                <p>{{meeting.name}}</p>
                              </td>
                              <td width="13%" align="center" bgcolor="#FFFFFF">
                                <p>{{meeting.place}}</p>
                              </td>
                              <td width="13%" align="center" bgcolor="#FFFFFF">
                                <p>{{meeting.date}}</p>
                              </td>
                              <td width="13%" align="center" bgcolor="#FFFFFF">
                                <p>{{meeting.start_time}}</p>
                              </td>
                              <td width="13%" align="center" bgcolor="#FFFFFF">
                                <p>{{meeting.end_time}}</p>
                              </td>
                              <td width="13%" align="center" bgcolor="#FFFFFF">
                                <center>
                                  <p>人</p>
                                  <p>
                                    <a href>
                                      <button class="btn btn-default btn-sm">查看</button>
                                    </a>
                                  </p>
                                </center>
                              </td>
                              <td width="10%" align="center" bgcolor="#FFFFFF">
                                <p></p>
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
                                <p>會議總數：{{meeting_list_len}}</p>
                              </td>
                              <td align="right">
                                <p>
                                  <a href>第一頁</a> |
                                  <a href>上一頁</a> |
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
  data() {
    return {
      meeting_list_len: ""
    };
  },
  layout: "fun_page",
  asyncData(context) {
    return axios
      .get("https://zen-nuxt.firebaseio.com/meeting_list.json")
      .then(res => {
        return {
          meeting_list: res.data
        };
      })
      .catch(e => context.error(e));
  },
  mounted() {
    this.meeting_list_len = Object.keys(this.meeting_list).length;
  },
  methods: {
    deleteMeeting(dataId) {
      var confirmDel = confirm(
        "您確定要刪除這個會議嗎?\n若確定刪除，簽到的人員紀錄會一併刪除，無法恢復"
      );
      if (confirmDel) {
       this.$store.dispatch("delete_meeting", dataId);
      }
    }
  }
};
</script>

<style>
</style>
