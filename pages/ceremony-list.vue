<template>
  <div>
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <nuxt-link to="/home">中區禪悅社</nuxt-link>
          </li>
          <li>
            <a href>法會列表</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-list-alt"></i> 法會列表
              </h2>
            </div>
            <div class="box-content">
              <nuxt-link class="btn btn-default btn-sm" to="add-ceremony">
                <i class="glyphicon glyphicon-plus"></i> 新增法訊
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
                              <th width="10%" bgcolor="#CCCCCC">&nbsp;</th>
                              <th width="13%" bgcolor="#CCCCCC">
                                <p>法會名稱</p>
                              </th>
                              <th width="13%" bgcolor="#CCCCCC">
                                <p>法會地點</p>
                              </th>
                              <th width="13%" bgcolor="#CCCCCC">
                                <p>法會日期</p>
                              </th>
                              <th width="13%" bgcolor="#CCCCCC">
                                <p>開始時間</p>
                              </th>
                              <th width="13%" bgcolor="#CCCCCC">
                                <p>結束時間</p>
                              </th>
                            </tr>

                            <tr v-for="(cer_list,key) in ceremony_list" :id="key">
                              <td width="10%" align="center" bgcolor="#FFFFFF">
                                <p>
                                  <nuxt-link :to="{path:'ceremony-list-update',query:{id:key}}">修改</nuxt-link>
                                  <br>
                                  <a href @click="deleteActivity(key)">刪除</a>
                                </p>
                              </td>
                              <td width="13%" align="center" bgcolor="#FFFFFF">
                                <p>{{cer_list.name}}</p>
                              </td>
                              <td width="13%" align="center" bgcolor="#FFFFFF">
                                <p>{{cer_list.place}}</p>
                              </td>
                              <td width="13%" align="center" bgcolor="#FFFFFF">
                                <p>{{cer_list.date}}</p>
                              </td>
                              <td width="13%" align="center" bgcolor="#FFFFFF">
                                <p>{{cer_list.start_time}}</p>
                              </td>
                              <td width="13%" align="center" bgcolor="#FFFFFF">
                                <p>{{cer_list.end_time}}</p>
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
                                <p>法會總數：{{ceremony_list_len}}</p>
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
export default {
  name: "app",
  layout: "fun_page",
   data(){
    return{
      ceremony_list_len:""
    }
  },
  asyncData(context) {
    return axios
      .get("https://zen-nuxt.firebaseio.com/ceremony_list.json")
      .then(res => {
        return {
          ceremony_list: res.data
        };
      })
      .catch(e => context.error(e));
  },
  methods: {
    deleteActivity(dataId) {
      var confirmDel = confirm(
        "您確定要刪除這個法訊嗎?\n若確定刪除，則無法恢復"
      );
      if (confirmDel) {
       this.$store.dispatch("delete_ceremony", dataId);
      }
    }
  },
  mounted() {
    this.ceremony_list_len = Object.keys(this.ceremony_list).length;
  },
};
</script>

<style>
</style>