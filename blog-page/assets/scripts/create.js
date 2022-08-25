let selected = "";
let liCount = 1;
var createVar = document.getElementById("create");
var homeVar = document.getElementById("home");
var home_btn = document.getElementById("home-button");
var add_btn = document.getElementById("add-button");

function clickNav(btn) {
  console.log(btn);
  btn.classList.add("pink-button");
  if (btn.id == "add-button") {
    createVar.style.display = "block";
    homeVar.style.display = "none";
    home_btn.classList.remove("pink-button");
    document.getElementById("edit").style.display = "none";
  } else {
    createVar.style.display = "none";
    homeVar.style.display = "block";
    add_btn.classList.remove("pink-button");
    document.getElementById("edit").style.display = "none";
  }
}

function clickEdit() {
  createVar.style.display = "none";
  homeVar.style.display = "none";
  add_btn.classList.remove("pink-button");
  home_btn.classList.remove("pink-button");
  document.getElementById("edit").style.display = "block";
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
  clickNav(home_btn);
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
    clickNav(home_btn);
    console.log(ele);
  }
  form.addEventListener("submit", handleEditForm);
  function deleteBlog() {
    console.log(ele.id);
    console.log(ele.parentNode);
    ele.parentNode.removeChild(ele);
    clickNav(home_btn);
  }
  let delButton = document.getElementById("delete-blog");
  if (delButton) {
    delButton.addEventListener("click", deleteBlog);
  }
}
