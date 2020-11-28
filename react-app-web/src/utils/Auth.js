const isAuthenticated = () => {
  if (sessionStorage.getItem("token")) {
    return true
  } else { 
    return false 
  }
}

export default isAuthenticated;