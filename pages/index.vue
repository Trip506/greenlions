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

		<IconBar :props="data.icon_bar"></IconBar>

		<ServiceDropdown :props="data.service"></ServiceDropdown>

		<GalleryHomepage :props="data.gallery1"></GalleryHomepage>
		<IconSlogans></IconSlogans>
		<section class="team1 woodm4_team1 cid-sThGNiePHt" id="team01-j">
			<div class="container">
				<div class="row">
					<div class="title col-12 pb-5 align-center">
						<h2 class="pb-3 mbr-bold mbr-fonts-style display-2">
							{{ data.about_title }}
						</h2>
						<h3 class="mbr-section-subtitle pb-3 mbr-fonts-style display-7">
							{{ data.about_text }}<br /><br />
						</h3>
					</div>
				</div>
			</div>
			<!-- Team -->

			<Team :props="data.team"></Team>
		</section>

		<Items :props="[blog, '/portfolio/', 3]"></Items>

		<Contact></Contact>
		<ContactForm></ContactForm>

		<Clients></Clients>
		<Services></Services>

		<BackgroundImage :props="data.bottom_image.path"></BackgroundImage>
	</div>
</template>

<script>
export default {
	head: {
		title: "Home | Green Lions Gardening Services",
		meta: [
			{
				hid: "description",
				name: "description",
				content:
					"We provide regular gardening services and grounds maintenance with excellent horticultural and trade knowledge. Serving West Penwith since 2003. We go above and beyond for your property!",
			},
		],
	},
	data() {
		return {
			data: this.$store.state.pageData[0],
			blog: this.$store.state.pageData[1],
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
	},

	// mounted() {
	// 	this.$test.ping();
	// },

	jsonld() {
		return {
			"@context": "http://www.schema.org",
			"@type": "GeneralContractor",
			name: "The Green Lions Gardening Services",
			url: "http://www.greenlionsgardening.com",
			sameAs: ["https:/greenlionsgardening.com"],
			logo: "http://www.greenlionsgardening.com/assets/images/logomark-6.svg",
			description:
				"We are skilled and trusted gardeners with over 18 years of working horticultural experience in Cornwall . The Green Lions of Penzance are your top choice for garden, allotment and landscaping needs in West Penwith. ",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Penzance",
				addressRegion: "Cornwall",
				postalCode: "TR18 ",
				addressCountry: "United Kingdom",
			},
			openingHours:
				"Mo 09:00-18:30 Tu 09:00-18:00 Th 09:00-19:00 Fr 09:00-19:00",
			telephone: "07884 255127",
		};
	},
	//get strapi data
};
</script>
