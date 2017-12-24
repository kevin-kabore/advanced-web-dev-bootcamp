export const authenticateUser = currentUser => ({
  type: 'AUTHENTICATE_USER',
  currentUser
});

export const userLogout = () => ({
  type: 'USER_LOGOUT'
});

const authRequest = (authInfo, url) => {
  return fetch(url, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(authInfo)
  }).then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = { authErrorMessage: data.message };
          throw err;
        });
      } else {
        let err = {
          authErrorMessage: 'Please try again later. Server is not responding'
        };
        throw err;
      }
    }
    return resp.json();
  });
};

export const signin = authInfo => (dispatch, getState) =>
  authRequest(authInfo, '/api/auth/signin').then(currentUser =>
    dispatch(authenticateUser(currentUser))
  );

export const signup = authInfo => (dispatch, getState) =>
  authRequest(authInfo, '/api/auth/signup').then(currentUser =>
    dispatch(authenticateUser(currentUser))
  );
