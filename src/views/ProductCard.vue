<template>
    <div>
        <div data-aos="zoom-in" class="product-card">
            <div class="card">
                <img src="../assets/default.png" class="card-img-top" alt="default">
                <div class="card-body text-center">
                    <div class="card-title">{{name}}</div>
                    <p class="card-text">{{description}}</p>
                    <button  class="btn button primary">Know More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'name' , 'description']
}
</script>

<style scoped>
    .product-card {
        background-color: var(--gradient-color);
        padding: 10px;
    }

    .card{
        border: none;
        box-shadow: var(--box-shadow);
    }

    .card-title {
        font: normal 500 20px/32px var(--roboto);
        color: var(--primary-color-dark);
        color: var(--primary-color-dark);
        border-bottom: 1px solid var(--background-light);
        width: 100%;
    }

    .card-text {
        font: normal 300 14px/32px var(--roboto);
        color: var(--primary-color-light);
    }

</style>