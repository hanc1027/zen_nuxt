<template>
    <div>
        <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-cog"></i> 會議新增
              </h2>
            </div>
            <!-- <button onclick="meetingForm();"></button> -->
            <form role="form" @submit.prevent="onSave">
              <div class="box-content">
                <br>
                <div class="input-group col-md-3">
                  <span class="input-group-addon">
                    <b>
                      <i style="color:rgb(25, 40, 150)">會議名稱</i>
                    </b>
                  </span>
                  <input
                    name="me_name"
                    id="me_name"
                    type="text"
                    class="form-control"
                    placeholder="Meeting Name"
                    v-model="edited_list.name"
                  >
                </div>
                <br>

                <div class="input-group col-md-3">
                  <span class="input-group-addon">
                    <b>
                      <i style="color:rgb(25, 40, 150)">會議地點</i>
                    </b>
                  </span>
                  <input
                    name="me_place"
                    id="me_place"
                    type="text"
                    class="form-control"
                    placeholder="Meeting Place"
                    v-model="edited_list.place"
                  >
                </div>
                <br>

                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <b>
                      <i style="color:rgb(25, 40, 150)">會議日期</i>
                    </b>
                  </span>
                  <input name="me_date" id="me_date" type="date" v-model="edited_list.date">
                </div>
                <br>

                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <b>
                      <i style="color:rgb(25, 40, 150)">開始時間</i>
                    </b>
                  </span>
                  <input name="me_start_time" id="me_start_time" type="time" v-model="edited_list.start_time">
                </div>
                <br>

                <div class="input-group col-md-4">
                  <span class="input-group-addon">
                    <b>
                      <i style="color:rgb(25, 40, 150)">結束時間</i>
                    </b>
                  </span>
                  <input name="me_end_time" id="me_end_time" type="time" v-model="edited_list.end_time">
                </div>
                <br>

                <input name="action" type="hidden" id="action" value="join">
                <button type="submit" class="btn btn-default">新增</button>
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
import Cookie from "js-cookie";

export default {
  head(){
    return{
      script:[
        {src:"js/signature.js"}
      ]
    }
  },
  props: {
    add_act_list: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      edited_list: this.add_act_list
        ? { ...this.add_act_list }
        : {
            name: "",
            place: "",
            date: "",
            start_time: "",
            end_time: "",
            people_num:"",
            who_add:Cookie.get("admName")
          }
    };
  },
  methods: {
    onSave() {
      if(!formCheck(meeting)){
        return false
      } else {
        // Save the post
      this.$emit('submit', this.edited_list)
      }
      
    }
  }
};
</script>
