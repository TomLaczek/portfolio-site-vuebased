<template>
  <div class="projects">
    <v-container>
      <v-row class="justify-center">
        <h1>Kilka moich projektów</h1>
      </v-row>
 
      <v-row class="justify-center ma-2 pb-3">
      <!-- todo -->
        <v-col cols="12" sm="12" md="4">
          <v-card elevation="8">
            <v-card-title>
              <v-row class="justify-center">
                <h2>ToDo</h2>
              </v-row>
            </v-card-title>
            <v-carousel
              :continuous="true"
              :cycle="true"
              :show-arrows="false"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
              height="250"
            >
              <v-carousel-item
                v-for="(slide, i) in toSlides"
                :key="i"
              >
                <v-img :src="slide.src"></v-img>
              </v-carousel-item>
            </v-carousel>
            <v-card-text>
              Front do aplikacji typu ToDo. Tchnologie wykorzystane to HTML,CSS,JS,VUE.
            </v-card-text>
            <v-card-actions>
              <v-row class="justify-end" no-gutters>
                <a href="https://todo.laczek.com">
                  <v-btn text outlined>
                    <span>Sprawdź</span>
                    <v-icon right>fa-angle-double-right</v-icon>
                  </v-btn>
                </a>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "projects",
  components: {
  },
  data() {
    return {
      toSlides: [
          {
            src: require('../assets/images/todo/todo-1.png'),
          },
          {
            src: require('../assets/images/todo/todo-2.png'),
          },
          {
            src: require('../assets/images/todo/todo-3.png'),
          },

        ],
    }
  }
};
</script>
