$(document).ready(function() {

  $('.available').on('mouseover', function() {
    $(this).css('opacity', '0.5');
  });
  $('.seat.available').on('mouseleave', function() {
    $(this).css('opacity', '1');
  });

var reserved = [];

  $('.available').on('click', function(i) {

      var seatname = i.target.innerText;
      var myseat = i.target;

      $('#formModal').css ('display', 'block');
      $('#infoform').slideDown(500);
      $('.close').on('click',function(){
      $('#formModal').css('display','none');
      });

      var seatholder= {
        name: "",
        email: "",
        phone: "",
        seat: ""};
        $('.submit').on('click', function() {
          seatholder.name = $('#name').val();
          seatholder.email = $('#email').val();
          seatholder.phone = $('#number').val();
          seatholder.seat = seatname;

          reserved.unshift(seatholder);

          $('.seat.available').each(function(x, num) {
            reserved.forEach(function(resSeat) {

              if(num.innerText===resSeat.seat) {
                $(num).removeClass('available').addClass('inUse').off('click');
                resSeat.append(reserved[0].name);
              }
              $('#formModal').css('display','none');
            });
          });
        });

  });
});


// $.get('https://www.reddit.com/r/tsunderesharks' + '.json').done(function(response) {
//
//   console.log(response.data.children[0].data);
//
//     for(var i=0; i<response.data.children.length; i++) {
//
//       var title = response.data.children[i].data.title;
//       var thumbnail = response.data.children[i].data.thumbnail;
//       var author = response.data.children[i].data.author;
//       var score = response.data.children[i].data.score;
//
//     $('body').append('<div><p>' + title + '</p><p><img src=' + thumbnail + '></p><p>' + author + '</p><p>' + score + '</p></div>')
//   };
// });
