<template>
    <!-- <b-container fluid>
        <b-navbar variant="light" class="py-4 px-5">
            <b-col class="col-md-4 col-8 ml-5">
                <b-navbar-brand href="about">Navigacija</b-navbar-brand>
            </b-col>
            <b-col class="col-md-8 col-4 mr-5">
                <b-navbar-nav class="justify-content-end">
                    <b-nav-item href="about" class="btn">
                        O nas
                    </b-nav-item>
                    <b-nav-item href="contact" class="btn">
                        Delovni čas in kontakt
                    </b-nav-item>
                    <b-nav-item href="gallery" class="btn mx-5">
                        Galerija
                    </b-nav-item>
                    <b-nav-item href="menu" class="btn">
                        Ponudba
                    </b-nav-item>
                </b-navbar-nav>
            </b-col>
        </b-navbar>
    </b-container> -->
    <v-container>
        <v-toolbar>
            <v-toolbar-title @click="$vuetify.goTo(target, options)">Navigacija</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-col>
                    <v-btn @click="$vuetify.goTo('about', options)">O Nas</v-btn>
                </v-col>
                <v-col>
                    <v-btn @click="$vuetify.goTo('contact', options)">Delovni čas in kontakt</v-btn>
                </v-col>
                <v-col>
                    <v-btn @click="$vuetify.goTo('gallery', options)">Galerija</v-btn>
                </v-col>
                <v-col>
                    <v-btn @click="$vuetify.goTo('menu', options)">Ponudba</v-btn>
                </v-col>
            </v-toolbar-items>
        </v-toolbar>
    </v-container>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
      return {
          duration: 300,
          offset: 0,
          easing: 'easeInOutCubic'
      }
  },
  computed: {
      target() {
        const value = this[this.type];
        if (!isNaN(value)) return Number(value);
        else return value;
      },
      options() {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing,
        }
      }
  }
}
</script>

<style scoped>

</style>
