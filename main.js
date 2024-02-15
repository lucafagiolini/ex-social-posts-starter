//MILESTONE 1
// CREO UN ARRAY DI OGGETTI CHE RAPPRESENTANO DEI POST
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/600/400?image=24"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
// FINE ARRAY DI OGGETTI CHE RAPPRESENTANO DEI POST



// MILESTONE 2
// CREO UNA FUNZIONE CHE STAMPA I POST

function printPosts() {
    const postContainer = document.querySelector(".posts-list");
    postContainer.innerHTML = "";


    posts.forEach(Element => {
        const post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML = `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${Element.author.image}" alt="${Element.author.name}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${Element.author.name}</div>
                    <div class="post-meta__time">${Element.created}</div>
                </div>
            </div>
        </div>
        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad
            ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
        <div class="post__image">
            <img src="${Element.media}" alt="${Element.media}">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${Element.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${Element.id}" class="js-likes-counter">${Element.likes}</b> persone
                </div>
            </div>
        </div>
    </div>
        `;
        postContainer.append(post);

    });


    addLike();
};

printPosts();


// MILESTONE 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// // CREO UNA FUNZIONE CHE AGGIUNGE IL LIKE
// SALVO IN UN ARRAY GLI ID DEI POST AI QUALI HO MESSO IL LIKE
const likedPosts = [];


function addLike() {
    const likeButtons = document.querySelectorAll(".js-like-button");
    console.dir(likeButtons)

    likeButtons.forEach(button => {
        console.dir(button)


        button.addEventListener("click", function (event) {
            event.preventDefault();


            const postId = button.dataset.postid;
            const likeCounter = document.querySelector(`#like-counter-${postId}`);
            const likeCounterValue = parseInt(likeCounter.textContent);

            likeCounter.textContent = likeCounterValue + 1;

            // scelgo se aggiungere o rimuovere il like
            if (!likedPosts.includes(postId)) {
                likedPosts.push(postId);
                likeCounter.textContent = likeCounterValue + 1;
                button.classList.add("liked");
                console.log(likedPosts);


            } else {
                likedPosts.splice(likedPosts.indexOf(postId), 1);
                likeCounter.textContent = likeCounterValue - 1;
                button.classList.remove("liked");
                console.log(likedPosts);

            }
        });
    });
}










// // CREO UNA FUNZIONE CHE RIMUOVE IL LIKE

// function removeLike() {
//     const likeButtons = document.querySelectorAll(".js-like-button");

//     likeButtons.forEach(button => {
//         button.addEventListener("click", function (event) {
//             event.preventDefault();

//             const postId = button.getAttribute("data-postid");
//             const likeCounter = document.querySelector(`#like-counter-${postId}`);
//             const likeCounterValue = parseInt(likeCounter.textContent);

//             likeCounter.textContent = likeCounterValue - 1;
//             button.classList.remove("liked");
//         });
//     });
// }















