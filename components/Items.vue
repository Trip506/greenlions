<template lang="">
    <div>
	
        		<section
			class="features4 woodm4_features4 cid-sTPxC1s93i"
			id="features04-9s"
		>
			<div class="container">
				<div class="row">
					<div v-for="(item, index) in props[0]" :key="index" class="card align-center col-12 col-md-6 md-pb col-lg-4">
						
						<div class="panel-item">
							<div class="card-block">
								<div class="photo">
									<img
									:src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.tokens.image +'&src='+item.header_image._id+'&w=800&h=600&o=true'"
										alt=""
									/>
								</div>
								<div class="text-wrap">
									<h2
										class="
											mbr-section-title
											pb-2
											align-center
											mbr-bold mbr-black mbr-fonts-style
											display-2
										"
									>
										{{item.name}}
									</h2>
									<p class="mbr-text mbr-fonts-style display-7">
										{{item.header_text}}
									</p>
									<div class="link-wrap pt-2">
										<h4
											class="
												link
												align-center
												mbr-bold mbr-black mbr-fonts-style
												display-7
											"
										>
											<nuxt-link :to="props[1] + item.slug" class="text-primary"
												>View More</nuxt-link
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