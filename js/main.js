console.log('Starting up');

// var gProjs ;

var gProjs = [{
    id: "minesweeper",
    name: "mine sweeper",
    title: "stay away from the mines",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "https://dese236.github.io/minesweeper/",
    publishedAt: 'Jul 21',
    labels: ["matrix", "keyboard events"],
},
{
id: "mybookshop",
name: "my book shop",
title: "mange you own book shop",
desc: "lorem ipsum lorem ipsum lorem ipsum",
url: "https://dese236.github.io/My-Book-Shop/",
publishedAt: 'Aug 21',
labels: ["Matrixes", "keyboard events" , "responsivness"],
},
{
id: "packman",
name: "Packman",
title: "same old game",
desc: "lorem ipsum lorem ipsum lorem ipsum",
url: "https://dese236.github.io/packman/",
publishedAt: 'jul 21',
labels: ["Matrixes", "keyboard events" ]
}]


function initPage(){
    createProjs()
    createModals()
}

function createProjs(){
    var strProtHTMLs = gProjs.map(function(proj , idx){
       return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx+1}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/myImages/${proj.id}.JPG" alt="proj img">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`
    
        // var strModalHtml;
    })
    elContainer = document.querySelector('.portfolio-container')
    elContainer.innerHTML = strProtHTMLs.join('')

}

function createModals(){
    var strModalHTMLs = gProjs.map(function(proj , idx){
    return `  <div class="portfolio-modal modal fade" id="portfolioModal${idx+1}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/myImages/${proj.id}.JPG" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <li><button onclick="onOpenProj('${proj.url}')" target="blank">go to project</button></li>
                  <li>Date: ${proj.publishedAt}</li>
                  <li>Client: Window</li>
                  <li>Category: Photography</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
    })
elModals =document.querySelector('.modals-container')
elModals.innerHTML = strModalHTMLs.join('')
}

function onSendMail(){
 var email = document.querySelector('[name=email]').value
 var subject = document.querySelector('[name=subject]').value
 var body = document.querySelector('[name=message]').value
 
 var link = `https://mail.google.com/mail/?view=cm&fs=1&to=dese236@gmail.com&su=${subject}&body=${body}`
// window.location = link 
window.open(link , '_blank')
}

function onOpenProj(url){
    window.open(url , '_blank')
}