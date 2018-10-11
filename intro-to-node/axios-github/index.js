const axios = require('axios'); // Documentation at https://www.npmjs.com/package/axios

async function getRepos () {
    let result = await axios.get('https://api.github.com/users/MatthewShowman');
    console.log(result.data.public_repos);
}

getRepos();

axios.get('https://api.github.com/users/MatthewShowman')
    .then(response => {
        // console.log(response.data);
        return axios.get(response.data.repos_url);
        }
    ).then(
        reposResponse => {
            console.log(reposResponse.data[1].name)
            return axios.get(reposResponse.data[0].commits_url.replace('{/sha}', ''));
        }
    ).then(
        commitsResponse => {
            console.log(commitsResponse.data[0].commit.message);
        },
        error => {
            console.log(error);
        }
    )

  