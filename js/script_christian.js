(function () {
    //$('.message_input').elastic();    
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        var getMessageText, message_side, sendMessage;
        message_side = 'right';
        getMessageText = function () {
            var $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: message_side
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 600);
        };
        $('.send_message').click(function (e) {
            return sendMessage(getMessageText());
        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                return sendMessage(getMessageText());
            }
        });
        sendMessage('Hola carlos');
        setTimeout(function () {
            return sendMessage('Hola Christian');
        }, 1000);
        return setTimeout(function () {
            return sendMessage('Che vendes milanesas con papas fritas?');
        }, 2000);


        
    });




}.call(this));

//terminar chat
$(document).ready(function(){
   
    // click en cualquier link </a> del contenedor #estilos
    $(".close a").click(function(){
        
        
        $("#terminar_chat").css("display","block");
        return false;
    });

    $("#cerrar_terminar_chat").click(function(){
        
        $("#terminar_chat").css("display","none");
        return false;
    });


    $("#click_opciones_terminar_chat_1").click(function(){
        var input = $("#enviar_chat_mail");
        if (input.prop("checked")) {
            input.prop("checked", false);
        }
        else{
            input.prop("checked", true);
        }
       
        return false;
    });
    $("#click_opciones_terminar_chat_2").click(function(){
        var input = $("#agendar_chat");
        if (input.prop("checked")) {
            input.prop("checked", false);
        }
        else{
            input.prop("checked", true);
        }

      
        return false;
    });
    $("#click_opciones_terminar_chat_3").click(function(){
         var input = $("#imprime_chat");
        if (input.prop("checked")) {
            input.prop("checked", false);
        }
        else{
            input.prop("checked", true);
        }
        return false;
        
    });
    
    
});