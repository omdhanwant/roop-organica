<template>
<div>
    <div class="detail_container">
        <img class="wave" src="@/assets/wave.svg" alt="wave">
        <div class="image_container d-flex flex-column">
            <img width="300" :src="product.asset" alt="product">
            <div class="name">{{$route.params.name}}</div>
        </div>
    </div>

    <div class="info_section">

    </div>
</div>

</template>

<script>
import utilService from '../services/utils';
export default {
    data(){
        return {
            product : null
        }
    },
    created() {
        this.product =  utilService.getProductByName(this.$route.params.name);
    }
}
</script>

<style scoped>

.detail_container {
    position: relative;
    height: 80vh;
}

.detail_container .wave {
    object-fit: cover;
    width: 100%;
    height: 50vh;
}

.detail_container .image_container {
    position: absolute;
    display: flex;
    top: 23%;
    left: 20%;
    padding: 4px;
    width: 25%;
    background: #fff;
    box-shadow: var(--box-shadow);
}

.detail_container .image_container .name {
   text-align: center;
   font-size: 18px;
   font-weight: 500;
   line-height: 30px;
   font-family: var(--roboto);
   font-style: normal;
   color: #ffffff;
   background-color: var(--primary-color-light);
}

.detail_container .image_container img {
    object-fit: cover;
    width: 100%;
}

/* responsive */
@media only screen and (max-width: 720px) {
.detail_container .image_container {
    width: 35%;
}
}
</style>