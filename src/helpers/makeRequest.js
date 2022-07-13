export default function makeRequest (query) {
  return fetch('http://test-task.profilancegroup-tech.com/graphql', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ query })
  }).then((res) => res.json());
};