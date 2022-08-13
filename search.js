
let spinner = document.querySelector('.lds-roller');
function searchmovie(moviename) {

  let display_content = document.getElementById('search_result');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=1c341a35b615c393940742a6a4938007&with_original_language=hi&query=${moviename}`, true);
  spinner.style.display = 'inline-block';
  xhr, onprogress = function () {
    console.log('on progress');
  }
  xhr.onload = function () {
    if (this.status == 200) {
      spinner.style.display = 'none';
      let content = JSON.parse(this.responseText);
      let result = content.results;
      console.log();

      if (result.length > 0) {

        let str;
        for (key in result) {

          str += `<div class="card" >
                  <div class="ratings">${result[key].vote_average}</div>
                  <img src="https://image.tmdb.org/t/p/original${result[key].poster_path}"  id="${result[key].id}" class="card-img-top" alt="...">
                  <div class="card-body">
                  <h5 class="card-title">${result[key].title}</h5>
                  </div>
              </div>`
        }
        display_content.innerHTML = str;
        display_content.childNodes[0].textContent = ''
        preview()


      }
      else {
        spinner.style.display = 'none';

        document.getElementById("error_msg").innerText = 'No Result...'
        icon.style.display = 'none';
      }
    }

    else {
      spinner.style.display = 'none';

      document.getElementById("error_msg").innerText = 'No Result...'
      icon.style.display = 'none';


    }
  }
  xhr.send()
}
let search_box_btn = document.getElementById("search_btn_box");
let pincodevalue = document.getElementById("pincode");
let icon = document.querySelector(".see_more");
icon.style.display = 'none';
search_box_btn.addEventListener("click", (e) => {
  console.log(pincodevalue.value);
  icon.style.display = 'flex';

  searchmovie(pincodevalue.value, search_result)
  sliderimg('.movie_category11', '.inner_content11')
  updownicon("see_more_icon11", "up_arrow11", "search_result", "category11", "movie_category11", "inner_content11")
})

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
    console.log(inner_slider.offsetLeft);

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
document.getElementById("pincode").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("search_btn_box").click();
  }
});

function preview() {
  let card = document.querySelectorAll(".card")
  console.log(card);

  Array.from(card).forEach(function (element, index) {
    element.addEventListener("click", (e) => {
      console.log(e.target.id);
      function movieimg() {

        let display_content = document.getElementById('movie_preview_details');
        console.log(display_content);

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
            document.getElementById('category11').style.display = 'none'
            document.getElementById('seemore').style.display = 'none'
            document.getElementById('search_boxxx').style.display = 'none'

            


            display_content.innerHTML = `<i class="fa-solid fa-circle-arrow-left" style="color:yellow;color: yellow;font-size: 25px;margin: 10px 0px;" onclick="window.location.href='/search.html'"></i>
          <img src="https://image.tmdb.org/t/p/original${content.backdrop_path}" id="back_image" alt="">
            <div class="full_details_movie">
                <h2 id="movie_title">${content.title}</h2>
                <p id="Total_time">Total Time--${content.runtime} Minutes</p>
                <p id="genres">Genres --${content.genres[0].name} , ${content.genres[1].name} </p>
                <p id="release_date">Release_date -- ${content.release_date} </p>
                <h4 id="Overview">Overview</h4>
                <p id="overview_text">${content.overview}</p>`

          }
          else {
            console.log('Something wrong');

          }
        }
        xhr.send()
      }
      movieimg()
      function caracter() {

        let display_content2 = document.getElementById('image_c');
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.themoviedb.org/3/movie/${e.target.id}/credits?api_key=1c341a35b615c393940742a6a4938007`, true);
        xhr, onprogress = function () {
          console.log('on progress');
        }
        xhr.onload = function () {
          if (this.status == 200) {
            let content = JSON.parse(this.responseText);
            console.log(content);
            let result = content.cast
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


            display_content2.innerHTML = str
            display_content2.childNodes[0].textContent = ''
            document.getElementById("back_to_top").click()

          }
          else {
            console.log('Something wrong');

          }
        }
        xhr.send()
      }
      caracter()

    })
  })


}    
let language_link = document.getElementById("language");
language_link.addEventListener("click", () => {
  model_btn.click();
})
