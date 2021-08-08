<template>
	<v-container secondary fluid fill-height id="about">
		<v-row justify="center" align="center" class="px-10">
			<v-col class="text-center align-items-center" color="success" cols="12">
				<h5 class="text-h5 text-md-h3 font-weight-bold">
					Palačinka za vsakogar.
				</h5>
				<p class="text-body-1 font-weight-regular">
					Pri nas si palačinko, sladko ali slano, sestaviš kar sam. Klikni na
					gumb in si oglej kaj ponujamo.
				</p>
				<v-btn rounded color="primary" to="#menu">Naša ponudba</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "About",
};
</script>

<style>
#about {
	height: 100vh;
}
/* #about v-parralax > img {
        height: 50%;
    } */
</style>
