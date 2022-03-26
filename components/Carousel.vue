<template lang="">
    <div>
        			<div 
							id="carouselExampleControls"
							class="carousel slide"
							data-ride="carousel"
						>
							<div class="carousel-inner" >
								<div :class="'carousel-item'+ifZero(index)" v-for="(item, index) in props" :key="index">
									<img
                                    :alt='item.meta.title'
                                   
                                    style="height: 450px;width: 100%; object-fit: cover; "
                                    
                                
										:src="$store.state.webRoot  + item.path"
									
									/>
                        
								</div>

							
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleControls"
								role="button"
								data-slide="prev"
							>
								<span
									class="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span class="sr-only">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleControls"
								role="button"
								data-slide="next"
							>
								<span
									class="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
    </div>
</template>

<script>
export default {
	props: ["props"],
	methods: {
		ifZero(index) {
			if (index < 1) {
				return " active";
			} else return "";
		},
	},
};
</script>