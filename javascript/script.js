function loadContent(page) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var contentDiv = document.getElementById("content");
      contentDiv.innerHTML = this.responseText;

      // Tải và áp dụng JavaScript
      var scriptTags = contentDiv.getElementsByTagName("script");
      for (var i = 0; i < scriptTags.length; i++) {
        var scriptTag = scriptTags[i];
        var newScript = document.createElement("script");
        newScript.src = scriptTag.src;
        document.head.appendChild(newScript);
      }

      // Tải và áp dụng CSS
      var linkTags = contentDiv.getElementsByTagName("link");
      for (var j = 0; j < linkTags.length; j++) {
        var linkTag = linkTags[j];
        if (linkTag.rel === "stylesheet") {
          var newLink = document.createElement("link");
          newLink.rel = "stylesheet";
          newLink.href = linkTag.href;
          document.head.appendChild(newLink);
        }
      }
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



    
  