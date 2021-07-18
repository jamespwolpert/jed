

const contact = document.querySelector('.contact');
const track = document.querySelector('.track');
const exclaims = document.querySelectorAll('.exclaim');

function skew(e) {
    if(! track.classList.contains('skewed')) {
        track.classList.add('skewed');
        // exclaims.forEach((i)=> {
        //     i.style.display = 'block';
        // });
        
    } else {
        track.classList.remove('skewed');
        // exclaims.forEach((i)=> {
        //     i.style.display = 'none';
        // });
    }
    
}

contact.addEventListener('mouseenter', skew);
contact.addEventListener('mouseleave', skew);


// let timeline = new TimelineMax({
//     repeat: -1,
//     yoyo: true
//   }),
//   feTurb = document.querySelector('#feturbulence');

// timeline.add(
//   TweenMax.to(feTurb, 20, {
//     onUpdate: function() {
//       let bfX = this.progress() * 0.005 + 0.005, //base frequency x
//         bfY = this.progress() * 0.005 + 0.005; //base frequency y
//       feTurb.setAttribute('baseFrequency', `${bfX} ${bfY}`);
//     }
//   }), 0
// );




// Load random cat images. heh.
const catHouse = document.querySelector('.quotes');

const cats = [
    'a.png',
    'b.png',
    'c.png',
    'd.png',
    'e.png'
];

function showCat(targetCat, catPosX, catPosY) {
    let img = document.createElement('img');
    img.className = 'cat';
    img.src = `/bitmap/${cats[targetCat]}`;
    img.style.left = `${catPosX}px`;
    img.style.top = `${catPosY}px`;
    catHouse.appendChild(img);
    setTimeout(()=> { catHouse.removeChild(img)}, 6600);
}

function selectCat() {
    let targetCat = Math.floor(Math.random() * cats.length);
    let catPosX = Math.floor(Math.random() * window.innerWidth); 
    let catPosY = Math.floor(Math.random() * window.innerHeight);  

    showCat(targetCat, catPosX, catPosY);
}

setInterval(()=> {
    selectCat();
}, 1000)

const quotes = [

    "I can't be <span class='expletive'>fucked</span> with it, honestly",
    "Your old sound was quite <span class='expletive'>shite</span>, mate.",
    "Stop reachin' over the bar ya <span class='expletive'>cunt</span>",
    "<span class='expletive'>Must</span> you play guitar while I'm micing the kit?", 
    "Eh, the room's fine -- grow some <span class='expletive'>ears<span>, man",
    "Yeah, this band is pretty <span class='expletive'>rockin!</span>"

];

function showQuote(targetQuote, quotePosX, quotePosY) {
    let div = document.createElement('div');
    div.className = 'quote';
    div.innerHTML = quotes[targetQuote];
    div.style.left = `${quotePosX}px`;
    div.style.top = `${quotePosY}px`;
    catHouse.appendChild(div);
    setTimeout(()=> { catHouse.removeChild(div)}, 6600);
}


function selectQuote() {
    let targetQuote = Math.floor(Math.random() * quotes.length);
    let quotePosX = Math.floor(Math.random() * window.innerWidth); 
    let quotePosY = Math.floor(Math.random() * window.innerHeight);  

    showQuote(targetQuote, quotePosX, quotePosY);
}

// setInterval(()=> {
//     selectQuote();
// }, 3000)

// let delta = 0.001; 
// let reverse = false;
// const waves = document.querySelector('#waves');

// var raf = window.mozRequestAnimationFrame    ||
//           window.webkitRequestAnimationFrame ||
//           window.msRequestAnimationFrame     ||
//           window.oRequestAnimationFrame;



// function wave() {

//     if(!reverse) {
        
//      delta += 0.00001;
    
//     } else {
//        delta -= 0.00001;
//     }
    
//     let test = waves.setAttribute('baseFrequency', `${delta} ${delta}` );
    // console.log(waves.getAttribute('baseFrequency'));
    
    
    // window.requestAnimationFrame(wave);


// }
// wave();

// setInterval(()=>{
//     reverse = !reverse;
// }, 15000);