
# Emoticons API ಠ_ಠ
#### DEVELOPED BY VAIBHAV SHARMA ʕ•ᴥ•ʔ

The Emoticon API is a RESTful service that provides a wide variety of emoticons categorized by type. This API is designed to be user-friendly and does not require any authorization, making it easy to integrate into your applications (*^.^*)


## API Reference (O∆O)
## BASE URL : https://emoticons-api.vercel.app/


### PROJECT MADE USING API https://stickartly.netlify.app/

#### Get all data

```http
  GET /api/data
```


Description                |
:------------------------- |
 **No Authorization Required**. |

#### Get item type wise

```http
  GET /api/data/type/:type
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type`      | `string` | **No Authorization Required** |




## All items response example ◔_◔

```javascript
fetch('https://emoticons-api.vercel.app/api/data') .then(response => response.json()) .then(data => console.log(data)) .catch(error => console.error('Error:', error));
```
## Type wise item response example ◔_◔
```javascript
fetch('https://emoticons-api.vercel.app/api/data/type/:type') .then(response => response.json()) .then(data => console.log(data)) .catch(error => console.error('Error:', error));
```


## Rate Limiting أ‿أ

The API is hosted on Vercel's free tier with the following limitations:

• Maximum of 100 serverless function invocations per day

• Maximum execution duration of 10 seconds per request

• Maximum payload size of 4.5 MB


## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Vaibhav9526/Emoticons_REST_API.git
```


Install dependencies

```bash
  npm install or npm i
```

Start the server

```bash
  nodemon index.js or node index.js
```


## Author

- [Vaibhav Sharma](https://www.github.com/Vaibhav9526)

