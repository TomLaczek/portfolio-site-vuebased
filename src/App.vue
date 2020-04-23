<template>
  <v-app>
    <NavigationBar class="my-2" />
    <v-content style="" class="pt-4 mb-4">
      <v-container>
        <router-view/>
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
