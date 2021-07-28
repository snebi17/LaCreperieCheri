<template>
    <!-- <b-container>
        <b-card border-variant="light" class="overflow">
            <b-row>
                <b-col cols="3" v-for="item in items" :key="item.id">
                    <b-card bg-variant="gradient-orange" class="rounded-0 d-flex mb-4">
                        <b-card-text class="d-flex flex-column align-items-center p-3 text-center">
                            <p>{{ item.name }}</p>
                            <span>{{ item.price }}</span>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-card>
        <b-button squared @click="redirect">Sestavi svojo</b-button>
        <router-view :items="this.items"></router-view>
    </b-container> -->
    <v-container>
        <v-row class="overflow">
            <v-col cols="3" v-for="item in items" :key="item.id">
                <v-card>
                    <v-card-text>
                        <p>{{ item.name }}</p>
                        <span>{{ item.price }}</span>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-btn @click="redirect">Sestavi svojo</v-btn>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Menu',
    data() {
        return {
            items: [],
            errors: null
        }
    },
    computed: {
        rows() {
            var rows = [];
            var arr = this.items;

            for(let i = 0; i < arr.length; i+=4) {
                var row = [];
                for (let j = 0; j < 4; j++) {
                    row.push(arr[i + j]);
                }
                rows.push(row);
            }
            return rows;
        }
    },
    created() {
        this.getItems();
    },
    methods: {
        getItems() {
            axios.get('http://localhost:4000/menu')
                .then(items => this.items = items.data)
                .catch(errors => this.errors = errors);
        },
        redirect() {
            if (this.$route.path === '/menu/make-your-own') {
                this.$router.push({ 
                    name: 'Menu' 
                });
            } else {
                this.$router.push({ 
                    name: 'MakeYourOwn', 
                    props: { items: this.items } 
                });
            }
        }
    }
}
</script>

<style>
    span {
        font-weight: bold;
    }
    .overflow {
        overflow: auto;
        height: 500px;
    }
    body {
        height: 90vh;
    }
</style>