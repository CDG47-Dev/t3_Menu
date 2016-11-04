$(document).ready(function()
{
        $('.jesuis select').change(function()
    {
                var selection = $('.jesuis select option:selected').val();
                var liste = '.jesuis div[id="liste'+selection+'"]';
                $('.jesuis div[id^="liste"] ').attr("style","display:none;");
                $( liste ).attr("style","display:inline-block;");

        });

}
);
