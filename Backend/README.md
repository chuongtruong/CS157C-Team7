# How to run the Backend service ?
## Get the latest update from the project folder

```cmd
    git pull origin master
```

## In the Backend folder, install all dependencies

Install nodeJS if you haven't done.

```
   cd Backend/
   npm install
```

## Create an environment variable file

* Open the file example.env
* Copy the content
* Create a file call .env
* Paste the content example.env
* Fill in the missing credentials and the url to our database. 
* For example: 
> ```
>  MONGO_USER=username
>  MONGO_PASSWORD=password
>  MONGO_URL=mongodb+srv://<user>:<password>@example.inekkti.mongodb.net/myapp?retryWrites=true&w=majority
> ```


## Run the backend service

```
   npm run dev
```

If successful, you should see this in terminal

```
Server listening on port 3001
Connected to MongoDB
```

The backend can be accessed at
```
> http://localhost:3001/posts/<name_of_endpoint>
```
## Don't forget to close the connection if we don't use the database.
Fastest way is to type CMD + C twice in our terminal 