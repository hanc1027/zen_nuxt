import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedLists: []
    },
    mutations: {
      setPosts(state, lists) {
        state.loadedLists = lists;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://zen-nuxt.firebaseio.com/activity_list.json')
          .then(res => {
            const listsArray = []
            for (const key in res.data) {
              listsArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setLists', listsArray)
          })
          .catch(e => context.error(e));
      },
      setLists(vuexContext, lists) {
        vuexContext.commit("setLists", lists);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedLists;
      }
    }
  });
};

export default createStore;
