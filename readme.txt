Installation:

git clone https://github.com/Glebvvss/restaurant-express-js.git #clone repository

cd restaurant-express-js    #move to cloned project dir

npm run migrate             #setup default migrations (database stores in restaurant.db file)
                            #if you need to restart database you should drop restaurant.db file and call below command one more time

npm run serve               #start server on http://localhost:4500

#allowed server urls
1. GET    http://localhost:4500/tables         - get list of tables in restaurant
2. GET    http://localhost:4500/reserves/today - get list of reserved tables info today
3. POST   http://localhost:4500/reserves       - create new reserve with json body like 
    {
        "client_name":  "name", 
        "date":         "2020-12-12", 
        "table_number": "2"
    }

4. DELETE http://localhost:4500/reserves/{id}  - delete single reserve by id