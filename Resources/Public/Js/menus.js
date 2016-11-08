$(document).ready(function()
{
        $('.jesuis #select li').click(function()
    {
                var selection = $('.jesuis #select li').attr('id');
                var liste = '.jesuis div[id="liste'+selection+'"]';
                $('.jesuis div[id^="liste"] ').attr("style","display:none;");
                $( liste ).attr("style","display:inline-block;");

        });

}
);
