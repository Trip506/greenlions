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
						"We serve a variety of clients in Penzance and around West Cornwall including: Town Houses, Holiday Properties, Commercial Properties, Manor houses and Large Estates, Wedding Venues and Allotments.",
				},
			],
		};
	},
	data() {
		return {
			data: this.$store.state.pageData,
			error: "",
		};
	},

	middleware: "services",

	components: {
		Contact: () => import("@/components/Contact"),
		Clients: () => import("@/components/Clients"),
		Items: () => import("@/components/Items"),
	},

	//get strapi data
};
</script>
