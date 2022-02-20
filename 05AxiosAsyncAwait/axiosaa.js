const $axios = document.getElementById('axios');
const $fragment = document.createDocumentFragment();

async function getData () {

    try {

        let res = await axios.get('https://jsonplaceholder.typicode.com/users');
        let data = await res.data;

        console.log(data);

        data.forEach((el) => {

            const $li = document.createElement('li');
            $li.innerHTML = `Id: ${el.id} // Nombre: ${el.name} // Usuario: ${el.username}`;
            $fragment.appendChild($li);

        })

        $axios.appendChild($fragment);
        
    } catch (err) {

        let message = err.response.statusText || 'Data not found';
        $axios.innerHTML = `Error ${err.response.status} ${message}`;
        
    }

}

getData();