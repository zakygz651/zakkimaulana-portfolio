function showDescription(project) {
  let description = '';
  
  switch (project) {
    case 'project1':
      description = 'Project 1: Ini adalah aplikasi web sederhana yang saya buat menggunakan HTML, CSS, dan JavaScript. Aplikasi ini memiliki fitur interaktif dan desain responsif.';
      break;
    case 'project2':
      description = 'Project 2: Pada proyek ini, saya mengembangkan sistem manajemen konten yang memungkinkan pengguna untuk mengelola konten mereka secara efisien. Proyek ini dibangun dengan PHP dan MySQL.';
      break;
    case 'project3':
      description = 'Project 3: Ini adalah proyek bot otomatis untuk aplikasi chat yang dibuat menggunakan Node.js. Bot ini mampu melakukan berbagai tugas seperti auto-reply dan pengumpulan data.';
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
