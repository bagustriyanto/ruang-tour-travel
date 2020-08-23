<template>
  <div>
    <!-- Inspiro Slider -->
    <div
      id="slider"
      class="bg-light inspiro-slider"
      data-height-xs="360"
    >
      <!-- Slide 1 -->
      <div class="slide">
        <div class="container">
          <div class="slide-captions text-center text-dark">
            <!-- Captions -->
            <h2>Sisihkan uangmu untuk berlibur<br />dengan kami</h2>
            <p class="lead">Pengalaman baru, teman baru dan semangat baru</p>
            <!-- end: Captions -->
          </div>
        </div>
      </div>
      <!-- end: Slide 1 -->
    </div>
    <!--end: Inspiro Slider -->
    <!-- Services -->
    <section class="page-content">
      <div class="container">
        <div class="row">
          <!-- features box -->
          <div
            class="col-lg-6"
            data-animate="rotateInDownLeft"
          >
            <h4><i class="fa fa-heart"></i> Pelayanan Terbaik</h4>
            <p>
              We’re POLO, a creative agency located in the heart of New York
              city. A true story, that never been told!. Fusce id mi diam, non
              ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu.
            </p>
          </div>
          <!-- end: features box -->
          <!-- features box -->
          <div
            class="col-lg-6"
            data-animate="rotateInUpLeft"
          >
            <h4><i class="fa fa-donate"></i> Harga Bersaing</h4>
            <p>
              We’re POLO, a creative agency located in the heart of New York
              city. A true story, that never been told!. Fusce id mi diam, non
              ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu.
            </p>
          </div>
          <!-- end: features box -->
          <!-- end features box -->
        </div>
        <div class="row">
          <!-- features box -->
          <div
            class="col-lg-6"
            data-animate="rotateInDownRight"
          >
            <h4><i class="fa fa-map"></i> Destinasi Terkini</h4>
            <p>
              We’re POLO, a creative agency located in the heart of New York
              city. A true story, that never been told!. Fusce id mi diam, non
              ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu.
            </p>
          </div>
          <!-- end: features box -->
          <!-- features box -->
          <div
            class="col-lg-6"
            data-animate="rotateInUpRight"
          >
            <h4><i class="fa fa-briefcase"></i> Pengalaman Baru</h4>
            <p>
              We’re POLO, a creative agency located in the heart of New York
              city. A true story, that never been told!. Fusce id mi diam, non
              ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu.
            </p>
          </div>
          <!-- end: features box -->
        </div>
      </div>
    </section>
    <!-- end: Services -->

    <section id="page-content">
      <div class="container">
        <div class="row">
          <div
            class="col-9 col-lg-6"
            data-animate="bounceIn"
          >
            <img
              src="images/other/550x240.png"
              class="img-fluid rounded"
              alt=""
              style="height: 240px; width: 550px;"
            />
          </div>
          <div class="col-9 col-lg-6">
            <div class="row">
              <div
                class="col-9 col-lg-6"
                data-animate="bounceInRight"
              >
                <img
                  src="images/timeline/1.jpg"
                  class="img-fluid img-thumbnail"
                  alt=""
                  style="height: 240px; width: 300px;"
                />
              </div>
              <div
                class="col-9 col-lg-6"
                data-animate="bounceInRight"
              >
                <img
                  src="images/timeline/2.jpg"
                  class="img-fluid img-thumbnail"
                  alt=""
                  style="height: 240px; width: 300px;"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="row"
          style="margin-top: 15px;"
        >
          <div class="col-18 col-lg-12">
            <div class="row">
              <div
                class="col-4 col-lg-3"
                data-animate="bounceInLeft"
              >
                <img
                  src="images/timeline/1.jpg"
                  class="img-fluid img-thumbnail"
                  alt=""
                />
              </div>
              <div
                class="col-4 col-lg-3"
                data-animate="bounceInLeft"
              >
                <img
                  src="images/timeline/2.jpg"
                  class="img-fluid img-thumbnail"
                  alt=""
                />
              </div>
              <div
                class="col-4 col-lg-3"
                data-animate="bounceInRight"
              >
                <img
                  src="images/timeline/2.jpg"
                  class="img-fluid img-thumbnail"
                  alt=""
                />
              </div>
              <div
                class="col-4 col-lg-3"
                data-animate="bounceInRight"
              >
                <img
                  src="images/timeline/2.jpg"
                  class="img-fluid img-thumbnail"
                  alt=""
                />
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
  name: 'Home',
  beforeRouteEnter(to, from, next) {
    if (from.name) window.location.href = to.fullPath
    next()
  }
};
</script>
