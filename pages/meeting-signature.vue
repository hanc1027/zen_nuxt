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
            <a href>幹部簽到</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-ok"></i> 幹部簽到
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
                              <th width="15%" align="center" bgcolor="#CCCCCC">
                                <center>
                                  <p>簽到</p>
                                </center>
                              </th>
                              <th width="15%" align="center" bgcolor="#CCCCCC">
                                <center>
                                  <p>會議名稱</p>
                                </center>
                              </th>
                              <th width="15%" align="center" bgcolor="#CCCCCC">
                                <center>
                                  <p>會議地點</p>
                                </center>
                              </th>
                              <th width="15%" align="center" bgcolor="#CCCCCC">
                                <center>
                                  <p>會議日期</p>
                                </center>
                              </th>
                              <th width="15%" align="center" bgcolor="#CCCCCC">
                                <center>
                                  <p>開始時間</p>
                                </center>
                              </th>
                              <th width="15%" align="center" bgcolor="#CCCCCC">
                                <center>
                                  <p>結束時間</p>
                                </center>
                              </th>
                            </tr>

                            <tr v-for="(meetinglist,key) in meeting_list" :id="key">
                              <td width="15%" align="center" bgcolor="#FFFFFF">
                                <p>
                                  <center>
                                    <div class="absent" v-if="meetinglist.mode=='absent'">未參加</div>
                                    <div class="late" v-else-if="meetinglist.mode=='late'">遲到
                                      <br>
                                      {簽到時間}
                                    </div>
                                    <div class="onTime" v-else-if="meetinglist.mode=='onTime'">已簽到
                                      <br>
                                      {簽到時間}
                                    </div>
                                    <div
                                      class="notYetSign"
                                      v-else-if="meetinglist.mode=='notYetSign'"
                                    >
                                      <button class="btn btn-danger btn-sm" @click="signature">
                                        <font color="white">簽到</font>
                                      </button>
                                    </div>
                                  </center>
                                </p>
                              </td>
                              <td width="15%" align="center" bgcolor="#FFFFFF">
                                <p>{{meetinglist.name}}</p>
                              </td>
                              <td width="15%" align="center" bgcolor="#FFFFFF">
                                <p>{{meetinglist.place}}</p>
                              </td>
                              <td width="15%" align="center" bgcolor="#FFFFFF">
                                <p>{{meetinglist.date}}</p>
                              </td>
                              <td width="15%" align="center" bgcolor="#FFFFFF">
                                <p>{{meetinglist.start_time}}</p>
                              </td>
                              <td width="15%" align="center" bgcolor="#FFFFFF">
                                <p>{{meetinglist.end_time}}</p>
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
    <!--/#content.col-md-0-->
  </div>
</template>

<script>
import axios from "axios";
import Cookie from "js-cookie";

export default {
  name: "app",
  data() {
    return {
      meeting_list_len: Number,
      meeting_list: [],
      mode: "",
      leftHours: Number,
      leftMins: Number,
      leftSecs: Number,
      rightHours: Number,
      rightMins: Number,
      rightSecs: Number
    };
  },
  layout: "fun_page",
  // asyncData(context) {
  //   return axios
  //     .get("https://zen-nuxt.firebaseio.com/meeting_list.json")
  //     .then(res => {
  //       return {
  //         meeting_list: res.data
  //       };
  //     })
  //     .catch(e => context.error(e));
  // },
  mounted() {
    this.meeting_list_len = Object.keys(this.meeting_list).length;
  },
  methods: {
    notYetToSign(hour, min, sec) {
      console.log(
        "會議前三十分鐘才可進行簽到。\n距離此會議還有" +
          hour +
          "小時," +
          min +
          "分," +
          sec +
          "秒"
      );
    },
    diffOfNowAndMeeting(id, meeting) {
      axios
        .get("https://zen-nuxt.firebaseio.com/meeting_list/" + id + ".json")
        .then(res => {
          var meeting_date, meeting_time, meeting_end_time;

          meeting_date = res.data.date;
          meeting_time = res.data.start_time;
          meeting_end_time = res.data.end_time;

          // var time = new Date();
          // var today =
          //   time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate();
          // var now =
          //   time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
          /** 計算會議時間  start**/

          var ONE_HOUR = 1000 * 60 * 60; // 1小時的毫秒數
          var ONE_MIN = 1000 * 60; // 1分鐘的毫秒數
          var ONE_SEC = 1000; // 1秒的毫秒數

          var now_time = new Date();
          var date1 = meeting_date + " " + meeting_time;
          var new_meeting_date = date1.replace(/-/g, "/");
          var new_meeting_time = new Date(new_meeting_date); //可順利在不同瀏覽器使用
          var diff = new_meeting_time - now_time;

          var date2 = meeting_date + " " + meeting_end_time;
          var new_meeting_date2 = date2.replace(/-/g, "/");
          var new_meeting_time2 = new Date(new_meeting_date2); //可順利在不同瀏覽器使用
          var diff2 = new_meeting_time2 - now_time;
          //計算現在與開會開始的時間差
          this.leftHours = Math.floor(diff / ONE_HOUR);
          if (this.leftHours > 0) diff = diff - this.leftHours * ONE_HOUR;

          this.leftMins = Math.floor(diff / ONE_MIN);
          if (this.leftMins > 0) diff = diff - this.leftMins * ONE_MIN;

          this.leftSecs = Math.floor(diff / ONE_SEC);
          //計算現在與開會結束的時間差
          this.rightHours = Math.floor(diff2 / ONE_HOUR);
          if (this.rightHours > 0) diff2 = diff2 - this.rightHours * ONE_HOUR;

          this.rightMins = Math.floor(diff / ONE_MIN);
          if (this.rightMins > 0) diff2 = diff2 - this.rightMins * ONE_MIN;

          this.rightSecs = Math.floor(diff2 / ONE_SEC);

          this.isAbsent(id, meeting);
          // this.signature(this.leftHours, this.leftMins, this.leftSecs);

          /** 計算會議時間  eno **/
          var list = {
            name: Cookie.get("admName"),
            fahao: Cookie.get("admFahao"),
            school: Cookie.get("admShool"),
            cadre: Cookie.get("admCadre"),
            department: Cookie.get("admDepartment"),
            grade: Cookie.get("admGrade"),
            meeting_id: id
            // date: today,
            // sign_time: now
          };
        });

      // axios
      //   .put(
      //     "https://zen-nuxt.firebaseio.com/meeting_member_list.json?auth=" +
      //       Cookie.get("jwt"),
      //     list
      //   )
      //   .then(res => {});
    },
    isAbsent(id, meeting) {
      if (this.rightHours <= 0 && this.rightMins <= 0 && this.rightSecs <= 0) {
        meeting.mode = "absent";
        axios
          .put(
            "https://zen-nuxt.firebaseio.com/meeting_list/" +
              id +
              ".json?auth=" +
              Cookie.get("jwt"),
            meeting
          )
          .then(() => {});
      }
    },
    signature(leftHours, leftMins, leftSecs) {
      if (leftHours > 0) {
        this.notYetToSign(leftHours, leftMins, leftSecs);
      } else if (leftHours <= 0) {
        if (leftMins > 30) {
          this.notYetToSign(leftHours, leftMins, leftSecs);
        }
      }
    }
  },
  mounted() {
    axios
      .get("https://zen-nuxt.firebaseio.com/meeting_list.json")
      .then(res => {
        for (let meeting_id in res.data) {
          if (
            //代表未參加或是還沒簽到
            res.data[meeting_id].mode == "notYetSign"
          ) {
            this.diffOfNowAndMeeting(meeting_id, res.data[meeting_id]);
          }
          this.meeting_list.push(res.data[meeting_id]);
        }
      })
      .catch(e => console.log(e));
  }
};
</script>

<style scoped>
</style>
