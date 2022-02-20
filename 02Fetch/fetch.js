const $fetch = document.getElementById('fetch');
const $fragment = document.createDocumentFragment();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        // console.log(res);
        
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then((data) => {
        console.log(data);

        data.forEach((el) => {
            const $li = document.createElement('li');
            $li.innerHTML = `${el.id} // ${el.name} // ${el.username} // ${el.phone}`;
            $fragment.appendChild($li);
        })

        $fetch.appendChild($fragment);
    })
    .catch((err) => {
        console.log(err);
        let message = err.statusText || "Hubo un error";
        $fetch.innerHTML = message;
    })
    .finally(() => {
        console.log("Siempre se ejecuta");
    });