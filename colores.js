$(document).ready(function() {
	$("#orderedlist").addClass("clase1");
	$("#orderedlist li").addClass("clase2");
        $("#orderedlist li:last-child").bind("mouseover", function(){
            var color  = $(this).css("background-color");

            $(this).css("background", "green");
            
            $(this).bind("mouseout", function(){
                $(this).css("background", color);
            });    
        });
});