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
    // post method will add title, user id, body and id to the posts
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
// submit button will trigger the send post function because it has event listener attached to it
let submit = document.getElementById(`submit`);
submit.addEventListener(`click`, send_post);
// function success patch will give a message if update is successfull via method patch
function success_patch(response) {
    box[`innerHTML`] += `<h2>your update is successful</h2>`;
}
// function failure patch is a fallback function if something went wrong with post request 
function failure_patch(error) {
    box[`innerHTML`] += `<h2>something went wrong with the update</h2>`;
}
// patch request will patch the title and change the title of posts 1  
// axios request method patch will just update the title value of post not the entire params of posts will get override 
function patch_request(details) {
    let title_value = document.getElementById(`update_title`)[`value`];

    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: `PATCH`,
        data: {
            title: title_value
        }
    }).then(success_patch).catch(failure_patch);
}
// post will grab the post button by id and will execute the patch request function on click
let post = document.getElementById(`post`);
post.addEventListener(`click`, patch_request);

// success delete will show a msg after a successful execution of delete request or axios with delete method
function success_delete(response) {
    box[`innerHTML`] += `<h2>Your data is deleted successfully </h2>`;
}
// failure delete will display an error msg if something went wrong with axios delete request
function failure_delete(error) {
    box[`innerHTML`] += `<h2>something went wrong while deleting data</h2>`;
}
// delete request function will perform the task of axios delete request if the delete button is clicked by user in html
function delete_request(details) {

    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: `DELETE`

    }).then(success_delete).catch(failure_delete);
}
// delete_button will grab the delete by id and will execute the delete request function if it is clicked
let delete_button = document.getElementById(`delete`);
delete_button.addEventListener(`click`, delete_request);
// function success get will display a message if get request by axios is fullfilled successfully
// for loop will loop thru all  the object inside the data array and gives back the title and body 
function success_get(response) {
    box[`innerHTML`] += `<p>below are the examples of some posts with title and body</p>`;
    for (let i = 0; i < response[`data`].length; i++) {
        box[`innerHTML`] += `<h2>Title:${response[`data`][i][`title`]}`;
        box[`innerHTML`] += `<p>Body: ${response[`data`][i][`body`]}</p>`;
    }
}
// function failure get will display error if something goes wrong with get request method by axios
function failure_get(error) {
    box[`innerHTML`] = `<h1>something went wrong please refresh page</h1>`;
}
// function get data will perform a task to run axios with get method so that success get function can display title and body
function get_data(details) {
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `GET`
    }).then(success_get).catch(failure_get);
}
// get will grab the element get by id and execute the function get_data if get button is clicked
let get = document.getElementById(`get`);
get.addEventListener(`click`, get_data);