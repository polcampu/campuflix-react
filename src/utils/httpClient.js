const API = "https://api.themoviedb.org/3";

export function get(path) {
    return (
        fetch(API + path, {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2M4ZjQzOTMxNjBmYTk2ODUyMDkyNmI1YjQzOTU3ZCIsInN1YiI6IjYyZDQ0N2EwYzkyYzVkMDA0ZjBjNDhhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHb8scgH9QQMwMv0G5JaXA5pF-wKTkNnxhqeMKxsoYk",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then((result) => result.json())
    );
}