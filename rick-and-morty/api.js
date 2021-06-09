

export const getData = () => {
    return fetch(`https://rickandmortyapi.com/api/character/?page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const characters = data.results.map(function (e) {
                const image = e.image;
                const name = e.name;
                return {
                    image: image,
                    name: name,
                    id: e.id
                }
            })
            return characters
        })
}

export const getChar = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => ({
            name: data.name,
            image: data.image,
            status: data.status,
            gender: data.gender
        }))
}
