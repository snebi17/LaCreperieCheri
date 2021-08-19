<template>
    <v-container fluid>
<<<<<<< HEAD
        <v-row class="col-12 col-md-6">
            <v-col>
                
            </v-col>
        </v-row>
        <v-row class="col-12 col-md-6">
            <v-col>
                
            </v-col>
        </v-row>
=======
        <v-container class="col-12 col-md-6 overflow">
            <v-row v-for="group in items" :key="group.id">
                <v-col v-for="(items, type) in group" :key="type.id" >
                    <v-header>{{ type }}</v-header>
                    <v-list color="secondary" v-for="item in items" :key="item.id">
                        <v-list-item-group>
                            <v-list-item
                                align="center"
                                @click="addToCart()"
                            >
                                <v-list-item-content class="success--text">
                                    <v-list-item-title v-text="item.name"></v-list-item-title>
                                    <v-list-item-title
                                        class="font-weight-bold"
                                        v-text="`${item.price.toFixed(2)} €`"
                                    ></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="col-12 col-md-6">

        </v-container>
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
    </v-container>
</template>

<script>
<<<<<<< HEAD
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
=======
import axios from "axios";

export default {
    name: "MakeYourOwn",
    props: {
        menu: [],
    },
    data() {
        return {
            items: [],
            cart: [],
            successAlert: null,
            errorAlert: null,
        };
    },
    created() {
        this.items = this.$props.menu;
    },
    methods: {
        placeOrder() {
        axios
            .post("orders", this.cart)
            .then((success) => (this.successAlert = success))
            .catch((error) => (this.errorAlert = error));
    },
    isInCart(itemId) {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify([]));
        }
        const cartItem = this.cart.find(({ id }) => id === itemId);
        return Boolean(cartItem);
    },
    addToCart(itemId) {
        const item = this.items.find(({ id }) => id === itemId);
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify([]));
        }
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        cartItems.push(item);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        this.cart = JSON.parse(localStorage.getItem("cart"));
        this.$root.$bvToast.toast("Burek", {
            noAutoHide: true,
        });
        console.log(itemId);
    },
    removeFromCart(itemId) {
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        const index = cartItems.findIndex(({ id }) => id === itemId);
        cartItems.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    allowDrop(ev) {
        ev.preventDefault();
    },
    drag(ev) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setItem("text/plain", ev.srcElement.id);
      // console.log(ev.srcElement.id);
      // console.log(ev.srcElement.childNodes[2].children[1].children[0]);
      // console.log(ev.srcElement.childNodes[2].children[1].children[1]);
      // ev.dataTransfer.setItem('itemID');
      // ev.dataTransfer.setItem('itemID', ev);
    },
    drop(ev) {
        ev.preventDefault();
        const itemID = ev.dataTransfer.getData("text/plain");

        if (!this.isInCart(itemID)) {
            this.addToCart(itemID);
        } else {
            this.errorAlert = "Ta izdelek je že na seznamu.";
        }

        ev.target.appendChild(document.getElementById(itemID));
    },
  },
};
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
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
