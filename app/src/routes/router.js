import VueRouter from "vue-router";
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
		if (to.hash) {
			return {
				selector: to.hash,
				behavior: "smooth"
			}
		} else if (savedPosition) {
			return savedPosition
		}
		return { x: 0, y: 0 }
	},
	routes: routes,
});

export default router;
