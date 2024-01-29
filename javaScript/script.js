const timeStamp = '1706273054161';
const apiKey = '82eaa6525558b9014aa0602aebd58cf4';
const md5 = 'ef5162c1f492c2251a0a77e2fd003e1e';
const url = `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`;


    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((json)=> {
        json.data.results.forEach(element => {
            const titulo = element.title;
            const foto = element.thumbnail.path + '.' + element.thumbnail.extension;
            element.textObjects.forEach(descricaoObj => {
                const descricao = descricaoObj.text;
                console.log(json);
           

            let htmlContent = document.querySelector('.nome');
            htmlContent.innerHTML  += `<div><h1>${titulo}</h1><img src="${foto}" alt="${titulo}" /><h1 class="descricao">${descricao}</h1><hr/></div>`;
            
        });

        });    
    })
    


    

