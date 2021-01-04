<template>
    <div>
        <div class="footer pb-3 bg-dark text-base footer-position">
    <div class="container">
        <div class="row">
            <div class="col-lg-2 col-md-4 col-6">
                <div class="mb-4">
                    <h4 class="mb-4 text-white">Quick Actions</h4>
                    <ul class="list-unstyled list-group">
                        <li class="list-group-item"><router-link to="/about-us"><a class="list-group-item-link">About Us</a></router-link></li>
                        <li class="list-group-item"><router-link to="/products-gallery"><a class="list-group-item-link">Gallery</a></router-link></li>
                        <li class="list-group-item"><router-link to="/contact-us"><a class="list-group-item-link">Contact Us</a></router-link></li>
                    </ul>
                </div>
            </div>
           
            <div class="col-lg-2 col-md-4 col-6">
                <div class="mb-4">
                    <h4 class="mb-4 text-white ">Serving In</h4>
                    <ul class="list-unstyled list-group ">
                        <li class="list-group-item"><a href="#" class="list-group-item-link">Jaitala</a></li>
                        <li class="list-group-item"><a href="#" class="list-group-item-link"> Pratap Nagar</a></li>
                        <li class="list-group-item"><a href="#" class="list-group-item-link"> Manish Nagar</a></li>
                        <li class="list-group-item"><a href="#" class="list-group-item-link">Somalwada</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <div class="mb-4">
                    <h4 class="mb-4 text-white ">Follow Us On</h4>
                    <ul class="list-unstyled list-group">
                        <li class="list-group-item"><i class="fa fa-instagram" aria-hidden="true" style="color: red; font-size: 18px; padding-right: 5px;"></i><a href="#" class="list-group-item-link">Instagram</a></li>
                        <li class="list-group-item">
                            <i class="fa fa-facebook-official" aria-hidden="true" style="color: #34A2F4; font-size: 18px; padding-right: 5px;"></i>
                            <a  class="list-group-item-link"> Facebook</a></li>
                        <li class="list-group-item">
                            <i class="fa fa-linkedin" aria-hidden="true" style="color: #2477B4; font-size: 18px; padding-right: 5px;"></i>
                            <a  class="list-group-item-link"> LinkedIn</a></li>
                        <li class="list-group-item">
                            <i class="fa fa-youtube" aria-hidden="true" style="color: #E7442E; font-size: 18px; padding-right: 5px;"></i>
                            <a  class="list-group-item-link">YouTube</a></li>
                        <li class="list-group-item">
                            <i class="fa fa-twitter" aria-hidden="true" style="color: #329DEB; font-size: 18px; padding-right: 5px;"></i>
                            <a  class="list-group-item-link">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12">
                <div class="mb-4">
                    <h4 class="mb-4 text-white ">Write Something For Us</h4>
                    <div class="contact-area">
                        <p>Eagerly waiting to know your thoughts and suggestions!</p>
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control border-white" placeholder="Email Address" required="">
                            </div>
                            <button type="submit" class="btn button secondary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="mt-8">
                    <ul class="list-inline text-base fs-12">
                        <li class="list-inline-item">© 2020-21 Roop Organica Pvt. Ltd..</li>
                        <li class="list-inline-item"><a href="#" class="text-reset"> Privacy Policy </a></li>
                        <li class="list-inline-item"><a href="#" class="text-reset"> Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
</template>

<style scoped>
.footer-position{
  position: absolute;
  width: 100%;
  padding: 1rem 20px;
}
.footer.bg-dark {
    background-color: var(--primary-color-dark)!important;
}

.list-group {
    background-color: var(--primary-color-dark)!important;
}
.list-group .list-group-item {
    border: none;
    padding: 0.75rem 0.25rem;
    background-color: var(--primary-color-dark);
}

.list-group .list-group-item .list-group-item-link {
    color: var(--background-light);
}

.contact-area p{
    color: var(--background-light);
}

.list-inline .list-inline-item {
    color: var(--primary-color);
}
</style>