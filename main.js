const linksSocialMedia = {
  github: 'anakais',
  youtube: 'channel/UCDyVE4n33Gr9HZOkzQ4vshA',
  facebook: 'alexandre.nakais',
  instagram: 'a.nakais',
  twitter: 'a_nakais'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userGithubLogin.textContent = data.login
      userAvatar.src = data.avatar_url
      userGithubLink.href = data.html_url
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()
