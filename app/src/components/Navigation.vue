<template>
	<v-container fluid class="fixed-bar">
		<v-toolbar flat color="transparent">
			<v-toolbar-title
				class="text text-h5 font-weight-bold"
				><v-btn
                    text
                    @click="$vuetify.goTo('about', options)"
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
						@click="$vuetify.goTo('about', options)"
						:to="{ hash: '#about' }"
						>O Nas</v-btn
					>
				</v-col>
				<v-col>
					<v-btn
						rounded
						depressed
						text
						@click="$vuetify.goTo('contact', options)"
						:to="{ hash: '#contact' }"
						>Delovni čas in kontakt</v-btn
					>
				</v-col>
				<v-col>
					<v-btn
						rounded
						depressed
						text
						@click="$vuetify.goTo('gallery', options)"
						:to="{ hash: 'gallery' }"
						>Galerija</v-btn
					>
				</v-col>
				<v-col>
					<v-btn
						rounded
						depressed
						text
						@click="$vuetify.goTo('menu', options)"
						:to="{ hash: 'menu' }"
						>Ponudba</v-btn
					>
				</v-col>
			</v-toolbar-items>
			<v-app-bar-nav-icon class="d-flex d-md-none"></v-app-bar-nav-icon>
		</v-toolbar>
	</v-container>
</template>

<script>
export default {
	name: "Navigation",
	data() {
		return {
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
