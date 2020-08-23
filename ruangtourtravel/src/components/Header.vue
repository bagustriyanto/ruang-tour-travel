<template>
  <!-- Header -->
  <header id="header">
    <div class="header-inner">
      <div class="container">
        <!--Logo-->
        <div id="logo">
          <a href="index.html">
            <span class="logo-default">
              <span style="color: red;">R</span>UANG LIBURAN</span>
            <span class="logo-dark"><span style="color: red;">R</span></span></a>
        </div>
        <!--End: Logo-->
        <!-- Search -->
        <div id="search">
          <a
            id="btn-search-close"
            class="btn-search-close"
            aria-label="Close search form"
          ><i class="icon-x"></i></a>
          <form
            class="search-form"
            action="search-results-page.html"
            method="get"
          >
            <input
              class="form-control"
              name="q"
              type="text"
              placeholder="Type & Search..."
            />
            <span class="text-muted">Start typing & press "Enter" or "ESC" to close</span>
          </form>
        </div>
        <!-- end: search -->
        <!--Navigation Resposnive Trigger-->
        <div id="mainMenu-trigger">
          <a class="lines-button x"><span class="lines"></span></a>
        </div>
        <!--end: Navigation Resposnive Trigger-->
        <!--Navigation-->
        <div id="mainMenu">
          <div class="container">
            <nav>
              <ul>
                <li>
                  <router-link
                    to="/home"
                    replace
                  >Beranda</router-link>
                </li>
                <li>
                  <router-link
                    to="/destinasi"
                    replace
                  >Destinasi</router-link>
                </li>
                <li class="dropdown">
                  <a href="#">Admin</a>
                  <ul class="dropdown-menu">
                    <li class="dropdown-submenu">
                      <router-link to="/master/destinasi">Master Destinasi</router-link>
                    </li>
                    <li class="dropdown-submenu"><a href="#">Gallery</a></li>
                    <li class="dropdown-submenu">
                      <a href="#">Paket Wisata</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Logout</a></li>
                <li>
                  <router-link to="login">Login</router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!--end: Navigation-->
      </div>
    </div>
  </header>
  <!-- end: Header -->
</template>
<script>
export default {
  name: 'Header'
};
</script>
