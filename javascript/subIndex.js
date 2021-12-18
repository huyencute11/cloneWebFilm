
import recommendFilms, {seriesMovieSmall, seriesMovieBot, movieTheaterSmall, movieTheaterBot, 
    newMovieUpdateSmall,  newMovieUpdateBot, topFilms, comingFilms, specialFirst}  from './data.js';
 
const $ = document.querySelector.bind(document)
const $$ =  document.querySelectorAll.bind(document)
// get id films saved in localstorage
let x = localStorage.getItem('id')
var arr = localStorage.getItem('arr')
console.log(arr)
//---------FIND FILM ------------
function FilmDetail(){
  if(arr==='seriesMovieSmall'){
    return seriesMovieSmall.find((e) => e.id == x)
  }
  else if(arr==='recommendFilms'){
    return recommendFilms.find((e) => e.id == x)
  }
  else if(arr==='seriesMovieBot'){
    return seriesMovieBot.find((e) => e.id == x)
  }
  else if(arr=='movieTheaterSmall'){
    return movieTheaterSmall.find((e) => e.id == x)
  }
  else if(arr=='movieTheaterBot'){
    return movieTheaterBot.find((e) => e.id == x)
  }
  else if(arr== 'newMovieUpdateSmall'){
    return newMovieUpdateSmall.find((e) => e.id == x)
  }
  else if(arr== 'newMovieUpdateBot'){
    return newMovieUpdateBot.find((e) => e.id == x)
  }
  else if(arr== 'topFilms'){
    return  topFilms.find((e) => e.id == x)
  }
  else if(arr== 'comingFilms'){
    return comingFilms.find((e) => e.id == x)
  }
  else if(arr== 'specialFirst'){
    return specialFirst.find((e) => e.id == x)
  }
}

//----RENDER FILM----------

function renderEpisode(Episode){
  let html = ""
  for(var a = 1; a<=Episode; a++){
      html+= `<a href="" title="Xem ${FilmDetail().name} tập ${a}"> Tập ${a} </a>`
  }
  return html
}
function renderDirectors(){
let director =  FilmDetail().directors.map(e=>
  `<a href="https://asianwiki.com/Lee_Eung-Bok">${e}</a>`
)
return director.join("")
}
function renderactors(){
let actor =  FilmDetail().actors.map(e=>
  `<a href="https://vi.wikipedia.org/wiki/Song_Hye-kyo">${e}, </a>`
)
return  actor.join()
}
function renderFilm(){
//IMAGE
  let image = $('.film-info .image')
  image.style.background = `url(${FilmDetail().img}) no-repeat center`;
  image.style.backgroundSize = "cover";
  let imageContent = `
          <img src= "${FilmDetail().img}" alt="${FilmDetail().name}" srcset="" />
            <a href="#">
            <i class="icon-play fas fa-play-circle"></i>
           </a>

           <div class="text">
               <h1>${FilmDetail().name} (${FilmDetail().year})</h1>
               
                <ul class="list-button">
                    <li class="watch-trailer">
                        <a href="" class="btn btn-trailer">
                            <i class="fab fa-youtube"></i>
                            Trailer
                         </a>
                     </li>
                     <li class="watch-film">
                          <a href="https://www.youtube.com/watch?v=awkkyBH2zEo" class="btn btn-see">
                             <i class="far fa-play-circle"></i>
                              xem phim
                          </a>
                      </li>
                </ul>
           </div>
  `
  image.innerHTML = imageContent
// console.log(image)
  let episode = $('.film-info .latest-episode')
  let episodeContent = `
     <span class="episode-heading">Tập mới nhất: </span>
     ${renderEpisode(FilmDetail().episodes)}
  `
  episode.innerHTML = episodeContent
  let breadCrumb = $('.text-des .breadcrumb')
let breadCrumbContent =`
              <li class="breadcrumb-item">
                  <a href="" title="xem phim" class="itemListE">
                     <span class="desItem">
                       <i class="fas fa-home"></i>
                       xem phim
                        <i class="fas fa-angle-right"></i>
                     </span>
                  </a>
             </li>
              <li class="breadcrumb-item">
                <a href="" title="${FilmDetail().category}" class="itemListE">
                  <span class="desItem">
                     ${FilmDetail().category}
                     <i class="fas fa-angle-right"></i>
                  </span>
              </a>
              </li>
             <li class="breadcrumb-item">
                <a href="" title="${FilmDetail().type}" class="itemListE">
                   <span class="desItem">
                       ${FilmDetail().type}
                        <i class="fas fa-angle-right"></i>
                   </span>
                </a>
              </li>
              <li class="Film-current">
                <a href="" class="current" title="${FilmDetail().name}">${FilmDetail().name}</a>             
                </li>
           
`
breadCrumb.innerHTML = breadCrumbContent

// entry meta
let entryMeta = $('.film-info .entry-meta')
let entryMetaContent = `
          <li>
                <label>${FilmDetail().status}: </label>
                <span> </span>
          </li>
           <li>
                <label>Năm phát hành: </label>
               <a href="#">${FilmDetail().year}</a>
          </li>
           <li>
                <label>Quốc gia: </label>
               <a href="#">${FilmDetail().country}</a>
            <li>
                <label>Thể loại: </label>
               <a href="#">${FilmDetail().category},</a>
               <a href="#">${FilmDetail().type}</a>
            </li>
            <li>
             <label>Đạo diễn: </label>
             ${renderDirectors()}
               
            </li>
            <li>
               <label>Diễn viên:</label>
               ${renderactors()}
            </li>
            <li>
                <label>Thời lượng :</label>
                <span>${FilmDetail().time}</span>
            </li>
`
entryMeta.innerHTML = entryMetaContent

// film content

let filmContent = $('.film-info .film-content')
let Contentfilm = `
<p class="heading-film">Nội dung phim</p>
<div class="film-review">
  <a href="#" class="">
    <b>${FilmDetail().name}</b>
  </a>
      ${FilmDetail().content}
</div>     
`
filmContent.innerHTML =  Contentfilm

let tag =  $('.film-info .tag')
let tagContent = `
  <p class="heading-film">Tags</p>
  <div class="list-tags">  
  <li>
     <a class="tag-item" href="#">${FilmDetail().name}</a>
  </li>         
   <li>
    <a class="tag-item" href="#">${FilmDetail().tag}</a> 
   </li>
   </div>
`
tag.innerHTML = tagContent

// trailer

let trailer =  $('#trailer')
let trailerContent = `

    <p class="heading">Trailer phim: ${FilmDetail().name}</p>
    <div class="trailer-area">
                <video
                  src= '${FilmDetail().video}'
                  controls
                  
               
                ></video>
                <div class="ytp-chrome">
                  <div class="ytp-title-chanel">
                      <div class="ytp-title-logo">
                        <a href="https://www.youtube.com/channel/UCpiCK8c6PBktcxq7Az_t4RQ" target="_blank" rel="noopener noreferrer"></a>
                      </div>
                      <div class="ytp-title-text">
                        <a href="https://www.youtube.com/watch?v=KFMYo3xax2A" target="_blank" rel="noopener noreferrer">
                          ${FilmDetail().name} | Official Teaser | Netflix [ENG SUB]
                        </a>
                      </div>
                  </div>
                  <div class="ytp-chrome-button">
                    
                      <div class="ytp-watch_later ytp-button" title="Xem sau">
                        <div class="watch-later-icon">
                          <i class="fas fa-clock"></i>
                        </div>
                        <div class="watch-later-title ytp-button-title">
                            Xem sau
                        </div>
                      </div>
                    
                    
                      <div class="ytp-share ytp-button" title="Chia sẽ">
                        <div class="share-icon">
                          <i class="fas fa-share"></i>
                        </div>
                        <div class="share-title ytp-button-title">
                            Chia sẻ
                        </div>
                      </div>
                 
                   
                  </div>
                </div>
       </div>
    
`
trailer.innerHTML = trailerContent
}
renderFilm()
//----DISPLAY TRAILER---------------
function displayTrailer(){
  let trailer = $('.trailerContent')
  let btnTrailer = $('.list-button .watch-trailer')
  console.log(btnTrailer)
  
  btnTrailer.onclick = function(e){
    
    var heightSocial = $('.film-info .social').clientHeight
    var heightTag = $('.film-info .tag').clientHeight
    var heightFimlInfo = $('.film-info .text-des').clientHeight + heightTag + heightTag + heightSocial
    console.log('height', heightFimlInfo)
    trailer.classList.add('active')
    window.scrollTo(0,heightFimlInfo)
    e.preventDefault()
    console.log('minh huyền')
  }
}
displayTrailer()
//--------RATING-----------
function rating(){
  let starIcons = $$('.rating .star-icon')
  console.log(starIcons)
  starIcons.forEach(Icons => {
    Icons.onclick = (e)=>{
      Icons.classList.toggle('active')
    }
  });
}
rating()


//-------render listfilm want see----------
function renderWantSeeFilms(){   
  const owlWrapper1 = $('#owl-wrapper1')
  let htmls = recommendFilms.map(
      (e) => `
      <div class="owl-item film-dir owl-item-wrapper2" id=${e.id}>
      <li class="item">
        <span class="lable">
          <span class="film-format">${e.status}</span>
        </span>
        <a
         href="./subIndex.html" target="_blank"        
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
  owlWrapper1.innerHTML = htmls.join('')
}
renderWantSeeFilms()

//-------RENDER renderNewRecommend--------------
function renderNewRecommend(){
const seriesMovieItemsBot = $('#new-recomend .grid-items-last')
console.log(seriesMovieItemsBot)

  let htmls =  newMovieUpdateBot.map(
    (e) => `
    <div class="owl-item film-dir owl-item-wrapper2" id=${e.id}>
    <li class="item">
     
      <a
       href="./subIndex.html" target="_blank"        
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
  seriesMovieItemsBot.innerHTML = htmls.join('')
}
renderNewRecommend()

//-----------Caurosel-----------------------
function Caurosel(){
  var rowBlock = $('.row-block')
  var owlWrapper = $('.owl-wrapper')
  var owlItem = $$('#want-see .owl-item')
  var owlWrapperOuter = $('.owl-wrapper-outer').clientWidth - 3
      //  console.log('owlWrapperOuter', owlWrapperOuter)
      var ArrowPrev = $('.owl-prev')
      var ArrowNext = $('.owl-next')
  var numeral = Math.round(owlWrapperOuter/owlItem[0].clientWidth)
  //get displacement value
  var size = (owlItem[0].clientWidth*numeral)
  console.log(owlItem[0].clientWidth)
  console.log(owlItem.length)
  console.log('size',size)
  var quantity = Math.floor((owlItem[0].clientWidth*owlItem.length)/size)
  console.log(quantity)
  var count = 0, time =4000
  // var stateTranslateOwlWrapper = true; //check if owl-wrapper has finished teleporting 
  var v_interval = ""//save interval value
  function run_setInterval(){
      v_interval = setInterval(()=>{
        owlWrapper.style.transition = "transform .5s ease-in-out"
          if(count>=quantity){
            owlWrapper.style.transform = `translate3d(${(owlWrapperOuter*count)}px, 0px, 0px)`
              count = 0
             
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
var ArrowPrev = $('.owl-prev')
var ArrowNext = $('.owl-next')

 Caurosel()

//------------------- click mobile-search-icon----------- 
function handleWithMenuMobile(){
  var coverBtnSearch = $('.cover-btn-search')
  var mobileSearchBar = $('.mobile-search-bar')
  var searchBtn = $('.btn-search')
  var clearBtn1 = $('.clear-search-bar.bar1')
  var clearBtn2 = $('.clear-search-bar.bar2')
  var humberBtn = $('.btn-humber')
  var category = $('.category')
  var country = $('.country')
  var year = $('.year')
  var topFilm = $('.topFilm')
  var subCate = $('.subCate')
  var subCountry = $('.subCountry')
  var subYear = $('.subYear')
  var subTopFilm = $('.subTopFilm')
  var humberCover = $('.humber-cover')
  var mobileMenu = $('.mobile-menu')
  var filmDetail = $('.film-detail')
  let closeBtn = $('.close')
  console.log(category,country,year,topFilm, filmDetail)
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
      mobileMenu.classList.toggle('active')
      filmDetail.classList.toggle('active')
       closeBtn.classList.toggle('active')
      humberBtn.classList.toggle('active')
  }
  
}
handleWithMenuMobile()