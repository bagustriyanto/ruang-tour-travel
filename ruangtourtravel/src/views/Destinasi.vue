<template>
  <div>
    <section id="page-content">
      <div class="container">
        <!-- post content -->
        <!-- Page title -->
        <div class="page-title">
          <h1>Destinasi</h1>
          <div class="breadcrumb float-left">
            <ul>
              <li><a href="#">Home</a></li>
              <li class="active"><a href="#">Destinasi</a></li>
            </ul>
          </div>
        </div>
        <!-- end: Page title -->
        <!-- Blog -->
        <div
          id="blog"
          class="grid-layout post-2-columns m-b-30"
          data-item="post-item"
        >
          <!-- Post item-->
          <div class="post-item border">
            <div class="post-item-wrap">
              <div class="post-image">
                <a href="#"> <img
                    alt=""
                    src="images/blog/12.jpg"
                  /> </a>
                <span class="post-meta-category"><a href="">Lifestyle</a></span>
              </div>
              <div class="post-item-description">
                <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
                <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>
                <h2><a href="#">Standard post with a single image </a></h2>
                <p>
                  Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                  Vivamus luctus commodo dolor porta feugiat. Fusce at velit id
                  ligula pharetra laoreet.
                </p>
                <a
                  href="#"
                  class="item-link"
                >Read More <i class="icon-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <!-- end: Post item-->
          <!-- Post item-->
          <div class="post-item border">
            <div class="post-item-wrap">
              <div class="post-slider">
                <div
                  class="carousel dots-inside arrows-visible arrows-only"
                  data-items="1"
                  data-loop="true"
                  data-autoplay="true"
                  data-lightbox="gallery"
                >
                  <a
                    href="images/blog/11.jpg"
                    data-lightbox="gallery-image"
                  >
                    <img
                      alt=""
                      src="images/blog/16.jpg"
                    />
                  </a>
                  <a
                    href="images/blog/16.jpg"
                    data-lightbox="gallery-image"
                  >
                    <img
                      alt=""
                      src="images/blog/11.jpg"
                    />
                  </a>
                </div>
                <span class="post-meta-category"><a href="">Technology</a></span>
              </div>
              <div class="post-item-description">
                <span class="post-meta-date"><i class="fa fa-calendar-o"></i>Jan 21, 2017</span>
                <span class="post-meta-comments"><a href=""><i class="fa fa-comments-o"></i>33 Comments</a></span>
                <h2><a href="#">Simplicity, a post with slider gallery</a></h2>
                <p>
                  Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                  Vivamus luctus commodo dolor porta feugiat. Fusce at velit id
                  ligula pharetra laoreet.
                </p>
                <a
                  href="#"
                  class="item-link"
                >Read More <i class="icon-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <!-- end: Post item-->
        </div>
        <!-- end: Blog -->
        <!-- Pagination -->
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            ><i class="fa fa-angle-left"></i></a>
          </li>
          <li class="page-item"><a
              class="page-link"
              href="#"
            >1</a></li>
          <li class="page-item"><a
              class="page-link"
              href="#"
            >2</a></li>
          <li class="page-item active"><a
              class="page-link"
              href="#"
            >3</a></li>
          <li class="page-item"><a
              class="page-link"
              href="#"
            >4</a></li>
          <li class="page-item"><a
              class="page-link"
              href="#"
            >5</a></li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            ><i class="fa fa-angle-right"></i></a>
          </li>
        </ul>
        <!-- end: Pagination -->
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Destinasi',
  beforeRouteEnter(to, from, next) {
    if (from.name) window.location.href = to.fullPath
    next()
  }
};
</script>
