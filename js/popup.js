$('document').ready(function(){
  var endPoint_URL = 'http://static.cricinfo.com/rss/livescores.xml';
  var cricinfo_timeout = setTimeout(function(){
    $('#score-section').html('Whoops! something wrong with CricInfo.');
  }, 7000);

  $.ajax({
    url : endPoint_URL,
    dataType : 'xml',
    success : function(data){
      $(data).find('item').each(function(){
        var title = $(this).find('title').text();
        var link = $(this).find('link').text();
        var description = $(this).find('description').text();
        console.log(description);
        console.log(link);
        $('#fetching').html('The score will be presented here:');
        $('#score-section').append('<a href="'+link+'">'+description+'</a><br/>');
        // $('$score-section matches').append('<li>'+description+'</li>');
        if (title == 'Australia v India'){
          ////////////////////////////////////
        };
      });
      clearTimeout(cricinfo_timeout);
    }, 
    error : function(data){
      console.log('Whoops...Could not display the data.');
    }
  });
});