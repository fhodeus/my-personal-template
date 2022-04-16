const isAuthenticated = () => sessionStorage.getItem('token');

export default isAuthenticated;
