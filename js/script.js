$(document).ready(function(){

let menuBtn = document.querySelector('.menu-burger');
let menuBtnClose = document.querySelector('.menu__close');
let menu = document.querySelector('.top-menu');

menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
});
menuBtnClose.addEventListener('click', function(){
	menu.classList.toggle('active');
});
AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the ele

});
});

$(document).ready(function() {
    $(".set > a").on("click", function(evt) {
        evt.preventDefault();
        console.log('sdasad');
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
          .siblings(".content")
          .slideUp(200);
          $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      } else {
          $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
          $(this)
          .find("i")
          .removeClass("fa-plus")
          .addClass("fa-minus");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
          .siblings(".content")
          .slideDown(200);
      }
  });
});
$(document).ready(function() {
    $(".remove").on("click", function(evt) {
        evt.preventDefault();
        $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
        $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
        .siblings(".content")
        .slideDown(200);
    });

   $('.mobile-more').on('click', function(evt) {
        evt.preventDefault();
        $(this).addClass('none');
        $(this).siblings('.mobile-hidden').slideToggle(0);
    });


});



$(function () {
    var $window = $(window);

    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    var accordionsMenu = $('.cd-accordion-menu');
    if( accordionsMenu.length > 0 ) {
        accordionsMenu.each(function(){
            var accordion = $(this);
            //detect change in the input[type="checkbox"] value
            accordion.on('change', 'input[type="checkbox"]', function(){
                var checkbox = $(this);
                ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
            });
        });
    }

    var $topStrip = $(".js-top-strip");
    var menuScrollHandler = function() {
        var scrollTop = $window.scrollTop();
        var scrollLeft = $window.scrollLeft();
        $topStrip.css({ left: -scrollLeft + "px" });
        if (scrollTop > 0) {
            $topStrip.addClass("narrow");
        } else {
            $topStrip.removeClass("narrow");
        }
    };
    $window.scroll(menuScrollHandler);
    menuScrollHandler();

    var $imageSites = $("#imageSites");
    if ($imageSites.length > 0) { var imageSitesTop = $imageSites.offset().top; }

    var $statisticBlock = $("#statistic");
    if ($statisticBlock.length > 0) { var statisticTop = $statisticBlock.offset().top;}

    $('.pw.about #wrap').removeClass('begin').css({'opacity':'1'});
    $('.pw.about .block.about .description').addClass('animated fadeIn');
    $('.pw.about .block.about .book-image').addClass('animated fadeIn');
    $('.pw.about #imageLine').addClass('animate');

    function onScroll() {
        if ($window.scrollTop() + $window.height() * .7 >= imageSitesTop) {
            $('.pw.main:not(.web):not(.opt) #wrap').removeClass('begin').css({'opacity':'1'});
            $('.pw.main:not(.web):not(.opt) .block.about .description').addClass('animated fadeIn');
            $('.pw.main:not(.web):not(.opt) #imageLine').addClass('animate');
        }

        if ($window.scrollTop() + $window.height() * .6 >= statisticTop) {
            $('.pw.main:not(.web):not(.opt) .statistic-circle').addClass('animated zoomIn');
            setTimeout(function () {
                $('.pw.main:not(.web):not(.opt) .statistic .numbers').addClass('animated zoomIn');
            }, 300);
            $('.pw.main:not(.web):not(.opt) .sites-in-base .odometer').html(1084);
            $('.pw.main:not(.web):not(.opt) .sites-in-catalog .odometer').html(327);
            $('.pw.main:not(.web):not(.opt) .users .odometer').html(140);
            $('.pw.main:not(.web):not(.opt) .sites-in-yandex .odometer').html(33);
        }
    }

    $window.on("scroll", function() {
        onScroll();
    });


    $('.cs-select').select2({
        minimumResultsForSearch: Infinity
    });


    var $optButton = $('.js-to-optimise'),
    $webButton = $('.js-to-web'),
    $toMainButton = $('.js-to-main');

    if ($('.pw.main').length > 0 ) {
        window.jsPages = new Pages({
            $pagesWrapper: $('.pw.main')
        });
    }

    $optButton.on('click', function() {
        window.jsPages.switchPage("buyer");
        return false;
    });

    $webButton.on('click', function() {
        window.jsPages.switchPage("seller");
        return false;
    });

    $toMainButton.on('click', function() {
        window.jsPages.switchPage('main');
        return false;
    });

    $('input[type=email]').on("blur", function () {
        var $field = $(this),
        value = $field.val(),
        re = /[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}/,
        valid = re.test(value);
        if (valid) {
            $field.removeClass("js-error");
        } else {
            value == '' ? $field.removeClass("js-error") : $field.addClass("js-error");
        }
    });

    $('textarea[required]').on("keyup", function() {
        var textarea = $(this),
        valid = false;
        valid = textarea.val() != '' ? true : false;
        if (valid) {
            textarea.removeClass("js-error");
        } else {
            textarea.addClass("js-error");
        }
    });


    // Проверка полей формы в попапе
    $('.js-submit').on('click', function(e) {
        var form = $(this).closest('.form'),
        textarea = form.find('textarea[required]'),
        email = form.find('input[type=email]'),
        input = form.find('input[required]');
        textarea.val() !== "" ? textarea.removeClass("js-error") : textarea.addClass("js-error");
        input.val() == '' ? input.addClass("js-error") : input.removeClass("js-error");

        //отправка попапа техподдержки
        if ((textarea.val() !== "") && (email.val() !== '' ) && form.hasClass("support")) {
            form.find('.main-message').hide();
            form.find('.result').fadeIn();
            e.preventDefault();
            setTimeout(function () {
                form.submit();
            }, 2000);
        }
    });

    // Автоматический скролл к комментриям при нажатии на иконку комментариев на странице поста
    $(".pw.blog.article .post .socials .comments").on("click", function() {
        var destElem = $(this).attr("href");
        var destTop = $(destElem).offset().top - 60;
        $("html, body").animate({ scrollTop: destTop }, 500);
        return false;
    });

    // Добавление формы с ответом на комментарий на странице поста
    $('.reply-button').on('click', function() {
        var comment = $(this).closest('.comment-body'),
        id = comment.parent().attr('id'),
        form = comment.find('form');
        if (!form.length) {
            comment.append('<form action="" class="form comment-form" id="replyForm-'+ id +'"><textarea required placeholder="Оставьте своё сообщение" id="textareaReplyForm7" class="autosize" rows="6"></textarea><input type="submit" class="button js-submit" value="Отправить" /></form>');
            autosize($('.autosize'));
        }
    });

    var $popups = $(".popup");
    $popups.each(function(index, popup) {
        var popup = new Popup({
            $popup: $(popup),
            onCloseComplete: function() {
                var form = this.$popup.find(".form").data("form");
            }
        });
    });

    var supportPopup = $(".popup.support").data("popup");

    $(".js-support").on("click", function () {
        supportPopup.open();
        return false;
    });

    var youtubePopup = $(".popup.youtube").data("popup");

    $(".js-youtube").on("click", function () {
        youtubePopup.open();
        return false;
    });

    var insurePopup = $(".popup.insure").data("popup");

    $(".js-insure").on("click", function () {
        insurePopup.open();
        return false;
    });

    var autoFilterPopup = $(".popup.autofilter").data("popup");

    $(".js-autofilter").on("click", function () {
        autoFilterPopup.open();
        return false;
    });

    var registerPopup = $(".popup.register").data("popup");

    $(".registration.button").on("click", function () {
        registerPopup.open();
        return false;
    });

    var loginPopup = $(".popup.login").data("popup");

    $(".header .login").on("click", function () {
        loginPopup.open();
        return false;
    });

    var restorePopup = $(".popup.restore").data("popup");

    $(".js-restore").on("click", function () {
        restorePopup.open();
        return false;
    });

    var autoclearPopup = $(".popup.autoclear").data("popup");

    $(".js-autoclear").on("click", function () {
        autoclearPopup.open();
        return false;
    });

    var addMoneyPopup = $(".popup.add-money").data("popup");

    $(".js-add-money").on("click", function () {
        addMoneyPopup.open();
        return false;
    });

    var outputResPopup = $(".popup.output-res").data("popup");

    $(".js-output-res").on("click", function () {
        outputResPopup.open();
        return false;
    });

    var changeWmrPopup = $(".popup.change-wmr").data("popup");

    $(".js-change-wmr").on("click", function () {
        changeWmrPopup.open();
        return false;
    });

    var changeQiwiPopup = $(".popup.change-qiwi").data("popup");

    $(".js-change-qiwi").on("click", function () {
        changeQiwiPopup.open();
        return false;
    });

    var datePopup = $(".popup.date").data("popup");

    $(".js-date").on("click", function () {
        datePopup.open();
        return false;
    });

    var summPopup = $(".popup.summ").data("popup");

    $(".js-summ").on("click", function () {
        summPopup.open();
        return false;
    });

    var operationPopup = $(".popup.operation").data("popup");

    $(".js-operation").on("click", function () {
        operationPopup.open();
        return false;
    });

    var urlPopup = $(".popup.url").data("popup");

    $(".js-url").on("click", function () {
        urlPopup.open();
        return false;
    });

    var blackListPopup = $(".popup.add-black-list").data("popup");

    $(".js-add-black-list").on("click", function () {
        blackListPopup.open();
        return false;
    });

    var whiteListPopup = $(".popup.add-white-list").data("popup");

    $(".js-add-white-list").on("click", function () {
        whiteListPopup.open();
        return false;
    });

    var addManagerPopup = $(".popup.add-manager").data("popup");

    $(".js-add-manager").on("click", function () {
        addManagerPopup.open();
        return false;
    });

    var accountPopup = $(".popup.account").data("popup");

    $(".js-account").on("click", function () {
        accountPopup.open();
        return false;
    });

    var phonePopup = $(".popup.phone").data("popup");

    $(".js-phone").on("click", function () {
        phonePopup.open();
        return false;
    });

    var extendInsurePopup = $(".popup.extend-insure").data("popup");

    $(".js-extend-insure").on("click", function () {
        extendInsurePopup.open();
        return false;
    });

    var notePopup = $(".popup.note").data("popup");

    $(".js-add-note").on("click", function () {
        notePopup.open();
        return false;
    });

    var addSitePopup = $(".popup.add-site").data("popup");

    $(".js-add-site").on("click", function () {
        addSitePopup.open();
        return false;
    });

    if($('.phone').length) {
        $("input.phone").mask("+7(999) 999 9999");
    }

    autosize($('.autosize'));

    if ($('.datepicker').length) {
        $('.datepicker').datepicker({
            dateFormat: "dd.mm.yy",
            monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
            monthNamesShort: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
            dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
            dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
            firstDay: 1,
            prevText: "Назад",
            nextText: "Вперед"
        });
    }

    $('.js-datepicker').on("click", function() {
        $(this).prev().focus();
    });

    $('.datepicker.inline').on("change", function() {
        $(this).next().html($(this).val());
    });

    var $userButton = $('.js-header-popup.username'),
    $userPopup = $(".username-popup"),
    $balancePopup = $(".balance-popup"),
    $balanceButton = $(".js-header-popup.balance"),
    $optButton = $('.js-header-popup.optim'),
    $optPopup = $(".optim-popup"),
    $webPopup = $(".web-m-popup"),
    $webButton = $(".js-header-popup.web-m");


    if($userButton.length) {

        $(document).click(function () {
            $userPopup.closest('.wrap').removeClass('opened');
            $balancePopup.closest('.wrap').removeClass('opened');
            $optPopup.closest('.wrap').removeClass('opened');
            $webPopup.closest('.wrap').removeClass('opened');
        });

        $userButton.click(function () {
            if (!$userPopup.is(":visible")) {
                $userPopup.closest('.wrap').addClass('opened');
                if ($balancePopup.closest('.wrap').hasClass('opened')) {
                    $balancePopup.closest('.wrap').removeClass('opened');
                }
                if ($optPopup.closest('.wrap').hasClass('opened')) {
                    $optPopup.closest('.wrap').removeClass('opened');
                }
                if ($webPopup.closest('.wrap').hasClass('opened')) {
                    $webPopup.closest('.wrap').removeClass('opened');
                }
                return false;
            } else {
                $userPopup.closest('.wrap').removeClass('opened');
                return false;
            }
        });

        $balanceButton.click(function () {
            if (!$balancePopup.is(":visible")) {
                $balancePopup.closest('.wrap').addClass('opened');
                if ($userPopup.closest('.wrap').hasClass('opened')) {
                    $userPopup.closest('.wrap').removeClass('opened');
                }
                if ($optPopup.closest('.wrap').hasClass('opened')) {
                    $optPopup.closest('.wrap').removeClass('opened');
                }
                if ($webPopup.closest('.wrap').hasClass('opened')) {
                    $webPopup.closest('.wrap').removeClass('opened');
                }
                return false;
            } else {
                $balancePopup.closest('.wrap').removeClass('opened');
                return false;
            }
        });

        $optButton.click(function () {
            if (!$optPopup.is(":visible")) {
                $optPopup.closest('.wrap').addClass('opened');
                if ($userPopup.closest('.wrap').hasClass('opened')) {
                    $userPopup.closest('.wrap').removeClass('opened');
                }
                if ($balancePopup.closest('.wrap').hasClass('opened')) {
                    $balancePopup.closest('.wrap').removeClass('opened');
                }
                if ($webPopup.closest('.wrap').hasClass('opened')) {
                    $webPopup.closest('.wrap').removeClass('opened');
                }
                return false;
            } else {
                $optPopup.closest('.wrap').removeClass('opened');
                return false;
            }
        });

        $webButton.click(function () {
            if (!$webPopup.is(":visible")) {
                $webPopup.closest('.wrap').addClass('opened');
                if ($userPopup.closest('.wrap').hasClass('opened')) {
                    $userPopup.closest('.wrap').removeClass('opened');
                }
                if ($balancePopup.closest('.wrap').hasClass('opened')) {
                    $balancePopup.closest('.wrap').removeClass('opened');
                }
                if ($optPopup.closest('.wrap').hasClass('opened')) {
                    $optPopup.closest('.wrap').removeClass('opened');
                }
                return false;
            } else {
                $webPopup.closest('.wrap').removeClass('opened');
                return false;
            }
        });

        $(".js-header-popup").click(function (event) {
            event.stopPropagation();
        });
    }

    $(".js-more-inform").on("click", function() {
        var $wrap = $(this).closest(".text");
        $wrap.find(".hide").slideToggle();
    });

    $(".js-next-step").on("click", function() {
        var $wrap = $(this).closest(".content"),
        $first = $wrap.find(".first-step"),
        $second = $wrap.find(".second-step");
        $first.hide();
        $second.show();
    });

    $(".filter-company").on("click", function(e) {
        var wrap = $(this),
        popup = wrap.find(".tip");

        if (!(wrap.hasClass("open"))) {
            wrap.addClass("open");

            var firstClick = true;
            $(document).bind('click.myEvent', function(e) {
                if (!firstClick && $(e.target).closest('.tip').length == 0) {
                    wrap.removeClass("open");
                    $(document).unbind('click.myEvent');
                } else if ($(e.target).hasClass('name')) {
                    var company = $(e.target).data('text') == '' ? $(e.target).html() : $(e.target).data('text');
                    wrap.find(".all").html(company);
                    wrap.removeClass("open");
                    $(document).unbind('click.myEvent');
                }
                firstClick = false;
            });
        }
        e.preventDefault();
    });

    if ($('.tabs').length) {
        $('.tabs').tabs();
    }

    $(".conditions .item.comment textarea").on("keydown", function() {
        var $wrap = $(this).closest(".option"),
        $symbol = $wrap.find(".symbol"),
        $desc = $wrap.find(".desc"),
        letters = $(this).val().length;
        $symbol.html(letters);
        if (letters > 800) {
            $symbol.addClass("red");
            $desc.addClass("red");
        } else {
            $symbol.removeClass("red");
            $desc.removeClass("red");
        }
    });

    // Открытие/закрытия детальной информации о сайте в таблице заявок
    $(".table:not(.no-more)").on("click", ".item .info", function (e) {
        var e = e || window.event,
        target = e.target || e.srcElement,
        $item = $(this).closest(".item"),
        $input = $item.find("input")[0],
        $input2 = $item.find("input")[1],
        $input3 = $item.find("input")[2],
        $mesage = $item.find(".message")[0],
        $link = $item.find(".link")[0],
        $detail = $item.find(".detail a")[0],
        $note = $item.find(".js-add-note")[0],
        $del = $item.find(".delete")[0];

        switch (target) {
            case $input:
            break;
            case $input2:
            break;
            case $input3:
            break;
            case $note:
            break;
            case $detail:
            break;
            case $mesage:
            return true;
            break;
            case $link:
            return true;
            break;
            case $del:
            $item.remove();
            setPosition();
            break;
            default:
            $item.toggleClass("opened");
            $item.find(".more").slideToggle(300, function() {
                setPosition();
            });
        }

    }).on("click", ".item .info label", function(e) {
        e.stopPropagation();
        var $item = $(this).closest(".item");
        if ($item.find(".more").is(":visible")) {
            return true;
        }
    });

    // Открытие/закрытие списка тем на странице поиска
    $('.filter-menu .theme').on('click', function() {
        var $menu = $(this).closest('.filter-menu'),
        $list = $menu.find('ul'),
        $option = $menu.closest('.option'),
        margin = $list.height() + 70;
        if ($menu.hasClass("opened")) {
            $menu.removeClass("opened");
            $option.css({'margin-bottom': '20px'});
            setPosition();
        } else {
            $option.find('.filter-menu').removeClass("opened");
            $menu.addClass("opened");
            $option.css({'margin-bottom': margin + 'px'});
            setPosition();
        }
    });

    // Выделение всех тем на странице поиска
    $('#allThemes').on("click", function() {
        var $wrap = $(this).closest('.options'),
        $input = $wrap.find('input'),
        $filter = $wrap.find('.filter-menu'),
        _this = $(this);
        syncChecbox($input, _this);
        $filter.each( function() {
            countChecbox($(this));
        });
    });

    // Раскрытие условий поиска на странице поиска
    $('.js-toggle-search').on("click", function() {
        var $wrap = $(this).closest(".conditions"),
        $more = $wrap.find(".more-search-info");
        $wrap.toggleClass("open");
        $more.slideToggle(300, function() {
            setPosition();
        });
    });

    $('.js-toggle-web-search').on("click", function() {
        var $wrap = $(this).closest(".conditions"),
        $more = $wrap.find(".more-search-info");
        $(this).toggleClass('open');
        $more.slideToggle(300, function() {
            setPosition();
            if ($more.is(":visible")) {
                $('.js-toggle-web-search').html('Свернуть <span class="arr"></span>');
            } else {
                $('.js-toggle-web-search').html('Развернуть <span class="arr down"></span>');
            }
        });
        $('body,html').animate({scrollTop: 0}, 300);
    });

    // Синхронизация checkbox'ов при нажатии на checkbox в шапке таблицы поиска
    $('.table .title .check-box input').on("click", function() {
        var $wrap = $(this).closest('.table'),
        className = $(this).parent().attr("class").split(/\s+/),
        $input = $wrap.find('.'+className[0]).find('input'),
        _this = $(this);
        syncChecbox($input, _this);
    });

    // Синхронизация checkbox'ов при нажатии на тему на странице поиска
    $('.filter-menu > input').on("click", function() {
        var $wrap = $(this).closest('.filter-menu'),
        $input = $wrap.find('input'),
        _this = $(this);
        syncChecbox($input, _this);
        countChecbox($wrap);
    });

    // Пересчет количества выделенных тем на странице поиска
    $('.lvl2 input').on("change", function() {
        var $wrap = $(this).closest('.filter-menu');
        countChecbox($wrap);
    });

    function countChecbox (wrap) {
        var $input = wrap.find('input:checked'),
        $count = wrap.find('.count'),
        checked = $input.length;
        $count.html('('+ checked +')');
    }

    // Синхронизация checkbox'ов при нажатии на checkbox в шапке таблицы
    $(".table .title .check input").on("click", function() {
        var $table = $(this).closest('.table'),
        $input = $table.find('.item input'),
        _this = $(this);
        syncChecbox($input, _this);
    });

    $(".allCheckbox").on("click", function() {
        var $wrap = $(this).closest('.text'),
        $input = $wrap.find(' input'),
        _this = $(this);
        syncChecbox($input, _this);
    });

    function syncChecbox(input, el) {
        input.each(function() {
            if (el.prop('checked')) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
    }

    // Синхронизация checkbox'ов в таблице заявок в блоке с итогами
    $('.checkbox-wrapper').on('change', 'input', function() {
        var name = $(this).attr('name'),
        $input = $('.resume').find('input[name= '+ name +']');
        $(this).prop('checked') ? $input.each(function() {$(this).prop('checked', true);}) : $input.each(function() {$(this).prop('checked', false);});
    });

    // Анимация кнопки "Ещё 20 заявок"
    $(".js-more").on("click", function() {
        $(this).addClass("js-loading");
    });

    // Добавление подтверждения внесения сайта в черный список
    $(".table .icon.black-list").on("click", function() {
        var $text = $(this).find(".tip .text");
        if ($text.html() == "") {
            $text.html('Вы действительно хотите внести сайт в «Черный список»?<div class="button js-add-black-list">Заблокировать сайт</div>');
        }
    });

    // Добавление подтверждения внесения сайта в белый список
    $(".table .icon.white-list").on("click", function() {
        var $text = $(this).find(".tip .text");
        if ($text.html() == "") {
            $text.html('Вы действительно хотите внести сайт в «Белый список»?<div class="button js-add-white-list">Разблокировать сайт</div>');
        }
    });

    // Фиксация/удаление хедера/футера при скролле в таблице
    var $footerTable = $('.pw.lk .resume.fixed');

    if ($('.tabs').length) {
        addClassTable();
    }

    $('.ui-tabs-anchor').on('click', function() {
        addClassTable();
    });

    function addClassTable() {
        $('.js-vis').each(function() {
            var _this = $(this);
            var hidden = _this.attr('aria-hidden');
            if ($('.table').length == 1) {
                _this.find('.table').addClass('active');
            } else {
                if (hidden == "true") {
                    _this.find('.table').removeClass('active');
                } else {
                    _this.find('.table').addClass('active');
                }
            }
        });
    }

    function setPosition() {
        var $table = $('.table.active');
        var fixblock_pos_footer = $table.position().top + $table.height();
        var fixblock_pos_header = $table.position().top +265;
        if (($(window).scrollTop() < fixblock_pos_footer - 500) && ($(window).scrollTop() > $table.position().top - 400)){
            $footerTable.addClass("visible");
        } else {
            $footerTable.removeClass("visible");
        }
        if (($(window).scrollTop() > fixblock_pos_header) && ($(window).scrollTop() < fixblock_pos_footer )){
            $table.addClass("fixed");
        } else {
            $table.removeClass("fixed");
        }
    }

    if ($('.table.active').length) {
        setPosition();
        $(window).scroll(function(){
            setPosition();
        });
    }


    

});



