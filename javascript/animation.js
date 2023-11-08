window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("myButton").addEventListener("click", function() {
    setTimeout(function() {
      window.open("https://example.com","_blank"); // Đường dẫn của liên kết cần mở
    }, 1000); // 1000ms = 1 giây
  })
});


      
// Tự động chuyển đổi lớp để hiển thị nội dung sau khi trang "index" đã hoàn thành
window.addEventListener('DOMContentLoaded', function() {
  var content = document.getElementById('preload');
  setTimeout(function() {
    content.style.transform = 'translateX(0)'; // Di chuyển nội dung về vị trí ban đầu
    setTimeout(function() {
      content.style.transform = 'translateX(100%)'; // Di chuyển nội dung lại ra bên trái
    }, 2000); 
  }, 1500); // Tạm dừng 100ms trước khi thực hiện hiệu ứng lần đầu
});

window.addEventListener('DOMContentLoaded', function() {
var popup = document.querySelector('.popup2');
setTimeout(function() {
    popup.style.display = 'none';
}, 2500); // Thời gian hiển thị popup (đơn vị: milliseconds)
});

window.addEventListener('DOMContentLoaded', function() {
var popup = document.querySelector('.popup0');
setTimeout(function() {
    popup.style.display = 'none';
}, 1800); // Thời gian hiển thị popup (đơn vị: milliseconds)
});
window.addEventListener('DOMContentLoaded', function() {
var popup = document.getElementById('popup1');
popup.style.display = 'block';
});

// Tự động định vị đến mục có id "home" khi trang tải
// Tải trang "home.html" khi trang đã tải xong
window.addEventListener('DOMContentLoaded', function() {
loadContent("home");
});

// Xử lý khi chọn một phần khác
function selectSection(section) {
// Ẩn phần "home" bằng cách đặt nội dung thành rỗng
var contentDiv = document.getElementById("content");
contentDiv.innerHTML = "";

// Tải và hiển thị phần tương ứng
loadContent(section);
}

/** typing animation */
var typed = new Typed(".typing",
{
    strings:["HUSTのHEDSPIの学生","ウェブ開発者","ウェブデザイナー","アンドロイドのアプリ開発者"],
    typeSpeed: 150,
    backSpeed: 100,
    loop:true

})