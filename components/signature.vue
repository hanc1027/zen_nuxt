<template>
  <div>
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
        <ul class="breadcrumb">
          <li>
            <a href="#">中區禪悅社</a>
          </li>
          <li>
            <a href="#">會議簽到</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
            <div class="box-header well" data-original-title>
              <h2>
                <i class="glyphicon glyphicon-edit"></i> 會議簽到
              </h2>
            </div>
            <div class="box-content">
              <nuxt-link class="btn btn-success" to="meeting-set">
                <i class="glyphicon glyphicon-cog"></i> 會議新增
              </nuxt-link>
              <nuxt-link class="btn btn-warning" to="signature-list">
                <i class="glyphicon glyphicon-list-alt"></i> 會議簽到狀況
              </nuxt-link>
              <nuxt-link class="btn btn-primary" to="meeting-signature">
                <i class="glyphicon glyphicon-ok"></i> 幹部簽到
              </nuxt-link>
            </div>
          </div>
        </div>
        <!--/span-->
      </div>
      <!--/row-->
    </div>
  </div>
</template>