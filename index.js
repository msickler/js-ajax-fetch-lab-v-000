
function getIssues() {
  console.log("issues")
  const token = getToken()
  fetch(`https://api.github.com/repos/msickler/javascript-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showIssues(res))
}

function showIssues(json) {
  var issues = ""
  for (var i = 0; i < json.length; i++) {
    issues = issues +` title: ${json[i].title} body: ${json[i].body}`
  }
  $("#issues").append(issues)
}

function createIssue() {
  owner = document.getElementById("results").innerText
  title = document. getElementById("title").value
  body = document.getElementById("body").value
  const postData = {title: title, body: body}
  const repo = 'msickler/javascript-fetch-lab'
  const token = getToken()
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => getIssues(res))
}

function showResults(json) {
    $('#results').append(
      `<h3>Forked Successfully!</h3><a href="https://api.github.com/repos/${repo}/forks"> ${repo}</a>`
    )}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showResults(res))
}

function getToken() {
  return ''
}
