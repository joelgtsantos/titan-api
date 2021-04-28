# titan-api
Titan fashion cloud cache API


## Special worflows:

### Cache items limit

Whenever a user tries to cached a key/value pair is going has to bear in mind the size is limited so may delete an old key in the DB.

- A new parameter has been added to the config.env to specified the limit of records allowed
- Based on this new parameter the app checks whether has reached the limit or not
- If so it proceeds to remove the older record in the collection
- Otherwise proceeds to insert the new cache item

### Cache items TTL

For this feature a new index has been created and associated to the Cache collection

- A new app parameter in the config.env has been added
- When the time has expired the record is deleted



* The postman collection is included

