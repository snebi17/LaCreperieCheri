<template>
    <!-- <b-container class="my-5 py-5 black">
        <b-row>
            <b-col>About</b-col>
            <b-col>Us</b-col>
            <b-col>On this page</b-col>
        </b-row>
    </b-container> -->
    <v-container>
        <v-row>
            <v-col>
                <v-card img="../assets/background.jpg">
                    <v-card-title class="text-center">Palačinka za vsakogar.</v-card-title>
                    <v-card-subtitle class="text-center">Pri nas si palačinko, sladko ali slano, sestaviš kar sam. Klikni na gumb in si oglej kaj ponujamo.</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style>
    body {
        height: 90vh;
    }
    .black {
        background-color: black;
    }
</style>