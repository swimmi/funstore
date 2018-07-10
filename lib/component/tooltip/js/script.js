var nbP = $('.tooltip-container p').length;
var w = parseInt($('.tooltip-container p').css("width"));
var max = (nbP - 1) * w;

$("ul li[data-num='1']").addClass('active');
$('.step span').html('Step 1');

$('.tooltip-container').on('click','.btn', function(){
    var margL = parseInt($('.slider-turn').css('margin-left'));
    var modulo = margL%w;
    if (-margL < max && modulo == 0) {
        margL -= w;
        
        $('.slider-turn').animate({
            'margin-left':margL
        },300);
        $('ul li.active').addClass('true').removeClass('active');
        var x = -margL/w +1;
        $('ul li[data-num="'+x+'"]').addClass('active');
        $('.step span').html("Step "+x);
        if (x == nbP)
            $('.bottom .btn').text("CLOSE");
    }
    else  {
        hideTooltip();
    }
});
    
$('.tooltip-container').on('click','.close',function(){
    hideTooltip();
});

function hideTooltip() {
    $('.tooltip-container').animate({
        'opacity':0
    },600);
    $('.tooltip-container').animate({
        'top':-1200
    }, {
        duration: 2300,
        queue: false
    });
}

function showTooltip() {
    $('.tooltip-container').animate({
        'opacity':1
    },400);
    $('.tooltip-container').animate({
        'top':'50%'
    }, {
        duration: 800,
        queue: false
    });
}