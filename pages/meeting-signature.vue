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
            <nuxt-link to="/signature">會議簽到</nuxt-link>
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
                                      {{meetinglist.sign_time}}
                                    </div>
                                    <div class="onTime" v-else-if="meetinglist.mode=='onTime'">已簽到
                                      <br>
                                      {{meetinglist.sign_time}}
                                    </div>
                                    <div
                                      class="notYetSign"
                                      v-else-if="meetinglist.mode=='notYetSign'"
                                    >
                                      <button
                                        class="btn btn-danger btn-sm"
                                        @click="changeMode('sign',key,meetinglist)"
                                      >
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
      meeting_list: {},
      mode: ""
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
    axios
      .get("https://zen-nuxt.firebaseio.com/meeting_list.json")
      .then(res => {
        for (let meeting_id in res.data) {
          if (
            //代表未參加或是還沒簽到
            res.data[meeting_id].mode == "notYetSign"
          ) {
            this.changeMode("absent", meeting_id, res.data[meeting_id]);
          }
        }
        this.meeting_list = res.data;
      })
      .catch(e => console.log(e));
  },
  methods: {
    getMeetingLen() {
      this.meeting_list_len = Object.keys(this.meeting_list).length;
    },
    changeMode(action, id, meeting) {
      axios
        .get("https://zen-nuxt.firebaseio.com/meeting_list/" + id + ".json")
        .then(res => {
          var start = res.data.date + " " + res.data.start_time;
          var end = res.data.date + " " + res.data.end_time;
          var meeting_start = new Date(start).getTime();
          var meeting_end = new Date(end).getTime();

          var now = new Date().getTime();

          /** 計算會議時間  start**/

          if (res.data.mode == "notYetSign") {
            //標示未參加
            if (now > meeting_end) {
              meeting.mode = "absent";
              axios.put(
                "https://zen-nuxt.firebaseio.com/meeting_list/" +
                  id +
                  ".json?auth=" +
                  Cookie.get("jwt"),
                meeting
              );
            }
            //會議前三十分鐘才可以簽到
            else if (action == "sign") {
              let newTime = new Date();
              let meetingSignTime =
                newTime.getFullYear() +
                "/" +
                (newTime.getMonth() + 1) +
                "/" +
                newTime.getDate() +
                " " +
                newTime.getHours() +
                ":" +
                newTime.getMinutes() +
                ":" +
                newTime.getSeconds();
              if ((meeting_start - now) / 60000 > 30) {
                var hour = Math.floor((meeting_start - now) / 3600000);
                var min = Math.round((meeting_start - now) / 60000 - hour * 60);
                alert(
                  "會議前三十分鐘才可進行簽到。\n距離此會議還有" +
                    hour +
                    "小時" +
                    min +
                    "分。"
                );
              } else if (
                (meeting_start - now) / 60000 < 30 &&
                (meeting_start - now) / 60000 >= 0
              ) {
                meeting.mode = "onTime";

                meeting.sign_time = meetingSignTime;
                alert("已簽到。\n簽到時間：" + meeting.sign_time);
                axios.put(
                  "https://zen-nuxt.firebaseio.com/meeting_list/" +
                    id +
                    ".json?auth=" +
                    Cookie.get("jwt"),
                  meeting
                );
              } else if (now > meeting_start && now < meeting_end) {
                meeting.mode = "late";
                meeting.sign_time = meetingSignTime;
                alert("已簽到。\n簽到時間：" + meeting.sign_time);
                axios.put(
                  "https://zen-nuxt.firebaseio.com/meeting_list/" +
                    id +
                    ".json?auth=" +
                    Cookie.get("jwt"),
                  meeting
                );
              }

              var list = {
                name: Cookie.get("admName"),
                fahao: Cookie.get("admFahao"),
                school: Cookie.get("admShool"),
                cadre: Cookie.get("admCadre"),
                department: Cookie.get("admDepartment"),
                grade: Cookie.get("admGrade"),
                meeting_id: id,
                sign_time: meetingSignTime
              };

              axios.post(
                  "https://zen-nuxt.firebaseio.com/meeting_member_list.json?auth=" +
                    Cookie.get("jwt"),
                  list
                );
            }
          }

          /** 計算會議時間  eno **/
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
    signature(id, meeting) {
      this.diffOfNowAndMeeting(false, id, meeting);
      if (this.leftHours > 0) {
        this.notYetToSign(this.leftHours, this.leftMins, this.leftSecs);
      } else if (this.leftHours <= 0) {
        if (this.leftMins > 30) {
          this.notYetToSign(this.leftHours, this.leftMins, this.leftSecs);
        } else if (this.leftMins <= 30 || this.rightHours >= 0) {
          if (this.leftMins <= 30 && this.leftMins > 0) {
            meeting.mode = "onTime";
            meeting.sign_time = new Date();
            axios
              .put(
                "https://zen-nuxt.firebaseio.com/meeting_list/" +
                  id +
                  ".json?auth=" +
                  Cookie.get("jwt"),
                meeting
              )
              .then(() => {});
          } else if (this.leftMins == 0 && this.rightHours >= 0) {
            if (this.rightMins >= 0) {
              if (this.rightSecs > 0) {
                meeting.mode = "late";
                meeting.sign_time = new Date();
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
            }
          }
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
 