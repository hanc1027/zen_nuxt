<template>
    <div>
        
        <div id="content" class="col-lg-10 col-sm-10">
            <!-- content starts -->
        <div>
    <ul class="breadcrumb">
        <li><a href="#">中區禪悅社</a></li>
        <li><a href="#">活動列表</a></li>
        <li><a href="#">活動更新</a></li>
    </ul>
</div>

<div class="row">
    <div class="box col-md-12">
        <div class="box-inner">
            <div class="box-header well" data-original-title="">
                <h2><i class="glyphicon glyphicon-refresh"></i> 活動更新</h2>
            </div>
            <form role="form" method="POST" onSubmit="return formCheck(2);">
            <div class="box-content"><br>
                <div class="input-group col-md-3">
                    <span class="input-group-addon"><b><i style="color:rgb(25, 156, 150)">活動名稱</i></b></span>
                    <input name="new_name" id="me_name" type="text" class="form-control" value="<?php echo $activity_name?>">
                </div><br>
                

                <div class="input-group col-md-3">
                    <span class="input-group-addon"><b><i style="color:rgb(25, 156, 150)">活動地點</i></b></span>
                    <input name="new_place" id="me_place" type="text" class="form-control" value="<?php echo $activity_place?>">
                </div><br>

                <div class="input-group col-md-4">
                    <span class="input-group-addon"><b><i style="color:rgb(25, 156, 150)">活動日期</i></b></span>
                    <input name="new_date" id="me_date" type="date" value="<?php echo $activity_date?>">
                </div><br>

                <div class="input-group col-md-4">
                    <span class="input-group-addon"><b><i style="color:rgb(25, 156, 150)">開始時間</i></b></span>
                    <input name="new_start_time" id="me_start_time" type="time" value="<?php echo $activity_start?>">
                </div><br>

                <div class="input-group col-md-4">
                    <span class="input-group-addon"><b><i style="color:rgb(25, 156, 150)">結束時間</i></b></span>
                    <input name="new_end_time" id="me_end_time" type="time" value="<?php echo $activity_end?>">
                </div><br>

                <input name="new_id" type="hidden" id="m_id" value="<?php echo $_GET['id'];?>">
                <input name="action" type="hidden" id="action" value="update">
                <button type="submit" class="btn btn-default">更新</button>
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
  data() {
    return {};
  },
  layout: "fun_page"
};
</script>

<style>
</style>
