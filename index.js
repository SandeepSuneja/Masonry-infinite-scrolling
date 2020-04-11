
// Seach Function for different categories - OnClick Event
function search(search_item){
    category = search_item;
    imgList = [];
    var jsonURL = "";
    if(search_item == 'All'){
      jsonURL = "http://tapdiscover.com:9000/design-suggestions/?page=1";
    }else if(search_item == 'Lehenga'){
      jsonURL = "http://tapdiscover.com:9000/design-suggestions/?category=lehenga&page=1";
    }else if(search_item == 'designerblouse'){
      jsonURL = "http://tapdiscover.com:9000/design-suggestions/?category=designerblouse&page=1";
    }
    $.getJSON(jsonURL, function(json){
      jsonData = json;
      $.each(json.results, function(){
        imgList.push('<div class="item"><img src= "'+this.image_link+ '" width=300></div>');
      });
      $('#container').html("");
      $('#container').append(imgList);
    });
  }

  // function to detect loading of images and after that render images on web page
  var $container = $('#container');
  $container.imagesLoaded(function(){
    $container.masonry({
      itemSelector : '.item',
      gutter: 1,
      percentPosition: true
    });
  });
