<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
  <link rel="icon" href="{{ url('img/favicon.jpg') }}">
  <link rel="stylesheet" href="css/app.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="{{url('js/jquery.js')}}"></script>
  <script src="{{url('js/smooth-scroll.js')}}"></script>

  {{-- <script src="js/smooth-scroll.js"></script> --}}

  <title>Restaurant</title>
</head>

<body>
  <body data-spy="scroll" data-target="#navbarNav">
    <!-- Nav tabs -->
    <nav
      class="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
      id="navbarNav"
    >
      <div class="container">
        <a class="navbar-brand" href="/#home">FASHION</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <a class="nav-link" href="/#carouselId">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#intro">Intro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#team">Team</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="/#menu">Menu</a></li>
            <li class="nav-item"><a class="nav-link" href="/#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- carousel -->
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          {{-- <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> --}}

          <img src="{{url('/img/restaurant/ca1.jpg')}}" />
  
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>Some representative placeholder content for the first slide of the carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="{{url('/img/restaurant/ca2.jpg')}}" />
          <div class="container">
            <div class="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="{{url('/img/restaurant/ca3.jpg')}}" />
          <div class="container">
            <div class="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- INTRO 3 COLOMNS -->
    <section id="intro">
      <div class="container text-center py-5">
        <h1 class="pb-3">Fashion Best Food and Wines</h1>
        <p class="lead pb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          earum ratione numquam iure officiis quod asperiores sed itaque
          incidunt exercitationem, doloribus voluptatem quasi nulla deserunt
          eaque architecto optio odio recusandae beatae necessitatibus delectus
          eligendi maiores saepe aliquam! Cupiditate, eaque blanditiis.
        </p>
        <div class="row">
          <div class="col-md-12 col-lg-4">
            <img
              src="{{url('img/restaurant/beef.jpg')}}"
              class="img-fluid rounded-circle p-3"
              alt="Braised Beef"
              width="250"
              height="250"
            />
            <h2>Braised Beef</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Delectus, aspernatur architecto ad ducimus cumque, iste qui in
              natus quaerat, est perferendis magni molestias. Sequi repellendus
              totam odio commodi quia? Facere?
            </p>
            <a class="btn btn-outline-primary py-2 px-5" href="#" role="button"
              >CHOOSE</a
            >
          </div>
          <div class="col-md-12 col-lg-4">
            <img
              src="{{url('img/restaurant/veg.jpg')}}"
              class="img-fluid rounded-circle p-3"
              alt="Fresh Vegetable"
              width="250"
              height="250"
            />

            <h2>Fresh Vegetable</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              ducimus reiciendis libero corrupti beatae, illo aspernatur
              accusantium quae! A laborum incidunt, labore tenetur dolor minima
              veritatis voluptas laudantium eos fugit.
            </p>
            <a class="btn btn-outline-primary py-2 px-5" href="#" role="button"
              >CHOOSE</a
            >
          </div>
          <div class="col-md-12 col-lg-4">
            <img
              src="{{url('img/restaurant/des.jpg')}}"
              class="img-fluid rounded-circle p-3"
              alt="Sweet Dessert"
              width="250"
              height="250"
            />
            <h2>Sweet Dessert</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti, provident placeat. Dolore inventore repellat sequi
              facere fugiat quas nam autem sit, eos odio magnam vel magni vero
              accusamus nesciunt aspernatur.
            </p>
            <a class="btn btn-outline-primary py-2 px-5" href="#" role="button"
              >CHOOSE</a
            >
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-5 bg-dark">
      <div class="container">
        <!-- <div class="row"> -->
        <div class="col-md-12 col-lg-12 text-white mb-5">
          <h1>Sign Up for Specials & Newsletter</h1>
        </div>
        {{-- <div class="col-md-12 col-lg-12">
          <form class="form-inline">
            <div class="form-group py-4 pl-3">
              <label for=""></label>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                aria-describedby="helpId"
              />
            </div>
            <div class="form-group px-3">
              <label for=""></label>
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                aria-describedby="helpId"
              />
            </div>
            <button type="submit" class="btn btn-outline-light">
              Get Specials
            </button>
          </form>
        </div> --}}
        <div class="row g-3">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" aria-label="First name">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
          </div>
          <div class="col">
            <button type="submit" class="btn btn-outline-light">
              Get Specials
            </button>
          </div>

        </div>
        <!-- </div> -->
      </div>
    </section>

    <section id="team" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col p-5">
            <img src="img/restaurant/team.jpg" alt="Team" class="fluid" />
          </div>
          <div class="col p-5 text-light">
            <h1>Our Team</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
              ab laudantium voluptatum facere veritatis unde quam quibusdam,
              consectetur repellendus a nihil earum vero. Amet id eaque,
              repellat repellendus voluptates deserunt at laboriosam aspernatur
              modi! Veniam officia accusamus totam reiciendis ex.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="video">
        <div id="block2" style="width: 100%; height: 500px;"
  data-vide-bg="mp4: vid/Fruity, webm: vid/Fruity, poster: vid/Fruity.jpg"
  data-vide-options="position: 0% 50%">
  <div class="meat text-light">
    <div class="container text-center pt-5">
      <h1 class="display-4">Come and Join</h1>
        <h1 >Taste special Fruit Salad in the world</h1>
    </div>
   
  </div>
</div>
  
      </section>
    <!-- MENU -->
    <section id="menu">
        <div class="container">
         
                <div class="card-group text-center p-5">
                  <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-4">
                        <div class="card  m-4">
                            <img class="card-img-top" src="img/restaurant/m1.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aspernatur placeat amet iusto magnam quaerat ab suscipit minus, sunt, tempore maxime mollitia commodi officiis nulla dolorem labore! Eius, laborum nihil.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-12 col-md-12 col-lg-4">
                        <div class="card  m-4">
                            <img class="card-img-top" src="img/restaurant/m2.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aspernatur placeat amet iusto magnam quaerat ab suscipit minus, sunt, tempore maxime mollitia commodi officiis nulla dolorem labore! Eius, laborum nihil.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-4">
                        <div class="card  m-4">
                            <img class="card-img-top" src="img/restaurant/m3.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aspernatur placeat amet iusto magnam quaerat ab suscipit minus, sunt, tempore maxime mollitia commodi officiis nulla dolorem labore! Eius, laborum nihil.</p>
                            </div>
                        </div>
                    </div>
                  </div>
                   
                      
                </div>

                </div>
            
        </div>
    </section>

    <section id="ad" style="background-image:url({{asset('img/restaurant/wine.jpg')}})">
      <div class="container text-center">
        <h1 class="text-white p-5">We have best wine selection in the world<br>Give a try and Taste</h1>
      </div>
    </section>

 

    <section id="testimonials">
      <div class="container test text-center text-light p-12 ">
        <div class="pb-5">
          <h2>What Our Customer Say!</h2>
        </div>

        <div id="carouselId" class="carousel slide" data-ride="carousel">
      
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img src="img/restaurant/pp1.jpg" alt="First slide" class="rounded-circle pb-3">
              
                <h3>John Doe</h3>
                <p><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime praesentium porro quos soluta tempora facere sunt corporis quas corrupti excepturi.</em></p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/restaurant/pp2.jpg" alt="Second slide" class="rounded-circle pb-3">
              
                <h3>John Jenny</h3>
                <p><em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae animi nostrum tempore. Ab non sint recusandae nulla. Neque, eos obcaecati!</em></p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/restaurant/pp3.jpg" alt="Third slide" class="rounded-circle pb-3">
              
                <h3>David Robinson</h3>
                <p><em> ipsum dolor sit amet consectetur adipisicing elit. Ut praesentium sit possimus dolores esse molestias ipsum assumenda omnis natus accusamus?</em></p>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </section>
    <!-- CONTACT -->
    
    <section id="contact" class="m-5">
      <div class="container">
        <h1 class="text-center p-5">Contact Us Today</h1>
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <h3>Book Now!</h3>
            <p>
                To avoid dissappointment book well ahead of time. 
                We are booked up for several months. 
                Occasionally a table will become available due to a cancellation. If you would like to be informed of openings please message us.<br>
                
                For regular bookings enter your desited date and time and number of people in the form on the right. 
                We will do our best to accommodate you. 
                You can also contact us directly by phone on:
            </p>
            <h3 class="pt-3">001 123 654 4789</h3>
            <a href="" class="btn btn-outline-primary btn-lg custom_btn">Telephone Now</a>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="form-group mb-4">
              <label for=""><h3>Party Name</h3></label>
              <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
              
            </div>
            <div class="form-group mb-4">
                <label for=""><h3>Return Email Address</h3></label>
                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                
              </div>
              <div class="form-group mb-4">
                  <label for=""><h3>Enquiry</h3></label>
                  <textarea cols="10" rows="3" class="form-control"></textarea>
                  
                </div>
                <input type="submit" value="SUBMIT" class="btn btn-outline-primary"> 
          </div>
        </div>
      </div>
    </section>
    <section id="main-footer">
        <div class="container">
          <span>Copyright &copy; <span id="year"></span> Fashion</span>
        </div>
      </section>
    <script>
      var scroll = new SmoothScroll('a[href*="#"]');
    </script>
     <script>
        const date = new Date();
        document.getElementById("year").textContent = date.getFullYear();
      </script>

    {{-- <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
      integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
      crossorigin="anonymous"
    ></script> --}}
    <!-- <script src="js/bs.js"></script> -->
    <script src="js/jquery.vide.js"></script>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>

</html>