export default async function handler(req, res) {
    let data = await fetch('https://api.github.com/user/repos', {
        headers: {
            Authorization: process.env.GITHUB_ACCESS_TOKEN,
        },
    });

    console.log(data);

    if (data) {
        res.status(200).json({ data });
    }
    else {
        res.status(500).json({ error: 'Error fetching data' });
    }
}
