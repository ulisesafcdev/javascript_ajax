const $axios = document.getElementById('axios');
const $fragment = document.createDocumentFragment();

axios
    .get('https://jsonplaceholder.typicode.com/user')
    .then((res) => {
        console.log(res);

        let data = res.data;
        
        data.forEach((el) => {

            const $li = document.createElement('li');
            $li.innerHTML = `ID: ${el.id} // NOMBRE: ${el.name} // USUARIO: ${el.username}`;
            $fragment.appendChild($li);

        })

        $axios.appendChild($fragment);
    })
    .catch((err) => {
        let message = err.response.statusText || 'data not found';
        console.log(`Error: ${err.response.status} ${message}`);
        $axios.innerHTML = `Error ${err.response.status} ${message}`;
    });