<template>
	<div>
		<HeaderImage
			:props="[
				data[0].header_image.path,
				'Locations',
				'Professional services in Cornwall',
			]"
		></HeaderImage>

		<Items :props="[data, '/area-served/', 99]"></Items>

		<Contact />

		<Clients></Clients>
		<Services></Services>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Area Served | Green Lions Gardening",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"See the towns accross West Penwith that I provide gardening services for.",
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
					content:
						"See the towns accross West Penwith that we provide gardening services for.",
				},
			],
		};
	},
	data() {
		return {
			data: this.$store.state.pageData,
			error: "",
			name: " Area Served | Green Lions Gardening",
		};
	},

	middleware: "locations",

	components: {
		Contact: () => import("@/components/Contact"),
		Services: () => import("@/components/Services"),
		Clients: () => import("@/components/Clients"),
		Items: () => import("@/components/Items"),
	},

	//get strapi data
};
</script>
