<template>
  <div>
    <landing-home />
    <saling-section/>
    <highest-rating />
    <last-add />
    <brand-section />
  </div>
</template>

<script>
import LandingHome from "@/components/Home/LandingHome.vue";
import BrandSection from "@/components/Home/BrandSection.vue";
// import ProductDetails from "@/pages/ProductDetails.vue";
import SalingSection from '@/components/Home/SalingSection.vue';
import HighestRating from '@/components/Home/HighestRating.vue';
import LastAdd from '@/components/Home/LastAdd.vue';
// import axios from "axios";

export default {
  components: { LandingHome, BrandSection, SalingSection, HighestRating, LastAdd },
  data() {
    return {
      data: null,
    };
  },
  // created() {
  //   this.getdata();
  // },
  // methods: {
  //   getdata() {
  //     this.axios({
  //       method: "GET",
  //       url: "brands",
  //     })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log("thiserrr");
  //         console.log(err);
  //       });
  //   },
  // },
};
</script>

<style>
</style>
