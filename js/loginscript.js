var data = true;

$('input[type="submit"]').click(function()
{
  if($("input:text").val().length > 4) 
  {  
    $('.login').addClass('test')
    setTimeout(function()
    {
      $('.login').addClass('testtwo')
    },300);
    setTimeout(function()
    {
      $(".authent").show().animate({right:-320},{easing : 'easeOutQuint' ,duration: 600, queue: false });
      $(".authent").animate({opacity: 1},{duration: 200, queue: false }).addClass('visible');
    },500);

    setTimeout(function()
    {
      $(".authent").show().animate({right:90},{easing : 'easeOutQuint' ,duration: 600, queue: false });
      $(".authent").animate({opacity: 0},{duration: 200, queue: false }).addClass('visible');
      $('.login').removeClass('testtwo')
    },2500);
    setTimeout(function(){
      $('.login').removeClass('test')
    },2800);

    //if (data)
    //{
      //accepted();
    //}
    //if (data == false)
    //{
      //fadeBackIn();
    //}

    checkLogin();
  }
})

var open = 0;
$('.tab').click(function()
{
  $(this).fadeOut(200,function()
  {
    $(this).parent().animate({'left':'0'})
  });
});

function fadeBackIn()
{   
  setTimeout(function()
  {
    $('.login').fadeIn(123);
  },2800);
}

function accepted()
{
  setTimeout(function()
  {
    $('.login div').fadeOut(123);
    $('.success').fadeIn();
    setTimeout(function() 
    {          
     //$(window).attr('location', '/dashboard');
  }, 2000);
  }, 3200); 
}


function checkLogin()
{
  fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) 
  {
	return response.json();}).then(function (data) 
  {
    console.log(data);
    accepted();
  }).catch(function (err) 
  {
	  console.log('Error checking login', err);
    fadeBackIn();
  })
}