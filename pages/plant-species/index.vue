<template>
	<div>
		<HeaderImage
			:props="[
				entries[0].header_image.path,
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
					content: "See our library of plant species",
				},
			],
		};
	},
	middleware: "plant-species",
	data() {
		return {
			data: this.$store.state.pageData[0],
			entries: this.$store.state.pageData[0],
			posts: [],
			error: "",
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
