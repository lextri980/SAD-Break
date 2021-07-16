# SAD

# HOW TO RUN THIS APP

1. Install all  package in devDependencies: [nodemon, node-sass, morgan] 

- Install by use command line: 
>>> [npm i nodemon --save-dev]
- Do same with 2 devDependencies left

2. Enter command line below to run this app in localhost
>>> [npm start]

3. Now you can use this app

# SET UP DATABASE

1. Install MongoDB from URL: https://www.mongodb.com/try/download/community 
- Choose On-premises > MongoDB Community Server
- Then download it

2. When the process to install MongoDB Compass is done
- Open MongoDB Compass
- From new connection text box, enter:
>>> mongodb://127.0.0.1:27017
- Then click on connect button
- Click [Create a database]
- Enter 'SAD_project' on [Database name] field and 'accounts' on [Collection name] field, then click on [Create Database]
- Open file src/database/json and create all collection name in MongoDB
- Go in each collection [and add] data by importing file
- Choose suitable file in src/database/json to import in MongoDB {select Json file type and click Import}



