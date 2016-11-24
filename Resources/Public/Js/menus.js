$(document).ready(function()
{
        $('.jesuis #select li').click(function()
    {
                
				var selection = $(this).attr('id');
                var liste = '.jesuis div[id="liste'+selection+'"]';
                $('.jesuis div[id^="liste"] ').attr("style","display:none;");
                $( liste ).attr("style","display:inline-block;");

        });
		
		$('.jesuis .dropdown-menu li').click(function(){
			var selText = $(this).text();
			$(this).parents('#select').find('.dropdown-toggle').html('<span class="selected entete">'+selText+'</span> <span class="caret"></span>');
			$(this).parents('#select').find('.dropdown-toggle').addClass('selected');
		});

}
);
