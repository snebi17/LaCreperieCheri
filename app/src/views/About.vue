<template>
    <v-container secondary fluid class="background" id="about">
        <v-row>
            <v-col>
                <v-card flat color="transparent" class="secondary--text">
                    <v-card-title class="justify-center text-h5 text-md-h3 font-weight-bold">Palačinka za vsakogar.</v-card-title>
                    <v-card-subtitle class="secondary--text text-center text-body-1 font-weight-regular">Pri nas si palačinko, sladko ali slano, sestaviš kar sam. Klikni na gumb in si oglej kaj ponujamo.</v-card-subtitle>
                    <v-card-actions class="justify-center">
                        <v-btn rounded color="primary">Naša ponudba</v-btn>
                    </v-card-actions>
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
    .background {
        height: 100vh;
        display: flex;
        align-items: center;
        background-image: url('../assets/background.jpg');
        background-size: cover;
        background-attachment: fixed;
    }
    #about {
        padding: 40px 0;
    }
</style>