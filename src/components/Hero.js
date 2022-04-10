import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => ( //MAIN LANDING PAGE
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Pyrex Cloud Solutions</h1>

    <h2 className="mb-4">COMING SOON TO<br/>~NEW ZEALAND~</h2>
    
    <p className="lead">
      Offering Cloud and Server Services to Customers Across 13 Countries. Our 25 year reputation has attracted various Leading Organizations Worldwide!<br/><br/><a href="https://dev-ewr0qjhv.us.auth0.com/login?state=hKFo2SA3TjV0TmFFUFk0MWxTU0phMHR0X2t3STlHWnNvblZHX6FupWxvZ2luo3RpZNkgcWdZOW1na0Q5NWZNZGtCUDlhYi1BUnlHanItTG1iWlajY2lk2SA4UFRsdUN4SzRZeWZvdFYzSW8zSUFUanpmNnVlSE4xdA&client=8PTluCxK4YyfotV3Io3IATjzf6ueHN1t&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=WVc1dENBN0FOdlduLUFITUZ6ZUd6WTcuQVRUUzF0ZE8zMVYzVn53Q0pUNA%3D%3D&code_challenge=Y9RPbR29tIrooyP0CEzKei-wlhKS6oDqLLcqqf0Vq8Y&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS45LjAifQ%3D%3D">Register to Show Interest</a>
    </p>
  </div>
);

export default Hero;
