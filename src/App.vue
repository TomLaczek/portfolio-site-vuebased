<template>
  <v-app>
    <NavigationBar class="my-2" />
    <v-content style="" class="pt-4 mb-4">
      <v-container>
        <transition name="slide-fade" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
    </v-content>
    <FooterBar/>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "App",
  components:{
        NavigationBar,
        FooterBar
  },
  data: () => ({
    //
  })
};
</script>
<style>
  /***TRANSITION***/
  .slide-fade-enter{
    transform: translateX(10px);
    opacity: 0;
  }
  .slide-fade-enter-active,
  .slide-fade-leave-active{
    transition: all 0.2s ease;
  }
  .slide-fade-leave-to{
    transform: translateX(-10px);
    opacity: 0;
  }
</style>
