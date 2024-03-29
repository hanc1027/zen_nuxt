import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedLists: [],
      token: null,
      logout: true,
    },
    mutations: {
      // setPosts(state, lists) {
      //   state.loadedLists = lists;
      // },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      },
      setLoginOut(state) {
        state.logout = !state.logout
      },

    },
    actions: {
      addMeeting(vuexContext, meeting) {
        let newTime = new Date();
        const createdMeeting = {
          ...meeting,
          updatedDate: newTime.getFullYear() + "/" + (newTime.getMonth() + 1) + "/" + newTime.getDate() + " " + newTime.getHours() + ":" + newTime.getMinutes() + ":" + newTime.getSeconds(),
        };
        axios
          .post("https://zen-nuxt.firebaseio.com/meeting_list.json?auth=" + vuexContext.state.token,
            createdMeeting)
          .then(() => {
            alert("會議已新增！");
            location.reload();
          })
          .catch(e => console.log(e));
      },
      addActivity(vuexContext, activity) {
        let newTime = new Date();
        const createdActivity = {
          ...activity,
          updatedDate: newTime.getFullYear() + "/" + (newTime.getMonth() + 1) + "/" + newTime.getDate() + " " + newTime.getHours() + ":" + newTime.getMinutes() + ":" + newTime.getSeconds(),
        };
        //axios.post() 新增資料
        axios
          .post("https://zen-nuxt.firebaseio.com/activity_list.json?auth=" + vuexContext.state.token,
            createdActivity)
          .then(() => {
            alert("活動已新增！");
            location.reload();
          })
          .catch(e => console.log(e));
      },
      addCeremony(vuexContext, ceremony) {
        let newTime = new Date();
        const createdCeremony = {
          ...ceremony,
          updatedDate: newTime.getFullYear() + "/" + (newTime.getMonth() + 1) + "/" + newTime.getDate() + " " + newTime.getHours() + ":" + newTime.getMinutes() + ":" + newTime.getSeconds(),
        };
        //axios.post() 新增資料
        axios
          .post("https://zen-nuxt.firebaseio.com/ceremony_list.json?auth=" + vuexContext.state.token,
            createdCeremony)
          .then(() => {
            alert("法訊已新增！");
            location.reload();
          })
          .catch(e => console.log(e));
      },
      editedMeeting(vuexContext, meeting) {
         let newTime = new Date();
        const newMeeting = {
          ...meeting,
          updatedDate: newTime.getFullYear() + "/" + (newTime.getMonth() + 1) + "/" + newTime.getDate() + " " + newTime.getHours() + ":" + newTime.getMinutes() + ":" + newTime.getSeconds(),
        };
        axios
          .put(
            "https://zen-nuxt.firebaseio.com/meeting_list/" +
            meeting.meetingId +
            ".json?auth=" +
            vuexContext.state.token,
            newMeeting
          )
          .then(() => {
            alert("會議已更新！");
            location.reload();
          })
          .catch(e => console.log(e));
      },
      editedActivity(vuexContext, activity) {
        let newTime = new Date();
        const newActivity = {
          ...activity,
          updatedDate: newTime.getFullYear() + "/" + (newTime.getMonth() + 1) + "/" + newTime.getDate() + " " + newTime.getHours() + ":" + newTime.getMinutes() + ":" + newTime.getSeconds(),
        };
        //axios.put() 修改資料
        axios
          .put(
            "https://zen-nuxt.firebaseio.com/activity_list/" +
            activity.activityId +
            ".json?auth=" +
            vuexContext.state.token,
            newActivity
          )
          .then(() => {
            alert("活動已更新！");
            location.reload();
          })
          .catch(e => console.log(e));
      },
      editedCeremony(vuexContext, ceremony) {
        let newTime = new Date();
        const newCeremony = {
          ...ceremony,
          updatedDate: newTime.getFullYear() + "/" + (newTime.getMonth() + 1) + "/" + newTime.getDate() + " " + newTime.getHours() + ":" + newTime.getMinutes() + ":" + newTime.getSeconds(),
        };
        //axios.put() 修改資料
        axios
          .put(
            "https://zen-nuxt.firebaseio.com/ceremony_list/" +
            ceremony.ceremonyId +
            ".json?auth=" +
            vuexContext.state.token,
            newCeremony
          )
          .then(() => {
            alert("法訊已更新！");
            location.reload();
          })
          .catch(e => console.log(e));
      },
      delete_meeting(vuexContext, id) {
        axios
          .delete(
            "https://zen-nuxt.firebaseio.com/meeting_list/" + id + ".json?auth=" +
            vuexContext.state.token
          ).then(() => {
            location.reload();
          })
      },
      delete_activity(vuexContext, id) {
        axios
          .delete(
            "https://zen-nuxt.firebaseio.com/activity_list/" + id + ".json?auth=" +
            vuexContext.state.token
          )
          .then(() => {
            location.reload();
          });
      },
      delete_ceremony(vuexContext, id) {
        axios
          .delete(
            "https://zen-nuxt.firebaseio.com/ceremony_list/" + id + ".json?auth=" +
            vuexContext.state.token
          )
          .then(() => {
            location.reload();
          });
      },
      addMember(vuexContext, memeber) {
        var today = new Date()
        var today_Date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + " "
          + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const createdMember = {
          ...memeber,
          joinDate: today_Date,
        };
        //axios.post() 新增資料
        axios
          .post("https://zen-nuxt.firebaseio.com/admin_member.json?auth=" + vuexContext.state.token,
            createdMember)
          .then(() => {
            alert("幹部已新增！");
            location.reload();
          })
          .catch(e => console.log(e));
      },
      delete_admin(vuexContext, id) {
        axios
          .delete(
            "https://zen-nuxt.firebaseio.com/admin_member/" + id + ".json?auth=" +
            vuexContext.state.token
          )
          .then(() => {
            location.reload();
          });
      },
      editedAccount(vuexContext, account) {
         let newTime = new Date();
        const newaccount = {
          ...account,
          updatedDate: newTime.getFullYear() + "/" + (newTime.getMonth() + 1) + "/" + newTime.getDate() + " " + newTime.getHours() + ":" + newTime.getMinutes() + ":" + newTime.getSeconds(),
        };
        //axios.put() 修改資料
        axios
          .put(
            "https://zen-nuxt.firebaseio.com/admin_member/" +
            account.accountId +
            ".json?auth=" +
            vuexContext.state.token,
            newaccount
          )
          .then(() => {
            alert("帳號已更新！");
            location.reload();
          })
          .catch(e => console.log(e));
      },
      // nuxtServerInit(vuexContext, context) {
      //   return axios.get('https://zen-nuxt.firebaseio.com/activity_list.json')
      //     .then(res => {
      //       const listsArray = []
      //       for (const key in res.data) {
      //         listsArray.push({ ...res.data[key], id: key })
      //       }
      //       vuexContext.commit('setLists', listsArray)
      //     })
      //     .catch(e => context.error(e));
      // },
      // setLists(vuexContext, lists) {
      //   vuexContext.commit("setLists", lists);
      // },
      authenticateUser(vuexContext, authData) {

        let authUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.fbAPIKey;


        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit("setToken", result.idToken);
            //設定客戶端儲存token和token的期滿
            //防止token在每次頁面更新時都會變成null
            /*
            localStorage.setItem("mainEmail", authData.email)
            localStorage.setItem("token", result.idToken);
            localStorage.setItem(
              "tokenExpiration", //expiresIn是firebase email auth原本的參數
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
            //*/
            Cookie.set("mainEmail", authData.email)
            Cookie.set("jwt", result.idToken)
            Cookie.set("expirationDate", new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
          })
          .catch(e => {
              console.log(e.response.data.error.message)
              alert("登入失敗")
          });

      },
      initAuth(vuexContext, req) {
        let token, expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          //從cookie取得兩變數
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];

        } else {
          //從客戶端(localStorage)取得兩變數
          /*
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
          //*/

          token = Cookie.get("jwt")
          expirationDate = Cookie.get("expirationDate")
        }
        //expirationDate前的加號為「轉換成數字」用，等同於Number.parseInt() 
        if (new Date().getTime() >= +expirationDate /*|| !token*/) {
          console.log('No token or invalid token');
          //若現在時間大於token的期滿日則清除token
          vuexContext.dispatch("logout")
          return;
        }

        vuexContext.commit("setToken", token);
        vuexContext.commit("setLoginOut");
      },
      logout(vuexContext) {
        vuexContext.commit("setLoginOut");
        vuexContext.commit('clearToken');

        Cookie.remove('mainEmail');
        Cookie.remove('admId');
        Cookie.remove('admName');
        Cookie.remove('admFahao');
        Cookie.remove('admDepartment');
        Cookie.remove('admGrade');
        Cookie.remove('admSchool');
        Cookie.remove('admCadre');
        Cookie.remove('admGroup1');
        Cookie.remove('admGroup2');
        Cookie.remove('admGroup3');

        Cookie.remove('jwt');
        Cookie.remove('expirationDate');
        /*
        localStorage.removeItem('mainEmail');
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
        //*/
      }
    },
    getters: {
      isAuthenticated(state) {
        return state.token != null;
      },
      yesLogout(state) {
        return state.logout == true;
      },
    },

  });
};

export default createStore;
