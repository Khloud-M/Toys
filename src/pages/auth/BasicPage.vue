<template>
  <section class="auth_page">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.png" width="90" height="90" />
      </router-link>
    </div>
    <!-- logo-->
    <div class="container">
      <div
        class="row"
       
      >
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>
