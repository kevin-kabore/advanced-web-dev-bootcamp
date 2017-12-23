const AUTH_URL = '/api/auth';

export async function createUser(user) {
  return fetch(`${AUTH_URL}/signup`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      email: user.email,
      username: user.username,
      password: user.password,
      profileImageUrl: user.profileImageUrl
    })
  }).then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = { err: data.message };
          throw err;
        });
      } else {
        let err = {
          message: 'Please try again server is not responding...'
        };
        throw err;
      }
    }
    return resp.json();
  });
}

export async function login(user) {
  return fetch(`${AUTH_URL}/signin`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ email: user.email, password: user.password })
  }).then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = { errorMessage: data.message };
          throw err;
        });
      } else {
        let err = {
          errorMessage: 'Please try again later, server is not responding...'
        };
        throw err;
      }
    }
    return resp.json();
  });
}
