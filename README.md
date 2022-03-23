## Usage

### /api/save - Save data into a file  
Returns 200 if correct data is provided  
Returns 400 if no data is provided  

```
{
  "data": {...}
}
```

### /api/insert - Persist data into a database  
Returns 200 on success  
Returns 400 if data/data.json is empty  
Returns 500 on fail  

## ENV SETUP
```
DATABASE,
DATABASE_HOST,
DATABASE_PORT,
DATABASE_USERNAME,
DATABASE_PASSWORD,
PORT=(optional)
```