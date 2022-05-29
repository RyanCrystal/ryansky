$(function () {
  let a = 0;
  let b = 0;
  let c = 0;

  let self_service_background = $("#self_service_background");
  // let service = $('#service');
  // let range = 500;

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let height = self_service_background.outerHeight();
    let offset = height / 2;

    let drop_off = $("#drop_off_service_container").offset().top;
    let full = $("#full_service_container").offset().top;
    let self_service = $("#self_service_container").offset().top;

    let cal1 = 1 - (scrollTop + height - self_service) / 450;
    let cal2 = 1 - (scrollTop + height - drop_off) / 450;
    let cal3 = 1 - (scrollTop + height - full) / 450;

    // let cal = 1;
    // console.log(scrollTop);
    // console.log(self_service);
    // console.log(drop_off);
    // console.log(full);

    if (cal1 > "1") {
      cal1 = 1;
    } else if (cal1 < "0") {
      cal1 = 0;
    }
    if (scrollTop >= 916 && scrollTop < 2246)
      $("#header_our_services").css({ opacity: 0.5 });
    else {
      $("#header_our_services").css({ opacity: 1 });
    }
    if (scrollTop >= 2247 && scrollTop < 3001)
      $("#header_price_list").css({ opacity: 0.5 });
    else {
      $("#header_price_list").css({ opacity: 1 });
    }
    if (scrollTop >= 3001 && scrollTop < 3519)
      $("#header_contact").css({ opacity: 0.5 });
    else {
      $("#header_contact").css({ opacity: 1 });
    }
    // console.log(height);
    // console.log($('#self_service_container').offset().top);
    // console.log($('#full_service_container').offset().top);
    // console.log(cal3);

    // header.css({ 'background-color': 'rgba(230,243,254,0.5)' });
    self_service_background.css({ opacity: cal1 });
    $("#drop_off_service_background").css({ opacity: cal2 });
    $("#full_service_background").css({ opacity: cal3 });
    // service.css({ 'opacity': 1});
  });
  // header.css({ 'background-color': 'rgba(255,0,0,0.5)' });

  $(".arrow_up_container").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#top").offset().top
      },
      2000
    );
  });
  $("#arrow_down").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#our_service").offset().top
      },
      2000
    );
  });

  $("#header_laundry_shop").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#laundry_shop_1").offset().top
      },
      2000
    );
  });

  $("#header_our_services").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#our_service").offset().top
      },
      2000
    );
  });
  $("#header_price_list").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#price_list_1").offset().top
      },
      2000
    );
  });
  $("#header_contact").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#contact_1").offset().top
      },
      2000
    );
  });

  $("#three_lines").click(function () {
    $("#hidden_row_all").css({ display: "block" });
    $("#a").css({ display: "none" });
  });

  $("#close").click(function () {
    $("#hidden_row_all").css({ display: "none" });
    $("#a").css({ display: "block" });
  });

  $("#hidden_our_service").click(function () {
    $("#hidden_row_all").css({ display: "none" });
    $("#a").css({ display: "block" });
    $("html, body").animate(
      {
        scrollTop: $("#our_service").offset().top
      },
      2000
    );
  });

  $("#hidden_pricelist").click(function () {
    $("#hidden_row_all").css({ display: "none" });
    $("#a").css({ display: "block" });
    $("html, body").animate(
      {
        scrollTop: $("#price_list_1").offset().top
      },
      2000
    );
  });

  $("#hidden_contact").click(function () {
    $("#hidden_row_all").css({ display: "none" });
    $("#a").css({ display: "block" });
    $("html, body").animate(
      {
        scrollTop: $("#contact_1").offset().top
      },
      2000
    );
  });

  $(window).scroll(function () {
    // console.log(a);
    // console.log(b);
    if (a === 1 && b === 1 && c === 1) return;

    // This is then function used to detect if the element is scrolled into view

    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    if (elementScrolled("#container1") && a === 0) {
      a++;
      var elem = document.getElementById("container1");
      var width = 1;

      var id = setInterval(frame, 20);
      // return;
      function frame() {
        if (width >= 300) {
          clearInterval(id);
        } else {
          width = width + 20;
          elem.style.width = width + "px";
        }
      }

      // Your function here
    }
    if (elementScrolled("#container2") && b === 0) {
      b++;
      var elem = document.getElementById("container2");
      var width = 1;

      var id = setInterval(frame, 20);
      // return;
      function frame() {
        if (width >= 300) {
          clearInterval(id);
        } else {
          width = width + 20;
          elem.style.width = width + "px";
        }
      }

      // Your function here
    }
    if (elementScrolled("#container3") && c === 0) {
      c++;
      var elem = document.getElementById("container3");
      var width = 1;

      var id = setInterval(frame, 20);
      // return;
      function frame() {
        if (width >= 300) {
          clearInterval(id);
        } else {
          width = width + 20;
          elem.style.width = width + "px";
        }
      }

      // Your function here
    }
  });
});
function elementScrolled(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  return elemTop <= docViewBottom && elemTop >= docViewTop;
}
