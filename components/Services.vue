<template>
	<div>
		<section
			class="features2 woodm4_features2 cid-sVVvu2V6i8"
			id="features02-8x"
		>
			<div class="container">
				<div class="row">
					<div class="title col-12 pb-4 align-center">
						<u>
							<h2 class="pb-3 mbr-bold mbr-fonts-style display-6">Services</h2>
						</u>
					</div>
				</div>
			</div>

			<div class="container">
				<div class="row">
					<client-only>
						<div
							v-for="(item, index) in data"
							:key="index"
							class="card align-center col-12 col-md-6 col-lg-4"
						>
							<a
								rel="canonical"
								class="text-primary"
								:href="'/services/' + item.slug"
							>
								<img
									height="50"
									:src="$store.state.assetRoot + item.icon.path"
									alt="icon"
								/>
								<div class="panel-item">
									<div class="card-block">
										<div class="text-wrap">
											<div class="link-wrap pt-3">
												<h4
													class="
														link
														align-center
														mbr-bold mbr-black mbr-fonts-style
														display-7
													"
												>
													<strong>
														<b> {{ item.name }}</b></strong
													>
												</h4>
											</div>
										</div>
									</div>
								</div>
							</a>
						</div>
					</client-only>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: this.$store.state.staticData[0][0],
		};
	},
};
</script>
