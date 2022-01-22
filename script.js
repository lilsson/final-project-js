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
        imageUrl: 'https://images2.bonhams.com/image?src=Images/live/2018-12/13/24819031-1-90.jpg&width=960',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    {   
        id: 2,
        imageUrl: 'https://images2.bonhams.com/image?src=Images/live/2021-09/09/25125012-1-70.jpg&width=960',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    {
        id: 3,
        imageUrl: 'https://images1.bonhams.com/image?src=Images/live/2021-06/01/25093855-1-25.jpg&width=960',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    {
        id: 4,
        imageUrl: 'https://images2.bonhams.com/image?src=Images/live/2021-09/10/25128857-1-71.jpg&width=960',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    {
        id: 5,
        imageUrl: 'https://images2.bonhams.com/image?src=Images/live/2020-07/17/24986591-1-20.jpg&width=960',
        title: 'Printerest',
        url: 'https://www.pinterest.com/search/pins/?q=old%20cars&rs=typed&term_meta[]=old%7Ctyped&term_meta[]=cars%7Ctyped'
    },
    {
        id: 6,
        imageUrl: 'https://images2.bonhams.com/image?src=Images/live/2020-08/06/24999162-1-8.jpg&width=960',
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

    

    // console.log(slideItem);
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
}, 6000);

 setSlide();

//                         registracion

document.getElementById('registration').addEventListener('submit', function(event2) {
  event2.preventDefault();

  let errors = {};

  let form = event2.target;
//   console.log(form);

// username
let username = form.querySelector('[name = "username"]').value;
  if (username.length < 4) {
      errors.username = 'Min 4 letters';
  }
  if (username == ' ') {
      errors.username = 'Please enter your Username';
  }
//   password

let password = form.querySelector('[name = "password"]').value;
let password2 = form.querySelector('[name = "password2"]').value;

if (password.length < 5) {
    errors.password = 'Inavlid Password';
}

if (password2.length == ' ') {
    errors.password2 = 'repeat password';
}
if(password != password2) {
    errors.password2 = 'passwords do not match';
}


// checkbox
 let agree = form.querySelector('[name = "agree"]').checked;

 if( agree == false) {
     errors.agree ='you must agree our terms and conditions';
 }

//  radio
let gender = false;

form.querySelectorAll('[name = "gender"]').forEach(item2 => {
    if (item2.checked) {
        gender = true;
    }   
});
if ( !gender) {
    errors.gender = 'Please select your Gender';
}
 
form.querySelectorAll('.error-text').forEach(item3 => {
    item3.textContent = ' ';
});

// errors
for (let item in errors) {
   console.log(item);

   let errorPlaceholder = document.getElementById('error_' + item);

   if (errorPlaceholder) {
       errorPlaceholder.textContent = errors[item];
   }
}
if (Object.keys(errors).length == 0){
    form.submit();
}
console.log(errors);
})
// show me password
function myFunction() {
    var x = document.getElementById("mypassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

//   localstorage & sesionstorage

let counterItem = localStorage.getItem('counter');

let newValue;
if(!counterItem) {
    newValue = 1;
} else {
    newValue = parseInt(counterItem) + 1;
}

localStorage.setItem('counter', newValue);

// document.getElementById('userCounter').textContent = localStorage.getItem('counter');
// console.log(counter);





 
