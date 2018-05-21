jQuery(function($){
	/*Phone mask*/
    $(".fruitPhone").mask("+7 (999) 999-99-99");
    /*Form animate*/
    $( ".input" ).focusin(function() {
        $( this ).find( "span" ).animate({"opacity":"0"}, 200);
    });
    $( ".input" ).focusout(function() {
        $( this ).find( "span" ).animate({"opacity":"1"}, 300);
    });
	/*Form send*/
	$(".fruitForm").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/fruitForm/fruitMail.php", 
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
    /*Form success*/
    $(".fruitForm").submit(function(){
        $(this).find(".submit i").removeAttr('class').addClass("fas fa-check").css({"color":"#fff"});
        $(".submit").css({"background":"#2ecc71", "border-color":"#2ecc71"});
        $(".fruitSuccess").show().animate({"opacity":"1", "bottom":"-90px"}, 400);
        $("input").css({"border-color":"#2ecc71"});
        return false;
    });
    /*Form Modal*/
    $(".fruitModal-close").click(function() {
        window.location.hash = '';
    });
});



