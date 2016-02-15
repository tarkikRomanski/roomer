$('back').click(function(){
	$(this).css('display', 'none');
	$('#block_editer').css('display', 'none');
  block.css('color', $('#select_text_color').val());
  block.css('background-color', $('#select_color').val());
});

var block = null;

/**
 * [getHexRGBColor перетворює типи кольорових гам]
 * @param  {rgb} color rgb вигляд rgb(q,q,q)
 * @return {Hex}        колір в Hex вигляді #qqqqqq
 */
function getHexRGBColor(color)
{
  color = color.replace(/\s/g,"");
  var aRGB = color.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);

  if(aRGB)
  {
    color = '';
    for (var i=1;  i<=3; i++) color += Math.round((aRGB[i][aRGB[i].length-1]=="%"?2.55:1)*parseInt(aRGB[i])).toString(16).replace(/^(.)$/,'0$1');
  }
  else color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, '$1$1$2$2$3$3');
  
  return "#" + color;
}

/**
 * Функція реагує на натискання рухомого об’єкту
 */
$('#addBlock').click(function(){
  //begining
  
    $('.canva').html($('.canva').html() + '<div class="block" ondrop="dropEl();">BD</div>');

    $(".block").easydrag();

    $('.block').dblclick(function(){
      block = $(this);
  		$('back').css('display', 'block');
  		$('#select_color').val(getHexRGBColor($(this).css('background-color')));
      $('#select_text_color').val(getHexRGBColor($(this).css('color')));
  		$('#block_editer').css('display', 'block');
      $('#edit_text').val($(this).html());
    });
    //ending
});

  $('#edit_text').change(function(event) {
    /* Act on the event */
    block.html($(this).val());
  });

  $('#goUp').click(function(){
    var position = block.css('z-index');
    if(position < 1000)
      position++;
    block.css('z-index', position);
  });

  $('#goDown').click(function(){
    var position = block.css('z-index');
    if(position > 0)
      position--;
    block.css('z-index', position);
  });  