window.onload = function () {
  // setTimeout(() => {

  // }, 1000);
  const blog_dropdown = document.querySelectorAll(".dropdown_content");
  const blog_dropdown_title = document.querySelectorAll(
    ".blog_dropdown_title>a"
  );
  const btn = document.querySelector(".buttons");
  const menu = document.querySelector(".menu");
  btn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // toggle active class to make hover effect
  for (let i = 0; i < blog_dropdown_title.length; i++) {
    blog_dropdown_title[i].addEventListener("mouseover", function () {
      for (let j = 0; j < blog_dropdown.length; j++) {
        blog_dropdown[j].classList.remove("active");
        blog_dropdown_title[j].classList.remove("active");
      }
      blog_dropdown[i].classList.add("active");
      blog_dropdown_title[i].classList.add("active");
    });
  }

  // get all carousel nav
  const c_nav = document.querySelector(".carousel_nav");
  const carousel_content_h1 = document.querySelectorAll(".carousel_content>h1");
  const carousel_content_p = document.querySelectorAll(".carousel_content>p");
  const carousel_btn = document.querySelectorAll(
    ".carousel_content>.carousel_item_btn"
  );
  // console.log(carousel_content_all);

  // create setinterval array
  const intervals = [];
  // const img_load = document.querySelector('#test_img');

  //begin with 0
  const index = move(0);
  index();
  const autoSwitch = setInterval(index, 4000);
  // push first one into array
  intervals.push(autoSwitch);

  // move the slide from index n
  function move(n) {
    let i = n;
    return function () {
      k = (i % 3) + 1;
      console.log(k);
      document.getElementById(`carousel_${k}`).checked = true;
      // console.log(carousel_content_all[1].classList);
      // setTimeout(() => {

      // }, 1000);
      for (let m = 0; m < 3; m++) {
        carousel_content_h1[m].classList.remove("animated");
        carousel_content_p[m].classList.remove("animated");
        carousel_btn[m].classList.remove("animated");
      }

      carousel_content_h1[k - 1].classList.add("animated");

      carousel_content_p[k - 1].classList.add("animated");
      carousel_btn[k - 1].classList.add("animated");
      i++;
    };
  }

  // listen to carousel label click
  c_nav.addEventListener("click", function (e) {
    // Clear the all setInterval
    intervals.forEach(clearInterval);
    let id;
    // Only get id when label click
    if (e.target.className === "c_nav") {
      id = e.target.id;
      id = parseInt(id[1]);
      console.log(`id is ${id}`);
    }
    // Create new argument for move function to move from id-1
    const index_id = move(id - 1);
    index_id();
    // Create index_id once per 3s
    const autoSwitch_id = setInterval(index_id, 4000);
    // push into intervals array
    intervals.push(autoSwitch_id);
  });
};
