const url = "";
const requestoptions = (data) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
};
const Fetchdata = async (url, requestbody) => {
  const requestbody = await requestoptions(data);
  try {
    await fetch(`${url}+'login'`, requestbody).then((res) => {
      res.json().then((data) => {
        return data;
      });
    });
  } catch (error) {
    return error;
  }
};

export default Login = async (data) => {
  return Fetchdata(`${url}+'login'`, data);
};

export default Register = async (data) => {
  return Fetchdata(`${url}+'register'`, data);
};

export default Sendotp = async (data) => {
  return Fetchdata(`${url}+'sendotp'`, data);
};

export default Resendotp = async (data) => {
  return Fetchdata(`${url}+'ressendotp'`, data);
};

export default Forgotpassword = async (data) => {
  return Fetchdata(`${url}+'forgotpassword'`, data);
};

export default VerifyOtp = async (data) => {
  return Fetchdata(`${url}+'verifyotp'`, data);
};

export default EditProfile = async (data) => {
  return Fetchdata(`${url}+'editprofile'`, data);
};


