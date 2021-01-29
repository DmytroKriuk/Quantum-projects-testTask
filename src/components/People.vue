<template>
    <div class="wrapperTest">
         <section class="people">
        <div class="container">
            <div class="row">
                <div class="people-slider">
                    <div class="people-slider__wrapper">
                        <div class="people-slider__header col-xl-5 col-lg-6 col-sm-7">
                            <div class="people-slider__title">
                                <h2>People love Big <span>Invest</span></h2>
                            </div>
                            <div class="people-slider__control">
                                <div class="people-slider__arrow people-slider__arrow_prev _arrow _arrow_prev swiper-button-prev"></div>
                                <div class="people-slider__arrow people-slider__arrow_next _arrow _arrow_next  swiper-button-next"></div>
                            </div>
                        </div>
                        <div class="div col-xl-5 col-lg-6 people-slider__quote">
                            <div class="people-slider__arrow people-slider__arrow_prev _arrow _arrow_prev_quote swiper-button-prev"></div>
                        <div class="people-slider__item swiper-container ">
                            <div class="swiper-wrapper">
                                <div class="people-slider__slide swiper-slide">
                                    <div class="people-slider__content">
                                        <div class="people-slider__author">
                                            <picture><source srcset="img/author.webp" type="image/webp"><img src="img/author.png" alt="Author"></picture>
                                            <div class="people-slider__container">
                                                <div class="people-slider__container_title">Albert Abello</div>
                                                <div class="people-slider__container_subtitle">Director of Growth</div>
                                            </div>
                                        </div>
                                        <div class="people-slider__quote">
                                           This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.
                                        </div>
                                    </div>
                                </div>
                                <div class="people-slider__slide swiper-slide">
                                    <div class="people-slider__content">
                                        <div class="people-slider__author">
                                            <picture><source srcset="img/author.webp" type="image/webp"><img src="img/author.png" alt="Author"></picture>
                                            <div class="people-slider__container">
                                                <div class="people-slider__container_title">Albert Abello</div>
                                                <div class="people-slider__container_subtitle">Director of Growth</div>
                                            </div>
                                        </div>
                                        <div class="people-slider__quote">
                                            This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.
                                        </div>
                                    </div>
                                </div>
                                <div class="people-slider__slide swiper-slide">
                                    <div class="people-slider__content">
                                        <div class="people-slider__author">
                                            <picture><source srcset="img/author.webp" type="image/webp"><img src="img/author.png" alt="Author"></picture>
                                            <div class="people-slider__container">
                                                <div class="people-slider__container_title">Albert Abello</div>
                                                <div class="people-slider__container_subtitle">Director of Growth</div>
                                            </div>
                                        </div>
                                        <div class="people-slider__quote">
                                            This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.
                                        </div>
                                    </div>
                                </div>
                                <div class="people-slider__slide swiper-slide">
                                    <div class="people-slider__content">
                                        <div class="people-slider__author">
                                            <picture><source srcset="img/author.webp" type="image/webp"><img src="img/author.png" alt="Author"></picture>
                                            <div class="people-slider__container">
                                                <div class="people-slider__container_title">Albert Abello</div>
                                                <div class="people-slider__container_subtitle">Director of Growth</div>
                                            </div>
                                        </div>
                                        <div class="people-slider__quote">
                                            This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="people-slider__arrow people-slider__arrow_next _arrow _arrow_next_quote  swiper-button-next"></div>
                        </div>
                    </div>
                    <div class="people-slider__info offset-6 col-2"></div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle';
export default {
    name: 'People',
    mounted: function () {

        if (document.querySelector('.people-slider')) {
            new Swiper('.people-slider__item', {

            slidesPerView: 1,
            spaceBetween: 10,
            speed: 800,
            pagination: {
                el: '.people-slider__info',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            });
    
        }
    }
}
</script>

<style lang="css" scoped>

</style>