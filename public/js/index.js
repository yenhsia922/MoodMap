/* Inpired by Jee Dribbble Shot ( http://dribbble.com/shots/770815-Login ) */ 
/* coded by alireza attari ( @alireza_attari ) */

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
