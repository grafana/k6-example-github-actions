import counter from "k6/x/counter";

export const options = {
    vus: 10,
    duration: '5s',
};

export default function () {
    console.log(counter.up(), __VU, __ITER);
}
