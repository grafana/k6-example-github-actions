import { check, sleep } from "k6";
import http from "k6/http";

export let options = {
    stages: [
        { duration: "20s", target: 10 }
    ],
    ext: {
        loadimpact: {
          name: 'k6-example-github-actions',
          projectID: 3673231,
        },
      },
};

export default function() {
    var r = http.get("http://test.loadimpact.com");
    check(r, {
        "status is 200": (r) => r.status === 200
    });
    sleep(1);
}
