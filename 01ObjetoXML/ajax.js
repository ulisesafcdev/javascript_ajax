(()=> {

    // paso 1 -> instanciar el objeto
    const xhr = new XMLHttpRequest();
    const $xhr = document.getElementById('xhr');
    const $fragment = document.createDocumentFragment();

    // console.log(xhr);
    // paso 2 -> asignar el evento
    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;
        // console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300) {
            // logica
            // console.log('exito');
            let datos = JSON.parse(xhr.responseText);
            // console.log(datos);
            datos.forEach((el) => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.id} / ${el.username} / ${el.phone} / ${el.website}`;
                $fragment.appendChild($li);
            })

            $xhr.appendChild($fragment);
        } else {
            let message = xhr.statusText || "Ocurrio un error!";
            $xhr.innerHTML = `${xhr.status} : ${message}`;
        }
    })

    // paso 3 -> abrir la peticion...
    // -> establecer el metodo con el que vamos a trabajar, get, put, post, delete
    // -> la url, recurso o endpoint de los datos
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    // enviar la peticion
    xhr.send();

})();