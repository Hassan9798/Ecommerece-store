import axios from 'axios';
const BASE_URL='http://localhost:4000/api';
export const publicRequest=axios.create({
baseURL:BASE_URL
});
export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTcwNDI3M2ZmMGE2MWE4MmI3YTRiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDExOTUzMSwiZXhwIjoxNjUwMzc4NzMxfQ.ACzxLWdqKTOXrsPZLQ-1_8SUuTLcGg7PaxvsmP92Pcg'}
    });