
const renderItems = (data) => {
    data.forEach(element => {
        console.log(element);
    });
}

fetch('https://gloprojecttest-default-rtdb.europe-west1.firebasedatabase.app/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(console.log('final'))