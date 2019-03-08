import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedLists: [],
      token: null
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
      }
    },
    actions: {
      addMeeting(vuexContext, meeting) {
        const createdMeeting = {
          ...meeting,
          updatedDate: new Date()
        };
        axios
          .post("https://zen-nuxt.firebaseio.com/meeting_list.json?auth=" + vuexContext.state.token,
            createdMeeting)
          .then(() => {
            alert("會議已新增！");
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
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
          process.env.fbAPIKey;
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
            localStorage.setItem("token", result.idToken);
            localStorage.setItem(
              "tokenExpiration", //expiresIn是firebase email auth原本的參數
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
            Cookie.set("jwt", result.idToken)
            Cookie.set("expirationDate", new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
          })
          .catch(e => console.log(e));
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
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        //expirationDate前的加號為「轉換成數字」用，等同於Number.parseInt() 
        if (new Date().getTime() > +expirationDate || !token) {
          console.log('No token or invalid token');
          //若現在時間大於token的期滿日則清除token
          vuexContext.commit("logout")
          return;
        }

        vuexContext.commit("setToken", token);
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken');
        Cookie.remove('jwt');
        Cookie.remove('expirationDate');
        if (process.clent) {
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiration');
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedLists;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    },

  });
};

export default createStore;
