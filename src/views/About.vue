<template>
  <div class="about">
    <v-container>
      <v-row class="justify-center align-center">
        <h1>Kilka słów o mnie</h1>
      </v-row>
      <v-row class="justify-center mb-2 pb-3">
        <v-col cols="12" xs="12" md="6">
          <v-img :src="tomasPhoto" max-height="450px" contain></v-img>
        </v-col>
        <v-col cols="12" xs="12" md="6">
          <p>Edukację zakończyłem tytułem magistra inżyniera na kierunku Elektrotechnika. Otrzymanę szansę wykorzystuję w pełni. Wizja na mój dalszy rozwój i kariere wiaże się ściśle z branża IT oraz tworzeniem i realizacją profesjonalnych projektów w zespole ludzi pełnych energii i pasji w osiąganiu swoich marzeń. Poszukuję nowych możliwości rozwoju zawodowego.</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tomasPhoto: require("../assets/images/yourPhoto.png")
    }
  }
}
</script>
