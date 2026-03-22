import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<500'],
    },
};

export default function () {
    let res = http.get('http://localhost:5000');

    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    sleep(1);
}