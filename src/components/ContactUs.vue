<template>
    <div>
        <HeaderBanner
        banner-title="LET'S GET IN TOUCH"
            banner-text="We have introduced ourselves now is the time YOU get introduced to us. Message us your requirements and we shall get back to you!"
            :banner-image="Default"
        ></HeaderBanner>
    </div>
</template>

<script>
import HeaderBanner from '../views/HeaderBanner';
import Default from '../assets/default.png';
export default {
    components: {
        HeaderBanner
    },
    data(){
        return{
            Default
        }
    }
}
</script>