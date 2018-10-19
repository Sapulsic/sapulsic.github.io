// Global Variables
//  ============================================
// Arrays and Variables for initiating Data


// Functions
//  ============================================

function init() {

    $('#welcomeHead').hide()
    $('#welcomeReveal').hide()


    $('#searchText').hide(),
    $('#searchChoices').hide()
    $('#searchInput').hide()


    $('#about').hide();
    $('#bio').hide();
    $('#contact').hide();
    $('#skills').hide();
    $('#social').hide();
    $('#portfolio').hide();

    $('#identSubmit').on('click', function(e) {
        e.preventDefault()

        $('#identification').fadeOut(500);

        var firstName = $('#firstName').val().trim().charAt(0);
        var favNum = Math.floor((Math.random() * 1000) + 100);

        var welcomeName = document.getElementById("welcomeHead");
        var welcomeNameText = document.createTextNode(" " + firstName + "-" + favNum + "!");
        

        welcomeName.appendChild(welcomeNameText);

        delayWelcomeHead = setTimeout(function() {
            $('#welcomeHead').fadeIn(1000).animate({top: '10%'});
        }, 1000);
    
        delayWelcomeReveal = setTimeout(function() {
            $('#welcomeReveal').fadeIn(1000)
        }, 3000);
    
        delayText = setTimeout(function() {
            $('#searchText').fadeIn(500)
        }, 5000);
        
        delayChoices = setTimeout(function() {
        $('#searchChoices').fadeIn(500)
        $('#searchInput').fadeIn(500)
        }, 6500);
        
    });

}

    function call() {
        $('#searchInput').bind("enterKey",function(e){

            if ($('#searchInput').val().trim().toLowerCase() === "about") {
                delayChoices = setTimeout(function() {
                    $('#about').fadeIn(500);
                }, 750);
                $('#bio, #contact, #skills, #social, #portfolio').fadeOut(250);
                $('#searchInput').val("");
            }

            else if ($('#searchInput').val().trim().toLowerCase() === "bio") {
                delayChoices = setTimeout(function() {
                    $('#bio').fadeIn(500);
                }, 750);
                $('#about, #contact, #skills, #social, #portfolio').fadeOut(250);
                $('#searchInput').val("");
            }
            
            else if ($('#searchInput').val().trim().toLowerCase() === "skills") {
                delayChoices = setTimeout(function() {
                    $('#skills').fadeIn(500);
                }, 750);
                $('#about, #bio, #contact, #social, #portfolio').fadeOut(250);
                $('#searchInput').val("");
            }
            else if ($('#searchInput').val().trim().toLowerCase() === "social") {
                delayChoices = setTimeout(function() {
                    $('#social').fadeIn(500);
                }, 750);
                $('#about, #bio, #skills, #contact, #portfolio').fadeOut(250);
                $('#searchInput').val("");
            }
            else if ($('#searchInput').val().trim().toLowerCase() === "portfolio") {
                delayChoices = setTimeout(function() {
                    $('#portfolio').fadeIn(500);
                }, 750);
                $('#about, #bio, #skills, #contact, #social').fadeOut(250);
                $('#searchInput').val("");
            }

        });

        $('#searchInput').keyup(function(e){
            if(e.keyCode == 13)
            {
                $(this).trigger("enterKey");
            }
        });
    }



    // Testing / Debugging

// Main Process
//  ============================================
init();
call();