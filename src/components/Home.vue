<template>
    <div>
        <!-- add banner here-->
        
        <section class="aboutus-section">
            <SectionHeader  heading="About Us"></SectionHeader>
            
            <div class="col-12">
                <p class="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                </p>
                <p class="read-more">
                    <button @click="navigateTo('about-us')" class="btn button primary">Know Us More</button>
                </p>
            </div>
        </section>


    <HomeProductSection></HomeProductSection>
        
    </div>
</template>

<script>
import SectionHeader from '../views/SectionHeader';
import HomeProductSection from '../views/HomeProductSection';

export default {
    components: {
        SectionHeader,
        HomeProductSection
    },

    methods: {
        navigateTo(path){
            this.$router.push(`/${path}`)
        }
    }
}
</script>

<style scoped>
.aboutus-section .read-more {
  width: 100%; 
  text-align: center; 
  margin: 0; 
  padding: 2px 0; 
  /* filter: brightness(1.5); */
  /* background-image: linear-gradient(to bottom, transparent, var(--primary-color-light)); */
}

.aboutus-section .read-more a {
    font-size: 22px;
    color: var(--primary-color-dark)!important;
    border: 1px solid var(--primary-color-dark);
    padding: 5px;
    border-radius: 5px;
}
</style>