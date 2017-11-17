$('#phone').mask('8-000-000-00-00');


// tabs

$(document).ready(function () {
      var flag = true;

    $('.staff__list-link').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            item = $this.closest('.staff__list-item'),
            container = $this.closest('.container__tabs'),
            content = container.find('.middle__list-item'),
            index = item.index(),
            reqItem = content.eq(index),
            activeItem = content.filter('.middle__list-item_active');

        if (flag) {
            flag = false;

            item
                .addClass('staff__list-item_active')
                .siblings()
                .removeClass('staff__list-item_active');

            activeItem.fadeOut(300, function () {
                reqItem.fadeIn(300, function () {
                    $(this)
                        .addClass('middle__list-item_active')
                        .siblings()
                        .removeClass('middle__list-item_active')
                        flag = true
                });
            });
        }

    });

// accord

    (function(){
        var flag = true;

        $('.accordion__item-link').on('click', function(e){
            e.preventDefault();

            var
                $this = $(this),
                container = $this.closest('.faq__accordion'),
                item = $this.closest('.accordion__item'),
                currentContent = item.find('.accordion__wrap-bot'),
                duration = 500;

            if (flag) {
                flag = false;
                if (!item.hasClass('active')) {

                    item
                        .addClass('active')
                        .siblings()
                        .removeClass('active')
                        .find('.accordion__wrap-bot')
                        .slideUp(duration);

                    currentContent.slideDown(duration, function () {
                        flag = true
                    });
                } else {

                    item.removeClass('active');
                    currentContent.slideUp(function() {
                        flag = true
                    });
                }
            }
        });
    })();

    //smooth scrolling

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    //slider

    (function(){
        $('.single-item').slick({
            dots: true,
            arrows: false
        });

    }());
});




