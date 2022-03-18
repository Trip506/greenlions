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
	head: {
		title: "Services | Green Lions Gardening",
		meta: [
			{
				hid: "description",
				name: "description",
				content:
					"We serve a variety of clients in Penzance and around West Cornwall including: Town Houses, Holiday Properties, Commercial Properties, Manor houses and Large Estates, Wedding Venues and Allotments.",
			},
		],
	},
	data() {
		return {
			data: this.$store.state.pageData,
			error: "",
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
