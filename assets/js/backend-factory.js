$ = jQuery.noConflict();

$(document).ready(function(){

   setup_inputs();
   setup_repeatables();

   console.log("Backend Factory: ready");

});


function setup_repeatables() {

   $('.add_repeatable').click(function(){
      var model = $(this).parent().find('.repeatable-model .input-container').clone().detach();
      $(this).parent().find('.field-repeatable-inputs').append( model );
      setup_inputs();
      return false;
   })


   $('.delete_this').click(function(){

      if( $(this).parent().index() == $(this).parent().parent().find('.input-container').length - 1 ) {

         $(this).parent().find('input').val('');
         $(this).parent().find('.delete_this').addClass('disabled');
      } else {
         $(this).parent().remove();
      }
      return false;
   })

   if($('.repeatable-container:not(.hidden)').length>1) {
      $('.repeatable-container .delete_this').removeClass('disabled')
      $('.repeatable-container').each(function(){
         var datepicker = $('input.datepicker');

         datepicker.each(function(){
            console.log( $(this).data('target') );
            $(this).datepicker({
               altField: '#' + $(this).data('target'),
               altFormat: "yy-mm-dd"
            });

         })

         if( $(this).find('input').val().length == 0 ) {
            $(this).find('.delete_this').addClass('disabled')
         }
      });

   }


   $('.repeatable-container input').keyup(function(){
      if( $(this).val().length != 0 ) {
         $(this).parent().find('.delete_this').removeClass('disabled');
      } else {
         $(this).parent().find('.delete_this').addClass('disabled');
      }
   })

}





function setup_inputs() {
   setup_datepicker();
   setup_uploader();
}

function setup_datepicker() {

   var datepicker = $('input.datepicker');

   datepicker.each(function(){
      console.log( $(this).data('target') );
      $(this).datepicker({
         altField: '#' + $(this).data('target'),
         altFormat: "yy-mm-dd"
      });

   })

}


function setup_uploader() {
   $('.upload-button').click(function(e) {
      e.preventDefault();

      var button = $(this);

      var file = wp.media({
         title: 'Upload Image',
         // mutiple: true if you want to upload multiple files at once
         multiple: false
      }).open()
      .on('select', function(e){

         var uploaded_file = file.state().get('selection').first();

         var file_url = uploaded_file.toJSON().url;

         button.parent().find('.upload_input').val(file_url);
      });
   });
}
