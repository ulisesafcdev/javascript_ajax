const $fetch = document.getElementById('fetch');
const $fragment = document.createDocumentFragment();

async function getData() {

    try {

        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();

        console.log(data);

        if (!res.ok) throw {
            status: res.status,
            statusText: res.statusText
        }

        data.forEach((el) => {

            const $li = document.createElement('li');
            $li.innerHTML = `ID: ${el.id} // NAME: ${el.name} // USER: ${el.username}`;
            $fragment.appendChild($li);

        })

        $fetch.appendChild($fragment);
        
    } catch (err) {

        let message = err.statusText || 'HUBO UN ERRORRRRRRRRRR';
        $fetch.innerHTML = `Error ${err.status}, ${message}`;
        
    } finally {

    }

}

getData();