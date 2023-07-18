export default async function handler(req, res) {
    let data = await fetch('https://api.github.com/user/repos', {
        headers: {
            Authorization: process.env.GITHUB_ACCESS_TOKEN,
        },
    }).json();

    console.log(data);
}
