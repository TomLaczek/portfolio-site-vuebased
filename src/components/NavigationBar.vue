<template>
    <div id="navigationBar">
        <v-app-bar flat color="white">
            <v-container>
                <v-row no-gutters class="justify-center">
                    <v-col cols="12" xs="6" class="">
                        <v-row class="justify-start align-center mt-5">
                            <div>
                                <v-img max-width="50px" v-if="!isMobile" @click="go('projects')" :src="laczekLogo"></v-img>
                            </div>
                            <v-spacer></v-spacer>
                            <div>
                                <a class="mx-1 caption" href='https://github.com/TomLaczek' >GitHub</a>
                                <a class="mx-1 caption" href='https://github.com/TomLaczek'>LinkedIn</a>
                            </div>
                        </v-row>
                    </v-col>
                    <v-col cols="12" sm="12" v-if="!isMobile">
                        <v-row class="justify-center" wrap no-gutters>
                            <div class="mx-3 underline" v-for="(item,index) in navigationPanel" :key="index">
                                <router-link class="headline" :to="item.link">{{ item.name }}</router-link>
                            </div>
                        </v-row>   
                    </v-col>
                    <v-col cols="12" sm="12" v-if="isMobile">
                        <v-row class="justify-center align-center" wrap no-gutters temporary>
                             <v-img max-width="60px" @click="go('projects')" :src="laczekLogo"></v-img>
                             <v-spacer></v-spacer>
                            <v-btn fab outlined @click="mobileMenu = !mobileMenu">
                                <v-icon>menu</v-icon>
                            </v-btn>
                        </v-row>   
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer app width="70%" v-model="mobileMenu">
            <v-btn @click="mobileMenu=!mobileMenu" fab absolute small outlined right class="mt-4">
                <v-icon>fa-angle-double-left</v-icon>
            </v-btn>
            <v-list class="justify-center">
                <v-list-item v-for="(item,index) in navigationPanel" :key="index">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                </v-list-item>
            </v-list>
        </v-navigation-drawer> 
    </div>
</template>
<script>
export default {
    name:'navigationbar',
    data(){
        return{
            mobileMenu:false,
            isMobile:true,
            navigationPanel:[
                {name:'Projekty', link:'/'},
                {name:'Portfolio', link:'portfolio'},
                {name:'O mnie', link:'about'},
                {name:'Kontakt', link:'contact'},
            ],
            laczekLogo: require("../assets/logos/logo.png")
        }
    },
    beforeDestroy () {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.onResize, { passive: true })
      }
    },

    mounted () {
      this.onResize()
      window.addEventListener('resize', this.onResize, { passive: true })
    },

    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 600
      },
      go(adress){
          this.$router.push({name:adress});
      }
    },
}
</script>
<style>
    .underline{
        width:120px;
        border-bottom: 1px solid #000;
    }
    .v-application a{
        color: #000 !important;
        text-decoration:none;
    }
    a:active, a:hover {
        text-shadow: 1px 1px black;
    }
</style>