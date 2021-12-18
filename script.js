// Burger code
 let burgerButton = document.getElementById('togglebutton');
 let navBar = document.getElementById('navigation-ul');

 burgerButton.addEventListener('click',  function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');

})

// slider code

let data = [
    {
        id: 1,
        imageUrl: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/18/3200x2473/gallery-1462570502-1967-volvo-1800s.jpg?resize=980:*',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    {   
        id: 2,
        imageUrl: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/18/4000x3983/ferrari-308-gts-a.jpg?resize=980:*',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    {
        id: 3,
        imageUrl: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/2560x1906/1968-chevrolet-corvette_1.jpg?resize=980:*',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    {
        id: 4,
        imageUrl: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/3200x2136/1971-lamborghini-miura-sv_1.jpg?resize=980:*',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    {
        id: 5,
        imageUrl: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/18/4000x3117/1972-detomaso-pantera-a.jpg?resize=980:*',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    {
        id: 6,
        imageUrl: 'http://www.hongliyangzhi.com/manufacturers/mercedes-benz/mercedes-benz-sls/mercedes-benz-sls-1960/mercedes-benz-sls-1960-6.jpg',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    {
        id: 6,
        imageUrl: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/18/2560x1706/1967-camaro.jpg?resize=980:*',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    
]


let arrowLeft = document.getElementById('arrow-left');
let sliderContent = document.getElementById('slider-content');
let arrowRight = document.getElementById('arrow-right');
let printerest = document.getElementById('rest');
let sliderIndex = 0;

function createAtag(item) {
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}
function createh2tag(item) {
    let tagTitle = document.createElement('h2');
    tagTitle.setAttribute('class', 'title');
    tagTitle.append(item.title);


    return tagTitle;
}
function createImgtag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', 'slide');

    return tagImage;
}


function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let h2tag = createh2tag(data[sliderIndex]);
    let imgTag = createImgtag(data[sliderIndex]);

    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2tag);

    sliderContent.appendChild(slideItem);

    

    console.log(slideItem);
}

function arrowLeftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length -1;
        setSlide();
        return;
    }
  sliderIndex--;
  setSlide();
}

function arrowRightClick() {
    if ( sliderIndex >= data.length -1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}
arrowLeft.addEventListener('click', arrowLeftClick);

arrowRight.addEventListener('click', arrowRightClick);

setInterval( ()=> {
    arrowRightClick();
}, 3000);

 setSlide();