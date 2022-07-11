<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
  <link rel="icon" href="{{ url('img/favicon.jpg') }}">
  <link rel="stylesheet" href="css/app.css">
  <script src="//unpkg.com/alpinejs" defer></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
      tailwind.config = {
          theme: {
              extend: {
                  colors: {
                      laravel: "#945DD6",
                  },
              },
          },
      };
  </script>
  <title>Porfolio-Ryan</title>
</head>

<body>
  <section id="header">
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div id='title'>
      <span class="name">
        Ryan Wang
      </span>
      <br>
      <span class="web-title">
        Full Stack Web Developer
      </span>
      <div class="view-work-container">
        <button class="view-work" data-tool-tip="Click to launch!">
          <a href="#projects"><span>View My Work</span></a>
          <img src="{{url('/img/rocket.png')}}" alt="rocket" />
        </button>
      </div>
    </div>
  </section>
  <section id="projects">
    <div class="projects-container">
      <h2 class="project-big-title">Projects</h2>
      <div class="project-items-container">
        <div class="project">
            <img src="{{url('/img/3.jpg')}}" alt="Multilearning">
          <div class="project-content">
            <div class="project-title">Multilearning Group</div>
            <hr class="title-line">
            <p>I have developed many features from back end to front end, including floating banner,the slider, the layout improvement, etc.</p>
            <div class="text-center mb-3 mt-3">Tech stack</div>
            <div class="tech-used">
              <span>PHP</span>
              <span>MySQL</span>
              <span>VueJS</span>
              <span>JavaScript</span>
            </div>
            <a class="view" href="https://academy.multilearning.com/mlg/#!*menu=24*browseby=9*sortby=1*trend=15341" target="_blank">
              View
            </a>
          </div>
        </div>
        <div class="project">
          <img src="{{url('/img/1.png')}}" alt="Commerce">
          <div class="project-content">
            <div class="project-title">Business portfolio</div>
            <hr class="title-line">
            <p>This is a website I developed for a new marketing company of my friend, I converted from the web design to a functioning wesbite.</p>
            <div class="text-center mb-3 mt-3">Tech stack</div>
            <div class="tech-used">
              <span>Laravel</span>
              <span>Tailwind CSS</span>
              <span>JavaScript</span>
            </div>
            <a href="https://epoquemarketing.ca/" target="_blank" class="view">
              View
            </a>
          </div>
        </div>
        <div class="project">
          <a href=""><img src="{{url('/img/2.jpg')}}" alt="Bootstrap5"></a>
          <div class="project-content">
            <div class="project-title">Bootstrap 5 sample</div>
            <hr class="title-line">
            <p>This is a responsive website built with the latest Bootstrap5, it is much quicker to build a repsonsive webiste using bootstrap. </p>
            <div class="text-center mb-3 mt-3">Tech stack</div>
            <div class="tech-used">
              <span>Boostrap 5</span>
              <span>JavaScript</span>
              <span>jQuery</span>
            </div>
            <a href="/restaurant" target="_blank" class="view">
              View
              </a>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  <!-- <h2 class="border">wavy</h2>
<h2 class="wave">wavy</h2>

<h2 class="border two">wavy</h2>
<h2 class="wave two">wavy</h2>

<h2 class="border three">wavy</h2>
<h2 class="wave three">wavy</h2> -->
  <section id="about">
    <div class="about-container">
      <h2 class="about-big-title">
        About me
      </h2>
      <div class="about-items-container">
        <div class="about-me">
          <p>3+ years Full Stack web developer specialising in PHP and JS.</p>

          <span class="current-tech">Current tech stack:</span>

          <p>
          <div class="front-end">Front End:</div> VueJS, ReactJS, JavaScript, jQuery, Bootstrap, SCSS, CSS3, HTML5<br>
          <br>
          <div class="back-end"> Back End:</div>
          <div class="back-end-tech">Laravel, PHP, MySQL, Node.js, Elastic Search</div>
          </p>
        </div>
        <div class="flex grid">
          <div class="one">
            <span style="--i: 1">
              <a href="#">
                <div class="bg laravel">
                  <img src="{{url('/img/laravel.png')}}" alt="Laravel" />
                </div>
              </a>
            </span>
          </div>
          <div class="two">
            <span style="--i: 2">
              <a href="#">
                <div class="bg vue">
                  <img src="{{url('/img/vue.png')}}" alt="Vue" />
                </div>
              </a>
            </span>
          </div>
          <div class="three">
            <span style="--i: 3"><a href="#">
                <div class="bg react">
                  <img src="{{url('/img/react-2.png')}}" alt="React" />
                </div>
              </a></span>
          </div>
          <div class="four">
            <span style="--i: 4"><a href="#">
                <div class="bg bootstrap">
                  <img src="{{url('/img/bootstrap.png')}}" alt="Bootstrap" />
                </div>
              </a></span>
          </div>
          <div class="five">
            <span style="--i: 5"><a href="#">
                <div class="bg php">
                  <img src="{{url('/img/php.png')}}" alt="PHP" />
                </div>
              </a></span>
          </div>
          <div class="six">
            <span style="--i: 6"><a href="#">
                <div class="bg mysql">
                  <img src="{{url('/img/mysql.png')}}" alt="MySQL" />
                </div>
              </a></span>
          </div>
          <div class="seven">
            <span style="--i: 7"><a href="#">
                <div class="bg gitlab">
                  <img src="{{url('/img/gitlab.png')}}" alt="Gitlab" />
                </div>
              </a></span>
          </div>
          <div class="eight">
            <span style="--i: 8"><a href="#">
                <div class="bg jquery">
                  <img src="{{url('/img/jquery.png')}}" alt="jQuery" />
                </div>
              </a></span>
          </div>
          <div class="nine">
            <span style="--i: 9"><a href="#">
                <div class="bg js">
                  <img src="{{url('/img/js.jpeg')}}" alt="Javascript" />
                </div>
              </a></span>
          </div>
          <div class="centered-image">
            <img src="{{url('/img/avatar2.png')}}" class="img-bottom" alt="Avatar 2" />
            <img src="{{url('/img/avatar.png')}}" class="img-top" alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact">
    <div class="contact-container">
      <h2 class="contact-big-title">Contact</h2>
      <p class="contact-me-text">Contact me by form below or <a class="text-email" href="mailto:slaric2014@gmail.com">Email me</a></p>
      <form method="POST" class="contact-form" action="/">
        @csrf
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <textarea rows="8" name="message" placeholder="Messages..." maxlength="1000"></textarea>
        <br />
        <input class="text-white" type="submit" value="SUBMIT" />
      </form>
    </div>
  </section>
  <x-flash-message />
</body>

</html>