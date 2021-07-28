<template>
    <b-container class="d-flex justify-content-center align-items-center">
        <b-alert v-if="loggedIn" show variant="success">
            <h4 class="alertHeading">Uspešno ste se prijavili!</h4>
            <p>
                Preusmerjeni boste na nadzorno ploščo v nekaj sekundah...
            </p>
        </b-alert>
        <b-form class="w-50" v-else>
            <b-form-group class="mb-5">
                <b-form-input 
                    v-model="form.email" 
                    type="email" 
                    placeholder="Email" 
                    required
                ></b-form-input>
            </b-form-group>
             <b-form-group class="my-5">
                <b-form-input 
                    v-model="form.password" 
                    type="password" 
                    placeholder="Geslo" 
                    required
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" @click="login">Prijava</b-button>
        </b-form>
    </b-container>
</template>

<script>
// import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            form: {},
            loggedIn: false
        }
    },
    methods: {
        login() {
            this.loggedIn = true;
            setTimeout(() => {
                this.$router.push('/');
            }, 3000);
        }
    }
}

</script>

<style>

</style>