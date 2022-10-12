var btn = document.getElementById("js-btn");
var menu = document.getElementById("js-menu");
var modal = document.getElementById("js-modal");

// ボタンがクリックされたらclassを追加
btn.addEventListener("click",function(){
    menu.classList.add("add-menu-sp");
    modal.classList.add("add-modal-sp");
});

// モーダルがクリックされたらclassを削除
modal.addEventListener("click",function(){
    menu.classList.remove("add-menu-sp");
    modal.classList.remove("add-modal-sp");
});