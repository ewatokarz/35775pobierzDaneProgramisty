// fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')  
//     .then(response => response.json())
//     .then((data) =>{
        
//         console.log(data);
//     })

    // $(document).ready(function() { 
    //     $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
    //     console.log(data);
    //     });
    // });  
// 

let btnGetUserData = document.getElementById('get-user-data');

const getUser = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')  
        .then(response => response.json())
        .then((data) =>{
        
        console.log(data);

        // .catch(error => {
        //     console.error(error) 
        // }) 
        let containerOne = document.createElement('div');
       

        let attrNode = document.createAttribute('id');
        attrNode.value = 'dane-programisty';

        containerOne.setAttributeNode(attrNode);
        
        console.log(containerOne);
        
        let pUserName = document.createElement('p');
        let pSurname = document.createElement('p');
        let pOccupancy = document.createElement('p');
        let pCompany = document.createElement('p');

        // console.log(p);
        console.log(pSurname);
        // console.log(pThreeElement);
        // console.log(pFourElement);

        pUserName.innerText = `imie: ${data.imie}`;
        pSurname.innerText =`nazwisko: ${data.nazwisko}`;
        pOccupancy.innerText = `zawod: ${data.zawod}`;
        pCompany.innerText = `firma: ${data.firma}`;
        console.log(pUserName);
        
        // let bodyElement = document.getElementsByName('body');
        
        document.getElementsByTagName('body')

        document.body.appendChild(pUserName);
        document.body.appendChild(pSurname);
        document.body.appendChild(pOccupancy);
        document.body.appendChild(pCompany);

        document.body.appendChild(pUserName);
        document.body.appendChild(pSurname);
        document.body.appendChild(pOccupancy);
        document.body.appendChild(pCompany);

        
        // pOneElement.setAttributeNode(attrNode);

        // pOneElement.innerText = data;

        // let bodyElement = document.getElementsByName('body');
        // console.log(bodyElement);

        // bodyElement.appendChild(pOneElement);


        // let numberOfParagraphs = 3

        // for (let i=0; i<numberOfParagraphs; i++) {
        //     let pElement = document.createElement('p')
        //     console.log(pElement);
        // }


    });

}    

btnGetUserData.addEventListener('click', getUser);