# sary_demo
Hi Sary Team,
This is my assignment demo on Front-End based on your requirement in this Document: ((U.N.I.S.H.F) United Nations Super Heroes Fund)
 https://www.notion.so/sary/Hazem-Nabil-Frontend-Task-a687a77f5c444998a7e211d248a045d5

I Build it Based on VueJs and Vuetify. 

## Why Vue and Vuetify
The VueJs is very lite ,and I like the Vuetify because it is a complete UI framework very rich with useful 
components and a lot of good feature.

Angular also is very good ,but I think Vutify is more rich than the Angular Material.

## What I did on this project
- Basic Ui design based on Vuetify
- Nested Components
- Dynamic Filter 
  - Auto Built based on requested Json from the back-end
  - The Accepted Field type is (TextField, Select, DatePicker)
  - The Select Field Type can accept dynamic options from requested Json from the back-end
  - Dynamic Date
  - Emit Change for the Parent on submit the filter form
- On the parent on submit the filter form, the query parameters on the url will be changed with the new filter params
- On the page Loaded or on the Query changed it will make new request to the back-end

### Note: The BackEnd EndPoints
I didn't receive on the requirement document any end-point even the Country Endpoint is not working
for that I create some demo Json files to call the and make the demo
Those files located on : "sary_demo/public/demoApi"
 - Countries.json
 - data.json
 - filter.json


And Finally, I hope that like this small demo and THANKS :) 

 * Best Regard
 * Hazem Mohamed Nabil
 * Full stack Developer and Web Developer

-------

## Project setup
```
git clone https://github.com/strikerh/SaryDemo.git
cd sary_demo
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
