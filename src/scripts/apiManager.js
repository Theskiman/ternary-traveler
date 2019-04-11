const apiURL = "http://localhost:8088"
export default {

    getAllInterests() {
        return fetch("http://localhost:8088/interests?_expand=place")
            .then(response => response.json())
    },

    getOne: (key, objectId) => {
        return fetch(`${apiURL}/${key}/${objectId}`)
            .then(response => response.json())
    },

    postAll: (key, objectId) => {

        return fetch(`${apiURL}/${key}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(objectId)
        })
    },

    delFetch: (key, itemId) => {
        return fetch(`${apiURL}/${key}/${itemId}`, {
            method: "DELETE",
        })
    },

    patchAll: (key, itemId, objectId) => {
        return fetch(`${apiURL}/${key}/${itemId}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(objectId)
        })
    }
}