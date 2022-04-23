new WOW().init();
$(document).ready(function () {
    $('.btn_movers').on('click', function (e) {
        e.preventDefault();
        $('#tarif').val($(this).attr('id'));
        $('#requestModal').modal('show');
    })

    var mobileMenuBtn = $('.mobile-menu');
    var mobileMenu = $('.menu');
    mobileMenuBtn.on('click', function () {
        $(this).toggleClass('active');
        mobileMenu.slideToggle('slow');
    })

    var scrBtn = $('.scrDown');
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var scroll = $('#company');
    scrBtn.on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: scroll.offset().top }, 500);
    });

    window.onscroll = function () { myFunction() };
    var topNav = $(".nav-menu");
    function myFunction() {
        if (window.pageYOffset >= 40) {
            topNav.addClass("fixed");
        } else {
            topNav.removeClass("fixed");
        }
    }
    var blockItem = $('.company aside .block .item');
    blockItem.on('click', function () {
        $(this).toggleClass('open');
        $(this).siblings().removeClass('open');
    });
    $(document).on('click', 'a.qwerty', function (e) {
        var pageIndex = $('#pageIndex');
        loc = window.location.href;
        console.log(pageIndex.val());
        if (pageIndex.length) {
            e.preventDefault();
            // var id = $(this).attr('href');
            var id = $(this).data('ravshan');
            var $id = $(id);
            var pos = $id.offset().top;
            if ($(window).width() > 500) {
                if ($id.length === 0) {
                    return;
                }
                $('body, html').animate({ scrollTop: pos }, 800);
            } else {
                mobileMenu.hide();
                mobileMenuBtn.removeClass('active');
                if ($id.length === 0) {
                    return;
                }
                $('body, html').animate({ scrollTop: pos }, 800);
            }
        }
    });
});

$(document).ready(function () {
    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("select-group");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 0; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
})