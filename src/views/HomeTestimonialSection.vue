<template>
    <div>
        <SectionHeader  heading="Happy Customers" subHeading="Let's See What They Say"></SectionHeader>

        <div class="carousel_container">
        <carousel 
        :autoplay="true" 
        :nav="false"
        :items="2"
        :margin="10"
        :loop="true"
        >

            <div class="client row">
                    <div class="col-lg-4 col-md-12 client-img">
                        <img src="../assets/default.png" alt="img-1" class="img-fluid">
                    </div>
                    <div class="col-lg-8 col-md-12 about-client">
                        <h4 class="text-uppercase">Om Dhanwant</h4>
                        <p class="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit inventore consectetur corrupti odio cum aliquam esse, nobis dicta culpa repellendus suscipit soluta quaerat officiis obcaecati saepe quo libero quae?</p>

                    </div>
                </div>

            <div class="client row">
                    <div class="col-lg-4 col-md-12 client-img">
                        <img src="../assets/default.png" alt="img-1" class="img-fluid">
                    </div>
                    <div class="col-lg-8 col-md-12 about-client">
                        <h4 class="text-uppercase">Om Dhanwant</h4>
                        <p class="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit inventore consectetur corrupti odio cum aliquam esse, nobis dicta culpa repellendus suscipit soluta quaerat officiis obcaecati saepe quo libero quae?</p>

                    </div>
                </div>

            <div class="client row">
                    <div class="col-lg-4 col-md-12 client-img">
                        <img src="../assets/default.png" alt="img-1" class="img-fluid">
                    </div>
                    <div class="col-lg-8 col-md-12 about-client">
                        <h4 class="text-uppercase">Om Dhanwant</h4>
                        <p class="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit inventore consectetur corrupti odio cum aliquam esse, nobis dicta culpa repellendus suscipit soluta quaerat officiis obcaecati saepe quo libero quae?</p>

                    </div>
                </div>

            <div class="client row">
                    <div class="col-lg-4 col-md-12 client-img">
                        <img src="../assets/default.png" alt="img-1" class="img-fluid">
                    </div>
                    <div class="col-lg-8 col-md-12 about-client">
                        <h4 class="text-uppercase">Om Dhanwant</h4>
                        <p class="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit inventore consectetur corrupti odio cum aliquam esse, nobis dicta culpa repellendus suscipit soluta quaerat officiis obcaecati saepe quo libero quae?</p>

                    </div>
                </div>

        </carousel>
        </div>
        
    </div>
</template>

<script>
import Carousel from 'vue-owl-carousel'
import SectionHeader from '../views/SectionHeader';
export default {
    components: {
        Carousel,
        SectionHeader
    }
}
</script>

<style scoped>
.carousel_container{
    margin-bottom: 2rem;
}

.carousel_container .client {
    background: #ffffff10;
    box-shadow: var(--box-shadow);
    margin: 3rem 0rem;
}

.carousel_container .client .client-img {
    padding: 2rem;
}

.carousel_container .client .about-client {
    padding-top: 2rem;
}

.carousel_container .client .about-client h4 {
    font: normal 500 21px/20px var(--roboto);
}

.carousel_container .client .about-client p {
    font-size: 14px;
}
/* 
.carousel_container .owl-carousel .owl-item {
    display: flex;
    justify-content: center;
    padding: 0 1.5rem;
} */
</style>