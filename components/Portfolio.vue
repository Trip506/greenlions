<template>
	<div>
		<section
			style="padding-top: 20px"
			class="features2 woodm4_features2 cid-sXxeHiDF3A"
			id="features02-a4"
		>
			<div class="container">
				<div class="row">
					<div class="title col-12 pb-4 align-center">
						<h2 class="pb-3 mbr-bold mbr-fonts-style display-2">
							Working Portfolio&nbsp;
						</h2>
					</div>
				</div>
			</div>
		</section>

		<section
			class="features2 woodm4_features2 cid-sXwotVOqXR"
			id="features02-9r"
		>
			<div class="container">
				<div class="row"></div>
			</div>
			<div class="container">
				<div class="row">
					<div
						v-for="(item, index) in props"
						:key="index"
						class="card align-center col-12 col-md-6 col-lg-4"
					>
						<div class="panel-item">
							<div class="card-block">
								<div class="photo">
									<div class="container">
										<img
											style="width: 100%; margin-y: 20px"
											:src="
												$store.state.webRoot +
												'/api/cockpit/image?token=' +
												$store.state.tokens.image +
												'&src=' +
												item.meta_image._id +
												'&w=500&h=300&o=true'
											"
											alt=""
										/>
									</div>
								</div>
								<div class="text-wrap">
									<h3 class="mbr-text mbr-fonts-style display-4">
										<strong>{{ item.meta_title }}</strong>
									</h3>
									<p
										class="
											mbr-section-title
											pb-2
											align-center
											mbr-bold mbr-black mbr-fonts-style
											display-4
										"
									>
										{{ item.meta_description }}
										.&nbsp;
									</p>
									<div class="link-wrap pt-3">
										<h4
											class="
												mbr-section-title
												pb-2
												align-center
												mbr-bold mbr-black mbr-fonts-style
												display-4
											"
										>
											<nuxt-link :to="'/portfolio/' + item.slug"
												>Read More ></nuxt-link
											>
										</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	props: ["props"],
};
</script>