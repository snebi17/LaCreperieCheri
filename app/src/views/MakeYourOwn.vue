<template>
    <!-- <b-container class="d-flex my-5">
        <b-card border-variant="light" class="overflow col-6">
            <b-row>
                <b-col cols="4" v-for="item in items" :key="item.id">
                    <b-card v-bind:id="item.id" draggable="true" @drag="drag" class="rounded-0 mb-4">
                        <p class="left-top">{{ item.id }}</p>
                        <b-card-text class="d-flex flex-column align-items-center p-3 text-center">
                            <p>{{ item.name }}</p>
                            <span>{{ item.price }}</span>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-card>
        <b-card border-variant="light" @drop="drop" @dragover="allowDrop" class="col-6">
            <b-row>
                <b-col cols="4" v-for="item in cart" :key="item.id">
                    <b-card class="rounded-0 mb-4">
                        <b-card-text class="d-flex flex-column align-items-center p-3 text-center">
                            <p>{{ item.name }}</p>
                            <span>{{ item.price }}</span>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-card>
        <b-alert v-if="successAlert" variant="success">

        </b-alert>
        <b-alert v-if="errorAlert" variant="error">

        </b-alert>
    </b-container> -->
    <v-container>
        <v-row class="col-12 col-md-6">
            <v-col>
                
            </v-col>
        </v-row>
        <v-row class="col-12 col-md-6"></v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'MakeYourOwn',
    props: {
        items: []
    },
    data() {
        return {
            cart: [],
            successAlert: null,
            errorAlert: null
        }
    },
    methods: {
        placeOrder() {
            axios.post('orders', this.cart)
                .then(success => this.successAlert = success)
                .catch(error => this.errorAlert = error);
        },
        isInCart(itemId) {
            if (!localStorage.getItem('cart')) {
                localStorage.setItem('cart', JSON.stringify([]));  
            }
            const cartItem = this.cart.find(({ id }) => id === itemId);
            return Boolean(cartItem);
        },
        addToCart(itemId) {
            const item = this.items.find(({ id }) => id === itemId);
            if (!localStorage.getItem('cart')) {
                localStorage.setItem('cart', JSON.stringify([]));
            }
            const cartItems = JSON.parse(localStorage.getItem('cart'));
            cartItems.push(item);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            this.cart = JSON.parse(localStorage.getItem('cart'));
            this.$root.$bvToast.toast('Burek', {
                noAutoHide: true
            });
            console.log(itemId);
        },
        removeFromCart(itemId) {
            const cartItems = JSON.parse(localStorage.getItem('cart'));
            const index = cartItems.findIndex(({ id }) => id === itemId);
            cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            this.cart = JSON.parse(localStorage.getItem('cart'));
        },
        allowDrop(ev) {
            ev.preventDefault();
        },
        drag(ev) {
            ev.dataTransfer.effectAllowed = "move";
            ev.dataTransfer.setItem('text/plain', ev.srcElement.id);
            // console.log(ev.srcElement.id);
            // console.log(ev.srcElement.childNodes[2].children[1].children[0]);
            // console.log(ev.srcElement.childNodes[2].children[1].children[1]);
            // ev.dataTransfer.setItem('itemID');
            // ev.dataTransfer.setItem('itemID', ev);
        },
        drop(ev) {
            ev.preventDefault();
            const itemID = ev.dataTransfer.getData('text/plain');

            if (!this.isInCart(itemID)) {
                this.addToCart(itemID);
            } else { 
                this.errorAlert = 'Ta izdelek je že na seznamu.';
            }

            ev.target.appendChild(document.getElementById(itemID));
        }
    }
}
</script>

<style>
    p, span {
        padding: 0;
    }
    .overflow {
        overflow: auto;
        height: 500px;
    }
    .left-top {
        position: absolute;
        left: 0px;
        top: 0px; 
    }
</style>