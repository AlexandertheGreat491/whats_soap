import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // checks if there is a saved token and it's valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    // saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  logout() {
    // clears the user token & profile data from localStorage
    localStorage.removeItem('id_token');
    // reloads the page & reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();