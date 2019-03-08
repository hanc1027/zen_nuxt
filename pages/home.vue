<template>
  <div id="app">
      <div class="row col-lg-10 col-sm-10">
      <div class="col-md-3 col-sm-3 col-xs-6">
        <a
          data-toggle="tooltip"
          :title="'學校 -> ' + admin_list[0].school"
          class="well top-block"
          href=""
        >
          <i class="glyphicon glyphicon-flag blue"></i>

          <div style="color:rgba(96, 96, 228, 0.938)">學校名稱</div>
          <div>{{admin_list[0].school}}</div>
        </a>
      </div>

      <div class="col-md-3 col-sm-3 col-xs-6">
        <a
          data-toggle="tooltip"
          :title="'系級 -> ' + admin_list[0].department+admin_list[0].grade"
          class="well top-block"
          href=""
        >
          <i class="glyphicon glyphicon-star green"></i>

          <div style="color:green">系級</div>
          <div>{{admin_list[0].department}}{{admin_list[0].grade}}</div>
        </a>
      </div>

      <div class="col-md-3 col-sm-3 col-xs-6">
        <a
          data-toggle="tooltip"
          :title="'職別 -> ' + admin_list[0].cadre"
          class="well top-block"
          href=""
        >
          <i class="glyphicon glyphicon-leaf yellow"></i>

          <div style="color:orange">校內幹部職別</div>
          <div>{{admin_list[0].cadre}}</div>
        </a>
      </div>

      <div class="col-md-3 col-sm-3 col-xs-6">
        <a
          data-toggle="tooltip"
          :title="'組別 -> ' + admin_list[0].group1 + ' ' +admin_list[0].group2 "
          class="well top-block"
          href=""
        >
          <i class="glyphicon glyphicon-briefcase red"></i>

          <div style="color:red">中區組別</div>
          <div v-if="admin_list[0].group2 == ''">{{admin_list[0].group1}}</div>
          <div v-else-if="admin_list[0].group2 != ''">{{admin_list[0].group1}} / {{admin_list[0].group2}}</div>
        </a>
      </div>
    </div>

    <div class="row col-lg-10 col-sm-10">
      <div class="box col-md-12">
        <div class="box-inner">
          <div class="box-header well">
            <h2>
              <i class="glyphicon glyphicon-info-sign"></i> 近期會議 / 活動 / 法訊
            </h2>

            <div class="box-icon">
              <a href="" class="btn btn-minimize btn-round btn-default">
                <i class="glyphicon glyphicon-chevron-up"></i>
              </a>
            </div>
          </div>
          <div class="box-content row" style="overflow:scroll;height:400px;">
            <div class="col-lg-6 col-md-12">
              <h2 style="color:rgb(25, 40, 150)">
                <font face="cursive">
                  近期會議
                  <nuxt-link class="btn btn-default btn-sm" to="/meeting-set">
                    <i class="glyphicon glyphicon-plus"></i> 新增會議
                  </nuxt-link>
                  <nuxt-link  class="btn btn-default btn-sm" to="/meeting-signature">
                    <i class="glyphicon glyphicon-list"></i> 幹部簽到
                  </nuxt-link >
                  <nuxt-link  class="btn btn-default btn-sm" to="/signature-list">
                    <i class="glyphicon glyphicon-list"></i> 會議列表
                  </nuxt-link >
                  <br>
                </font>
              </h2>
              <hr>
              <h2 style="color:rgb(25, 156, 150)">
                <font face="cursive">
                  近期活動
                  <nuxt-link class="btn btn-default btn-sm" to="/add-activity">
                    <i class="glyphicon glyphicon-plus"></i> 新增活動
                  </nuxt-link>
                  <nuxt-link to="/activity_list" class="btn btn-default btn-sm">
                    <i class="glyphicon glyphicon-list"></i> 活動列表
                  </nuxt-link>
                  <!-- <nuxt-link class="btn btn-default btn-sm" to="/activity-duty-arrange">
                    <i class="glyphicon glyphicon-plus"></i> 新增執事表
                  </nuxt-link>
                  <nuxt-link class="btn btn-default btn-sm" to="/activity-duty-list">
                    <i class="glyphicon glyphicon-search"></i> 執事表查詢
                  </nuxt-link> -->
                  <br>
                </font>
              </h2>
              <hr>
              <h2 style="color:rgb(214, 180, 10)">
                <font face="cursive">
                  法訊
                  <nuxt-link class="btn btn-default btn-sm" to="/add-ceremony">
                    <i class="glyphicon glyphicon-plus"></i> 新增法訊
                  </nuxt-link>
                  <nuxt-link class="btn btn-default btn-sm" to="/ceremony-list">
                    <i class="glyphicon glyphicon-list"></i> 法訊列表
                  </nuxt-link>
                  <br>
                </font>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// const admRef = firebase.database().ref("/admin_member/0");

export default {
  head:{
    title:"中區禪悅社-首頁"
  },
  name: "app",
  layout:'fun_page',
  asyncData(context) { 
    return axios.get("https://zen-nuxt.firebaseio.com/admin_member.json")
      .then(res => {
        return {
          admin_list: res.data
        };
      })
      .catch(e => context.error(e));
  }
};
</script>

<style>

</style>
