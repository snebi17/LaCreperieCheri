<template>
	<v-app color="secondary">
		<v-main>
<<<<<<< HEAD
			<Navigation v-lazy/>
=======
			<Navigation />
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
			<About />
			<Menu />
			<Gallery />
			<Contact />
<<<<<<< HEAD
			<Footer/>
=======
			<Footer class="d-none d-md-flex"/>
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
		</v-main>
	</v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import About from "./views/About.vue";
import Menu from "./views/Menu.vue";
import Gallery from "./views/Gallery.vue";
import Contact from "./views/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		Navigation,
		About,
		Menu,
		Gallery,
		Contact,
		Footer
	},
<<<<<<< HEAD
	data: () => ({
		//
	}),
};
</script>
=======
	data() {
		return {

		}
	}
};
</script>

<style scoped>
</style>
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
