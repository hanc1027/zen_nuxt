<template>
  <div class="row">
    <div class="box col-md-12">
      <div class="box-inner">
        <div class="box-header well" data-original-title>
          <h2>
            <i class="glyphicon glyphicon-cog"></i> 活動新增
          </h2>
        </div>
        <!-- <button onclick="meetingForm();"></button> -->
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
                name="me_name"
                id="me_name"
                type="text"
                class="form-control"
                placeholder="Activity_Name"
                v-model="edited_list.name"
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
                name="me_place"
                id="me_place"
                type="text"
                class="form-control"
                placeholder="Activity_Place"
                v-model="edited_list.place"
              >
            </div>
            <br>

            <div class="input-group col-md-4">
              <span class="input-group-addon">
                <b>
                  <i style="color:rgb(25, 156, 150)">活動日期</i>
                </b>
              </span>
              <input name="me_date" id="me_date" type="date" v-model="edited_list.date">
            </div>
            <br>

            <div class="input-group col-md-4">
              <span class="input-group-addon">
                <b>
                  <i style="color:rgb(25, 156, 150)">活動開始時間</i>
                </b>
              </span>
              <input name="me_start_time" id="me_start_time" type="time" v-model="edited_list.start_time">
            </div>
            <br>

            <div class="input-group col-md-4">
              <span class="input-group-addon">
                <b>
                  <i style="color:rgb(25, 156, 150)">活動結束時間</i>
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
</template>

<script>
export default {
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
            who_add:""
          }
    };
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submit', this.edited_list)
    }
  }
};
</script>
