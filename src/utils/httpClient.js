const API = process.env.REACT_APP_API_URL;

export function get(path) {
    return (
        fetch(API + path, {
            headers: {
                Authorization: 
                    "Bearer " + process.env.REACT_APP_API_TOKEN,
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then((result) => result.json())
    );
}