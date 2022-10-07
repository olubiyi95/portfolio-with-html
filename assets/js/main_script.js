(function ($) {
    if(document.getElementById('myTab') !== null){
        $('#myTab li').click(function(){
            $.each($('#myTab li'), (x, el) => {
                let img = $(el).find('img[data-imagesrc]')[0];
                let mainsrc = $(img).attr('data-imagesrc')
                $(img).attr('src', mainsrc + '.svg');
            })
            let img = $(this).find('img[data-imagesrc]')[0];
            let mainsrc = $(img).attr('data-imagesrc')
            $(img).attr('src', mainsrc + '_col.svg');
        })
    }
    if(document.getElementsByClassName('featured_product').length !== 0){
        $('.featured_product').mouseover(function(){
            let img = $(this).find('img[data-imagesrc]')[0];
            let mainsrc = $(img).attr('data-imagesrc')
            $(img).attr('src', mainsrc + '_white.svg');
        })
        $('.featured_product').mouseout(function(){
            let img = $(this).find('img[data-imagesrc]')[0];
            let mainsrc = $(img).attr('data-imagesrc')
            $(img).attr('src', mainsrc + '.svg');
        })
    }
})(jQuery);


