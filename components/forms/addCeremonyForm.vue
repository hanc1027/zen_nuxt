<template>
  <div class="row">
    <div class="box col-md-12">
      <div class="box-inner">
        <div class="box-header well" data-original-title>
          <h2>
            <i class="glyphicon glyphicon-cog"></i> 法訊新增
          </h2>
        </div>
        <!-- <button onclick="meetingForm();"></button> -->
        <form role="form" @submit.prevent="onSave">
          <div class="box-content">
            <br>
            <div class="input-group col-md-3">
              <span class="input-group-addon">
                <b>
                  <i style="color:rgb(214, 180, 10)">法會名稱</i>
                </b>
              </span>
              <input
                name="me_name"
                id="me_name"
                type="text"
                class="form-control"
                v-model="editedCeremony.name"
                placeholder="Name"
              >
            </div>
            <br>

            <div class="input-group col-md-3">
              <span class="input-group-addon">
                <b>
                  <i style="color:rgb(214, 180, 10)">法會地點</i>
                </b>
              </span>
              <input
                name="me_place"
                id="me_place"
                type="text"
                class="form-control"
                v-model="editedCeremony.place"
                placeholder="Place"
              >
            </div>
            <br>

            <div class="input-group col-md-4">
              <span class="input-group-addon">
                <b>
                  <i style="color:rgb(214, 180, 10)">法會日期</i>
                </b>
              </span>
              <input name="me_date" id="me_date" type="date" v-model="editedCeremony.date">
            </div>
            <br>

            <div class="input-group col-md-4">
              <span class="input-group-addon">
                <b>
                  <i style="color:rgb(214, 180, 10)">開始時間</i>
                </b>
              </span>
              <input
                name="me_start_time"
                id="me_start_time"
                type="time"
                v-model="editedCeremony.start_time"
              >
            </div>
            <br>

            <div class="input-group col-md-4">
              <span class="input-group-addon">
                <b>
                  <i style="color:rgb(214, 180, 10)">結束時間</i>
                </b>
              </span>
              <input
                name="me_end_time"
                id="me_end_time"
                type="time"
                v-model="editedCeremony.end_time"
              >
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
  head() {
    return {
      script: [{ src: "js/signature.js" }]
    };
  },
  props: {
    add_act_list: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedCeremony: this.add_act_list
        ? { ...this.add_act_list }
        : {
            name: "",
            place: "",
            date: "",
            start_time: "",
            end_time: "",
            who_add: ""
          }
    };
  },
  methods: {
    onSave() {
      if (!formCheck(ceremony)) {
        return false;
      } else {
        // Save the post
        this.$emit("submit", this.editedCeremony);
      }
    }
  }
};
</script>
