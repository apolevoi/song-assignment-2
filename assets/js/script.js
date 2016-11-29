$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:



    // $('#sidebar-button').click(function()
    // {
    //   if($('.sidebar-container').hasClass('sidebar-active')){
    //      $('body').removeClass('no-scroll');
    //      $('#sidebar-button').removeClass('button-active');
    //      $('.sidebar-container').removeClass('sidebar-active');
    //      $('.page-wrapper').removeClass('wrapper-active');
    //   }else{
    //      $('#sidebar-button').addClass('button-active');
    //      $('.sidebar-container').addClass('sidebar-active');
    //      $('.page-wrapper').addClass('wrapper-active');
    //      setTimeout(function() {
    //         $('body').addClass('no-scroll');}, 300);

    //   }
    // })



  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:

    // $('.page-wrapper').click(function(){
    //    if($('.sidebar-container').hasClass('sidebar-active')){
    //      $('body').removeClass('no-scroll');
    //      $('#sidebar-button').removeClass('button-active');
    //      $('.sidebar-container').removeClass('sidebar-active');
    //      $('.page-wrapper').removeClass('wrapper-active');
    //    }
    // })


  // QUESTION 8

  //Implement the 'slide to left' when the user clicks on #carousel-next here

    $('#carousel-next').click(function(){
       var currentMargin = parseInt($('#carousel').css('margin-left').replace('px', ''));
       if (currentMargin == -3480){
          return false;
       }else{
          $('#carousel').css('margin-left', currentMargin - 960);
       }

    })
  

  //Implement the 'slide to right' when the user clicks on #carousel-prev here
     $('#carousel-prev').click(function(){
       var currentMargin = parseInt($('#carousel').css('margin-left').replace('px', ''));
       if(currentMargin == 0){
          return false;
       }else{
          $('#carousel').css('margin-left', currentMargin + 960);
       }
    })

  

  //New stuff

  $('#home').click(function() {
  $('#carousel-section').show();
 });

 $('#section-1').click(function() {
  $('#section1-section').show();
 });

  $('#section-2').click(function() {
  $('#section2-section').show();
 });

   $('#section-3').click(function() {
  $('#section3-section').show();
 });

$('#detailed-section').click(function() {
  $('#detailed2-section').show();
 });


});