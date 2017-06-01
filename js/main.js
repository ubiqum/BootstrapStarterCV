jQuery(document).ready(function($) {

  // Scroll to nagivation
  $("nav a").click(function() {
    scrollTo($(this).attr("href"));
  });

  function scrollTo(targetSection) {
    $('html, body').animate({
      scrollTop: $(targetSection).offset().top
    }, 200);
  }

  // GALLERY
  $(".gallery-item").on("click", function(event) {
    // prevent any link actions
    event.preventDefault();

    // copy the corresponding image
    image = $(this).find("img").clone();

    // find the modal
    modal = $("#gallery-modal");

    // assing the image information
    modal.find(".modal-title").html(image.attr("title"));
    modal.find(".modal-body").html(image);

    // ... and show it
    modal.modal()
  })

});
