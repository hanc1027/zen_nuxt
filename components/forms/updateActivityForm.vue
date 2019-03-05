<template>
  <div>
    <div class="row">
      <div class="box col-md-12">
        <div class="box-inner">
          <div class="box-header well" data-original-title>
            <h2>
              <i class="glyphicon glyphicon-refresh"></i> 活動更新
            </h2>
          </div>
          <form role="form" @submit.prevent="onSave">
            <div class="box-content">
              <br>
              <div class="input-group col-md-3">
                <span class="input-group-addon">
                  <b>
                    <i style="color:rgb(25, 156, 150)">活動名稱</i>
                  </b>
                </span>
                <input
                  name="new_name"
                  id="me_name"
                  type="text"
                  class="form-control"
                  v-model="editedActivity.name"
                >
              </div>
              <br>

              <div class="input-group col-md-3">
                <span class="input-group-addon">
                  <b>
                    <i style="color:rgb(25, 156, 150)">活動地點</i>
                  </b>
                </span>
                <input
                  name="new_place"
                  id="me_place"
                  type="text"
                  class="form-control"
                  v-model="editedActivity.place"
                >
              </div>
              <br>

              <div class="input-group col-md-4">
                <span class="input-group-addon">
                  <b>
                    <i style="color:rgb(25, 156, 150)">活動日期</i>
                  </b>
                </span>
                <input name="new_date" id="me_date" type="date"  v-model="editedActivity.date">
              </div>
              <br>

              <div class="input-group col-md-4">
                <span class="input-group-addon">
                  <b>
                    <i style="color:rgb(25, 156, 150)">開始時間</i>
                  </b>
                </span>
                <input
                  name="new_start_time"
                  id="me_start_time"
                  type="time"
                  v-model="editedActivity.start_time"
                >
              </div>
              <br>

              <div class="input-group col-md-4">
                <span class="input-group-addon">
                  <b>
                    <i style="color:rgb(25, 156, 150)">結束時間</i>
                  </b>
                </span>
                <input
                  name="new_end_time"
                  id="me_end_time"
                  type="time"
                  v-model="editedActivity.end_time"
                >
              </div>
              <br>

              <input name="new_id" type="hidden" id="m_id" value="<?php echo $_GET['id'];?>">
              <input name="action" type="hidden" id="action" value="update">
              <button type="submit" class="btn btn-default">更新</button>
            </div>
          </form>
        </div>
      </div>
      <!--/span-->
    </div>
    <!--/row-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  head() {
    return {
      script: [{ src: "js/signature.js" }]
    };
  },
  props: {
    update_activity_list: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedActivity: this.update_activity_list
        ? { ...this.update_activity_list }
        : {
            name: "",
            place: "",
            date: "",
            start_time: "",
            end_time: "",
            people_num: "",
            who_add: ""
          }
    };
  },
  methods: {
    onSave() {
      if (!formCheck(activity)) {
        return false;
      } else {
        // Save the post
        this.$emit("submit", this.editedActivity);
      }
    }
  }
};
</script>
