import { ajax } from "./ajax.js";

function analyticsData() {
  let analytics = document.querySelector("#data");
    let http = new ajax();
    let url = "http://localhost:8080/analytics" + "/employee";
    let data = http.get(url, (users) => {
        analytics.html = users;
  });
}
analyticsData();
