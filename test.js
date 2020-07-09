import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '10s'
}

export default function () {
  const result = http.get('http://localhost:3000');
  sleep(1)
}
