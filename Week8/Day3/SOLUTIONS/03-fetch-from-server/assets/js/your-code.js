export function getAllDogs() {
    // Your code here
    return fetch('/dogs')
}

export function getDogNumberTwo() {
    // Your code here
    return fetch('/dogs/2')
}

export function postNewDog() {
    // Your code here
    return fetch('/dogs', {
        method: 'POST',
        headers: { 'Content-Type': 'x-www-form-urlencoded' },
        body: new URLSearchParams({ name: 'Dag', age: 10 })
    })
}

export function postNewDogV2(name, age) {
    // Your code here
    return fetch('/dogs', {
        method: 'POST',
        headers: { 'Content-Type': 'x-www-form-urlencoded' },
        body: new URLSearchParams({ name: name, age: age })
    })
}

export function deleteDog(id) {
    // Your code here
    return fetch(`/dogs/${id}/delete`, {
        method: 'POST',
        headers: { 'AUTH': 'ckyut5wau0000jyv5bsrud90y' }
    })
}
