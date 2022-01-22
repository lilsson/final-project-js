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

        responseData.data.forEach( item => {
            let li = document.createElement('li');
            li.textContent = item.first_name;

            ul.appendChild(li);

        })
        
        document.getElementById('api').appendChild(ul);
        console.log(responseData);

    }
    let requist = new XMLHttpRequest();

    requist.addEventListener('load', render);

    requist.open('GET', 'https://reqres.in/api/users?page=2');
    requist.send();
}

getUsers();