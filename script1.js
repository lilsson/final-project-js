let burgerButton = document.getElementById('togglebutton');
let navBar = document.getElementById('navigation-ul');

burgerButton.addEventListener('click',  function() {
   navBar.classList.toggle('toggle');
   burgerButton.classList.toggle('active');

})

//            ajax (contact)


function getUsers() {

    function render() {
        let response = this.responseText;
        let responseData = JSON.parse(response)

        let ul = document.createElement('ul');
        ul.classList.add('ul-list');

        responseData.data.forEach( item => {
            let li = document.createElement('li');
            li.textContent = item.first_name;

            ul.appendChild(li);

        })
        
        document.getElementById('api').appendChild(ul);
        console.log(responseData);

    }
    function errorRender() {
        let p = document.createElement('p');
        p.textContent = 'server Error';

        document.getElementById('api').appendChildA(p);
    }
    let requist = new XMLHttpRequest();

    requist.addEventListener('load', render);
    requist.addEventListener('error', errorRender);

    requist.open('GET', 'https://reqres.in/api/users?page=2');
    requist.send();
}

getUsers();