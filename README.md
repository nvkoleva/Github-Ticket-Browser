# 🔍 Github-Ticket-Browser 🔎
Simple ReactJS app to crawl through a git repo and display github tickets in a different interface. Original use was for integration into a larger already-existing corporate website - this has been simplified to just be the ticket browser and display. HTTP requests are done through axios. The API call is not included - message me if you want to run it.

Screenshots of localhost run included.

---
👩🏻‍💻

# Nikoleta Koleva
# Issue Browser
# 3 March 2021

⚠
Please note, I have not zipped the node modules necessary to run this app, in order to decrease its size. The necessary modules to install are:
- npm/yarn (can install rest w npm or yarn)
- axios
The following should be pre-installed when a react app is installed:
- react-paginate
- reactjs-popup


# ⚠ Please do not plagiarize or use without credit. 

#### Set-up ####

* Need to have Node.js installed prior to attempting to run.

* If create-react-app is not globally installed, you can run the following command to create a react app in the path:
```npx create-react-app app-name```
--- Note that the objective here is to install the node modules & dependencies for React - you will need to delete the new src & public folders that create-react-app will add. ---

--- Install the axios dependency for HTTP requests:
```npm install axios```

* Once the above have been completed, run the below command to start the app on localhost:
```npm start```

* To, halt, press Ctrl+C and type and enter Y.

--------------------------------------------------------------------------------------------------------
Additional libraries that are NOT necessary for app to run correctly but can be a good future addition:
bootsrap:
npm install bootstrap --save

Webpack & reactdom:
https://medium.com/swlh/a-complete-webpack-setup-for-react-e56a2edf78ae

API Calls from:
Please contact me for the necessary API link.
--------------------------------------------------------------------------------------------------------


#### Resources ####

Navigation:
https://therichpost.com/reactjs-create-and-include-header-footer-files/

Change image size:
https://stackoverflow.com/questions/56470223/how-to-resize-img-in-react

Box rounded colors:
https://www.w3schools.com/css/css3_borders.asp

Custom Pagination:
https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react

Pagination & Design + Axios:
https://medium.com/how-to-react/create-pagination-in-reactjs-e4326c1b9855

Modal w React Popup:
https://react-popup.elazizi.com/react-modal

Hex Color Codes:
https://www.color-hex.com/
