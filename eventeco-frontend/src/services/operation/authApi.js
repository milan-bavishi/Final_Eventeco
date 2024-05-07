import { toast } from "react-toastify";
import { setLoading, setSignupData } from "../../slices/auth";
import { apiConnector } from "../connector";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../slices/profile";


export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", 'http://localhost:4000/auth/sendotp', { email, checkUserPresent: true, })
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("OTP Sent Successfully")
      navigate("/verify-email")
    }
    catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}


export function signUp(firstName, lastName, email, password, confirmPassword, otp, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", 'http://localhost:4000/auth/signup', { firstName, lastName, email, password, confirmPassword, otp })

      if (!response.data.success) {

        throw new Error(response.data.msg)
      }
      toast.success("Signup Success");
      navigate('/login');
    }
    catch (error) {
      console.log("SignUp API ERROR............", error)
      toast.error(error.message)
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}


export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", 'http://localhost:4000/auth/login', { email, password, })
      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Login Successful")
      dispatch(setToken(response.data.token))
      dispatch(setUser({ ...response.data.user }))

      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.user))
      console.log("Printing Token")
      console.log(response.data.token);
      console.log("Printing User")
      console.log(response.data.user)
      navigate('/dashboard');
    }
    catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error(error.message)
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}


//authlogin
export function authlogin(id, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", 'http://localhost:4000/auth/authlogin', { id, password, })
      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Login Successful")
      navigate('/authchecktickets');
    }
    catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error(error.message)
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

//athticketcheck
export function authcheckticket(codedata,navigate) {
  return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      console.log("Service Called")
      try {
          const response = await apiConnector("POST", 'http://localhost:4000/auth/authcheckticket', {codedata, checkUserPresent: true, })
          if (!response.data.success) {
              throw new Error(response.data.msg)
              navigate('/authchecktickets');
          }
          toast.success("ticket found")
          navigate('/authchecktickets');

      }
      catch (error) {
          console.log("Error At Service of ticket check Registration", error)
          toast.error("ticket not found");
      }
      toast.dismiss(toastId)
  }
}


export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}


