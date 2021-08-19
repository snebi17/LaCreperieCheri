<template>
	<v-container secondary fluid id="contact" class="py-16">
		<v-row align="center" justify="center">
			<v-col class="col-12 col-md-4">
				<v-card flat color="transparent">
					<v-card-title class="justify-center text-h5 font-weight-bold"
						>
						La Crêperie Chéri
						</v-card-title
					>
					<v-card-text>
						<v-col>
							<v-row class="justify-center text-body-1">
								<p class="font-weight-bold">Naslov</p>
								<span class="mx-1">|</span>
								<p class="font-weight-light">
									Linhartova c. 34, 1000 Ljubljana SI
								</p>
							</v-row>
							<v-row class="justify-center text-body-1">
								<p class="font-weight-bold">Telefon</p>
								<span class="mx-1">|</span>
								<p class="font-weight-light">051 401 400</p>
							</v-row>
							<v-row class="justify-center text-body-1">
								<p class="font-weight-bold">E-mail</p>
								<span class="mx-1">|</span>
								<p class="font-weight-light">info@lacreperie-cheri.si</p>
							</v-row>
						</v-col>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col class="col-12 col-md-4">
				<v-card flat color="transparent">
					<v-card-title class="justify-center text-h5 font-weight-bold"
						>
							<v-icon x-large left>mdi-clock</v-icon>
							Delovnik
						</v-card-title
					>
					<v-card-text>
						<v-col>
							<v-row class="justify-center text-body-1">
								<p class="font-weight-bold">Ponedeljek</p>
								<span class="mx-1">|</span>
								<p class="font-weight-light">zaprto</p>
							</v-row>
							<v-row class="justify-center text-body-1">
								<p class="font-weight-bold">Torek - petek</p>
								<span class="mx-1">|</span>
								<p class="font-weight-light">
									12<span>00</span> - 21<span>00</span>
								</p>
							</v-row>
							<v-row class="justify-center text-body-1">
								<p class="font-weight-bold">Sobota, nedelja</p>
								<span class="mx-1">|</span>
								<p class="font-weight-light">
									13<span>00</span> - 22<span>00</span>
								</p>
							</v-row>
							<v-row class="justify-center text-body-1">
								<p class="font-weight-bold">Prazniki</p>
								<div class="mx-1">|</div>
								<p class="font-weight-light">
									13<span>00</span> - 21<span>00</span>
								</p>
							</v-row>
						</v-col>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "Contact",
	data() {
		return {};
	},
};
</script>

<style scoped>
p {
	padding: 0;
	margin: 0;
}
p > span {
	font-size: 10px;
	font-weight: 300;
	position: relative;
	top: -5px;
}
.border-right {
	border-right: 1px solid black;
}
.inline {
	display: flex;
}
</style>
