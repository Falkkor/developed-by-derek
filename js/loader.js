// Load Menu Element
fetch("../layout/_header.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    document.getElementById("header").innerHTML = html;
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });

fetch("../layout/_menu.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    document.getElementById("topnav").innerHTML = html;
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });

fetch("../layout/_footer.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    document.getElementById("footer").innerHTML = html;
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });

fetch("../layout/_aboutme.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    document.getElementById("aboutme").innerHTML = html;
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });
