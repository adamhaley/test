(function(){
	var resultsTpl = $("#results-tpl").html()
	, partials = {
		resultPartial: $("#result-partial").html()
	}
	, $el = $("#container")
	;

	console.log("hi from JS");

	$.get("data/movies.json",function(data){
		console.log(data.results);
		var html = Mustache.to_html(resultsTpl,data,partials);
		$el.html(html);

	});

})();