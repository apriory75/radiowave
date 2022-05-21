const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {

    searchEnabled: false,

});
// accordion
$(function () {
    $('.accordion').accordion({
        collapsible: true,
        active: 0,
        heightStyle: 'content'

    });

});
document.querySelectorAll('.guest__block-blog__btn').forEach(el => {
    el.addEventListener('click', (e) => { 
    document.querySelectorAll('.guest__block .guest__block-blog__btn').forEach(el => {el.classList.remove('blog_active')}); 
    e.currentTarget.classList.add('blog_active');
    
    });
    
    });
    // смена картинок
document.querySelectorAll('.guest__block-blog__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {

        const text = event.currentTarget.dataset.text
        document.querySelectorAll('.guest__block-media .guest__block-image__item').forEach(function (tabContent) {
            tabContent.classList.remove('guest__block-image__item_active')
        })
        document.querySelector(`.guest__block-media [data-img="${text}"]`).classList.add('guest__block-image__item_active')
    })
});
// плавный скролл
$(document).ready(function () {
    $("a.header-first__list-link").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1600);
        return false;
    });
});
// validation

new JustValidate('.our__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
 
        mail: {
            required: true,
            mail: true
        },
    },
});