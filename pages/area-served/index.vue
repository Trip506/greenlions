<template>
  <div>
    <section class="footer2 cid-rArXHg1PU8" once="footers" id="footer02-10">
      <div class="container">
        <div class="media-container-row align-center mbr-white">
          <div class="col-12">
            <p class="mbr-text mb-0 mbr-fonts-style display-7">
              © The Green Lions Gardening Services&nbsp;
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="header1 woodm4_header1 cid-sVV6ZZuHL7" id="header01-6c">
      <div
        class="mbr-overlay"
        style="opacity: 0.5; background-color: rgb(35, 35, 35)"
      ></div>

      <div class="container">
        <div class="row justify-content-md-end">
          <div class="mbr-white col-lg-6 col-md-12">
            <h1
              class="mbr-section-title align-left mbr-bold pb-4 mbr-fonts-style display-1"
            >
              <div></div>
              <div>Where we serve</div>
            </h1>

            <p class="mbr-text pb-4 align-left mbr-fonts-style display-7">
              We're based in Penzance and serve clients all across West
              Cornwall&nbsp;
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content2 woodm4_content2 cid-sVP4gmEE1H" id="content02-5m">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 md-pb">
            <img src="assets/images/layer2.svg" alt="" />
          </div>

          <div class="col-lg-6">
            <p class="text1 pb-3 align-left mbr-fonts-style display-5">
              Green Lions Gardening Services&nbsp;
            </p>
            <h3
              class="mbr-section-subtitle mbr-bold mbr-black mbr-light pb-3 mbr-fonts-style display-2"
            >
              Towns and areas we regularly serve&nbsp;
            </h3>
            <div
              class="mbr-text pb-5 counter-container mbr-fonts-style display-7"
            >
              <ul>
                <li>Penzance</li>
                <li>St.Ives</li>
                <li>Carbis Bay&nbsp;</li>
                <li>Hayle</li>
                <li>Lelant</li>
                <li>Marazion</li>
                <li>Sennen</li>
                <li>Lands End</li>
                <li>St.Just&nbsp;</li>
                <li>St.Buryan&nbsp;</li>
              </ul>
            </div>
            <p class="text2 align-left mbr-fonts-style display-7">
              Donec id elit non mi porta gravida at eget metus. Maecenas
              faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare
              sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta
              felis euismod semper. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Areas served | Green Lions Gardening",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "We provide gardening services for clients in West Penwith. We operate from Penzance and serve St.Ives, Carbis Bay, Hayle, Lelant, Camborne, St.Just, Lands End. ",
      },
    ],
  },
  data() {
    return {
      posts: [],
      error: "",
    };
  },

  components: {
    Contact: () => import("@/components/Contact"),
    Services: () => import("@/components/Services"),
  },

  //get strapi data
};
</script>