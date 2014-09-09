
//need to style html lol

$(document).ready(function(){

	document.getElementById('butt').addEventListener("click", function(){
	var input = $('#url').val();
	main(input);
	});

	/*does same thing as above

	$("#butt").click(function(){
		var input = $('#url').val();
		main(input);
	});
*/

});



function main(url) {
	/*Helpful links: http://api.jquery.com/jQuery.getJSON/#example-0
					 http://stackoverflow.com/questions/21458102/reddit-search-api-url
					 http://stackoverflow.com/questions/8191105/how-to-extract-url-data-from-reddit-api-using-json
					 https://gist.github.com/sente/947491 */

	
	//using to get JSON data https://github.com/reddit/reddit/wiki/JSON#link-implements-votable--created 

    $.getJSON(

    "http://www.reddit.com/search.json?q=url:" + url + "&sort=best",
    //testing purposes"http://www.reddit.com/search.json?q=url:https:www.youtube.com/watch?v=VfOuJ93sIog&sort=best",

    function getStuff(data)
    {
      $.each(
        data.data.children.slice(0, 3),
        function (i, post) {
          console.log("Title: " + post.data.title );
          var redditURL = "https://www.reddit.com" + post.data.permalink;
          console.log("Link Url: " + post.data.url );

          chrome.tabs.create({ url: redditURL });
          $('div').append("Title: " + post.data.title)


        }
      )
    }
  )
  .success(function() { alert("second success"); })
  .error(function() { alert("error"); })
  .complete(function() { alert("complete"); });

}



