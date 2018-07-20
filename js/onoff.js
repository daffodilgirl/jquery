$(function() {

    var flag = true;
    $("#onoff").click(function(){
        
        if (flag){
            imgname = "images/off.jpg";
            flag = false;
        }else {
            imgname = "images/on.jpg";
            flag = true;
       }
                      
        $("img").attr("src", imgname);
    });
	$("#btnhide").click(function(){
		$("#randomtext").hide();
	  
	  });
		$("#btnshow").click(function(){
		$("#randomtext").show();
	  
	  });
	$("#btntoggle").click(function(){
		$("#randomtext").toggle();
	  
	  });
	$("#fadeout").click(function(){
		$("#box").fadeOut();
	  
	  });
	
	$("#fadeIn").click(function(){
		$("#box").fadeIn();
	  
	  });
	
});