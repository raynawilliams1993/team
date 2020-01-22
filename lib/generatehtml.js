
function generateHTMLIntern(answers) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
  </head>
  <body>
      <div class="card employee-card">
          <div class="card-header">
              <h2 class="card-title">${answers.name}</h2>
              <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${answers.role}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${answers.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:{{ email }}">${answers.email}</a></li>
                  <li class="list-group-item">School: ${answers.school}</li>
              </ul>
          </div>
      </div>
  </body>
  </html>
  `
  

}


promptUser()
  .then(function (answers) {
      const html = generateHTML(answers);

      return writeFileAsync("index.html", html);
  })
  .then(function () {
      console.log("Successfully wrote to index.html");
  })
  .catch(function (err) {
      console.log(err);
  });