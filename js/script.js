$(function(){
    /* 모바일메뉴 */
    const btnOpen = $('.btn-open')
    const btnClose = $('.btn-close')
    const mMenu = $('.m-menu')

    btnOpen.click(function(){
        mMenu.addClass('open')
    })
    btnClose.click(function(){
        mMenu.removeClass('open')
    })

    /* 스와이퍼 */
    const swiper = new Swiper('#main-slide', {
        pagination: {
            el: '#main-slide .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#main-slide .swiper-button-next',
            prevEl: '#main-slide .swiper-button-prev',
        },
    })
})