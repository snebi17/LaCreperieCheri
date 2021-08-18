<template>
	<v-container secondary fluid id="menu" class="py-16">
		<v-container>
			<v-row justify="center" align="center">
				<v-col class="text-center align-items-center" color="success" cols="12">
					<h5 class="text-h5 text-md-h3 font-weight-bold">
						Premium palačinke
					</h5>
					<p class="text-body-1 font-weight-regular">
						Poskusite naše premium palačinke, ne bo Vam žal
					</p>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="d-flex justify-end">
					<v-hover>
						<template v-slot:default="{ hover }" class="border">
							<v-card width="400" height="100%" tile>
								<v-img src="../assets/laPistacchio2.jpg"></v-img>
								<v-overlay v-if="hover" absolute>
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
								</v-overlay>
							</v-card>
						</template>
					</v-hover>
				</v-col>
				<v-col>
					<v-hover>
						<template v-slot:default="{ hover }" class="mr-auto ml-0">
							<v-card width="400" height="100%" tile>
								<v-img src="../assets/whiteJaffa3.jpg"></v-img>
								<v-overlay v-if="hover" absolute>
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
								</v-overlay>
							</v-card>
						</template>
					</v-hover>
				</v-col>
			</v-row>
			<v-row class="pb-16">
				<v-col class="d-flex justify-end">
					<v-hover>
						<template v-slot:default="{ hover }" class="ml-auto mr-0">
							<v-card width="400" height="100%" tile>
								<v-img src="../assets/american-pie.jpg"></v-img>
								<v-overlay v-if="hover" absolute>
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
								</v-overlay>
							</v-card>
						</template>
					</v-hover>
				</v-col>
				<v-col>
					<v-hover>
						<template v-slot:default="{ hover }" class="mr-auto ml-0">
							<v-card width="400" height="100%" tile>
								<v-img src="../assets/ruby1.jpg"></v-img>
								<v-overlay v-if="hover" absolute :opacity=".6">
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
								</v-overlay>
							</v-card>
						</template>
					</v-hover>
				</v-col>
			</v-row>
			<v-row class="d-none d-md-flex">
				<v-col>
					<v-toolbar flat color="transparent" class="mt-16">
						<v-toolbar-items>
							<v-col>
								<v-btn ref="sweet" x-large tile depressed color="primary" @click="toggle">Sladko</v-btn>
							</v-col>
							<v-col>
								<v-btn ref="salty" large tile depressed color="primary" @click="toggle">Slano</v-btn>
							</v-col>
							<v-col>
								<v-btn ref="other" large tile depressed color="primary" @click="toggle">Pijače</v-btn>
							</v-col>
						</v-toolbar-items>
					</v-toolbar>
				</v-col>
			</v-row>
			<v-container fluid primary class="py-16 px-16 mb-16">
				<v-container v-for="group in menu" :key="group.id">
					<v-row>
						<v-col v-for="(items, type) in group" :key="type.id">
							<v-row class="text-h5 font-weight-bold secondary--text">
								{{ type }}
							</v-row>
							<v-row>
								<v-list disabled class="col-2" color="secondary">
									<v-list-item-group>
										<v-list-item v-for="item in items" :key="item.id" align="center">
											<v-list-item-content>
												<v-list-item-title v-text="item.name"></v-list-item-title>
												<v-list-item-title class="font-weight-bold" v-text="`${item.price.toFixed(2)} €`"></v-list-item-title>
											</v-list-item-content>
										</v-list-item>
									</v-list-item-group>
								</v-list>
							</v-row>
						</v-col>
					</v-row>
				</v-container>
			</v-container>
			<v-row justify="center" align="center">
				<v-col class="text-center align-items-center" color="success" cols="12">
					<h5 class="text-h5 text-md-h3 font-weight-bold">
						Sestavi svojo palačinko
					</h5>
					<p class="text-body-1 font-weight-regular">
						Si želiš palačinko sestavljeno po svojem okusu? Klikni gumb,
						sestavi palačinko in oddaj naročilo.
					</p>
					<v-btn rounded color="primary" @click="overlay = true">Sestavi svojo</v-btn>
				</v-col>
			</v-row>
		</v-container>
		<v-overlay :value="overlay" :opacity=".8">
			<v-container class="full-size" fluid>
				<v-btn small color="red" fab @click="overlay = false" class="top-right">
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-container justify="center" align="center">				
					<MakeYourOwn :menu="menu"/>
				</v-container>
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
			menu: [],
			sweet: [],
			salty: [],
			other: [],
			errors: null,
			overlay: false,
		};
	},
	computed: {
		// rows() {
		// 	var rows = [];
		// 	var arr = this.items;

		// 	for (let i = 0; i < arr.length; i += 4) {
		// 		var row = [];
		// 		for (let j = 0; j < 4; j++) {
		// 			row.push(arr[i + j]);
		// 		}
		// 		rows.push(row);
		// 	}
		// 	return rows;
		// },
	},
	methods: {
		getItems() {
			axios
				.get("http://localhost:4000/menu")
				.then(items => {
					this.sweet = items.data[0].sladko;
					this.salty = items.data[0].slano;
					this.other = items.data[0].pijača;
				})
				.catch(errors => this.errors = errors);
		},
		toggle(e) {
			switch (e.target.innerText.toLowerCase()) {
				case 'sladko': this.menu = this.sweet; break;
				case 'slano': this.menu = this.salty; break;
				case 'pijače': this.menu = this.other; break;
				default: break;
			}
		}
	},
	created() {
		this.getItems();
	}
};
</script>

<style>
	.border {
		border: 1px solid black;
	}
	.overflow {
		overflow: auto;
	}
	.card-size {
		height: 100%;
	}
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
