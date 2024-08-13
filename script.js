function showDescription(project) {
  let description = '';
  
  switch (project) {
    case 'project1':
      description = 'Auto Fill & Spam Formulir, Projek Ini adalah hasil iseng saya';
      break;
    case 'project2':
      description = 'Project 2: WhatsAppBot, Projek ini adalah projek yang menurut saya sangat bagus sekali,karena bisa mengasah skil ngoding saya';
      break;
    case 'project3':
      description = 'Project 3: DDoS Attack,Tools Ini adalah tools yang saya buat.saya tidak ingin mempublish tools ini karena merugikan';
      break;
  }
  
  // Update konten dan tampilkan deskripsi
  document.getElementById('projectDescription').innerText = description;
  document.getElementById('projectDescription').style.display = 'block';
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1300); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});
