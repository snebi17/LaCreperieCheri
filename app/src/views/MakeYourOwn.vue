<template>
    <v-container fluid>
            <v-row class="col-12 col-md-6">
                <v-col cols="12" md="2" v-for="item in items" :key="item.id" class="overflow">
					<v-card>
						<v-card-text class="text-center">
							<p class="text">{{ item.name }}</p>
							<span class="text">{{ item.price }}</span>
						</v-card-text>
					</v-card>
				</v-col>
            </v-row>
            <v-row class="col-12 col-md-6">
                <v-col>
                    Pizda li ti materina
                </v-col>
            </v-row>
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
    .overflow {
		overflow: auto;
	}
</style>