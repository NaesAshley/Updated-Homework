const base_url = "https://api.pexels.com/v1/search";

fetch("");

function memoryApp() {
  fetch(base_url, {
    method: "GET",
    withCredentials: true,
    headers: {
        authoization: ProcessingInstruction.env.REACT_APP_AUTH_KEY,;
    },
  });
}
