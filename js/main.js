$(document).ready(function () {
    var currentFloor = 2; //переменная, где хранится текущей этаж
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); /*конпка увелечение этажа*/
    var counterDown = $(".counter-down"); /*конпка уменьшении этажа*/
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    // функция при наведении мышки на этаж
    floorPath.on('mouseover', function () {
        floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значения этажа в счётчик справа
    });

    floorPath.on("click", toggleModal); //при клике на этаж, вызвать окно
    modalCloseButton.on("click", toggleModal); //при клике на кнопку закрыть, закрывается окно 
    viewFlatsButton.on("click", toggleModal);
    //отслеживаем клик по кнопке вверх
    counterUp.on("click", function () { 
        //проверяем значении этажа, оно не должно быть больше 18 
        if (currentFloor < 18) { 
        currentFloor++; //прибавляем один этаж
        usCurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, useGrouping: false}); //флрмотируем переменную с этажом,чтобы было 01, а не 1
        $(".counter").text(usCurrentFloor); // записываем значения этажа в счёичмк справа
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
             floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
    //функция открыть-закрыть окно
    function toggleModal() { 
        modal.toggleClass("is-open");
    }
});