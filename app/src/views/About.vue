<template>
	<v-container secondary fluid fill-height id="about">
		<v-row justify="center" align="center">
			<v-col class="text-center align-items-center" color="success" cols="12">
				<h5 class="text-h5 text-md-h3 font-weight-bold">
					Palačinka za vsakogar.
				</h5>
				<p class="text-body-1 font-weight-regular">
					Pri nas si palačinko, sladko ali slano, sestaviš kar sam. Klikni na
					gumb in si oglej kaj ponujamo.
				</p>
				<v-btn rounded color="primary">Naša ponudba</v-btn>
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
	padding: 40px 0;
}
#about v-parralax {
	/* height: 50%!important; */
	margin-right: 100px !important;
}
/* #about v-parralax > img {
        height: 50%;
    } */
</style>
