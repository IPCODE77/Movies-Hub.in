sliderimage1('hi');
function sliderimage1(lan) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.themoviedb.org/3/movie/now_playing?api_key=1c341a35b615c393940742a6a4938007&with_original_language=${lan}`, true);
  xhr, onprogress = function () {
    console.log('on progress');
  }
  xhr.onload = function () {
    if (this.status == 200) {
      let content = JSON.parse(this.responseText);
      console.log(content);

      let result = content.results;
      let display_content = document.getElementById("main_content");
      let str;
      for (key in result) {
        str += `
                          <img src="https://image.tmdb.org/t/p/original${result[key].poster_path}" class='recentmovie' alt="...">`
      }
      display_content.innerHTML = str;
      display_content.childNodes[0].textContent = ''

    }
    else {
      console.log('Something wrong');

    }
  }
  xhr.send()
}


let i = -1;
imageslide()
function imageslide() {

  setTimeout(() => {

    let element = document.querySelectorAll('.recentmovie');
    setInterval(() => {
      ++i;
      element.forEach((img, i) => {
        img.style.display = 'none';
        img.style.transition = '0.3s'
      })
      element[i].style.display = 'block';
      element[i].style.transition = '0.3s'
      if (i >= element.length - 2) {
        i = -1;

      }

    }, 2000);


  }, 1000);
}

// image_category
function now_playing(lan, category, location) {
  let display_content = document.getElementById(`${location}`);

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.themoviedb.org/3/movie/${category}?api_key=1c341a35b615c393940742a6a4938007&with_original_language=${lan}`, true);
  xhr, onprogress = function () {
    console.log('on progress');
  }
  xhr.onload = function () {
    if (this.status == 200) {
      let content = JSON.parse(this.responseText);
      let result = content.results;
      let str;
      for (key in result) {

        str +=
          `<div class="card"  >
                          <div class="ratings">${result[key].vote_average}</div>
                  <img src="https://image.tmdb.org/t/p/original${result[key].poster_path}" id="${result[key].id}"class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${result[key].title}</h5>
                  </div>
                </div>
                `
      }
      display_content.innerHTML = str;
      display_content.childNodes[0].textContent = ''



    }
    else {
      console.log('Something wrong');

    }
  }
  xhr.send()
}

let now_playing_btn = document.getElementById("now_playing_btn");
now_playing_btn.addEventListener("click", (e) => {
  now_playing('hi', 'now_playing', 'now_playing')
  sliderimg('.movie_category', '.inner_content')
  updownicon("see_more_icon", "up_arrow", "now_playing", "category1", "movie_category", "inner_content")
})

let top_rated = document.getElementById("top_rate_btn")
top_rated.addEventListener("click", (e) => {
  now_playing('hi', 'top_rated', 'top_rated')
  sliderimg('.movie_category2', '.inner_content2')
  updownicon("see_more_icon2", "up_arrow2", "top_rated", "category2", "movie_category2", "inner_content2")

})

let up_coming = document.getElementById("up_coming_btn")
up_coming.addEventListener("click", (e) => {
  now_playing('hi', 'upcoming', 'up_coming')
  sliderimg('.movie_category3', '.inner_content3')
  updownicon("see_more_icon3", "up_arrow3", "up_coming", "category3", "movie_category3", "inner_content3")

})

let Documentary = document.getElementById("Documentary")
Documentary.addEventListener("click", (e) => {
  typemovies('hi', 99, 'Documentary')
  sliderimg('.movie_category4', '.inner_content4')
  updownicon("see_more_icon4", "up_arrow4", "Documentary", "category4", "movie_category4", "inner_content4")

})

let comedy_btn = document.getElementById("comedy_btn")
comedy_btn.addEventListener("click", (e) => {
  typemovies('hi', 35, 'comedy')
  sliderimg('.movie_category5', '.inner_content5')
  updownicon("see_more_icon5", "up_arrow5", "comedy", "category5", "movie_category5", "inner_content5")

})
let Action_btn = document.getElementById("comedy_btn")
Action_btn.addEventListener("click", (e) => {
  typemovies('hi', 28, 'Action')
  sliderimg('.movie_category6', '.inner_content6')
  updownicon("see_more_icon6", "up_arrow6", "comedy", "category6", "movie_category6", "inner_content6")

})

let Adventure_btn = document.getElementById("Adventure_btn")
Adventure_btn.addEventListener("click", (e) => {
  typemovies('hi', 12, 'Adventure')
  sliderimg('.movie_category7', '.inner_content7')
  updownicon("see_more_icon7", "up_arrow7", "Adventure", "category7", "movie_category7", "inner_content7")

})

let Crime_btn = document.getElementById("Crime_btn")
Crime_btn.addEventListener("click", (e) => {
  typemovies('hi', 80, 'Crime')
  sliderimg('.movie_category8', '.inner_content8')
  updownicon("see_more_icon8", "up_arrow8", "Crime", "category8", "movie_category8", "inner_content8")

})

let Horror_btn = document.getElementById("Horror_btn")
Horror_btn.addEventListener("click", (e) => {
  typemovies('hi', 27, 'Horror')
  sliderimg('.movie_category9', '.inner_content9')
  updownicon("see_more_icon9", "up_arrow9", "Horror", "category9", "movie_category9", "inner_content9")


})

let Romance_btn = document.getElementById("Romance_btn")
Romance_btn.addEventListener("click", (e) => {
  typemovies('hi', 10749, 'Romance')
  sliderimg('.movie_category10', '.inner_content10')
  updownicon("see_more_icon10", "up_arrow10", "Romance", "category10", "movie_category10", "inner_content10")


})

window.addEventListener("load", (e) => {
  now_playing_btn.click();
  top_rated.click();
  up_coming.click();
  Documentary.click()
  comedy_btn.click();
  Action_btn.click()
  Adventure_btn.click()
  Crime_btn.click()
  Horror_btn.click()
  Romance_btn.click()
  checkingprev()
})
// slider
function sliderimg(firstcls, secondcls) {
  let slider = document.querySelector(`${firstcls}`)
  let inner_slider = document.querySelector(`${secondcls}`)

  let passed = false;
  let starx;
  let x;
  slider.addEventListener("mousedown", (e) => {
    passed = true;
    starx = e.offsetX - inner_slider.offsetLeft;
    slider.style.cursor = 'grabbing';

  })

  slider.addEventListener("mouseenter", (e) => {
    slider.style.cursor = 'grab'
  })

  slider.addEventListener("mouseenter", (e) => {
    slider.style.cursor = 'default'
  })

  slider.addEventListener("mouseup", (e) => {
    slider.style.cursor = 'grab'
  })

  window.addEventListener("mouseup", (e) => {
    passed = false
  })

  slider.addEventListener("mousemove", (e) => {
    if (!passed) return;
    e.preventDefault();
    x = e.offsetX
    inner_slider.style.left = `${x - starx}px`
    checkboundry()
  })

  function checkboundry() {
    let outer = slider.getBoundingClientRect();
    let inner = inner_slider.getBoundingClientRect();
    if (parseInt(inner_slider.style.left) > 0) {
      inner_slider.style.left = '0px';
    }
    else if (inner.right < outer.right) {
      inner_slider.style.left = `-${inner.width - outer.width}px`
    }
  }

  checkboundry()

  slider.addEventListener('touchstart', (e) => {
    passed = true;
    starx = e.targetTouches[0].clientX - inner_slider.offsetLeft;
  }, { passive: true });



  slider.addEventListener('touchmove', (e) => {
    if (!passed) return;
    x = e.targetTouches[0].clientX;

    inner_slider.style.left = `${x - starx}px`;
    checkboundry()
  }, { passive: true });
}
function updownicon(firstid, secondid, innerdiv, upperdiv, upperclass, innerclass) {
  let see_more_icon = document.getElementById(`${firstid}`)
  let up_arow = document.getElementById(`${secondid}`);
  up_arow.style.display = 'none'
  let now_playing_box = document.getElementById(`${innerdiv}`);
  let category1 = document.getElementById(`${upperdiv}`);
  see_more_icon.addEventListener("click", (e) => {
    up_arow.style.display = 'block'
    now_playing_box.classList.add("active_content")
    now_playing_box.classList.remove(`${innerclass}`)
    category1.classList.add("active_category")
    category1.classList.remove(`${upperclass}`)
    see_more_icon.style.display = 'none'

  });
  up_arow.addEventListener("click", (e) => {
    up_arow.style.display = 'none'
    now_playing_box.classList.remove("active_content")
    now_playing_box.classList.add(`${innerclass}`)
    category1.classList.remove("active_category")
    category1.classList.add(`${upperclass}`)
    see_more_icon.style.display = 'block'

  });
}


// top rated

function typemovies(lan, id, location1) {
  let display_content = document.getElementById(`${location1}`);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=1c341a35b615c393940742a6a4938007&with_original_language=${lan}&with_genres=${id}`, true);
  xhr, onprogress = function () {
    console.log('on progress');
  }
  xhr.onload = function () {
    if (this.status == 200) {
      let content = JSON.parse(this.responseText);
      let result = content.results;

      let str;
      for (key in result) {

        str += `
         <div class="card"  >
                          <div class="ratings">${result[key].vote_average}</div>
                  <img src="https://image.tmdb.org/t/p/original${result[key].poster_path}" id="${result[key].id}"  class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${result[key].title}</h5>
                  </div>
                </div>
                `
      }
      display_content.innerHTML = str;
      display_content.childNodes[0].textContent = ''

    }
    else {
      console.log('Something wrong');

    }
  }
  xhr.send()
}
typemovies()

let bars_icon = document.getElementById("bars_icon");
let model_btn = document.getElementById("model_btn");
bars_icon.addEventListener("click", (e) => {
  model_btn.click()
})

let hindibtn = document.getElementById('hindi_btn');
hindibtn.addEventListener("click", () => {
  sliderimage1('hi')
  imageslide()

  let now_playing_btn = document.getElementById("now_playing_btn");
  now_playing_btn.addEventListener("click", (e) => {
    now_playing('hi', 'now_playing', 'now_playing')
    sliderimg('.movie_category', '.inner_content')
    updownicon("see_more_icon", "up_arrow", "now_playing", "category1", "movie_category", "inner_content")
  })

  let top_rated = document.getElementById("top_rate_btn")
  top_rated.addEventListener("click", (e) => {
    now_playing('hi', 'top_rated', 'top_rated')
    sliderimg('.movie_category2', '.inner_content2')
    updownicon("see_more_icon2", "up_arrow2", "top_rated", "category2", "movie_category2", "inner_content2")

  })

  let up_coming = document.getElementById("up_coming_btn")
  up_coming.addEventListener("click", (e) => {
    now_playing('hi', 'upcoming', 'up_coming')
    sliderimg('.movie_category3', '.inner_content3')
    updownicon("see_more_icon3", "up_arrow3", "up_coming", "category3", "movie_category3", "inner_content3")

  })

  let Documentary = document.getElementById("Documentary")
  Documentary.addEventListener("click", (e) => {
    typemovies('hi', 99, 'Documentary')
    sliderimg('.movie_category4', '.inner_content4')
    updownicon("see_more_icon4", "up_arrow4", "Documentary", "category4", "movie_category4", "inner_content4")

  })

  let comedy_btn = document.getElementById("comedy_btn")
  comedy_btn.addEventListener("click", (e) => {
    typemovies('hi', 35, 'comedy')
    sliderimg('.movie_category5', '.inner_content5')
    updownicon("see_more_icon5", "up_arrow5", "comedy", "category5", "movie_category5", "inner_content5")

  })
  let Action_btn = document.getElementById("comedy_btn")
  Action_btn.addEventListener("click", (e) => {
    typemovies('hi', 28, 'Action')
    sliderimg('.movie_category6', '.inner_content6')
    updownicon("see_more_icon6", "up_arrow6", "comedy", "category6", "movie_category6", "inner_content6")

  })

  let Adventure_btn = document.getElementById("Adventure_btn")
  Adventure_btn.addEventListener("click", (e) => {
    typemovies('hi', 12, 'Adventure')
    sliderimg('.movie_category7', '.inner_content7')
    updownicon("see_more_icon7", "up_arrow7", "Adventure", "category7", "movie_category7", "inner_content7")

  })

  let Crime_btn = document.getElementById("Crime_btn")
  Crime_btn.addEventListener("click", (e) => {
    typemovies('hi', 80, 'Crime')
    sliderimg('.movie_category8', '.inner_content8')
    updownicon("see_more_icon8", "up_arrow8", "Crime", "category8", "movie_category8", "inner_content8")

  })

  let Horror_btn = document.getElementById("Horror_btn")
  Horror_btn.addEventListener("click", (e) => {
    typemovies('hi', 27, 'Horror')
    sliderimg('.movie_category9', '.inner_content9')
    updownicon("see_more_icon9", "up_arrow9", "Horror", "category9", "movie_category9", "inner_content9")


  })

  let Romance_btn = document.getElementById("Romance_btn")
  Romance_btn.addEventListener("click", (e) => {
    typemovies('hi', 10749, 'Romance')
    sliderimg('.movie_category10', '.inner_content10')
    updownicon("see_more_icon10", "up_arrow10", "Romance", "category10", "movie_category10", "inner_content10")


  })
})


let eng_btn = document.getElementById("eng_btn");
eng_btn.addEventListener("click", () => {
  sliderimage1('en')
  imageslide()
  checkingprev()


  let now_playing_btn = document.getElementById("now_playing_btn");
  now_playing_btn.addEventListener("click", (e) => {
    now_playing('en', 'now_playing', 'now_playing')
    sliderimg('.movie_category', '.inner_content')
    updownicon("see_more_icon", "up_arrow", "now_playing", "category1", "movie_category", "inner_content")
  })

  let top_rated = document.getElementById("top_rate_btn")
  top_rated.addEventListener("click", (e) => {
    now_playing('en', 'top_rated', 'top_rated')
    sliderimg('.movie_category2', '.inner_content2')
    updownicon("see_more_icon2", "up_arrow2", "top_rated", "category2", "movie_category2", "inner_content2")

  })

  let up_coming = document.getElementById("up_coming_btn")
  up_coming.addEventListener("click", (e) => {
    now_playing('en', 'upcoming', 'up_coming')
    sliderimg('.movie_category3', '.inner_content3')
    updownicon("see_more_icon3", "up_arrow3", "up_coming", "category3", "movie_category3", "inner_content3")

  })

  let Documentary = document.getElementById("Documentary")
  Documentary.addEventListener("click", (e) => {
    typemovies('en', 99, 'Documentary')
    sliderimg('.movie_category4', '.inner_content4')
    updownicon("see_more_icon4", "up_arrow4", "Documentary", "category4", "movie_category4", "inner_content4")

  })

  let comedy_btn = document.getElementById("comedy_btn")
  comedy_btn.addEventListener("click", (e) => {
    typemovies('en', 35, 'comedy')
    sliderimg('.movie_category5', '.inner_content5')
    updownicon("see_more_icon5", "up_arrow5", "comedy", "category5", "movie_category5", "inner_content5")

  })
  let Action_btn = document.getElementById("comedy_btn")
  Action_btn.addEventListener("click", (e) => {
    typemovies('en', 28, 'Action')
    sliderimg('.movie_category6', '.inner_content6')
    updownicon("see_more_icon6", "up_arrow6", "comedy", "category6", "movie_category6", "inner_content6")

  })

  let Adventure_btn = document.getElementById("Adventure_btn")
  Adventure_btn.addEventListener("click", (e) => {
    typemovies('en', 12, 'Adventure')
    sliderimg('.movie_category7', '.inner_content7')
    updownicon("see_more_icon7", "up_arrow7", "Adventure", "category7", "movie_category7", "inner_content7")

  })

  let Crime_btn = document.getElementById("Crime_btn")
  Crime_btn.addEventListener("click", (e) => {
    typemovies('en', 80, 'Crime')
    sliderimg('.movie_category8', '.inner_content8')
    updownicon("see_more_icon8", "up_arrow8", "Crime", "category8", "movie_category8", "inner_content8")

  })

  let Horror_btn = document.getElementById("Horror_btn")
  Horror_btn.addEventListener("click", (e) => {
    typemovies('en', 27, 'Horror')
    sliderimg('.movie_category9', '.inner_content9')
    updownicon("see_more_icon9", "up_arrow9", "Horror", "category9", "movie_category9", "inner_content9")


  })

  let Romance_btn = document.getElementById("Romance_btn")
  Romance_btn.addEventListener("click", (e) => {
    typemovies('en', 10749, 'Romance')
    sliderimg('.movie_category10', '.inner_content10')
    updownicon("see_more_icon10", "up_arrow10", "Romance", "category10", "movie_category10", "inner_content10")


  })
})

let save = document.getElementById("save");
save.addEventListener("click", () => {
  now_playing_btn.click();
  top_rated.click();
  up_coming.click();
  Documentary.click()
  comedy_btn.click();
  Action_btn.click()
  Adventure_btn.click()
  Crime_btn.click()
  Horror_btn.click()
  Romance_btn.click()
})

let language_link = document.getElementById("language");
language_link.addEventListener("click", () => {
  model_btn.click();
})


function checkingprev() {
  setTimeout(() => {
    let boxicon = document.querySelectorAll(".card");

    Array.from(boxicon).forEach(function (element) {
      element.addEventListener("click", (e) => {
        console.log(e.target.id);
        console.log(e.target);

        function preview() {
          let display_content = document.getElementById('movie_preview_details');
          const xhr = new XMLHttpRequest();
          xhr.open('GET', `https://api.themoviedb.org/3/movie/${e.target.id}?api_key=1c341a35b615c393940742a6a4938007`, true);
          xhr, onprogress = function () {
            console.log('on progress');
          }
          xhr.onload = function () {
            if (this.status == 200) {
              let content = JSON.parse(this.responseText);
              console.log(content);
              console.log(content.backdrop_path);
              document.getElementById('main_container_box').style.display = 'none'


              display_content.innerHTML = `<a href="/Movies-Hub.in/movie.html"> <i class="fa-solid fa-circle-arrow-left" id="backicon" style="color:yellow;color: yellow;font-size: 25px;margin: 10px 0px;"></i></a>
              <img src="https://image.tmdb.org/t/p/original${content.backdrop_path}" id="back_image" alt="">
                <div class="full_details_movie">
                    <h2 id="movie_title">${content.title}</h2>
                    <p id="Total_time">Total Time--${content.runtime} Minutes</p>
                    <p id="genres">Genres --${content.genres[0].name} , ${content.genres[1].name} </p>
                    <p id="release_date">Release_date -- ${content.release_date} </p>
                    <h4 id="Overview">Overview</h4>
                    <p id="overview_text">${content.overview}</p>`

             document.getElementById("backicon").addEventListener("click",()=>{
              if(content.original_language=='en'){
                console.log('true');
                
              }
             })       

            }
            else {
              console.log('Something wrong');

            }
          }
          xhr.send()
        }
        preview()
        function picture(){
          let display_content = document.getElementById('image_c');
          document.getElementById('main_container_box').style.display = 'none'
          const xhr = new XMLHttpRequest();
          xhr.open('GET', `https://api.themoviedb.org/3/movie/${e.target.id}/credits?api_key=1c341a35b615c393940742a6a4938007`, true);
          xhr, onprogress = function () {
            console.log('on progress');
          }
          xhr.onload = function () {
            if (this.status == 200) {
              let content = JSON.parse(this.responseText);
              console.log(content);
              let result=content.cast
              console.log(result);
              let str;
              for (key in result) {
        
                str += `
                 <div class="card"  >
                          <img src="https://image.tmdb.org/t/p/original${result[key].profile_path}" id="${result[key].id}"  class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${result[key].original_name}</h5>
                          </div>
                        </div>
                        
                        `
              }


              display_content.innerHTML = str
      display_content.childNodes[0].textContent = ''
      document.getElementById("back_to_top").click()

            }
            else {
              console.log('Something wrong');

            }
          }
          xhr.send()
        }
        picture()

      })

    })
  }, 1000);

}

// checkingprev()



// https://api.themoviedb.org/3/movie/765019?api_key=1c341a35b615c393940742a6a4938007&with_original_language=hi

// let navbar=document.getElementById("uppernavbar")
// navbar.style.display='none'
// let content_main_box=document.getElementById("main_container_box")
// content_main_box.style.display='none'

// let footer=document.getElementById("footer_element")
// footer.style.display='none'
