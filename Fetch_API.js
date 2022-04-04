fetch(apiUrl).then(function(response) {
  if (response.ok) {
    response.json().then(function(data) {
      displayRepos(data, user);
    });
  } else {
    alert("Error: GitHub User Not Found");
  }
});