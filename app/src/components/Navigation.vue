<template>
	<v-container fluid class="fixed-bar">
		<v-toolbar flat color="transparent">
			<v-toolbar-title
				class="text-h5 font-weight-bold"
				><v-btn
                    text
					x-large
					class="no-uppercase"
<<<<<<< HEAD
                    @click="$vuetify.goTo('about', options)"
=======
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
                    :to="{ hash: '#about' }"
                    >La Crêperie Chéri®</v-btn
                    ></v-toolbar-title
			>
			<v-spacer></v-spacer>
			<v-toolbar-items class="d-none d-md-flex">
				<v-col>
					<v-btn
						rounded
						depressed
						text
<<<<<<< HEAD
						@click="$vuetify.goTo('about', options)"
=======
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
						:to="{ hash: '#about' }"
						>O Nas</v-btn
					>
				</v-col>
				<v-col>
					<v-btn
						rounded
						depressed
						text
<<<<<<< HEAD
						@click="$vuetify.goTo('contact', options)"
=======
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
						:to="{ hash: '#contact' }"
						>Delovni čas in kontakt</v-btn
					>
				</v-col>
				<v-col>
					<v-btn
						rounded
						depressed
						text
<<<<<<< HEAD
						@click="$vuetify.goTo('gallery', options)"
=======
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
						:to="{ hash: 'gallery' }"
						>Galerija</v-btn
					>
				</v-col>
				<v-col>
					<v-btn
						rounded
						depressed
						text
<<<<<<< HEAD
						@click="$vuetify.goTo('menu', options)"
=======
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
						:to="{ hash: 'menu' }"
						>Ponudba</v-btn
					>
				</v-col>
			</v-toolbar-items>
<<<<<<< HEAD
			<v-app-bar-nav-icon class="d-flex d-md-none"></v-app-bar-nav-icon>
		</v-toolbar>
=======
			<v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = true"></v-app-bar-nav-icon>
			<v-overlay :value="drawer">
				<v-btn @click="drawer = false"></v-btn>
				<!--<v-navigation-drawer class="d-flex d-md-none h-100" absolute>
					<v-list nav dense>
						<v-list-item-group>
							<v-list-item>
								<v-list-item-title>
									O nas
								</v-list-item-title>
							</v-list-item>
							<v-list-item>
								<v-list-item-title>
									Delovni čas in kontakt
								</v-list-item-title>
							</v-list-item>
							<v-list-item>
								<v-list-item-title>
									Galerija
								</v-list-item-title>
							</v-list-item>
							<v-list-item>
								<v-list-item-title>
									Ponudba
								</v-list-item-title>
							</v-list-item>
						</v-list-item-group>
					</v-list>
				</v-navigation-drawer> -->
			</v-overlay>
		</v-toolbar>
		<!-- @click="$vuetify.goTo('about', options)" -->
		<!-- @click="$vuetify.goTo('contact', options)" -->
		<!-- @click="$vuetify.goTo('gallery', options)" -->
		<!-- @click="$vuetify.goTo('menu', options)" -->
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
	</v-container>
</template>

<script>
export default {
	name: "Navigation",
	data() {
		return {
<<<<<<< HEAD
=======
			drawer: false,
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
			duration: 300,
			offset: 0,
			easing: "easeInOutCubic",
		};
	},
	computed: {
		target() {
			const value = this[this.type];
			console.log(value);
			if (!isNaN(value)) return Number(value);
			else return value;
		},
		options() {
			return {
				duration: this.duration,
				offset: this.offset,
				easing: this.easing,
			};
		},
	},
};
</script>

<style scoped>
.fixed-bar {
	position: fixed;
	position: -webkit-sticky;
	z-index: 2;
}
</style>
