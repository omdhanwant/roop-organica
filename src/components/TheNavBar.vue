<template>
    <div>
 <header class="header_area" :class="{'fixed-nav' : isFixed}">
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
                    > <a class="nav-link"><i class="fas fa-seedling"></i> Home <span class="sr-only">(current)</span></a>
                    </router-link>
                    </li>
                    <li class="nav-item">
                     <router-link to="/about-us"
                    > <a class="nav-link"><i class="fas fa-seedling"></i> About Us</a>
                     </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products-gallery"
                    >
                      <a class="nav-link"><i class="fas fa-seedling"></i> Products Gallery</a>
                        </router-link>
                    </li>
                      <li class="nav-item">
                          <router-link to="/contact-us"
                    >
                        <a class="nav-link"><i class="fas fa-seedling"></i> Contact Us</a>
                          </router-link>
                      </li>
                    
                  </ul>
                </div>
              </nav>
        </div>
    </header>
        

    </div>
</template>

<script>
export default {
    props: ['isFixed']
}
</script>

<style scoped>
.header_area {
    box-shadow: var(--box-shadow);
    z-index: 111;
    background: #fff;
    top: -120px;
    transition: all 2s ease;
}

.header_area.fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
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

.header_area .main_menu .navbar-nav a .fa-seedling {
    visibility: hidden
}

.header_area .main_menu .navbar-nav .active a .fa-seedling, .header_area .main_menu .navbar-nav a:hover .fa-seedling{
   visibility: unset;
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