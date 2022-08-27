// AJAX => Asynchronous JavaScript and XML

// GET method

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         // console.log(response);
//         return response.json();
//     })
//     .then(json => console.log(json))

async function getRequest(url) {
    return await fetch(url)
        .then(response => response.json());
}
async function showInPage() {
    const postList = await getRequest('http://localhost:3030/posts')
    // console.log(postList)
    postListContent = '';
    for (const post of postList) {
        postListContent += `
        <div class="post">
        <h3>${post.title}</h3>
        <div class="post-details">${post.body}</div>
    </div>
        `;
    }
    document.getElementById('postList').innerHTML
        = postListContent;
}
showInPage();

function newPostSubmit(e) {
    e.preventDefault();
    let titleValue = newPostForm.querySelector('form[name="new-post-form"] [name="title"]').value
    let description = newPostForm.querySelector('form[name="new-post-form"] [name="description"]').value;
    // console.log({ titleValue, description });
    let newPost = { title: titleValue, body: description };
    createNewPost(newPost);
    return false;

}

async function createNewPost(post) {
    let data = {
        "userId": 1,
        "title": post.title,
        "body": post.body
    };
    return await fetch('http://localhost:3030/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => response.json());

}



async function deletePost(id){
    return await fetch(`http://localhost:3030/posts/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(response => response.json());
}
async function updatePost(post) {
    let data = {
        "userId": post.userId,
        "title": post.title,
        "body": post.body,
    };
    return await fetch(`http://localhost:3030/posts/${post.id}`, {
        method: 'PUT', // PATCH
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => response.json());

}


// getRequest('https://jsonplaceholder.typicode.com/posts')
//     .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))











// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

//   const postData={userId: 1, title: 'delectus aut autem', completed: false};
//   postData('https://jsonplaceholder.typicode.com/todos',postData)
//     .then((data) => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });

