<template>
    <div class="wrapperTest">
       <header class="header">
    <div class="container">
        <nav class="header__nav">
            <div class="row d-flex align-items-center">
                <div class="col-1 d-block d-sm-none d-lg-block">
                    <picture><source srcset="img/header/LOGO.webp" type="image/webp"><img src="img/header/LOGO.jpg" alt=""></picture>
                </div>
                <div class="col-lg-6 col-1 order-sm-1 order-lg-0 ms-auto">
                    <nav>
                        <div class="hamburger">
                          <div class="line"></div>
                          <div class="line"></div>
                          <div class="line"></div>
                        </div>
                        <ul class="nav-links">
                          <li><a href="#">How it works</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Instructions</a></li>
                          <li><a href="#">Accounts</a></li>
                          <li><a href="#">Platforms</a></li>
                          <li><a href="#">Contact</a></li>
                        </ul>
                      </nav>
                </div>
                <div class="d-none d-lg-block offset-xl-2 col-xl-1 col-lg-2 mr-auto">
                    <form action="#">
                        <div class="dropdown header__btn-lang btn-lang">
                            <a class="btn btn-lang__title" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                              EN
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              <li><a class="dropdown-item" href="#">RU</a></li>
                              <li><a class="dropdown-item" href="#">FR</a></li>
                            </ul>
                          </div>
                    </form>
                </div>
                <div class="d-none d-sm-block col-xl-2 col-lg-3 col-md-4 offset-lg-0 offset-md-7 col-sm-5 offset-sm-6 mr-auto">
                    <div class="header__btn-sign btn-sign">
                        <button class="btn btn-sign__button" href="#" role="button">
                            Sign in for free
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div class="header__main header-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <div class="header-content__container header-container ">
                        <div class="header-container__title">
                            <h1><span>Trade everywhere.</span><span>Invest here!</span></h1>
                        </div>
                        <div class="header-container__subtitle col-lg-10">
                            We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. 
                        </div>
                            <button class="header-container__btn btn" href="#" role="button">
                                Start trading
                            </button>
                    </div>
                </div>
                <div class="offset-lg-1 col-lg-5 col-12 mb-sm-3">
                    <img class="img-fluid header__image" src="img/header/header-main.png" alt="Main Image">
                </div>
            </div>
        </div>
    </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    mounted: function () {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
        });
    }
}
</script>

<style lang="css" scoped>

</style>