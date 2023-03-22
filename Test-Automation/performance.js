import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
    ext: {
        loadimpact: {
            distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
            apm: [],
        },
    },
    thresholds: {},
    scenarios: {
        Scenario_1: {
            executor: 'ramping-vus',
            gracefulStop: '30s',
            stages: [
                { target: 50, duration: '5s' },
                { target: 50, duration: '20s' },
                { target: 0, duration: '5s' },
            ],
            gracefulRampDown: '30s',
            exec: 'scenario_1',
        },
    },
}

export function scenario_1() {
    let response

    group(
        'page_1 - http://ponyos-watercolour-art-classes-dev.s3-website-eu-west-1.amazonaws.com/',
        function () {
            response = http.get(
                'http://ponyos-watercolour-art-classes-dev.s3-website-eu-west-1.amazonaws.com/',
                {
                    headers: {
                        'upgrade-insecure-requests': '1',
                    },
                }
            )
            sleep(3.3)

            response = http.post(
                'https://kfbh8fsi80.execute-api.eu-west-1.amazonaws.com/dev/open',
                '{"eName":"hello"}',
                {
                    headers: {
                        'content-type': 'text/plain; charset=UTF-8',
                        'sec-ch-ua': '"Microsoft Edge";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Windows"',
                    },
                }
            )
        }
    )
}