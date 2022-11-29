

export default async function api() {
    const response = await fetch("http://localhost:3333/listaDePlantas", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let res = await response.json();
    return res

}

















