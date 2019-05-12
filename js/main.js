$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});



function requestDone() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var message = document.getElementById("message").value;

    $.ajax({
        type: "POST",
        url: "action_form.php",
        data: {"name": name, "email" : email, "address" : address, "message" : message, "phonenumber" : phonenumber}
    }).done(function (result)
    {
        // alert("Заявка принята");
    }); 
    alert("Заявка принята");
}


// $(function () {
//     $("#request_form").keyup(function () {
// 	    var name = document.getElementById("name").value;
// 	    var email = document.getElementById("email").value;
// 	    var address = document.getElementById("address").value;
// 	    var phonenumber = document.getElementById("phonenumber").value;
// 	    var message = document.getElementById("message").value;

//         $.ajax({
// 	        type: "POST",
// 	        url: "action_form.php",
// 	        data: {"name": name, "email" : email, "address" : address, "message" : message, "phonenumber" : phonenumber},
//             cache: false,
//             success: function (response) {
// 		        alert("Заявка принята");
//             }
//         });
//         return false;
//     });
// });