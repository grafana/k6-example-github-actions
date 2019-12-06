import { check, sleep } from "k6";
import http from "k6/http";

export { default as options } from "./utils/options.js";

export default function() {
    var r = http.get("http://test.loadimpact.com");
    check(r, {
        "status is 200": (r) => r.status === 200
    });
    sleep(1);
}
