
# Pyrex Cloud (Auth0 Demonstration)
### Namodh Edirisinghe

![](https://cdn-icons-png.flaticon.com/128/6964/6964039.png)




# Project Introduction
This project focuses on an active deomnstration of the Auth0, an authentication and authorization platform, making application security easily integratable in various enivronments. This demo is based on the default AUth0 React Template. A ficitonal entity "Pyrex Cloud Solutions" is used to portray this demo.
#Features
- Seamless Auth0 Login Integration to Host Site
- Comprehensive User and Role Management
- Multiple Registration / Sign On  Methods
	- Regular Registration
	- Google (Using Personalized Keys)
	- Facebook
- Security Features
	- Required 2 Factor Authentication (through Authenticator)
	- CAPTCHA Testing (DDoS and Bot Mitigation)
	- Login Threshold (Limiting logins, preventing bruteforce)
	- Password Filtering (Restricts resetting already used passwords, passwords identified in data breaches)
- User Correspondence with Hospitable Emails (Registration, Welcome, Forgot Password etc.)

# Setting Up
The setting up is quite straightforward. Note that this is a a straight-forward create-react-app implementation. 
Use `npm` to install the project dependencies:

```bash
npm install
```

 Auth0 installation:


```bash
npm i @auth0/auth0-react
```
Start the Application:
```bash
npm start
```

# Codebase Layout
Comments are provided throughout key files in the project for clarification. 
Components - Contains the Required modules for the landing page
Views - Contains the Layout for the Landing and Profile Pages 

**Demo Page Layout**

	-Home Page (Landing Page)
	
	-Log In Page (Accessed through Log In Button or 'Register to Show Interest' link)
	
	-Profile Page (Accessed through Landing Page Once Logged In)
	
	-Any other links, accessible content are directly transferred from the Auth0 React Template provided



## Demonstration screenshots

**Landing Page:**

![](https://i.ibb.co/9yFSF7Y/Landing-Page.png)


**Log In / Sign Up Page:**

![](https://i.ibb.co/3dkbP1d/LogIn.png)


**Profile Page：**

![](https://i.ibb.co/Df31S7T/Screen-Shot-2022-04-10-at-12-58-02-AM.png)


**User Welcome Email:**

![](https://i.ibb.co/m0VM2D7/Screen-Shot-2022-04-10-at-12-59-07-AM.png)


----



# End
