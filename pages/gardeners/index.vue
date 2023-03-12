<template>
	<div>
		<HeaderImage
			:props="[
				data[0].header_image.path,
				'Services',
				'Professional services in Cornwall',
			]"
		></HeaderImage>

		<Items :props="[data, '/services/', 99]"></Items>

		<Contact />

		<Clients />
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Services | Green Lions Gardening",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"See our services offered to our loyal clients in and around the Penzance area",
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
						"See our services offered to our loyal clients in and around the Penzance area",
				},
			],
		};
	},
	data() {
		return {
			data: this.$store.state.pageData,
			error: "",
			name: "Services | Green Lions Gardening",
		};
	},

	middleware: "gardeners",

	components: {
		Contact: () => import("@/components/Contact"),
		Clients: () => import("@/components/Clients"),
		Items: () => import("@/components/Items"),
	},

	//get strapi data
};
</script>
