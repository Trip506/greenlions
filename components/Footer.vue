<template>
	<div>
		<section class="features1 cid-rArXGEBt9s" id="footer01-a">
			<div class="container">
				<div class="row">
					<div class="col-12 align-center">
						<img
							src="/images/logomark-7.svg"
							alt="Green Lions Gardening Logo"
						/>
					</div>
					<div class="card p-3 col-12 col-md-6 col-lg-4">
						<div class="card-box">
							<h4 class="card-title mbr-bold mbr-fonts-style display-5">
								More
							</h4>
							<p class="mbr-text mbr-fonts-style display-7">
								<a href="../plant-species">Plant Library</a><br />
								<a href="../funny-photos">Funny Photos</a><br />
							</p>
						</div>
					</div>

					<div class="card p-3 col-12 col-md-6 col-lg-4">
						<div class="card-box">
							<h4 class="card-title mbr-bold mbr-fonts-style">
								Email Sam
							</h4>
							<p class="mbr-text mbr-fonts-style display-5">
								<!-- <span
								class="
									mobi-mbri mobi-mbri-phone
									mbr-iconfont mbr-iconfont-btn
								"
								style="font-size: 20px"
							></span
							> {{$store.state.staticData[4][0].people.phone1}}<br /> -->
								<span
							class="
								mobi-mbri mobi-mbri-letter
								mbr-iconfont mbr-iconfont-btn
							"
							style="font-size: 20px"
						></span
						>  <span class="display-7">{{$store.state.staticData[4][0].email}} </span>
							</p>
						</div>
					</div>

					<div class="card p-3 col-12 col-md-6 col-lg-4">
						<div class="card-box">
							<h4 class="card-title mbr-bold mbr-fonts-style display-5">
								Social 
							</h4>
							<p class="mbr-text mbr-fonts-style display-7">
								<a
									:href="$store.state.staticData[4][0].nextdoor"
									class="text-primary"
									target="_blank"
									>Nextdoor</a
								><br /><a
										:href="$store.state.staticData[4][0].facebook"
									class="text-primary"
									target="_blank"
									>Facebook</a
								><br />

								<a class="text-primary" href="../gardeners/leo-rudman">Leo </a><br />
								
							</p>
						</div>
					</div>

					<div class="col-lg-12 pt-5 align-center">
						<div class="icon-wrap">
							<span class="mbr-iconfont socicon-facebook socicon"></span><br />
							<span class="mbr-iconfont socicon-npm socicon"></span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="footer2 cid-rArXHg1PU8" once="footers" id="footer02-b">
			<div class="container">
				<div class="media-container-row align-center mbr-white">
					<div class="col-12">
						<p class="mbr-text mb-0 mbr-fonts-style display-7">
							© Green Lions Gardening Services&nbsp; 

							
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
