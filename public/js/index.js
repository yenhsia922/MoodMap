'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  // add any functionality and listeners you want here

  $(".version_a").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("a_version_ham_click");
  })

  $(".version_b").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("b_version_ham_click");
  })

  $("#navIconAlt").on("click", function() {
   document.getElementById("navIconAlt").src = "images/Menu-512.png";
  });

}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
})

jQuery(function () {
    jQuery('[data-toggle=tooltip]').tooltip();
});

/*Will show user's username if exists*/
$('#sendMessageModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$('#actionSuccess')({			/* TODO: Uncaught type error exception here */
overlayClose: true,
onShow: function() {
    var timer;
    $('#sendSucessModal').bind({
        mouseenter: function() {
            clearTimeout(timer);
        },
        mouseleave: function() {
            timer = setTimeout($.modal.close, 3);
        }
    })
    .trigger('mouseleave');
}
});
