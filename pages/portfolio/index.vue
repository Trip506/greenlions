<template>
	<div>
		<HeaderImage
			:props="[
				entries[0].header_image.path,
				'Portfolio of Gardening',
				'See our recent accomplishments on the job',
			]"
		></HeaderImage>

		<Items :props="[entries, '/portfolio/', 99]"></Items>

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
					content:
						"See our . We provide professional gardening services to our loyal clients in and around Penzance",
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
						"See our recent accomplishments on the job. We provide professional gardening services to our loyal clients in and around Penzance",
				},
			],
		};
	},
	middleware: "portfolio",
	data() {
		return {
			data: this.$store.state.pageData[0],
			posts: [],
			error: "",
			name: "Portfolio | Green Lions Gardening",
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
