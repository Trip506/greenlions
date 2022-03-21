<template lang="">
    <div>
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
										:src="$store.state.assetRoot + props.image1.path"
									/>
								</div>
								<p class="mbr-text mbr-fonts-style display-6">
									{{ props.text1 }}
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
										:src="$store.state.assetRoot + props.image2.path"
										alt="Leo shaping a hedge in Newlyn"
									/>
								</div>
								<div class="text-wrap"></div>
								<p class="mbr-text mbr-fonts-style display-6">
									{{ props.text2 }}
								</p>
							</div>
						</div>
					</div>

					<div class="card align-center col-12 col-md-6 col-lg-4">
						<div class="panel-item">
							<div class="card-block">
								<div class="photo">
									<img
										:src="$store.state.assetRoot + props.image3.path"
									/>
								</div>
								<p class="mbr-text mbr-fonts-style display-6">
									{{ props.text3 }}
								</p>
								<div class="text-wrap"></div>
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