<template>
    <div>
        <div class="product-card">
            <div class="card">
                <img src="../assets/default.png" class="card-img-top" alt="default">
                <div class="card-body text-center">
                    <h5 class="card-title">{{name}}</h5>
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
    }

</style>