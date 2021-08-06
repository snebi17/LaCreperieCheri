<template>
	<v-container secondary fluid id="menu" class="py-16">
		<v-container>
			<v-row class="justify-center">
				<v-col>
					<v-hover>
						<v-img
							slot-scope="{ hover }"
							src="../assets/laPistacchio2.jpg"
							width="400"
							class="ml-auto mr-0"
						>
							<v-card v-if="hover" height="100%" tile>
								<v-card-title class="text-h4 font-weight-bold"
									>La Bomba
								</v-card-title>
								<v-card-subtitle class="text-subtitle-2"
									>Sestavine:
								</v-card-subtitle>
								<v-card-text class="text-body-1 m-0">
									<ul>
										<li>bela premium čokolada</li>
										<li>pistacija</li>
										<li>čokoladne kroglice</li>
										<li>plazma</li>
										<li>maline</li>
										<li>Kinder čokolada</li>
									</ul>
								</v-card-text>
							</v-card>
						</v-img>
					</v-hover>
				</v-col>
				<v-col>
					<v-hover>
						<v-img
							slot-scope="{ hover }"
							src="../assets/whiteJaffa3.jpg"
							width="400"
							class="mr-auto ml-0"
						>
							<v-card v-if="hover" height="100%" tile>
								<v-card-title class="text-h4 font-weight-bold"
									>White Jaffa
								</v-card-title>
								<v-card-subtitle class="text-subtitle-2"
									>Sestavine:
								</v-card-subtitle>
								<v-card-text class="text-body-1 m-0">
									<ul>
										<li>ribana pomaranča</li>
										<li>bela čokolada (2x preliv)</li>
										<li>Milka čokoladke</li>
										<li>čokoladne mrvice</li>
										<li>ribana crunchy bela čokolada</li>
									</ul>
								</v-card-text>
							</v-card>
						</v-img>
					</v-hover>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-hover>
						<v-img
							slot-scope="{ hover }"
							src="../assets/american-pie.jpg"
							width="400"
							class="ml-auto mr-0"
						>
							<v-card v-if="hover" height="100%" tile>
								<v-card-title class="text-h4 font-weight-bold"
									>American Pie
								</v-card-title>
								<v-card-subtitle class="text-subtitle-2"
									>Sestavine:
								</v-card-subtitle>
								<v-card-text class="text-body-1 m-0">
									<ul>
										<li>ribana jabolka</li>
										<li>cimet</li>
										<li>bela premium čokolada</li>
										<li>lešnik</li>
										<li>vanilijev puding</li>
									</ul>
								</v-card-text>
							</v-card>
						</v-img>
					</v-hover>
				</v-col>
				<v-col>
					<v-hover>
						<v-img
							slot-scope="{ hover }"
							src="../assets/ruby1.jpg"
							width="400"
							class="mr-auto ml-0"
						>
							<v-card v-if="hover" height="100%" tile>
								<v-card-title class="text-h4 font-weight-bold"
									>Ruby
								</v-card-title>
								<v-card-subtitle class="text-subtitle-2"
									>Sestavine:
								</v-card-subtitle>
								<v-card-text class="text-body-1 m-0">
									<ul>
										<li>crunchy jagoda</li>
										<li>rubi namaz</li>
										<li>rubi ribana čokolada</li>
										<li>rubi jajčka</li>
									</ul>
								</v-card-text>
							</v-card>
						</v-img>
					</v-hover>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-card flat color="transparent">
						<v-card-title class="justify-center text-h3 font-weight-bold">
							Premium palačinke.
							</v-card-title>
						<v-card-subtitle class="text-center text-subtitle-1">
							Poskusite naše premium palačinke. Ne bo Vam žal!
						</v-card-subtitle>
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-toolbar flat color="transparent" class="mt-16">
						<v-toolbar-items>
							<v-col>
								<v-btn ref="sladko" x-large tile depressed color="primary">Sladko</v-btn>
							</v-col>
							<v-col>
								<v-btn ref="slano" large tile depressed color="primary">Slano</v-btn>
							</v-col>
							<v-col>
								<v-btn ref="pijače" large tile depressed color="primary">Pijače</v-btn>
							</v-col>
						</v-toolbar-items>
					</v-toolbar>
				</v-col>
			</v-row>
			<v-container fluid primary class="py-16 px-16 mb-16">
				<v-row class="overflow">
					<v-col cols="12" md="2" v-for="item in items" :key="item.id">
						<v-card>
							<v-card-text class="text-center">
								<p class="text">{{ item.name }}</p>
								<span class="text">{{ item.price }}</span>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
			<v-row>
				<v-col>
					<v-card flat color="transparent">
						<v-card-title class="justify-center text-h3 font-weight-bold">
							Sestavi svojo palačinko.
						</v-card-title>
						<v-card-subtitle class="text-center text-subtitle-1">
							Si želiš palačinko sestavljeno po svojem okusu? Klikni gumb,
							sestavi palačinko in oddaj naročilo!
						</v-card-subtitle>
						<v-card-actions class="justify-center">
							<v-btn rounded color="primary" @click="overlay = true">
								Sestavi svojo
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		<v-overlay :value="overlay" :opacity=".8" :absolute="absolute">
			<v-container class="full-size" fluid>
				<v-btn color="red" fab @click="overlay = false" class="top-right">
					<v-icon x-large>mdi-close</v-icon>
				</v-btn>
				<v-row justify="center" align="center">				
					<MakeYourOwn :items="items" />
				</v-row>
			</v-container>
		</v-overlay>
	</v-container>
</template>

<script>
import axios from "axios";

import MakeYourOwn from './MakeYourOwn.vue';

export default {
	name: "Menu",
	components: {
		MakeYourOwn
	},
	data() {
		return {
			items: [],
			errors: null,
			overlay: false,
		};
	},
	computed: {
		rows() {
			var rows = [];
			var arr = this.items;

			for (let i = 0; i < arr.length; i += 4) {
				var row = [];
				for (let j = 0; j < 4; j++) {
					row.push(arr[i + j]);
				}
				rows.push(row);
			}
			return rows;
		},
	},
	methods: {
		getItems() {
			axios
				.get("http://localhost:4000/menu")
				.then((items) => (this.items = items.data))
				.catch((errors) => (this.errors = errors));
		},
		redirect() {
			if (this.$route.path === "/menu/make-your-own") {
				this.$router.push({
					name: "Menu",
				});
			} else {
				this.$router.push({
					name: "MakeYourOwn",
					props: { items: this.items },
				});
			}
		},
	},
	created() {
		this.getItems();
	}
};
</script>

<style>	
	.full-size {
		width: 100vw;
		height: 100vh;
	}
	.top-right {
		position: absolute;
		top: 25px;
		right: 25px;
	}
</style>
