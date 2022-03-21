<template lang="">
    <div>
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
								{{ props.title }}
							</h2>
							<h2
								class="
									mbr-section-subtitle
									align-left
									mbr-white mbr-light mbr-fonts-style
									display-7
								"
							>
								{{ props.text }}
							</h2>
						</div>
					</div>

					<div class="col-lg-6">
						<img
							:src="$store.state.assetRoot + props.image.path"
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
											{{ props.dropdown_title1 }}&nbsp;&nbsp;<span
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
											{{ props.dropdown_text1 }}
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
											{{ props.dropdown_title2 }}&nbsp;<span
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
											{{ props.dropdown_text2 }}
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
											{{ props.dropdown_title3
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
											{{ props.dropdown_text3 }}
										</p>
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