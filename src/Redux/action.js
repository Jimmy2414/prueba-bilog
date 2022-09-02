import axios from 'axios';
export function getAgenda() {
  return async function (dispatch) {
    axios
      .get(
        'https://my-json-server.typicode.com/juanpernu/bilog-fe-challenge/schedule'
      )
      .then(res => {
        return dispatch({ type: 'GET_AGENDA', payload: res.data });
      });
  };
}
