<template>
	<div>
		<HeaderImage
			:props="[data.header_image.path, data.header_title, data.header_text]"
		></HeaderImage>

		<!-- Icon bar -->

		<!-- Main About with h1 -->
		<section class="content2 cid-rArXFNF7KR" id="content02-7">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 md-pb">
						<h2
							class="
								mbr-section-title
								align-left
								mbr-bold mbr-black
								pb-5
								mbr-fonts-style
								display-2
							"
						>
							{{ data.header_title }}
						</h2>
						<img
							:src="$store.state.assetRoot + data.article_image.path"
							:alt="data.article_image.description"
						/>
					</div>

					<div class="col-lg-6">
						<p class="text1 pb-3 align-left mbr-fonts-style display-5">
							<strong>{{ data.article_title }}</strong>
						</p>

						<div
							class="mbr-text pb-5 counter-container mbr-fonts-style display-7"
						>
							<ul>
								<li v-for="(item, index) in data.article_list" :key="index">
									<strong>{{ item.value }}</strong>
								</li>
							</ul>
						</div>

						<p class="text2 align-left mbr-fonts-style display-7">
							{{ data.article_subtext }}
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- <IconBar :props="data.icon_bar"></IconBar> -->

		<ServiceDropdown :props="data.service"></ServiceDropdown>
		<Items :props="[blog, '/portfolio/', 3, 'Recent jobs', 'Click here to view even more']"></Items>

		<!-- <IconSlogans></IconSlogans> -->

		<section class="team1 woodm4_team1 cid-sThGNiePHt" id="team01-j">
			<div class="container">
				<div class="row">
					<div class="title col-12 pb-5 align-center">
						<h2 class="pb-3 mbr-bold mbr-fonts-style display-2">
							{{ data.about_title }}
						</h2>
						<h3
							class="mbr-section-subtitle pb-3 mbr-fonts-style display-7"
							v-html="data.about_text"
						>
							<br /><br />
						</h3>
					</div>
				</div>
			</div>
			<!-- Team -->

			<Team :props="data.team"></Team>
			
		</section>
		<Items :props="[articles, '/articles/',3, 'Some things I wrote...', 'Click here to read more articles']"></Items>

		<!-- <Contact></Contact> -->
		<!-- <ContactForm></ContactForm> -->

	

		<BackgroundImage :props="data.bottom_image.path"></BackgroundImage>
		<!-- <Clients></Clients>
		<Services></Services> -->
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Home | Green Lions Gardening Services",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"Green Lions Gardening | We provide regular gardening services and grounds maintenance with excellent horticultural and trade knowledge. Serving West Penwith since 2003. We go above and beyond for your property!",
				},
				{
					hid: "fb:app_id",
					name: "fb:app_id",
					content:
						"Green Lions Gardening | Professional Gardening Team in Penzance",
				},
				{
					hid: "og:title",
					name: "og:title",
					content: "Green Lions Gardening | Home",
				},
				{
					hid: "og:image",
					name: "og:image",
					content: this.$store.state.assetRoot + this.data.header_image.path,
				},
				{
					hid: "twitter:title",
					name: "twitter:title",
					content: "Green Lions Gardening | Home ",
				},
				{
					hid: "og:description",
					name: "og:description",
					content:
						"Green Lions Gardening | We provide regular gardening services and grounds maintenance with excellent horticultural and trade knowledge. Serving West Penwith since 2003. We go above and beyond for your property!",
				},
			],
		};
	},
	data() {
		return {
			data: this.$store.state.pageData[0],
			blog: this.$store.state.pageData[1],
			articles: this.$store.state.pageData[2],
			posts: [],
			error: "",
		};
	},

	middleware: "home",

	components: {
		IconSlogans: () => import("@/components/IconSlogans"),

		Portfolio: () => import("@/components/Portfolio"),
		HeaderImage: () => import("@/components/HeaderImage"),
		ContactForm: () => import("@/components/ContactForm"),
		Services: () => import("@/components/Services"),
		Clients: () => import("@/components/Clients"),
		BackgroundImage: () => import("@/components/BackgroundImage"),
		IconBar: () => import("@/components/IconBar"),
		ServiceDropdown: () => import("@/components/ServiceDropdown"),
		GalleryHomepage: () => import("@/components/GalleryHomepage"),
		Team: () => import("@/components/Team"),
		Items: () => import("@/components/Items"),
		
	},

	// mounted() {
	// 	this.$test.ping();
	// },

	jsonld() {
		return [
			{
				"@context": "http://www.schema.org",
				"@type": "GeneralContractor",
				name: "The Green Lions Gardening Services",

				url: "http://www.greenlionsgardening.com",
				sameAs: ["https:/greenlionsgardening.com"],

				image: this.$store.state.assetRoot + this.data.header_image.path,
				areaServed: ["Penzance", "St.Ives", "etc"],
				description:
					"We are skilled and trusted gardeners with over 18 years of working horticultural experience in Cornwall . The Green Lions of Penzance are your top choice for garden, allotment and landscaping needs in West Penwith. ",
				paymentAccepted: "Cash/Credit Card",
				priceRange: "£20 - £30 per hour",
				currenciesAccepted: "GBP",
				award: "Better Business Bureau Award 2021 ",
				contactPoint: "Sam Gardener",
				location: "Penzance, United Kingdom",

				address: {
					"@type": "PostalAddress",
					addressLocality: "Penzance",
					addressRegion: "Cornwall",
					postalCode: "TR18 ",
					addressCountry: "United Kingdom",
				},
				openingHours:
					"Mo 09:00-18:30 Tu 09:00-18:00 Th 09:00-19:00 Fr 09:00-19:00",
				telephone: "07498 353622",
				email: "info@greenlionsgardening.com",
			},

			{
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: [
					{
						"@type": "Question",
						name: "What is your availability",
						acceptedAnswer: {
							"@type": "Answer",
							text: "We are open to new clients, but have a busy schedule. Call us to see when we can fit you in, this will depend on the amount of work and where you are. We work from Monday until Friday, except on days with heavy rain.",
						},
					},
					{
						"@type": "Question",
						name: "Which areas do you serve?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "We mainly serve the Penzance area, but do offer out-of-town service for larger clients and specialised jobs ",
						},
					},
				],
			},

			{
				"@context": "https://schema.org",
				"@type": "Organization",
				url: this.$store.state.webSite,
				logo:
					this.$store.state.assetRoot +
					"2022/03/11/logomark-7_uid_620b81a69f86a_uid_622b1a2646834.svg",
			},

			//Same as breadcrumbs but for mobile
			// {
			// 	"@context": "https://schema.org",
			// 	"@type": "ItemList",
			// 	itemListElement: [
			// 		{
			// 			"@type": "ListItem",
			// 			position: 1,
			// 			name: "Services",
			// 			item: "https://example.com/services",
			// 		},
			// 		{
			// 			"@type": "ListItem",
			// 			position: 2,
			// 			name: "Regular Garden Services",
			// 			item: "https://example.com/books/regular-garden-services",
			// 		},
			// 		{
			// 			"@type": "ListItem",
			// 			position: 2,
			// 			name: "Allotment",
			// 			item: "https://example.com/books/allotment",
			// 		},
			// 	],
			// },

			// {
			// 	"@context": "http://schema.org",
			// 	"@type": "Service",
			// 	name: "Regular Garden Services",
			// 	provider: "Green Lions Gardening",
			// 	brand: "Green Lions Gardening",
			// 	slogan: "Get your gardens tidy and tempting for spring time",
			// 	description: "Maintaining gardens all year round",
			// 	serviceType: "Garden Services",
			// 	image: "",
			// 	logo: "",
			// 	offers: "",
			// 	potentialAction: "Request a quote",
			// 	serviceType: "https://en.wikipedia.org/wiki/Gardener",
			// 	additionalType: "https://en.wikipedia.org/wiki/Gardening",

			// 	review: {
			// 		"@type": "Review",
			// 		reviewRating: {
			// 			"@type": "Rating",
			// 			ratingValue: "5",
			// 			bestRating: "5",
			// 		},
			// 		author: {
			// 			"@type": "Person",
			// 			name: "Lillian Ruiz",
			// 		},
			// 	},

			// 	serviceOutput: "Beautiful and productive gardens",
			// 	url: "www.greenlionsgardening.com/regular-garden-services",
			// },
		];
	},
};
</script>
