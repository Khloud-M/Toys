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
      <div class="mobile_Screen">
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <div class="bars_icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
            <div class="dropdown mt-3">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- mobile Screen -->
    </div>
    <!-- container -->
  </section>
</template>
<script>
import LargeScreen from "@/components/Header/LargeScreen.vue";
// import TheCart from "@/components/Cart/TheCart.vue";
export default {
  components: {
    LargeScreen,
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
  .mobile_Screen {
    display: none;
  }
}
@media (max-width: 1200px) {
  .large_sreen {
    display: none;
  }
  .mobile_Screen {
    display: block;
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

