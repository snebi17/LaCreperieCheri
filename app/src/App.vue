<template>
	<v-app color="secondary">
		<v-main>
			<Navigation />
			<About />
			<Menu />
			<Gallery />
			<Contact />
		</v-main>
	</v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import About from "./views/About.vue";
import Menu from "./views/Menu.vue";
import Gallery from "./views/Gallery.vue";
import Contact from "./views/Contact.vue";

export default {
	name: "App",
	components: {
		Navigation,
		About,
		Menu,
		Gallery,
		Contact,
	},
	data: () => ({
		//
	}),
};
</script>
