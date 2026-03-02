const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json()).then(posts => {
            // console.log(posts);
            displayPosts(posts)
        })
}

// const displayPosts = (posts) =>{
//     // 1: Get the container
//     const postContainer = document.getElementById("post-container");
//     postContainer.innerHTML = "";

//     //console.log(postContainer)
// posts.forEach(post => {
//     //console.log(post.title);
//     //2: create html element
//     const li = document.createElement("li");
//     li.innerText = post.title;
//     console.log(li);

//     //3: Add li into container
//     postContainer.appendChild(li);
// });

// }
const displayPosts = posts => {
    // 1: get the container and empty the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";

    posts.forEach(post => {
        
        // 2: create a div;
        const postCard = document.createElement("div")
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `
        // 3: append to the container
        postContainer.append(postCard)
    });
}
loadPost()