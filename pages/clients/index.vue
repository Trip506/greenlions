<template>
	<div>
		<HeaderImage
			:props="[
				data[0].header_image.path,
				'Clients',
				'Professional services in Cornwall',
			]"
		></HeaderImage>

		<Items :props="[data, '/clients/', 99]"></Items>

		<Services></Services>
		<Clients />
		<Contact />
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "See the clients we serve in and around the Penzance area.",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "See the clients we serve in and around the Penzance area.",
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
					content: "See the clients we serve in and around the Penzance area.",
				},
			],
		};
	},
	data() {
		return {
			data: this.$store.state.pageData,
			error: "",
			name: "Clients | Green Lions Gardening",
		};
	},

	middleware: "clients",

	components: {
		Services: () => import("@/components/Services"),
		Contact: () => import("@/components/Contact"),
		Clients: () => import("@/components/Clients"),
		Items: () => import("@/components/Items"),
	},

	//get strapi data
};
</script>
