<template>
	<div>
		<HeaderImage
			:props="[
				data[0].header_image.path,
				'Common Cornish Plant Index',
				'Explore our library of recognisable plants seen in local gardens, parks and wild areas',
			]"
		></HeaderImage>

		<Items :props="[entries, '/plant-species/', 99]"></Items>

		<Clients></Clients>
		<Services></Services>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Portfolio | Green Lions Gardening",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "See our library of plant species found around Cornwall",
				},

				{
					hid: "fb:app_id",
					name: "fb:app_id",
					content: this.name,
				},
				{
					hid: "og:title",
					name: "og:title",
					content: this.name,
				},
				{
					hid: "og:image",
					name: "og:image",
					content: this.$store.state.assetRoot + this.data[0].header_image.path,
				},
				{
					hid: "twitter:title",
					name: "twitter:title",
					content: this.name,
				},
				{
					hid: "og:description",
					name: "og:description",
					content: "See our library of plant species found around Cornwall",
				},
			],
		};
	},
	middleware: "plant-species",
	data() {
		return {
			data: this.$store.state.pageData[0],

			posts: [],
			error: "",
			name: "Plant Species Library | Green Lions Gardening",
		};
	},

	components: {
		Items: () => import("@/components/Items"),
		Portfolio: () => import("@/components/Portfolio"),
		Clients: () => import("@/components/Clients"),
		Services: () => import("@/components/Services"),
	},

	//get strapi data
};
</script>
