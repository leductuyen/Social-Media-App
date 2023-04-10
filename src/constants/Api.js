const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

const Api = {
    get: {
        method: METHOD.GET,
        url: 'posts',
    },
    posts: {
        method: METHOD.POST,
        url: 'posts',
    },
}

export default Api
