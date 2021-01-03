<template>
    <div>
 <header class="header_area">
        <div class="main_menu" data-aos="fade-down">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand"><img src="" alt="logo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="mr-auto extra"></div>
                  <ul class="navbar-nav">
                    <li class="nav-item">
                     <router-link to="/home"
                    > <a class="nav-link">Home <span class="sr-only">(current)</span></a>
                    </router-link>
                    </li>
                    <li class="nav-item">
                     <router-link to="/about-us"
                    > <a class="nav-link">About Us</a>
                     </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products-gallery"
                    >
                      <a class="nav-link">Products Gallery</a>
                        </router-link>
                    </li>
                      <li class="nav-item">
                          <router-link to="/contact-us"
                    >
                        <a class="nav-link">Contact Us</a>
                          </router-link>
                      </li>
                    
                  </ul>
                </div>
              </nav>
        </div>
    </header>
        

    </div>
</template>

<style scoped>
.header_area {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: var(--box-shadow);
}

.header_area .main_menu .navbar .navbar-brand {
    padding: 0.2rem 0.5rem;
}
.header_area .main_menu .navbar {
    padding: 2rem 10rem;
}

.header_area .main_menu .nav-item .nav-link{
    font: normal 500 15px/2px var(--roboto);
    text-transform: uppercase;
    padding: 1.7rem;
    color: var(--title-color);

}

.header_area .main_menu .navbar-nav .extra {
    display: block;
}

.header_area .main_menu .navbar-nav .active a{
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.header_area .main_menu .navbar-nav a:hover{
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* responsive */
@media only screen and (max-width: 992px) {
  .extra {
      display: none;
  }

  .header_area .main_menu .navbar {
    padding: 2rem;
}
}
</style>