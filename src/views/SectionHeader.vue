<template>
    
         <div class="header-section">
             
                <span class="line"></span>
                <div class="header-content" data-aos="fade-up">
                <span class="header-text"><i class="fas fa-leaf"></i> {{heading}} <i class="fas fa-leaf"></i> </span>
                <span class="header-subtext">{{subHeading}}</span>
                </div>
                <span class="line"></span>
            </div>
</template>

<script>
export default {
    props: ['heading', 'subHeading']
}
</script>

<style scoped>
.fa-leaf {
    font-size: 35px;
    color: var(--primary-color-light);
}
</style>