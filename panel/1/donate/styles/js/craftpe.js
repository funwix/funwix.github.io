var e = $('.round');
e.replaceWith('<svg width="94px" height="98px" viewBox="0 0 94 98" version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="button-ribbon" fill-rule="nonzero"><g id="Page-1"><g id="Ribbon"><rect id="Shadow3" fill-opacity="0.14" fill="#000000" x="62" y="32" width="32" height="6"></rect><rect id="Shadow2" fill-opacity="0.14" fill="#000000" x="32" y="62" width="32" height="6"></rect><rect id="Shadow1" fill-opacity="0.14" fill="#000000" x="4" y="92" width="30" height="6"></rect><polygon id="Background" fill="#353535" points="3 2 94 2 94 34 64 34 64 64 34 64 34 94 2 94"></polygon><rect id="BorderTop" fill="#7D7D7D" x="0" y="0" width="94" height="4"></rect><polygon id="BorderLeft" fill="#535353" points="0 0 4 0 4 94 0 94"></polygon><rect id="BorderCorner" fill="#616161" x="0" y="0" width="4" height="4"></rect></g></g></g></g></svg>'), e = $('.round2'), e.replaceWith('<svg viewBox="0 0 96 96"><switch><polygon class="st0" points="0.1 0 0.1 96 32.1 96 32.1 64 32.1 64 64.1 64 64.1 32 96.1 32 96.1 0"></polygon></switch></svg>'), window.param__versions = [
    [],
    []
], window.param__plans = [
    [],
    []
], window.param__ssd = [
    [],
    []
], window.order__platform = -1, window.order__version = -1, window.order__tarif = -1, window.order__slots = -1, window.order__months = -1, window.order__promo = '', window.order__coefficient = 1, window.order__discount = 0, window.user__logged = 0, window.user__email = '', window.user__password = '', window.user__code = '', window.success__code = 0, window.loader__timeout = 0, window.promo__timeout = 0;

function modal(b, c, f) {
    var g = $('#modal');
    b ? (1 == c && (c = 'Допущена ошибка!'), $('#modal h2').text(c), $('#modal span').text(f), g.removeAttr('style')) : (g.css('opacity', 0), setTimeout(function() {
        g.css('display', 'none'), g.css('opacity', 1)
    }, 320))
}

function loader(b) {
    window.loader__timeout && clearTimeout(window.loader__timeout);
    var c = $('#loader');
    b ? c.removeAttr('style') : (c.css('opacity', 0), window.loader__timeout = setTimeout(function() {
        c.css('display', 'none')
    }, 320))
}

function section(b, c) {
    if (b) window.order__step = c, loader(), setTimeout(function() {
        10 == c && updateOrderInfo(), $('#slide_' + c).addClass('active')
    }, 200);
    else {
        var f = $('section.active');
        f.css('opacity', 0), setTimeout(function() {
            f.removeAttr('class'), f.removeAttr('style'), loader(1)
        }, 200)
    }
}

function changeSection(b) {
    var c = $('section.active');
    window.order__step = b, c.css('opacity', 0), 10 == b && updateOrderInfo(), setTimeout(function() {
        c.removeAttr('class'), c.removeAttr('style'), $('#slide_' + b).addClass('active')
    }, 320)
}

function updatePlans() {
    var b = $('#donateinfo .dirt span'),
        c = $('.tarif-price'),
        f = $('.tarif-info > span:nth-child(3) span'),
        g = 10 * window.param__plans[window.order__platform][0],
        h = $('#pe-tarif'),
        j = $('.tarif-info > span:nth-child(2) span'),
        k = [1024, 2048, 3072, 4096];
    $(b[1]).text('от ' + g + ' RUB'), $(c[1]).text('от ' + g + ' RUB в месяц'), $('#min-price').text(g), $(b[2]).text(window.param__plans[window.order__platform][1] + ' RUB'), $(c[2]).text(window.param__plans[window.order__platform][1] + ' RUB в месяц'), $(b[3]).text(window.param__plans[window.order__platform][2] + ' RUB'), $(c[3]).text(window.param__plans[window.order__platform][2] + ' RUB в месяц');
    for (var n, l = 0; 4 > l; l++) n = k[l], 1 == window.order__platform && (n += 512, 0 == l && (n += 512)), $(j[l]).text(n + ' Мбайт');
    for (var l = 0; 4 > l; l++) $(f[l]).text(window.param__ssd[window.order__platform][l] + ' Мбайт');
    0 == window.order__platform ? h.addClass('pe-tarif') : h.removeAttr('class')
}

function updateOrderInfo() {
    var b = $('ul li span'),
        c = '',
        f = 0,
        g = 0,
        h = 0,
        j = '',
        k = '',
        l = '',
        n = '',
        q = '';
    1 == window.order__tarif ? (c = 'START (' + window.order__slots + ' слотов)', f = Math.ceil(window.order__slots * window.param__plans[window.order__platform][0])) : 1 < window.order__tarif && (c = $('#slide_1 option:selected').text(), f = window.param__plans[window.order__platform][window.order__tarif - 1]), 0 < window.order__tarif && (h = parseInt($('#slide_5 select').val()), 0 == h ? j = 'Навсегда' : 1 == h ? j = '1 месяц' : 3 == h ? (j = '3 месяца', k += 5, l -= 0.05) : 6 == h ? (j = '6 месяцев', k += 10, l -= 0.1) : 12 == h ? (j = '1 год', k += 15, l -= 0.15) : void 0, f *= 0 == h ? 30 : h, g = f, f *= l, q = k + '% (' + (g * (k / 100)).toFixed(2) + ' RUB)', n = 'Оформить заказ'), $(b[0]).text($('#slide_2 option:selected').text()), $(b[1]).text(c), $(b[2]).text(j), $(b[3]).text(q), $(b[4]).text(window.user__email), $('#price span').text(f.toFixed(2) + ' RUB'), $('#slide_10 button:last-child').text(n)
}

function networkError() {
    modal(1, 'Ошибка сети!', 'Не удалось получить ответ от сервера. Проверьте свое подключение к Интернету или попробуйте немного позже.')
}

function plansList(b) {
    var c = $('#donateinfo'),
        f = $('.main');
    b ? (c.scrollTop(0), f.css('opacity', 0), c.removeAttr('style'), setTimeout(function() {
        c.css('transform', 'none')
    })) : (c.removeAttr('style'), f.removeAttr('style'), setTimeout(function() {
        c.css('display', 'none')
    }, 320))
}

function compileActions() {
    $('#modal button').click(function() {
        modal()
    }), $('#slide_2 button').click(function() {
        changeSection(1)
    }), $('#slide_1 #info').click(function() {
        plansList(1)
    }), $('#donateinfo button').click(function() {
        var b = parseInt($(this).attr('donate'));
        window.order__tarif = b, $('#slide_1 select').val(b), plansList(),
            $("#nick").focus();
    }), $('#slide_1 #contacts').click(function() {
        changeSection(2)
    })
}

function start() {
    compileActions(),
    section(1, 1)
}

$(document).ready(function() {
    start();
    var c = document.documentElement.style;
    f = 0;
    ('flexWrap' in c || 'WebkitFlexWrap' in c || 'msFlexWrap' in c) && (f = 1), f || alert('Уважаемый пользователь! Ваш браузер не поддерживает технологию flexBox (необходимо для разметки страницы), страница может отображаться НЕПРАВИЛЬНО! Если у Вас есть возможность - установите более современные браузер, например, Google Chrome. Спасибо за внимание!')        
});

var timer_key;
$('#phpmc_buy input, #phpmc_buy select').on('keydown change', function() {
    clearTimeout(timer_key);
    timer_key = setTimeout(function() {
        $.get('/engine/ajax.php', {
            type: 'view',
            nick: $('#nick').val(),
            group: $('#group option:selected').val()
        }, function(data) {
            var matches = data.split('|')
            $('#go-buy').html(matches[1]);
        });
    }, 50);
});