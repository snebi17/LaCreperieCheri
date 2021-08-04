<template>
	<v-container secondary fluid id="gallery">
		<v-col class="col-12 col-md-6">
			<v-card class="secondary--text" color="transparent" flat>
				<v-card-title class="text-h5 font-weight-bold">
					<v-icon class="secondary--text">mdi-instagram</v-icon>
					Instagram
				</v-card-title>
				<v-card-subtitle class="secondary--text text-h font-weight-light">
					Sledite nam na @lacreperie_cheri
				</v-card-subtitle>
				<v-card-text class="secondary--text text-body-1 font-weight-light">
					Označite nas s
					<span class="primary--text">#lacreperiecheri_palacinke</span>
				</v-card-text>
			</v-card>
		</v-col>
		<v-col class="col-12 col-md-6">
			<v-card color="transparent" flat>
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
	</v-container>
</template>

<script>
export default {
	name: "Gallery",
};
</script>

<style>
#gallery {
	padding: 40px 0;
}
</style>
