<template>
    <div>
        <div data-aos="zoom-in" class="product-card">
            <div class="ribbon ribbon-top-right"><span>{{product.price | currency }}</span></div>
            <div class="card">
                <img :src="'../' + product.asset" class="card-img-top" alt="default">
                <div class="card-body text-center">
                    <div class="card-title">{{product.name}}</div>
                    <p class="card-text">{{product.shortDescription}}</p>
                    <button  class="btn button primary">Know More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product']
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

/* price ribbon */
.ribbon {
  width: 123px;
  height: 123px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: '';
  display: block;
  border: 5px solid var(--primary-color-dark);
}
.ribbon span {
  position: absolute;
  display: block;
  width: 172px;
  padding: 15px 0;
  background-color: var(--primary-color);
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
  color: #fff;
  font: 700 18px/1 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0,0,0,.2);
  text-transform: uppercase;
  text-align: center;
}

/* top right*/
.ribbon-top-right {
  top: 0px;
  right: 2px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 0;
}
.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}
.ribbon-top-right span {
  left: -8px;
  top: 21px;
  transform: rotate(45deg);
}

</style>