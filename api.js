// // console.log ("API calling.")

// // const booksDiv = $('.books');

// // $.get("https://www.googleapis.com/books/v1/volumes?q=bleach").then((data) => {
    

// // const list = document.querySelector('#data')

// // data.datas.forEach(data =>
// //     {
// //         const projectEl = document.createElement('div')

// //         list.appendChild(projectEl)
// //     })

// // // let text = data.toString();
// //     //  const booksText = data.items;
// //     // booksDiv.append(booksText)
// //     // console.log(booksText)
// // }).catch((error) =>{
// // console.log ("Error!", error)
// // console.log(books.volumeInfo)
// // let array = [];
// // for(let i=0; i<books.length; i++){
// //     if(books[i].volumeInfo.imageLinks !== undefined && books[i].volumeInfo.authors !== undefined){
// //     let bookInfo = {
// // //         title: books[i].volumeInfo.title
// // //     }
// // // }}
// // // console.log(bookInfo);
// // })

// // $.get("https://www.googleapis.com/books/v1/volumes?q=bleach").then((data) => {
// // const list = data.items.id;
// // let text = Array.toString(list);
// // // console.log (list);
// // // let text = list.toString();
// // // let team = text.volumeInfo;
// // // let lead = team.toString();
// // document.getElementById("books").innerHTML = text
// // console.log(text)
// // })

// // $.getJSON("https://www.googleapis.com/books/v1/volumes?q=bleach", function (data){
// //     var list= [];
// //     $.each(data.items, function (kind, id) {
// //         list.push("<li id='" + kind + "'>" + id + "</li>");
// //     });
// //     $("<ul/>", {
// //         "class" : "my-new-list",
// //         html: list.join("")
// //     }).appendTo("body");
// // })
// $(document).ready(function() {
//     $("#images1").show(function() {
//         var Anime= "https://api.jikan.moe/v4/anime?q=bleach"
//         $.getJSON( Anime, {
//             mal_id: "any",
//             url: "any",
//             type: "any"
//         })
//         .done(function(data){
//             $.each(data.data, function (item){
//                console.log(item.title)}
                
            
//             // console.log(anime)}
//             (function (){
//                 var GoogleBooks = "https://www.googleapis.com/books/v1/volumes?q=bleach";
//                 $.getJSON( GoogleBooks, {
//                     kind: "any",
//                     id: "any",
//                     etag: "any"
//                 })
//                 .done(function(data){
//                     $.each(data.items, function (item) {
//                         console.log(item.volumeInfo.title)
//                     })
//                 })
//                 })
                
//     )})

// })
// })

(function (){
    var GoogleBooks = "https://www.googleapis.com/books/v1/volumes?q=bleach";
    $.getJSON( GoogleBooks, {
        kind: "any",
        id: "any",
        etag: "any"
    })
    .done(function(data){
        $.each(data.items, function (i, item){
                $("<div>").text("Title of Book:" + item.volumeInfo.title).appendTo("#books");
            if (i === 3){
                return false
            }
        });
    });
  
})();
(function (){
    var Anime= "https://api.jikan.moe/v4/anime?q=bleach";
    $.getJSON( Anime, {
        mal_id: "any",
        url: "any",
        type: "any"
    })
    .done(function(data){
        $.each(data.data, function (i, item){
                $("<div>").text("Title of Book:" + item.title).appendTo("#anime");
            if (i === 3){
                return false
            }
        });
    });
  
})();



if($("#books").html = $("#anime").html){
    $("#images1").show,
    $("#images2").hide }
    else {    $("#images1").hide,
    $("#images2").show}

// if (alpha = beta) {
// $("#images1").load("correct.png")}
// else{$("#images2").load("incorrect.png")}


// $(document).ready(function (){
//     var bookURL = "https://www.googleapis.com/books/v1/volumes?q="
//     var bookTitle= "";
//     var animeTitle = "";

// function GoogleBook (){
    
//     var bookData = [];

//     $.ajax({
//         url: bookURL,
//         method:"GET"
//         }).then(function(response){
//             let books = response.data.items
//             for (let i=0; i< books.length; i++) {
//                 let bookTitle = books[i].volumeInfo.title,
//                 let 

//             }
//         })
// }

//