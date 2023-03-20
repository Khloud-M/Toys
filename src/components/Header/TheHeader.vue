<template>
  <section class="header">
    <div class="container d-flex">
      <div class="logo">
        <router-link to="/">
          <img
            src="@/assets/images/logo.png"
            alt="logo"
            width="120"
            height="120"
          />
        </router-link>
      </div>
      <!-- logo -->
      <large-screen class="large_sreen col-lg-10" />

      <!-- mobile Screen -->
    </div>
    <!-- container -->
  </section>
</template>
<script>

import LargeScreen from "@/components/Header/LargeScreen.vue";
// import TheCart from "@/components/Cart/TheCart.vue";
export default {
  components:
  { LargeScreen,
    //  TheCart
     },
};
</script>
<style lang="scss" >
.header {
  .container {
    justify-content: space-between;
    align-items: center;
  }
  padding: var(--padding) 0;
  font-size: 15px;
  background-color: white;
  border-radius: 0px 0px 20px 20px;
  border: 2px solid white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  a {
    text-transform: capitalize;
  }
  .v-icon {
    color: #dadada;
    cursor: pointer;
  }
  .v-badge__badge {
    background: #fff6cd !important;
    bottom: -10px !important ;
    left: calc(100% - 12px);
  }
  .v-theme--light {
    --v-theme-surface-variant: none !important;
  }
}

// media screen
@media (min-width: 1201px) {
  .phone {
    display: none;
  }
}
@media (max-width: 1200px) {
  .large_sreen {
    display: none;
  }
  .phone {
    display: block;
  }
  .mobile_screan {
    display: flex;
    justify-content: flex-end;
    .bars_icon {
      display: flex;
      flex-direction: column;
      gap: 7px;
      background-color: #fff6cd;
      padding: 12px;
      border-radius: 7px;
      span {
        width: 25px;
        height: 1px;
        background-color: var(--main-color);
      }
    }
    // end bars_icon
    .SideBar_Mob {
      background-color: rgb(0, 0, 0, 0.6);
      position: fixed;
      top: 0;
      right: 0%;
      width: 100%;
      height: 100vh;
      z-index: 9999999;
      .container_mob {
        background-color: white;
        height: 100%;
        width: 45%;
        padding: 30px;
        position: relative;
        .header_mob {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .v-icon {
            transition: all 0.3 ease-in-out;
            padding: 15px;
            color: var(--main-color);
            &:hover {
              border: 1px solid var(--color-yellow);
              border-radius: 8px;
            }
          }
        }
      }
    }
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease-in-out;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-150%);
}
.mobile-nav-enter-to {
  transform: translateX(0%);
}
</style>

