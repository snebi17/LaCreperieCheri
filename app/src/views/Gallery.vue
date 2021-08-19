<template>
	<v-container success fluid id="gallery" class="flex-row py-16">
		<v-row align="center" justify="center">
			<v-col class="col-12 col-md-4">
				<v-card flat color="transparent">
					<v-card-title class="text-h5 text-md-h3 font-weight-bold secondary--text">
						<v-icon left x-large color="secondary">mdi-instagram</v-icon>
						Instagram
					</v-card-title>
					<v-card-subtitle class="text-body-1 font-weight-light secondary--text">
						Sledite nam na @lacreperie_cheri
					</v-card-subtitle>
					<v-card-text class="text-body-1 font-weight-light secondary--text">
						Označite nas s
						<span class="primary--text">#lacreperiecheri_palacinke</span>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col class="col-12 col-md-6">
				<v-card flat color="transparent">
					<v-row class="text-center">
						<v-col>Col #1</v-col>
						<v-col>Col #2</v-col>
						<v-col>Col #3</v-col>
					</v-row>
					<v-row class="text-center">
						<v-col>Col #4</v-col>
						<v-col>Col #5</v-col>
						<v-col>Col #6</v-col>
					</v-row>
				</v-card>
			</v-col>
		</v-row>
		
	</v-container>
</template>

<script>
export default {
	name: "Gallery",
};
</script>

<style>
body {
	height: 100vh;
}
#gallery {
	padding: 40px 0;
}
</style>
