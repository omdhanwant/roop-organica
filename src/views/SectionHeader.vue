<template>
    
         <div class="header-section">
                <span class="line"></span>
                <div class="header-content" data-aos="fade-up">
                <span class="header-text">{{heading}}</span>
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