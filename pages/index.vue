<template>
	<div>
		<HeaderImage
			:props="[data.header_image.path, data.header_title, data.header_text]"
		></HeaderImage>

		<!-- Icon bar -->
		<section
			class="features3 woodm4_features3 cid-sTn5782uJc"
			id="features03-k"
		>
			<div class="container">
				<div class="media-container-row">
					<div class="card p-3 col-12 col-md-6 col-lg-4">
						<div class="card-img pb-3">
							<img
								height="100px"
								:src="$store.state.assetRoot + data.icon_bar.icon1.path"
							/>
						</div>
						<div class="card-box">
							<h4 class="card-title py-3 mbr-bold mbr-fonts-style display-2">
								{{ data.icon_bar.title1 }}
							</h4>
							<p class="mbr-text mbr-fonts-style display-7">
								{{ data.icon_bar.text1 }}
							</p>
						</div>
					</div>

					<div class="card p-3 col-12 col-md-6 col-lg-4">
						<div class="card-img pb-3">
							<img
								height="100px"
								:src="$store.state.assetRoot + data.icon_bar.icon2.path"
								alt=""
							/>
						</div>
						<div class="card-box">
							<h4 class="card-title py-3 mbr-bold mbr-fonts-style display-2">
								{{ data.icon_bar.title2 }}
							</h4>
							<p class="mbr-text mbr-fonts-style display-7">
								{{ data.icon_bar.text2 }}
							</p>
						</div>
					</div>

					<div class="card p-3 col-12 col-md-6 col-lg-4">
						<div class="card-img pb-3">
							<img
								height="100px"
								:src="$store.state.assetRoot + data.icon_bar.icon3.path"
								alt=""
							/>
						</div>
						<div class="card-box">
							<h4 class="card-title py-3 mbr-bold mbr-fonts-style display-2">
								{{ data.icon_bar.title3 }}
							</h4>
							<p class="mbr-text mbr-fonts-style display-7">
								{{ data.icon_bar.text2 }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

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
							alt="Sam posing over his fine allotment work"
						/>
					</div>
					{{ data.article_image }}

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

		<section
			class="accordion2 woodm4_accordion2 cid-sTnbnpBasn"
			id="accordion02-l"
		>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 md-pb m-auto">
						<div class="content">
							<h2
								class="
									mbr-section-title
									align-left
									mbr-bold mbr-white
									pb-4
									mbr-fonts-style
									display-2
								"
							>
								{{ data.service.title }}
							</h2>
							<h2
								class="
									mbr-section-subtitle
									align-left
									mbr-white mbr-light mbr-fonts-style
									display-7
								"
							>
								{{ data.service.text }}
							</h2>
						</div>
					</div>

					<div class="col-lg-6">
						<img
							:src="$store.state.assetRoot + data.service.image.path"
							alt="Trimming lower branches of a tree"
						/>

						<div
							id="bootstrap-accordion_14"
							class="panel-group accordionStyles accordion"
							role="tablist"
							aria-multiselectable="true"
						>
							<div class="card">
								<div class="card-header" role="tab" id="headingOne">
									<a
										role="button"
										class="panel-title collapsed text-black"
										data-toggle="collapse"
										data-core=""
										href="#collapse1_14"
										aria-expanded="false"
										aria-controls="collapse1"
									>
										<h4 class="mbr-fonts-style display-5">
											{{ data.service.dropdown_title1 }}&nbsp;&nbsp;<span
												class="sign mbr-iconfont mbri-arrow-down inactive"
												><br
											/></span>
										</h4>
									</a>
								</div>
								<div
									id="collapse1_14"
									class="panel-collapse noScroll collapse"
									role="tabpanel"
									aria-labelledby="headingOne"
									data-parent="#bootstrap-accordion_14"
								>
									<div class="panel-body p-4">
										<p class="mbr-fonts-style panel-text display-7">
											{{ data.service.dropdown_text1 }}
										</p>
									</div>
								</div>
							</div>
							<div class="card">
								<div class="card-header" role="tab" id="headingTwo">
									<a
										role="button"
										class="collapsed panel-title text-black"
										data-toggle="collapse"
										data-core=""
										href="#collapse2_14"
										aria-expanded="false"
										aria-controls="collapse2"
									>
										<h4 class="mbr-fonts-style display-5">
											{{ data.service.dropdown_title2 }}&nbsp;<span
												class="sign mbr-iconfont mbri-arrow-down inactive"
												><br
											/></span>
										</h4>
									</a>
								</div>
								<div
									id="collapse2_14"
									class="panel-collapse noScroll collapse"
									role="tabpanel"
									aria-labelledby="headingTwo"
									data-parent="#bootstrap-accordion_14"
								>
									<div class="panel-body p-4">
										<p class="mbr-fonts-style panel-text display-7">
											{{ data.service.dropdown_text2 }}
										</p>
									</div>
								</div>
							</div>
							<div class="card">
								<div class="card-header" role="tab" id="headingThree">
									<a
										role="button"
										class="collapsed text-black panel-title"
										data-toggle="collapse"
										data-core=""
										href="#collapse3_14"
										aria-expanded="false"
										aria-controls="collapse3"
									>
										<h4 class="mbr-fonts-style display-5">
											{{ data.service.dropdown_title3
											}}<span class="sign mbr-iconfont mbri-arrow-down inactive"
												><br
											/></span>
										</h4>
									</a>
								</div>
								<div
									id="collapse3_14"
									class="panel-collapse noScroll collapse"
									role="tabpanel"
									aria-labelledby="headingThree"
									data-parent="#bootstrap-accordion_14"
								>
									<div class="panel-body p-4">
										<p class="mbr-fonts-style panel-text display-7">
											{{ data.service.dropdown_text3 }}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Gallery -->
		<section
			class="features2 woodm4_features2 cid-sTPxC1s93i"
			id="features02-m"
		>
			<div class="container">
				<div class="row"></div>
			</div>

			<div class="container">
				<div class="row">
					<div class="card align-center col-12 col-md-6 col-lg-4">
						<div class="panel-item">
							<div class="card-block">
								<div class="photo">
									<img
										:src="$store.state.assetRoot + data.gallery1.image1.path"
									/>
								</div>
								<p class="mbr-text mbr-fonts-style display-6">
									{{ data.gallery1.text1 }}
								</p>
								<div class="text-wrap"></div>
							</div>
						</div>
					</div>

					<div class="card align-center col-12 col-md-6 col-lg-4">
						<div class="panel-item">
							<div class="card-block">
								<div class="photo">
									<img
										:src="$store.state.assetRoot + data.gallery1.image2.path"
										alt="Leo shaping a hedge in Newlyn"
									/>
								</div>
								<div class="text-wrap"></div>
								<p class="mbr-text mbr-fonts-style display-6">
									{{ data.gallery1.text2 }}
								</p>
							</div>
						</div>
					</div>

					<div class="card align-center col-12 col-md-6 col-lg-4">
						<div class="panel-item">
							<div class="card-block">
								<div class="photo">
									<img
										:src="$store.state.assetRoot + data.gallery1.image3.path"
									/>
								</div>
								<p class="mbr-text mbr-fonts-style display-6">
									{{ data.gallery1.text3 }}
								</p>
								<div class="text-wrap"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
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

			<div class="container pt-5">
				<div class="row">
					<div class="mbr-testimonial align-center col-12 col-md-6 md-pb">
						<div class="panel-item">
							<div class="card-block">
								<div class="testimonial-photo">
									<img
										:src="$store.state.assetRoot + data.team.image1.path"
										alt="Leo posing over his fine work"
									/>
								</div>
								<div class="card-footer">
									<h3
										class="
											mbr-author-name
											pb-4
											mbr-black mbr-bold mbr-fonts-style
											display-2
										"
									>
										{{ data.team.name1 }}&nbsp;
									</h3>
									<h4
										class="
											mbr-author-desc
											pb-1
											mbr-black mbr-bold mbr-light mbr-fonts-style
											display-7
										"
									>
										{{ data.team.title1 }}
									</h4>
									<h4 class="phone pb-1 mbr-black mbr-fonts-style display-7">
										Call<strong> {{ data.team.number1 }}</strong>
									</h4>
								</div>
								<p class="mbr-text mbr-fonts-style display-4">
									{{ data.team.text1 }}
								</p>
							</div>
						</div>
					</div>

					<div class="mbr-testimonial align-center col-12 col-md-6 md-pb">
						<div class="panel-item">
							<div class="card-block">
								<div class="testimonial-photo">
									<img
										:src="$store.state.assetRoot + data.team.image2.path"
										alt="Sam weeding an allotment bed"
									/>
								</div>
								<div class="card-footer">
									<h3
										class="
											mbr-author-name
											pb-4
											mbr-black mbr-bold mbr-fonts-style
											display-2
										"
									>
										{{ data.team.name2 }}
									</h3>
									<h4
										class="
											mbr-author-desc
											pb-1
											mbr-black mbr-bold mbr-light mbr-fonts-style
											display-7
										"
									>
										{{ data.team.title2 }}
									</h4>
									<h4 class="phone pb-1 mbr-black mbr-fonts-style display-7">
										Call <strong>{{ data.team.number2 }}</strong
										>&nbsp;
									</h4>
								</div>
								<p class="mbr-text mbr-fonts-style display-4">
									{{ data.team.text2 }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
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
	},

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
