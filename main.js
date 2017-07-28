$(document).ready(function() {
    
    $("#houses img").click(function(){
        var houseid = $(this).attr("id");

        var cityentered = $("#city").val();
        var apikey = "ed0ea140436fc30efff8a1e5fa2e9b79"
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+cityentered+"&units=imperial&appid="+apikey+"", function(res) {
            console.log(res.name);
            var html_string = "";
            html_string += "<h1>"+res.name+"</h1>";
            html_string += "<div><p>Temperature: "+res.main.temp+"</p></div>";
            $("#weatherdisplay").html(html_string);
        }, 'json');
      $("#hdetails").html(html_str);

        }, "json");
   
    });


});

