import VueRouter from "vue-router";
<<<<<<< HEAD
import goTo from "vuetify/es5/services/goto";
=======
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
// import Store from '@/store';

const routes = [
	{
		path: "*",
		component: () => import("../views/NotFound.vue"),
	},
	{
		path: "/",
		name: "About",
		component: () => import("../views/About.vue"),
	},
	{
		path: "/menu",
		name: "Menu",
		component: () => import("../views/Menu.vue"),
		children: [
			{
				path: "/menu/make-your-own",
				name: "MakeYourOwn",
				component: () => import("../views/MakeYourOwn.vue"),
			},
		],
	},
	{
		path: "/gallery",
		name: "Gallery",
		component: () => import("../views/Gallery.vue"),
	},
	{
		path: "/contact",
		name: "Contact",
	},
];

const router = new VueRouter({
	mode: "history",
	scrollBehavior: (to, from, savedPosition) => {
<<<<<<< HEAD
		let scrollTo = 0;

		if (to.hash) {
			scrollTo = to.hash;
		} else if (savedPosition) {
			scrollTo = savedPosition.y;
		}

		return goTo(scrollTo);
=======
		if (to.hash) {
			return {
				selector: to.hash,
				behavior: "smooth"
			}
		} else if (savedPosition) {
			return savedPosition
		}
		return { x: 0, y: 0 }
>>>>>>> 2e25fae152e3dd4f3569480bac5ff77f0086d012
	},
	routes: routes,
});

export default router;
