import counter from "k6/x/counter";

export default function () {
    console.log(counter.up(), __VU, __ITER);
}
