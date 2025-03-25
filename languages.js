const API_URL = 'http://localhost:3002';
async function giveLanguages (){
    const response = await fetch(`${API_URL}api/giveLanguages`, {
        method : 'POST',
        headers : {'content-type':'aplication/json'},
        body : "{languages : HTML}",
    });

    if(response.status === 200) {
        console.log('language bien envoyé');
    } else if (response.status === 408) {
        console.log('language non trouvé');
    } else {
        console.log('il y as eu un problème');
    };

    console.log('Response: ', response);

    const body = await response.json();
	console.log(body);
}

giveLanguages();