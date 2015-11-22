$('#addBlock').click(function(){
    $('.canva').html($('.canva').html() + '<div class="block">BD</div>');

    $(".block").easydrag();

    $(".block").ondrop(function(e, element){
        alert($(this).html())
    });
});
