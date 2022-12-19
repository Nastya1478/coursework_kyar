function openNav() {
  document.getElementById("Sidenav").style.width = "80%";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
}

  function openPage(pageName,elmnt) {
  
    var tablinks = document.getElementsByClassName("page-btn");
    var i;
    for (i = 0; i < tablinks.length; i++) {
      var openDropdown = tablinks[i];
      if (openDropdown.classList.contains('active')) {
      openDropdown.classList.remove('active');
      }
    }
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("teacher__page");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
    // elmnt.style.backgroundColor = color;
    elmnt.classList.toggle("active");
  }

  function openPage(pageName,elmnt) {
  
    var tablinks = document.getElementsByClassName("cours-btn");
    var i;
    for (i = 0; i < tablinks.length; i++) {
      var openDropdown = tablinks[i];
      if (openDropdown.classList.contains('focus')) {
      openDropdown.classList.remove('focus');
      }  
    }
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("courses__page");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "flex";
    // elmnt.style.backgroundColor = color;
    elmnt.classList.toggle("focus");
  }