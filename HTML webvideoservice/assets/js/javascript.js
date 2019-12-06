//Функция открытия меню
$(function () {
    $("#Clicker1").click(function () {
        $("#Clicker2").show(500);
        $("#Clicker1").hide();
        $("#menu-phone").show(600);
        $("#video").css({marginTop:+200});

    });
});

//Функция скрытия меню
$(function () {
    $("#Clicker2").click(function () {
        $("#menu-phone").hide(600);
        $("#Clicker2").hide();
        $("#Clicker1").show(500);
        $("#video").css({marginTop:+3});
    });
});

//Функция прибавление лайков +1
$(function() {
    $('.like1').on('click', function() {
        $(this).text(parseInt($(this).text())+1);
        alert("Вы поставили лайк. Круто спасибо за поддержку!");
    });
});

//Функция прибавление подписчиков +1
$(function() {
    $('.subscriber1').on('click', function() {
        $(this).text(parseInt($(this).text())+1);
        alert("Вы подписались. Это была ваша ошибка!");
    });
});

//Функция вывода информации на модальное окно
$(function () {
    $(".name").click(function () {
        $(".comment").remove();
        let ModalWindow = $("#ModalWindow");
        let data = $(this).data();
        let commentsJSON = data.comment;
        $("#ModalImage").attr("src", data.image);
        $("#ModalLike").text(data.like);
        $("#ModalTitle").text(data.title);
        commentsJSON.forEach(function(element) {
            let comment = `<div class="comment">
                <div class="name">${element.Title}</div>
                <div class="message">${element.Comment}</div>
                </div>`;
            $("#ModalComments").append(comment);
        });
        ModalWindow.slideDown(500);
        alert("Окно открывается чтобы его закрыть, кликните по нему!");
    });
});

//Функция закрытия модального окна
$(function () {
    $("#ModalWindow").click(function () {
        $("#ModalWindow").hide();
        $(".comment").remove();
        alert("Вы кликнули по окну, оно будет закрыто!");
    });
});

//Получение данных с сервера для загруски на сайт

// $(function () {
//     $(".name").click(function () {
//         let ModalWindow = $("#ModalWindow");
//         let data = $(this).data();
//         let commentsJSON = data.comment;
//         $("#ModalImage").attr("src", data.image);
//         $("#ModalLike").text(data.like);
//         $("#ModalTitle").text(data.title);
//         commentsJSON.forEach(function (el) {
//             let comment = `<div class="comment">
//                 <div class="name">${el.Title}</div>
//                 <div class="message">${el.Comment}</div></div>`;
//             $("#ModalComments").append(comment);
//         });
//         ModalWindow.slideDown(500);
//     });
//     function getJSONVideoMini() {
//         $.getJSON('http://192.168.100.105/api/mini_video', function (data) {
//             data.forEach(function (el) {
//                 let button = `<a href="#" class="block">
//                 <div class="photo" style="background-image: url(${el.image})">
//                     <div class="time">8:32</div>
//                 </div>
//                 <div class="statistic">
//                     <div id="Like1" class="like"><span class="like1">${el.like}</span> нравится</div>
//                     <div class="subscriber"><span class="subscriber1">901</span> подписчиков</div>
//                 </div>
//                 <div class="name"
//                      data-image="${el.image}"
//                      data-like="${el.like}"
//                      data-title="${el.title}"
//                      data-commit="Отзывы:"
//                      data-comment='\`+ JSON.stringify(el.commentArray) +\`'
//                     >${el.title}</div>
//             </a>`; $("#block_video").append(button);
//             });
//         });
//     }
//     getJSONVideoMini();
// });
