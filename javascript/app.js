import recommendFilms, {seriesMovieSmall, seriesMovieBot, movieTheaterSmall, movieTheaterBot, 
  newMovieUpdateSmall,  newMovieUpdateBot, topFilms, comingFilms}  from './data.js';
// import {seriesMovie} from './data.js';
console.log(comingFilms)

const $ = document.querySelector.bind(document)
const $$ =  document.querySelectorAll.bind(document)

//----------------------RENDER FILMS--------------------------------

//render list recomendfimls
function renderRecomendFilms(){   
    const owlWrapper2 = $('#owl-wrapper2')
    let htmls = recommendFilms.map(
        (e) => `
        <div class="owl-item film-dir owl-item-wrapper2" id=${e.id}>
        <p class=${e.arr} style="opacity: 0"></p>
        <li class="item">
          <span class="lable">
            <span class="film-format">${e.status}</span>
          </span>
          <a
           href="./subIndex.html"        
            title="${e.name}"
          >
            <img
              src= ${e.img}
              alt="${e.name}"
              srcset=""
            />
            <p class="name-film">${e.name}</p>
            <i class="icon-play fas fa-play-circle"></i>
          </a>
        </li>
      </div>
        `
    )
    owlWrapper2.innerHTML = htmls.join('')
}
renderRecomendFilms()
function renderItem(e){
  return `
  <div class="items film-dir" id="${e.id}">
  <p class=${e.arr} style="opacity: 0"></p>
         <li class="item">
           <span class="lable">
             <span class="film-format">${e.status}</span>
           </span>
           <a
           href="./subIndex.html"
           title="${e.name}">
             <img
             src= ${e.img}
             alt="${e.name}"
               srcset=""
             />
             <p class="name-film">${e.name}</p>
             <i class="icon-play fas fa-play-circle"></i>
           </a>
         </li>
 </div>
`
}
//render seriesFilms
const seriesMovieItemssmall = $('.seriesMovie .items-small')
const seriesMovieItemsBot = $('.seriesMovie .grid-items-bot')
const movieTheaterItemssmall = $('.movieTheater .items-small')
const movieTheaterItemsBot = $('.movieTheater .grid-items-bot')
const newMovieUpdateItemssmall = $('.newMovieUpdate .items-small')
const newMovieUpdateItemsBot = $('.newMovieUpdate .grid-items-bot')
const topMovieItems = $('.topFilm .items-small')
function renderSeriesFilmsTop(content1, typeMovie1){
  
   let htmls = typeMovie1.map(
     e=> renderItem(e) 
   )
   content1.innerHTML = htmls.join('')
}
renderSeriesFilmsTop(seriesMovieItemssmall, seriesMovieSmall)
renderSeriesFilmsTop(movieTheaterItemssmall, movieTheaterSmall)
renderSeriesFilmsTop(newMovieUpdateItemssmall, newMovieUpdateSmall)
renderSeriesFilmsTop(topMovieItems, topFilms)
function renderSeriesFilmsBot(content2, typeMovie2){ 
  let htmls = typeMovie2.map(
    e=> renderItem(e) 
  )
  content2.innerHTML = htmls.join('')
}
renderSeriesFilmsBot(seriesMovieItemsBot, seriesMovieBot)
renderSeriesFilmsBot(movieTheaterItemsBot, movieTheaterBot)
renderSeriesFilmsBot(newMovieUpdateItemsBot, newMovieUpdateBot)

//render comingsoon films
function renderComingSoonFilms(){
   const comingMovies = $('.comingMovies .grid-items-last')
   let html = comingFilms.map(
   (e)=>
     `<div class="items film-dir" id="${e.id}">
     <p class=${e.arr} style="opacity: 0"></p>
         <li class="item">
            <a title="${e.name}" href="./subIndex.html">
              <img
               src=${e.img}
               alt="${e.name}"
               srcset=""
              />
              <p class="name-film">${e.name}</p>
              <i class="icon-play fas fa-play-circle"></i>
            </a>
         </li>
    </div>
      `
    
  )
  comingMovies.innerHTML = html.join('')
}
renderComingSoonFilms()


//-----------------handle onclick with Film------------------------

function handleMovie(){
  const list = $$('.film-dir')
  for (const item of list) {
     item.onclick = (e)=>{
      
      localStorage.setItem('id', item.id);
      localStorage.setItem('arr', item.firstElementChild.className);
        console.log( item.firstElementChild.className)
     }
  }
}

handleMovie()
// handleOnclick()
// CAUROSEL 2
var rowBlock = $('.row-block')
  var owlWrapper = $('.owl-wrapper')
  var owlItem = $$('.owl-item')
  var owlWrapperOuter = $('.owl-wrapper-outer').clientWidth - 8
      //  console.log('owlWrapperOuter', owlWrapperOuter)
      var ArrowPrev = $('.owl-prev')
      var ArrowNext = $('.owl-next')
  var numeral = Math.round(owlWrapperOuter/owlItem[0].clientWidth)
  //get displacement value
  var size = (owlItem[0].clientWidth*numeral)
function Caurosel(){
  
  console.log(owlItem[0].clientWidth)
  console.log(owlItem.length)
  console.log('size',size)
  var quantity = (owlItem[0].clientWidth*owlItem.length)/size
  console.log(quantity)
  var count = 0, time =4000
  // var stateTranslateOwlWrapper = true; //check if owl-wrapper has finished teleporting 
  var v_interval = ""//save interval value
  var hidden, visiblilityChange
  function run_setInterval(){
      v_interval = setInterval(()=>{
        owlWrapper.style.transition = "transform .5s ease-in-out"
          if(count>=quantity){
            owlWrapper.style.transform = `translate3d(${(owlWrapperOuter*count)}px, 0px, 0px)`
              count = 0
              ArrowPrev.onclick
              // handlerOwlControls(count)
          }
            owlWrapper.style.transform = `translate3d(${(-owlWrapperOuter*(count++))}px, 0px, 0px)` 
              // handlerOwlControls(count)
          // handlerOwlControls(count)
      }, time)
  }
  
  //stop interval
  function run_clearInterval(){
      clearInterval(v_interval);
  } 
  run_setInterval();

}
Caurosel()


// click mobile-search-icon 
function handleWithMenuMobile(){
  let coverBtnSearch = $('.cover-btn-search')
  let mobileSearchBar = $('.mobile-search-bar')
  let searchBtn = $('.btn-search')
  let clearBtn1 = $('.clear-search-bar.bar1')
  let clearBtn2 = $('.clear-search-bar.bar2')
  let humberBtn = $('.btn-humber')
  let category = $('.category')
  let country = $('.country')
  let year = $('.year')
  let topFilm = $('.topFilm')
  let subCate = $('.subCate')
  let subCountry = $('.subCountry')
  let subYear = $('.subYear')
  let subTopFilm = $('.subTopFilm')
  let mainContent = $('.main-content')
  let humberCover = $('.humber-cover')
  let mobileMenu = $('.mobile-menu')
  let closeBtn = $('.close')
  let subs = $$('.mobile-menu .sub')
  
  console.log(humberBtn)
  console.log(category,country,year,topFilm)
  console.log(humberBtn)
  console.log(coverBtnSearch)
  coverBtnSearch.onclick = function(){
      mobileSearchBar.classList.toggle('active')
      searchBtn.classList.toggle('active')  
      clearBtn1.classList.toggle('active')
      clearBtn2.classList.toggle('active')
      humberBtn.classList.toggle('active')
      humberBtn.classList.toggle('index')
      humberCover.classList.toggle('active')
  }
  category.onclick = function(){
      subCate.classList.toggle('active')
  }
  country.onclick = function(){
      subCountry.classList.toggle('active')
  }
  year.onclick = function(){
      subYear.classList.toggle('active')
  }
  topFilm.onclick = function(){
      subTopFilm.classList.toggle('active')
  }
  humberCover.onclick = function(){
      mainContent.classList.toggle('active')
      mobileMenu.classList.toggle('active')
      closeBtn.classList.toggle('active')
      humberBtn.classList.toggle('active')
      // mobileMenu.style.tabIndex = "300"
  }
  // for (const sub of subs) {
  //   sub.onclick = (e)=>(
  //     console.log(e.target)
  //   // (e.target.innerText).style.accentColor = "red"
  //   )
  // }
  // if(humberCover.onclick &&  coverBtnSearch.onclick ) {
  //     humberBtn.style.display = "none"
  // }
  console.log(subs)
} 
handleWithMenuMobile()   
  
              


// }
