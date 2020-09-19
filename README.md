# Live API
https://cinejump-api.herokuapp.com

# Authentication
## Login
- **Method:** POST
- **URI:** /auth
- **Authorization:** 
- **Headers:**
- **Body:** raw/JSON
```json
{
  "email": "90lucasgabriel@gmail.com",
  "password": "123456"
}
```
- **Response:** 
```json
{
  "user": {
    "id": "3f882ab5-75b5-4e28-a84a-f8666264cb29",
    "name": "Lucas Gabriel",
    "email": "90lucasgabriel@gmail.com",
    "created_at": "2020-08-09T15:21:10.624Z",
    "updated_at": "2020-08-09T15:22:15.506Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTY5ODY1NDYsImV4cCI6MTU5NzA3Mjk0Niwic3ViIjoiM2Y4ODJhYjUtNzViNS00ZTI4LWE4NGEtZjg2NjYyNjRjYjI5In0.8EjwEEEXY1VeFcbMN-LHAgNIqx5bsk_yddE63lRUNaU"
}
```

# User
## Register
- **Method:** POST
- **URI:** /users
- **Authorization:** 
- **Headers:**
- **Body:** raw/JSON
```json
{
  "name": "Lucas Gabriel",
  "email": "90lucasgabriel@gmail.com",
  "password": "123456"
}
```
- **Response:** 
```json
{
  "id": "2084eda5-7792-44ca-87bc-2b2d0f9dbf5a",
  "name": "Lucas Gabriel",
  "email": "90lucasgabriel@gmail.com",
  "created_at": "2020-08-09T15:23:22.966Z",
  "updated_at": "2020-08-09T15:23:22.966Z"
}
```

# Profile
## Show
- **Method:** GET
- **URI:** /profile
- **Authorization:** Bearer Token
- **Headers:**
- **Body:** none
- **Response:** 
```json
{
  "id": "3f882ab5-75b5-4e28-a84a-f8666264cb29",
  "name": "Lucas Gabriel",
  "email": "90lucasgabriel@gmail.com",
  "created_at": "2020-08-09T15:21:10.624Z",
  "updated_at": "2020-08-09T15:22:15.506Z"
}
```

## Update
- **Method:** PUT
- **URI:** /profile
- **Authorization:** Bearer Token
- **Headers:**
- **Body:** raw/JSON
```json
{
  "name": "Lucas Gabriel",
  "email": "90lucasgabriel@gmail.com",
  "old_password": "123456",
  "password": "1234567",
  "password_confirmation": "1234567"
}
```
- **Response:** 
```json
{
  "id": "3f882ab5-75b5-4e28-a84a-f8666264cb29",
  "name": "Lucas Gabriel",
  "email": "90lucasgabriel@gmail.com",
  "created_at": "2020-08-09T15:21:10.624Z",
  "updated_at": "2020-08-09T15:22:15.506Z"
}
```

# Favorites
## Show
- **Method:** GET
- **URI:** /favorites
- **Authorization:** Bearer Token
- **Headers:**
- **Body:** none
- **Response:** 
```json
[
  {
    "id": "a9d5785f-9ed8-4cf4-bf87-ca5543e16f4c",
    "user_id": "3f882ab5-75b5-4e28-a84a-f8666264cb29",
    "movie_id": "271110",
    "created_at": "2020-08-09T15:22:37.777Z",
    "updated_at": "2020-08-09T15:22:37.777Z"
  },
  {
    "id": "a9ba29ac-f3d7-46a4-a803-dc29ae82ad97",
    "user_id": "3f882ab5-75b5-4e28-a84a-f8666264cb29",
    "movie_id": "99861",
    "created_at": "2020-08-09T18:20:35.198Z",
    "updated_at": "2020-08-09T18:20:35.198Z"
  }
]
```

## Toggle / Add or Remove
- **Method:** POST
- **URI:** /favorites
- **Authorization:** Bearer Token
- **Headers:**
- **Body:** raw/JSON
```json
{
  "movie_id": 271110
}
```
- **Response (Status: 200) - if it doesn't exist and add:** 
```json
{
  "id": "cca1ed20-a596-47f6-845b-ca33b2f825f3",
  "user_id": "3f882ab5-75b5-4e28-a84a-f8666264cb29",
  "movie_id": 271110,
  "created_at": "2020-08-09T18:22:53.070Z",
  "updated_at": "2020-08-09T18:22:53.070Z"
}
```

- **Response (Status: 204) - if it exists and remove:** 
```json
no content
```
