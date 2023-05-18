<template lang="">
    <div>
        	<div class="container pt-5">
				<div class="row">
					<div class="mbr-testimonial align-center col-12 col-md-6 md-pb">
						<div class="panel-item">
							<div class="card-block">
								<div class="testimonial-photo">
									<img
										:src="$store.state.assetRoot + props.image1.path"
										:alt="props.image1.description"
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
										{{ props.name1 }}&nbsp;
									</h3>
									<h4
										class="
											mbr-author-desc
											pb-1
											mbr-black mbr-bold mbr-light mbr-fonts-style
											display-7
										"
									>
										{{ props.title1 }}
									</h4>
									<h4 class="phone pb-1 mbr-black mbr-fonts-style display-7">
										<!-- Call<strong> {{ props.number1 }}</strong> -->
									</h4>
								</div>
								<p class="mbr-text mbr-fonts-style display-4">
									{{ props.text1 }}
								</p>
							</div>
						</div>
					</div>

					<!-- <div class="mbr-testimonial align-center col-12 col-md-6 md-pb">
						<div class="panel-item">
							<div class="card-block">
								<div class="testimonial-photo">
									<img
										:src="$store.state.assetRoot + props.image2.path"
											:alt="props.image1.description"
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
										{{ props.name2 }}
									</h3>
									<h4
										class="
											mbr-author-desc
											pb-1
											mbr-black mbr-bold mbr-light mbr-fonts-style
											display-7
										"
									>
										{{ props.title2 }}
									</h4>
									<h4 class="phone pb-1 mbr-black mbr-fonts-style display-7">
										Call <strong>{{ props.number2 }}</strong
										>&nbsp;
									</h4>
								</div>
								<p class="mbr-text mbr-fonts-style display-4">
									{{ props.text2 }}
								</p>
							</div>
						</div> -->
					</div>
				</div>
			</div>
    </div>
</template>

<script>
export default {
	props: ["props"],
};
</script>