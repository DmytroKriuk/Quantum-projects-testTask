<template>
    <div class="wrapperTest"> 
        <section class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 offset-lg-0 offset-md-1 col-md-10 contact__container content-contact">
                        <h2 class="content-contact__title">Contact us!</h2>
                        <div class="content-contact__subtitle">The support staff and customer service are available to help you with any questions or needs you might have. Just drop us a line.</div>
                        <div class="content-contact__owned">This site is owned and operated by Kode Tech Solutions LTD</div>
                        <div class="content-contact__container_phone contact-form">
                        <div class="contact-form__title">Phone:</div>
                        <a class="contact-form__subtitle" href="tel:442038857261">442038857261</a>
                        </div>
                        <div class="content-contact__container_mail contact-form">
                            <div class="contact-form__title">Email:</div>
                            <a class="contact-form__subtitle" href="mailto:help@google.com">help@google.com</a>
                        </div>
                        <div class="content-contact__container_address contact-form">
                            <div class="contact-form__title">Address:</div>
                            <a class="contact-form__subtitle" href="https://u.to/YNj1Gg ">Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Republic of the Marshall Islands, MH 96960</a>
                        </div>
                    </div>
                    <div class="offset-lg-1 col-lg-6 col-md-10 offset-md-1">
                        <form class="form" action="#">
                            <div class="contact__form ">
                                    <div class="contact__field">
                                        <input type="text" name="name" placeholder="Name" required />
                                    </div>
                                    <div class="contact__field">
                                        <input type="email" name="name" placeholder="E-Mail" />
                                        <span class="contact__error">Incorrect email type</span>
                                    </div>
                                    <div class="contact__field">
                                        <input type="text" name="name" placeholder="Message" required />
                                    </div>
                                    <button class="btn contact__button" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Contact',
}
</script>

<style lang="css" scoped>

</style>