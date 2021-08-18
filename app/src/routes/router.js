import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
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
		let scrollTo = 0;

		if (to.hash) {
			scrollTo = to.hash;
		} else if (savedPosition) {
			scrollTo = savedPosition.y;
		}

		return goTo(scrollTo);
	},
	routes: routes,
});

export default router;
