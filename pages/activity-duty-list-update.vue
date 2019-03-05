<template>
  <div>
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <a href="">中區禪悅社</a>
          </li>
          <li>
            <a href="activity-duty-list.php">執事表列表</a>
          </li>
          <li>
            <a href="">更新執事表</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-refresh"></i> 更新執事表
              </h2>
            </div>
            <!-- <button onclick="meetingForm();"></button> -->
            <form role="form" method="POST">
              <div class="box-content">
                <h4>活動資訊</h4>
                <br>

                <div class="input-group col-md-3">
                  <label>活動名稱</label>
                  <input
                    name="form_activity_name"
                    id="form_activity_name"
                    type="text"
                    class="form-control"
                    value="<?php echo $activity_name;?>"
                    readonly="readonly"
                  >
                </div>
                <br>

                <div class="input-group col-md-3">
                  <label>活動日期</label>
                  <input
                    name="form_activity_date"
                    id="form_activity_date"
                    type="text"
                    class="form-control"
                    value="<?php echo $activity_date;?>"
                  >
                </div>
                <br>

                <div class="input-group col-md-3">
                  <label>活動地點</label>
                  <input
                    name="form_activity_place"
                    id="form_activity_place"
                    type="text"
                    class="form-control"
                    value="<?php echo $activity_place;?>"
                  >
                </div>
                <br>
                <hr>
                <h4>執事分配</h4>
                <br>

                <div class="input-group col-md-3">
                  <label>總召集人</label>
                  <input
                    name="form_activity_convener"
                    id="form_activity_convener"
                    type="text"
                    class="form-control"
                    value="<?php echo $activity_convener;?>"
                  >
                </div>
                <br>

                <div class="input-group col-md-3">
                  <label>副召集人</label>
                  <input
                    name="form_activity_second_convener"
                    id="form_activity_second_convener"
                    type="ivity_text"
                    class="form-control"
                    value="<?php echo $activity_second_convener;?>"
                  >
                </div>
                <br>

                <div class="input-group col-md-3">
                  <label>執行秘書</label>
                  <input
                    name="execute_secretary"
                    id="execute_secretary"
                    type="text"
                    class="form-control"
                    value="<?php echo $execute_secretary;?>"
                  >
                </div>
                <br>

                <div class="input-group col-md-3">
                  <label>活動組</label>
                  <br>
                  <textarea class="autogrow" name="group_activity" id="group_activity"><?php echo $group_activity;?></textarea>
                </div>
                <br>

                <div class="input-group col-md-3">
                  <label>總務組</label>
                  <br>
                  <textarea class="autogrow" name="group_equipment" id="group_equipment"><?php echo $group_equipment;?></textarea>
                </div>
                <br>

                <div class="input-group col-md-3">
                  <label>美宣組</label>
                  <br>
                  <textarea class="autogrow" name="group_art" id="group_art"><?php echo $group_art;?></textarea>
                </div>
                <br>

                <div class="input-group col-md-3">
                  <label>生輔組</label>
                  <br>
                  <textarea class="autogrow" name="group_life" id="group_life"><?php echo $group_life;?></textarea>
                </div>
                <br>

                <div class="input-group col-md-3">
                  <label>資料組</label>
                  <br>
                  <textarea class="autogrow" name="group_data" id="group_data"><?php echo $group_data;?></textarea>
                </div>
                <br>

                <input name="action" type="hidden" id="action" value="update">
                <button type="reset" class="btn btn-default">清除</button>&emsp;&emsp;&emsp;&emsp;
                <button type="submit" class="btn btn-default">更新</button>
              </div>
            </form>
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
export default {
  name: "app",
  data() {
    return {};
  },
  layout: "fun_page"
};
</script>

<style>
</style>
