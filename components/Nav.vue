<template>
	<div style="margin-bottom: 50px">
		<section class="menu cid-rArXDGngPj" once="menu" id="menu01-0">
			<nav
				class="
					navbar navbar-expand
					beta-menu
					navbar-dropdown
					align-items-center
					navbar-fixed-top navbar-toggleable-sm
				"
			>
				<button
					class="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<div class="hamburger">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>
				<div class="menu-logo">
					<div class="navbar-brand">
						<span class="navbar-logo">
							<a href="/">
								<img
									src="/images/logo-gl.svg"
									alt="Green Lions Gardening Primary Logo"
									style="height: 3.8rem"
								/>
							</a>
						</span>
						<span class="navbar-caption-wrap"
							><a
								class="navbar-caption text-black text-primary display-2"
								href="/"
								>Green Lions Gardening</a
							></span
						>
					</div>
				</div>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul
						class="navbar-nav nav-dropdown nav-right"
						data-app-modern-menu="true"
					>
						<li class="nav-item dropdown">
							<a
								class="
									nav-link
									link
									text-warning text-primary
									display-7
									dropdown-toggle
								"
								aria-expanded="false"
								data-toggle="dropdown-submenu"
								><span
									class="
										mobi-mbri mobi-mbri-setting
										mbr-iconfont mbr-iconfont-btn
									"
									style="font-size: 20px"
								></span
								>Services</a
							>
							<div class="dropdown-menu">
								<a
									:href="'/services/' + item.slug"
									v-for="(item, index) in $store.state.staticData[0][0]"
									:key="index"
									class="text-warning text-primary dropdown-item display-7"
									aria-expanded="false"
									>{{ item.name }}</a
								>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a
								class="
									nav-link
									link
									text-warning text-primary
									dropdown-toggle
									display-7
								"
								href="#"
								aria-expanded="false"
								data-toggle="dropdown-submenu"
								><span
									class="
										mobi-mbri mobi-mbri-hearth
										mbr-iconfont mbr-iconfont-btn
									"
									style="font-size: 20px"
								></span
								>Clients</a
							>
							<div class="dropdown-menu">
								<a
									:href="'/clients/' + item.slug"
									v-for="(item, index) in $store.state.staticData[3][0]"
									:key="index"
									class="text-warning text-primary dropdown-item display-7"
									aria-expanded="false"
									>{{ item.name }}</a
								>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a
								class="
									nav-link
									link
									text-warning text-primary
									dropdown-toggle
									display-7
								"
								href="#"
								aria-expanded="true"
								data-toggle="dropdown-submenu"
								><span
									class="
										mobi-mbri mobi-mbri-map-pin
										mbr-iconfont mbr-iconfont-btn
									"
									style="font-size: 20px"
								></span
								>Area Served</a
							>

							<div class="dropdown-menu">
								<a
									:href="'/area-served/' + item.slug"
									v-for="(item, index) in $store.state.staticData[1][0]"
									:key="index"
									class="text-warning text-primary dropdown-item display-7"
									aria-expanded="false"
									>{{ item.name }}</a
								>
							</div>
						</li>
						<li class="nav-item">
							<a
								class="nav-link link text-warning text-primary display-7"
								href="../portfolio"
								aria-expanded="false"
								><span
									class="
										mobi-mbri mobi-mbri-photos
										mbr-iconfont mbr-iconfont-btn
									"
									style="font-size: 20px"
								></span
								>Portfolio</a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link link text-warning text-primary display-7"
								href="../contact"
								><span
									class="
										mobi-mbri mobi-mbri-phone
										mbr-iconfont mbr-iconfont-btn
									"
									style="font-size: 20px"
								></span
								>Contact</a
							>
						</li>
					</ul>
				</div>
			</nav>
		</section>
	</div>
</template>


<script>
export default {
	jsonld() {
		let root = this.$store.state.webSite;
		let services = this.$store.state.staticData[0][0];
		let clients = this.$store.state.staticData[3][0];
		let areaserved = this.$store.state.staticData[1][0];
		let portfolio = this.$store.state.staticData[2][0];

		let arr = [
			{
				"@type": "ListItem",
				position: 1,
				name: "Services",
				item: root + "/services/",
			},
			{
				"@type": "ListItem",
				position: 1,
				name: "Clients",
				item: root + "/clients/",
			},
			{
				"@type": "ListItem",
				position: 1,
				name: "Portfolio",
				item: root + "/portfolio/",
			},
			{
				"@type": "ListItem",
				position: 1,
				name: "Area Served",
				item: root + "/area-served/",
			},
		];
		services.forEach((element) => {
			arr.push({
				"@type": "ListItem",
				position: 2,
				name: element.name,
				item: root + "/" + element.slug,
			});
		});
		clients.forEach((element) => {
			arr.push({
				"@type": "ListItem",
				position: 2,
				name: element.name,
				item: root + "/" + element.slug,
			});
		});
		areaserved.forEach((element) => {
			arr.push({
				"@type": "ListItem",
				position: 2,
				name: element.name,
				item: root + "/" + element.slug,
			});
		});
		portfolio.forEach((element) => {
			arr.push({
				"@type": "ListItem",
				position: 2,
				name: element.name,
				item: root + "/" + element.slug,
			});
		});

		//Return as JSONLD
		return {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: arr,
		};
	},
};
</script>