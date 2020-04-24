<template>
  <div class="portfolio">
    <v-container>
      <v-row class="justify-center align-center">
        <h1>Moje CV</h1>
      </v-row>
      <v-row class="justify-center align-center mt-2 pt-2">
          <a class="mx-auto" :href="tomsCv" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
            <v-btn text outlined>
              <span>Pobierz CV</span>
              <v-icon right>fa-file-pdf-o</v-icon>
            </v-btn>
          </a>
      </v-row>
      <v-row class="justify-center align-center mt-1 pt-1">
        <v-col cols="12" sm="4">
          <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            rounded
            color="grey darken-2"
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
      <v-row class="justify-center align-center mb-2 pb-3">
        <v-col cols="12" sm="10" offset-sm-1>
          <pdf :src="tomsCv" @loaded="loading=false"></pdf>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
    name:'portfolio',
    components: {
        pdf
    },
    data() {
        return {
            loading:true,
            tomsCv: '../../yoursCV.pdf'
        }
  }
}
</script>
