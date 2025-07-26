const LOGIN_URL = `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`;
const REGISTER_URL = `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`;

export const handleLogin = (
  data: { email: string; password: string },
  setMessage: (message: string) => void, login: undefined | ((token:string,role:string,slug:string) => void)
) => {
    setMessage("Submitting..")
  fetch(LOGIN_URL, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((res) => res.json())
  .then((res) => {
    const {token, role, slug, ok, message} = res;
        if(login) login(token,role,slug);
        setMessage(ok ? "Registration Successful" : message);
  })
  .catch((err) => {
    console.error(err);
    setMessage("Login Failed");
  });
};

export const handleRegister = (
  data: { email: string; password: string, username: string },
  setMessage: (message: string) => void, login: undefined | ((token:string,role:string,slug:string) => void)
) => {
  setMessage("Submitting..")
  fetch(REGISTER_URL, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((res) => {
        const {token, role, slug, ok, message} = res;
        if(login) login(token,role,slug);
        setMessage(ok ? "Registration Successful" : message);
    })
    .catch((err) => {
      console.error(err);
      setMessage("Registration Failed");
    });
};