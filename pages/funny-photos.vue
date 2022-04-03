<template>
	<div>
		<HeaderImage
			:props="[
				entries[0].header_image.path,
				'Funny photos',
				'What we get up to on our lunch breaks.',
			]"
		></HeaderImage>

		<ItemisedGallery :props="[entries, '#', 99]"></ItemisedGallery>

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
	middleware: "funny-photos",
	data() {
		return {
			data: this.$store.state.pageData[0],
			entries: this.$store.state.pageData[0],
			posts: [],
			error: "",
		};
	},

	components: {
		ItemisedGallery: () => import("@/components/ItemisedGallery"),
		Items: () => import("@/components/Items"),
		Portfolio: () => import("@/components/Portfolio"),
		Clients: () => import("@/components/Clients"),
		Services: () => import("@/components/Services"),
	},

	//get strapi data
};
</script>
