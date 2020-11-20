<template>
  <v-app id="inspire">
    <v-carousel
      background-color="black"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-row >
          
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      items: [

        {
          src: "https://aeroland.vuedemo.hasthemes.com/img/startup-bg.27e78f9a.jpg"
        }

      ]
    };
  }
};
</script>

<style lang="scss">
.slider-text {
  margin-right: 10px;
  margin-left: 10px;
}
.slider-text h1 {
  font-family: Montserrat, Helvetica,Arial,sans-serif;
  font-size: 50px;
  line-height: 70px;
  text-transform: capitalize;
  color: #eee;
  font-weight: 800;
  text-align: center;
}
.slider-text p {
  animation: fadeInUp 1s both 1s;
  font-size: 23px;
  color: #eee;
  padding: 0 100px;
  text-align: center;
}
.v-window__next, .v-window__prev, .v-ripple__container, .v-btn--outlined:before,.v-btn--round:before,.v-btn--rounded:before, .v-btn--outlined, .v-btn--round, .v-btn--rounded {
  border-radius: 9px;
}

</style>
