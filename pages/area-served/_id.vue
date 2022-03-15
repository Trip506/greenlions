<template>
  <div>
    <section class="footer2 cid-sVVnamXTVa" once="footers" id="footer02-88">
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

    <section class="header1 woodm4_header1 cid-sVVnane6DQ" id="header01-89">
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
              <div>Gardening</div>
              <div>Services in</div>
              <div>Penzance</div>
            </h1>

            <p class="mbr-text pb-4 align-left mbr-fonts-style display-7">
              We're a two man gardening team based in Penzance. We've served the
              surrounding area since 2004. We provide regular and dedicated
              garden maintenance services with a commitment to functional and
              aesthetic results. .
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="content2 woodm4_content2 cid-sVVnanyiDm mbr-fullscreen"
      id="content02-8a"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6 md-pb">
            <h1
              class="mbr-section-title align-left mbr-bold mbr-black pb-5 mbr-fonts-style display-2"
            >
              Gardening for&nbsp; holiday properties&nbsp;
            </h1>
            <img
              src="/images/leo-allotment-digging-1-1000x729.jpg"
              alt="Leo strimming weed overgrowth by a granite wall in St.Ives Cornwall"
            />
          </div>

          <div class="col-lg-6">
            <p class="text1 pb-3 align-left mbr-fonts-style display-7">
              Your gardens need to be regularly maintained all year round with
              work intensifying in the summer season. We're always on call to
              serve your regular garden maintenance needs.&nbsp;<br />
            </p>
            <h3
              class="mbr-section-subtitle mbr-bold mbr-black mbr-light pb-3 mbr-fonts-style display-5"
            >
              What we do:
            </h3>
            <div
              class="mbr-text pb-5 counter-container mbr-fonts-style display-7"
            >
              <ul>
                <li>Mowing and strimming</li>
                <li>Scarifying and aerating lawns</li>
                <li>Overgrowth clearance</li>
                <li>Deep hand weeding&nbsp;</li>
                <li>&nbsp;Chemical weeding</li>
                <li>Hedge trimming and shaping</li>
                <li>Ivy and moss removal&nbsp;</li>
                <li>Tree and shrub pruning</li>
                <li>Minor tree surgery</li>
                <li>Mulching and composting&nbsp;</li>
                <li>Turf Laying</li>
                <li>Pond Care&nbsp;</li>
              </ul>
            </div>
            <p class="text2 align-left mbr-fonts-style display-7">
              We're situated right at the rugged and untamed tip of the most
              beautiful and biodiverse regions of the UK, here you'll find
              species like palms and ecchiums like nowhere else that are
              exclusive in the UK to our local microclimate<br /><br />&nbsp;Summer
              is where green growth explodes outward and demand skyrockets for
              enjoyable gardens as outdoor living and recreational spaces<br /><br />Most
              people can mow their own lawn, but with 18 years of local Cornish
              gardening experience and our professional setup, we are the right
              men to call to make sure things are done smart and properly.&nbsp;
            </p>
          </div>
        </div>
      </div>
    </section>

    <Services />
    <Clients />
    <Contact />
    <Qualities />
  </div>
</template>

<script>
export default {
  components: {
    Services: () => import("@/components/Services"),
    Clients: () => import("@/components/Clients"),
    Contact: () => import("@/components/Contact"),
    Qualities: () => import("@/components/Qualities"),
  },
};
</script>
