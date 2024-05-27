let swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                   ' из ' +
                   '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            pagination: {
                type: 'bullets',
            },
        },

        320: {
            slidesPerView: 1,
            pagination: {
                type: 'bullets',
            },
        },
        480: {
            slidesPerView: 2,
            pagination: {
                type: 'bullets',
            },
        },
        768: {
            
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                           ' из ' +
                           '<span class="' + totalClass + '"></span>';
                }
            }
        },
        1024: {
            slidesPerView: 4,
        }
    }
});