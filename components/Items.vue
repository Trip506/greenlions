<template lang="">
    <div>
	
        		<section
			class="features4 woodm4_features4 cid-sTPxC1s93i"
			id="features04-9s"
		>
			<div class="container">
					<h2 class="
						mbr-section-title
						align-left
						mbr-bold
						pb-4
						mbr-fonts-style
						display-2
					">
					{{props[3]}}
				</h2>
				<div class="row">
					<div v-for="(item, index) in props[0]" v-if="index < props[2] " :key="index" class="card align-center col-12 col-md-6 md-pb col-lg-4">
						
						<div class="panel-item">
							<div class="card-block">
								<div class="photo">
									<a :href="props[1] + item.slug">
										<img
										style="max-width:450px"
										:src="$store.state.assetRoot+item.header_image.path" :alt="item.header_image.description"
										/>
									</a>
								</div>
							
								<div class="text-wrap">
										<img class="m-1" style="width:30px" v-if="item.icon" :src="$store.state.assetRoot + item.icon.path" :alt="'Icon for '+ item.name">
									<h3
										class="
											mbr-section-title
											pb-2
											align-center
											mbr-bold mbr-black mbr-fonts-style
											display-6
										"
									>
										{{item.name}}
									</h3>
									<p class="mbr-text mbr-fonts-style display-6">
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
											<a rel="canonical" :href="props[1] + item.slug" class="text-primary"
												>View More</a
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