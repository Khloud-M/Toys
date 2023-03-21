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
              Main List
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <hr />
          <div class="offcanvas-body">
            <div>
              <search-categery class="search_cat" />
            </div>
            <div class="login_cart">
              <router-link to="/:auth">
                <v-icon icon="mdi-account"> </v-icon>
                {{ $t("buttons.signIn") }}</router-link
              >
              <router-link to="/ShoppingCart">
                <v-icon size="27" icon="mdi-shopping-outline"></v-icon>
              </router-link>
            </div>
            <ul>
              <li>
                <router-link to="/">
                  <h3>Main List</h3>
                </router-link>
              </li>
              <li>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </li>
              <li>
                <router-link to="/offer"> {{ $t("navs.offer") }}</router-link>
              </li>
              <li>
                <router-link to="/about"> {{ $t("navs.aboutUs") }}</router-link>
              </li>
              <li>
                <router-link to="/Contact">
                  {{ $t("navs.contactUs") }}</router-link
                >
              </li>
            </ul>
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
import SearchCategery from "./SearchCategery.vue";

export default {
  components: {
    LargeScreen,
    SearchCategery,
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
    .btn-close {
      border: 2px solid var(--color-yellow) !important;
      padding: 10px;
      border-radius: 5px;
    }
    .btn-close:focus {
      box-shadow: 0 0 0 0rem;
    }
    .offcanvas-body {
      display: flex;
      flex-direction: column;
      row-gap: 15px;
      .search_cat {
        width: 100% !important;
      }
      .login_cart {
        display: flex;
        flex-direction: row;
        column-gap: 10px;
        align-items: center;
      }
    }
  }
}
</style>

