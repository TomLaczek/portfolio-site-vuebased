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
      <v-row class="justify-center align-center mb-2 pb-3">
        <v-col cols="12" xs="12">
          <pdf :src="tomsCv"></pdf>
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
            tomsCv: '../../yoursCV.pdf'
        }
  }
}
</script>
