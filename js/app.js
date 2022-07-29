// box will grab the element div id box from html document
let box = document.getElementById(`box`);
// func success port will post msg if form was submittes successfully
function success_post(response) {
    box[`innerHTML`] = `<h2>Your post is successful</h2>`;
}
// failure post will display error message for fallback
function failure_post(error) {
    box[`innerHTML`] = `<h2>Post Not Successful</h2>`;
}
// send post will help post the axios the axios request
function send_post(details) {
    let title = document.getElementById(`title`);
    let title_value = title[`value`];

    let body = document.getElementById(`body`);
    let body_value = body[`value`];

    let user_id = document.getElementById(`user_id`);
    let user_id_value = user_id[`value`];
// post the axios request with various params for the post 
// post has 
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            title: title_value,
            userId: user_id_value,
            body: body_value
        }
    }).then(success_post).catch(failure_post);
}

let submit = document.getElementById(`submit`);
submit.addEventListener(`click`, send_post);

function success_patch(response){
    box[`innerHTML`] += `<h2>your update is successful</h2>`;
s}
 
function failure_patch(error){
    box[`innerHTML`] += `<h2>something went wrong with the update</h2>`;
}

function post_request(details){
let title_value = document.getElementById(`update_title`)[`value`];

axios.request({
    url: `https://jsonplaceholder.typicode.com/posts/1`,
    method: `PATCH`,
    data: {
        title: title_value
    }
}).then(success_patch).catch(failure_patch);
}
let post = document.getElementById(`post`);
post.addEventListener(`click`,post_request);


function success_delete(response){
    box[`innerHTML`] += `<h2>Your data is deleted successfully </h2>`;
}
function failure_delete(error){
    box[`innerHTML`] += `<h2>something went wrong while deleting data</h2>`;
}

function delete_request(details){

    axios.request({
url: `https://jsonplaceholder.typicode.com/posts/1`,
method: `DELETE`

    }).then(success_delete).catch(failure_delete);
}

let delete_button = document.getElementById(`delete`);
delete_button.addEventListener(`click`, delete_request);

function success_get(response){
box[`innerHTML`] += `<p>below are the examples of some posts with title and body</p>`;
for(let i= 0; i<response[`data`].length;i++){
box[`innerHTML`] += `<h2>Title:${response[`data`][i][`title`]}`;
box[`innerHTML`] += `<p>Body: ${response[`data`][i][`body`]}</p>`;
}
}
function failure_get(error){
box[`innerHTML`] = `<h1>something went wrong please refresh page</h1>`;
}

function get_data(details){
 axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `GET`
    }).then(success_get).catch(failure_get);
}


let get = document.getElementById(`get`);
get.addEventListener(`click`,get_data);