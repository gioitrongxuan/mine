function loadContent(page) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var contentDiv = document.getElementById("content");
      contentDiv.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", page + ".html", true);
  xhttp.send();
}
    
    // Hiển thị div có id tương ứng với id truyền vào
    var selectedDiv = document.getElementById(page);
    if (selectedDiv) {
      selectedDiv.style.display = "block";
    }
    
    // Lặp qua các mục trong Navbar và loại bỏ lớp CSS .nav-selected
    var navItems = document.querySelectorAll(".navbar-nav .nav-link");
    navItems.forEach(function(item) {
      item.classList.remove("nav-selected");
    });
    
    // Thêm lớp CSS .nav-selected cho mục được chọn
    var selectedNavItem = document.querySelector(".navbar-nav a[href='" + page + "']");
    if (selectedNavItem) {
      selectedNavItem.classList.add("nav-selected");
    }




  