$(document).ready(function() {
            //$("#homeScreen").hide();
            $('.pass-code').keypress(function(e) {
                    var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
                    if (verified) {
                        e.preventDefault();
                    }
                    else
                    {
                        var id = $(this).attr('id');
                        var curr = parseInt(id.slice(-1));
                        var next = curr + 1;
                        var idNext = id.substring(0,id.length-1) +""+ next.toString();
                        $('#'+idNext).focus();
                        setTimeout(function(){
                            if(curr == 4)
                            {
                               validateLogIn();
                            }
                        },100);
                    }
            });

            $('.pass-code').keydown(function(e){
                if(e.which == 8)
                {
                    $("#loginWarning").hide("200");
                    var id = $(this).attr('id');
                    var curr = parseInt(id.slice(-1));
                    var next = curr - 1;
                    var idNext = id.substring(0,id.length-1) +""+ next.toString();
                    setTimeout(() => {
                        $('#'+idNext).focus();
                    }, 100);
                }
            });

            $(".logout-icon").click(function(e){
                logout();
            });

            $(".switch").click(function(e){
                if($(this).hasClass("switch-on"))
                {
                    $(this).removeClass("switch-on");
                    switchOff($(this).attr('id'));
                }
                else
                {
                    $(this).addClass("switch-on");$(this).addClass("switch-on");
                    switchOn($(this).attr('id'));
                }
            });

            $(".mob-log-in").click(function(e){
                validateLogIn();
            });

            var login = function(){
                clearLockScreen();
                $("#lockScreen").hide(500,function(){
                    $("#homeScreen").show(500);
                });
            }

            var logout = function(){
                $("#homeScreen").hide(500,function(){
                    $("#lockScreen").show(500);
                    $("#pass1").focus();
                });
            }

            var showLoginError = function(){
                $("#loginWarning").show();
            }

            var clearLockScreen = function(){
                $("#pass1").val("") ;
                $("#pass2").val("") ;
                $("#pass3").val("") ;
                $("#pass4").val("") ;
            }

            var switchOn = function(id){
                switch(id)
                {
                    case "btn1":
                    $.ajax({
                        type: "GET",
                        url: "php/btn1On.php"
                    });
                        break;
                    case "btn2":
                        break;
                    case "btn3":
                        break;
                    case "btn4":
                        break;
                }
            }

            var switchOff = function(id){
                switch(id)
                {
                    case "btn1":
                    $.ajax({
                        type: "GET",
                        url: "php/btn1Off.php"
                    });
                        break;
                    case "btn2":
                        break;
                    case "btn3":
                        break;
                    case "btn4":
                        break;
                }
            }

            var validateLogIn = function(){
                var pass1 = $("#pass1").val().toString();
                var pass2 = $("#pass2").val().toString();
                var pass3 = $("#pass3").val().toString();
                var pass4 = $("#pass4").val().toString();
                var passcode = pass1.concat(pass2,pass3,pass4);
                if(passcode == "0000")
                    login();
                else
                    showLoginError();
            }

        });