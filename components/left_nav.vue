<template>
  <!-- left menu starts -->
  <div class="col-sm-2 col-lg-2">
    <div class="sidebar-nav">
      <div class="nav-canvas">
        <div class="nav-sm nav nav-stacked"></div>
        <ul class="nav nav-pills nav-stacked main-menu">
          <li class="nav-header">選單</li>
          <li>
            <nuxt-link class="ajax-link" to="home">
              <i class="glyphicon glyphicon-home"></i>
              <span>主頁面</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="ajax-link" to="calender">
              <i class="glyphicon glyphicon-calendar"></i>
              <span>行事曆</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="ajax-link" to="signature">
              <i class="glyphicon glyphicon-edit"></i>
              <span>會議簽到</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="ajax-link" to="central-org">
              <i class="glyphicon glyphicon-bookmark"></i>
              <span>中區組織</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="ajax-link" to="dataq">
              <i class="glyphicon glyphicon-list-alt"></i>
              <span>歷屆資料</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="ajax-link" to="faq">
              <i class="glyphicon glyphicon-question-sign"></i>
              <span>Q&A</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="ajax-link" to="member-data">
              <i class="glyphicon glyphicon-user"></i>
              <span>社員資料</span>
            </nuxt-link>
          </li>

          <li class="nav-header">各組別功能表</li>

          <!-- <li class="accordion"> -->
          <li class="">
            <a href="#">
              <i class="glyphicon glyphicon-plus"></i>
              <span>活動系統</span>
            </a>
            <ul class="nav nav-pills nav-stacked">
              <li>
                <nuxt-link to="activity-enroll">&nbsp;&nbsp;&nbsp;活動報名系統</nuxt-link>
              </li>
              <li>
                <a href="plan-car">&nbsp;&nbsp;&nbsp;派車系統</a>
              </li>
            </ul>
          </li>
          <!-- <li class="accordion"> -->
          <li class="">
            <a href="#">
              <i class="glyphicon glyphicon-align-justify"></i>
              <span>系統管理</span>
            </a>
            <ul class="nav nav-pills nav-stacked">
              <li>
                <a href="register">&nbsp;&nbsp;&nbsp;註冊系統</a>
              </li>
              <li>
                <a href="account">&nbsp;&nbsp;&nbsp;帳號管理</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- left menu ends -->
</template>
