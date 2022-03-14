<template>
	<div>
		<HeaderImage
			:props="[data.header_image.path, data.header_title, data.header_text]"
		></HeaderImage>

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
							:src="
								$store.state.webRoot +
								'/api/cockpit/image?token=' +
								$store.state.tokens.image +
								'&src=' +
								data.article_image._id +
								'&w=400&h=400&o=true'
							"
							alt="Sam posing over his fine allotment work"
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
								alt=""
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
		<section
			class="accordion2 woodm4_accordion2 cid-sTnbnpBasn"
			id="accordion02-l"
		>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 md-pb m-auto">
						<div class="content">
							<h1
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
							</h1>
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
							:src="
								$store.state.webRoot +
								'/api/cockpit/image?token=' +
								$store.state.tokens.image +
								'&src=' +
								data.service.image._id +
								'&w=600&h=600&o=true'
							"
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
										src="images/leo-drilling-hole-2-1000x1009.jpg"
										alt="Leo drilling a hole in St.Ives"
									/>
								</div>
								<div class="text-wrap"></div>
							</div>
						</div>
					</div>

					<div class="card align-center col-12 col-md-6 col-lg-4">
						<div class="panel-item">
							<div class="card-block">
								<div class="photo">
									<img
										src="images/cutting-hedge-1-556x417-result.jpg"
										alt="Leo shaping a hedge in Newlyn"
									/>
								</div>
								<div class="text-wrap"></div>
							</div>
						</div>
					</div>

					<div class="card align-center col-12 col-md-6 col-lg-4">
						<div class="panel-item">
							<div class="card-block">
								<div class="photo">
									<img
										src="images/leaf-blower-1-1018x844.jpg"
										alt="Sam with leaf blower in Lelant"
									/>
								</div>
								<div class="text-wrap"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

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

			<div class="container">
				<div class="row">
					<div class="mbr-testimonial align-center col-12 col-md-6 md-pb">
						<div class="panel-item">
							<div class="card-block">
								<div class="testimonial-photo">
									<img
										:src="
											$store.state.webRoot +
											'/api/cockpit/image?token=' +
											$store.state.tokens.image +
											'&src=' +
											data.team.image1._id +
											'&w=500&h=600&o=true'
										"
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
										:src="
											$store.state.webRoot +
											'/api/cockpit/image?token=' +
											$store.state.tokens.image +
											'&src=' +
											data.team.image2._id +
											'&w=500&h=600&o=true'
										"
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

		<Portfolio :props="blog"></Portfolio>

		<Services> </Services>
		<Clients></Clients>

		<!-- Form -->
		<section class="map1 woodm4_map1 cid-sVVvvpJ9ww" id="map01-8q">
			<div class="container">
				<div class="row content">
					<div class="col-12 col-lg-6 col-md-12 md-pb">
						<h2
							class="
								mbr-section-title
								align-left
								mbr-bold
								pb-4
								mbr-fonts-style
								display-2
							"
						>
							Contact us
						</h2>
						<div class="google-map">
							<iframe
								frameborder="0"
								style="border: 0"
								src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNveGQ9bfpKFwWzQLLftrR9hNiHwdqQG8&amp;q=Cornwall"
								allowfullscreen=""
							></iframe>
						</div>
					</div>
					<div class="col-12 col-lg-6 col-md-12 mbr-fonts-style display-5">
						<h3
							class="
								mbr-section-title
								align-left
								mbr-bold
								pb-4
								mbr-fonts-style
								display-5
							"
						>
							We are in Penzance, Cornwall
						</h3>

						<p class="mbr-text pb-4 align-left mbr-fonts-style display-7">
							We serve clients all over West Penwith.<br />From small town
							gardens to large estates and land projects.&nbsp;<br />Give us a
							ring to see what we can do for you!<br />
						</p>

						<p class="mbr-text">
							<strong>Phone:</strong><br />Leo: 07884 255127<br />Sam: 07507
							539688<strong><br /></strong><br /><strong>Email:</strong
							><br />info@greenlionsgardening.com<br /><br /><strong
								>Social Media:</strong
							><br /><a
								href="https://www.facebook.com/The-Green-Lions-Gardening-Services-in-West-Penwith-112466311333432"
								class="text-primary"
								>Facebook</a
							><br /><a
								href="https://nextdoor.co.uk/pages/green-lions-penzance-gardening-services/"
								class="text-primary"
								>Nextdoor</a
							><br /><a
								href="https://nextdoor.co.uk/pages/green-lions-penzance-gardening-services/"
								class="text-primary"
								><br /></a
							><br />
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="form form1 woodm4_form1 cid-sUXFlpoYd0" id="form01-o">
			<div class="container">
				<div class="row">
					<div
						class="col-lg-10 col-md-12 mx-auto mbr-form"
						data-form-type="formoid"
					>
						<!--Formbuilder Form-->
						<form
							action="https://mobirise.eu/"
							method="POST"
							class="mbr-form form-with-styler"
							data-form-title="Form Name"
						>
							<input
								type="hidden"
								name="email"
								data-form-email="true"
								value="oEAaGK6QOXzLTIrwKlhtPcQz0ATMjAcs+sC2TOmY9+bw8tpdj3qujSF2Y1cZDK1Dhf0Vpdc3/byARep6LxlG0rs/5OiHFKPAQbTTbiwIXC69QCN3pztMg1e5hG2vLUZG.hTRfoW/kF1HnVA8UDMxQmS1l/tFNNEd/e9f7i0TWL9qflI+80+rXGUcF+pr8zfIyjZvLyDpfxQ2vf+hdG8CZG+LDJ/2IC3mGS+wXTUqh81gZLmAWIA/TAm6T8RR26Inr"
							/>
							<div class="form-row">
								<div
									hidden="hidden"
									data-form-alert=""
									class="alert alert-success col-12"
								>
									Thanks for filling out the form! We'll get back to you soon!
								</div>
								<div
									hidden="hidden"
									data-form-alert-danger=""
									class="alert alert-danger col-12"
								>
									Oops...! some problem!
								</div>
							</div>
							<div class="dragArea form-row">
								<div class="col-lg-12 col-md-12 col-sm-12" style="">
									<h5 class="mbr-fonts-style pb-2 display-2">Contact Us</h5>
								</div>
								<div class="col-lg-12 col-md-12 col-sm-12">
									<p class="mbr-fonts-style pb-5 display-7">
										Don't hesitate to reach out to us if you have any
										questions&nbsp;
									</p>
								</div>
								<div
									class="col-lg-12 col-md-12 col-sm-12 form-group align-center"
								>
									<div class="form-row">
										<div class="col-lg-6 col-md-12 col-sm-12 form-group">
											<input
												type="text"
												name="nameFirst"
												placeholder="First Name"
												data-form-field="nameFirst"
												class="form-control text-multiple"
												value=""
												id="nameFirst-form01-o"
											/>
										</div>
										<div class="col-lg-6 col-md-12 col-sm-12 form-group">
											<input
												type="text"
												name="nameLast"
												placeholder="Last Name"
												data-form-field="nameLast"
												class="form-control text-multiple"
												value=""
												id="nameLast-form01-o"
											/>
										</div>
									</div>
								</div>
								<div
									data-for="phone"
									class="col-lg-6 col-md-12 col-sm-12 form-group"
									style=""
								>
									<input
										type="tel"
										name="phone"
										placeholder="Phone"
										data-form-field="phone"
										class="form-control display-7"
										pattern="*"
										value=""
										id="phone-form01-o"
									/>
								</div>

								<div
									class="col-lg-6 col-md-12 check col-sm-12 form-group"
									data-for="checkbox"
								>
									<div class="form-control-label">
										<label
											for="checkbox"
											class="mbr-fonts-style display-7"
										></label>
									</div>
									<div class="form-check form-check-inline">
										<label class="form-check-label display-7"></label>
									</div>
									<div class="form-check form-check-inline">
										<label class="form-check-label display-7"></label>
									</div>
									<div class="form-check form-check-inline">
										<label class="form-check-label display-7"></label>
									</div>
								</div>
								<div
									class="col-lg-6 col-md-12 col-sm-12 form-group"
									data-for="message"
								>
									<textarea
										name="message"
										placeholder="Message"
										data-form-field="message"
										class="form-control display-7"
										id="message-form01-o"
									></textarea>
								</div>
								<div class="col-auto m-auto pt-5">
									<button
										type="submit"
										class="btn btn-primary-outline display-7"
									>
										SUBMIT
									</button>
								</div>
								<div class="col-lg-12 col-md-12 col-sm-12">
									<h4 class="mbr-fonts-style align-center pt-4 display-4">
										Remember: It's always quicker to just call us!&nbsp;
									</h4>
								</div>
							</div>
						</form>
						<!--Formbuilder Form-->
					</div>
				</div>
			</div>
		</section>
		<IconSlogans></IconSlogans>

		<section
			class="image1 woodm4_image1 cid-sUXVdjxvR1"
			id="image01-p"
			:style="
				'background-image: url(' +
				$store.state.assetRoot +
				data.bottom_image.path +
				')'
			"
		>
			<div
				class="mbr-overlay"
				style="opacity: 0.5; background-color: rgb(35, 35, 35)"
			></div>

			<div class="container"></div>
		</section>
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
		Clients: () => import("@/components/Clients"),
		IconSlogans: () => import("@/components/IconSlogans"),
		Services: () => import("@/components/Services"),
		Portfolio: () => import("@/components/Portfolio"),
		HeaderImage: () => import("@/components/HeaderImage"),
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
