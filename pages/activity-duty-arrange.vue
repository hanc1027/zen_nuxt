<template>
  <div id="app">
       <div id="content" class="col-lg-10 col-sm-10">
            <!-- content starts -->
        <div>
    <ul class="breadcrumb">
        <li><nuxt-link to="/home">中區禪悅社</nuxt-link><li>
        <li><a href>中區活動執事分配-表格建立</a></li>
    </ul>
</div>

<div class="row">
    <div class="box col-md-12">
        <div class="box-inner">
            <div class="box-header well" data-original-title="">
                <h2><i class="glyphicon glyphicon-cog"></i> 中區活動執事分配-表格建立</h2>
            </div>
            <!-- <button onclick="meetingForm();"></button> -->
            <form role="form" method="POST">
            <div class="box-content">
            <h4>活動資訊</h4><br>
                <div class="input-group col-md-3">
                    <label>活動名稱</label><br>
                    <select name="form_activity_name">
                        <option value=""></option>;
                    </select>
                </div><br>

                <div class="input-group col-md-3">
                    <label>活動日期</label>
                    <input name="form_activity_date" id="form_activity_date" type="text" class="form-control" placeholder="YYYY/mm/dd (星期幾)">
                </div><br>

                <div class="input-group col-md-3">
                    <label>活動地點</label>
                    <input name="form_activity_place" id="form_activity_place" type="text" class="form-control" placeholder="Place">
                </div><br>
                <hr>
                <h4>執事分配</h4><br>
                
                <div class="input-group col-md-3">
                    <label>總召集人</label>
                    <input name="form_activity_convener" id="form_activity_convener" type="text" class="form-control">
                </div><br>
                
                <div class="input-group col-md-3">
                    <label>副召集人</label>
                    <input name="form_activity_second_convener" id="form_activity_second_convener" type="ivity_text" class="form-control">
                </div><br>

                <div class="input-group col-md-3">
                    <label>執行秘書</label>
                    <input name="execute_secretary" id="execute_secretary" type="text" class="form-control">
                </div><br>

                <div class="input-group col-md-3">
                    <label>活動組</label><br>
                    <textarea class="autogrow" name="group_activity" id="group_activity" placeholder="字數150字以內，若沒有請填無。"></textarea>
                </div><br>

                <div class="input-group col-md-3">
                    <label>總務組</label><br>
                    <textarea class="autogrow" name="group_equipment" id="group_equipment" placeholder="字數150字以內，若沒有請填無。"></textarea>
                </div><br>

                <div class="input-group col-md-3">
                    <label>美宣組</label><br>
                    <textarea class="autogrow" name="group_art" id="group_art" placeholder="字數150字以內，若沒有請填無。"></textarea>
                </div><br>

                <div class="input-group col-md-3">
                    <label>生輔組</label><br>
                    <textarea class="autogrow" name="group_life" id="group_life" placeholder="字數150字以內，若沒有請填無。"></textarea>
                </div><br>

                <div class="input-group col-md-3">
                    <label>資料組</label><br>
                    <textarea class="autogrow" name="group_data" id="group_data" placeholder="字數150字以內，若沒有請填無。"></textarea>
                </div><br>

                <input name="action" type="hidden" id="action" value="join">
                <button type="reset" class="btn btn-default">清除</button>&emsp;&emsp;&emsp;&emsp;
                <button type="submit" class="btn btn-default">新增</button>
            </div>
            </form>
        </div>
    </div>
    <!--/span-->
</div><!--/row-->

    </div><!--/#content.col-md-0-->
  </div>
</template>

<script>

export default {
  name: "app",
  data(){
    return{
    }
  },
  layout:'fun_page'
};
</script>

<style>
</style>
