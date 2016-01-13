$(document).ready(function(){
	var html = '';
	var divId ='';

	$(".container").shapeshift({
    	minColumns: 3,

	});

	// Make hidden panel display or hide
	$('.slide').click(function(){
		html = '';
		divId = $(this).nextAll().eq(1).attr('id');
		console.log("The id is: "+divId);
    	var hidden = $('.hidden');
    	$(this).hide();
    	$(this).next().show();
    	$(this).next().addClass('add-active');

    	if (hidden.hasClass('visible')){
       	 hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
    	} else {
        	hidden.animate({"left":"0px"}, "slow").addClass('visible');
    	}
    });



	// Hide the sidebar
    $('.hide').click(function(){
    	var hidden = $('.hidden');
        if (hidden.hasClass('visible')){
        	hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
    	}
    })

    // Hide Clicked SideBar item and populate active div
    $('.sidebar').click(function(){
    	var html = '';
        html= $(this).html();
    	
    	$(this).hide();
    	var hidden = $('.hidden');
        if (hidden.hasClass('visible')){
        	hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
    	}

    	$('div').each(function(){
    		if($('div').hasClass('add-active')){
    			divId = $('#'+divId);
    			// console.log("The new id is: "+id);
    			$(divId).html(html);
    			$(divId).children().removeClass('not-active');
    		}
    		
    	});
    	
    	html='';
    	// console.log("HTML = "+html);
    })

    // Place the projects back in the SideBar
    $('.close').click(function(){
    	$(this).hide();
    	$(this).prev().show();
    	html = $(this).next().html();
    	html = '<li>'+html+'</li>';
    	$('.list').append(html);
    	$(this).next().html('');
    	
    	console.log(html);
    })

    // Destroy widgets
    $(".trash").shapeshift({
    autoHeight: false,
    colWidth: 100,
    enableTrash: true
	});
})