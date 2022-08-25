let selected = "";
let liCount = 1;

function clickAdd() {
  document.getElementById("create").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("add-button").classList.add("pink-button");
  document.getElementById("home-button").classList.remove("pink-button");
  document.getElementById("edit").style.display = "none";
  document.getElementById("title").value = "";
  document.getElementById("author-name").value = "";
}

function clickHome() {
  document.getElementById("create").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.getElementById("home-button").classList.add("pink-button");
  document.getElementById("add-button").classList.remove("pink-button");
  document.getElementById("edit").style.display = "none";
}

function clickEdit() {
  document.getElementById("create").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("add-button").classList.remove("pink-button");
  document.getElementById("home-button").classList.remove("pink-button");
  document.getElementById("edit").style.display = "block";
}
function showContent() {
  alert(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
}
function addComment() {
  prompt("Enter comment");
}
function confirmDialog() {
  let form = document.getElementById("form-blog");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);
  let formdata = new FormData(form);
  let blogTitle = document.createElement("h3");
  let blogAuthor = document.createElement("div");
  let newBlog = document.createElement("li");
  newBlog.classList.add("blog-li");
  newBlog.id = "list" + liCount++;
  blogTitle.className = "blog-name";
  blogTitle.innerHTML = formdata.get("blog-title");
  blogAuthor.innerHTML = formdata.get("blog-author");
  document.getElementById("blog-list").appendChild(newBlog);
  newBlog.appendChild(blogTitle);
  newBlog.appendChild(blogAuthor);
  newBlog.addEventListener("click", blogClick);
  alert("Success!");
  clickHome();
}

function blogClick(e) {
  ele = e.currentTarget;
  console.log(ele);
  let blog_title = ele.children[0].innerHTML;
  let blog_author = ele.children[1].innerHTML;
  console.log(blog_title, blog_author);
  document.getElementById("new-title").setAttribute("value", blog_title);
  document.getElementById("new-author-name").value = blog_author;
  clickEdit();
  let form = document.getElementById("edit-blog");
  function handleEditForm(event) {
    event.preventDefault();
    let formdata = new FormData(form);
    ele.children[0].innerHTML = formdata.get("new-blog-title");
    ele.children[1].innerHTML = formdata.get("new-blog-author");
    console.log(ele);
    clickHome();
    console.log(ele);
  }
  form.addEventListener("submit", handleEditForm);
  function deleteBlog() {
    console.log(ele.id);
    console.log(ele.parentNode);
    ele.parentNode.removeChild(ele);
    clickHome();
  }
  let delButton = document.getElementById("delete-blog");
  if (delButton) {
    delButton.addEventListener("click", deleteBlog);
  }
}

newBlogList = document.getElementsByClassName("blog-li");
// console.log(newBlogList[0]);
// for (let i = 0; i < newBlogList.length; i++) {
//   newBlogList[i].onclick = blogClick();
// }
