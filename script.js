$(document).ready(function() {
    $('#mobile_botao').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_botao').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.item-barra-navegacao');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#call_to_action', { 
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.imagens', { 
        origin: 'right',
        duration: 2700,
        distance: '20%'
    });

    ScrollReveal().reveal('.shape', { 
        origin: 'top',
        duration: 3000,
        distance: '20%'
    });

    ScrollReveal().reveal('.cafes', { 
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.imagem-avaliacoes', { 
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.card', { 
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback-card', { 
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.wave-footer', { 
        origin: 'bottom',
        duration: 1000,
        distance: '20%'
    });
});

