
# PRINTERME 

PrinterMe is our Social Media Web created to help people to find 3D printers as a service for their projects. Also you can find 3D models to print!

# Installation

You have to install all the npm packages ```$npm install``` from your console to use it.

# Usage

Actually PrinterMe is developed to be a Back-end project, so it's not going to have a Front. By the way, you can use it installing all the npm packages and doing all the request in Postman.

## EndPoints

### Admin
|METHOD  |ENDPOINT         |TOKEN  |DESCRIPTION                         |RETURNS                | 
| :----: | --------------- | :---: | --------------------------         | --------------------- |
|GET     |/users           |Yes    |ASBAT see users list                |All the users in the platform   |
|POST    |/printers        |Yes    |ASBAT add a printer to DB           |JSON  Object of the printer added   |
|POST    |/printers/delete |Yes    |ASBAT delete a printer to DB        |JSON  Object of the printer deleted data   |

### Authentication
|METHOD  |ENDPOINT         |TOKEN  |DESCRIPTION                         |RETURNS                | 
| :----: | --------------- | :---: | --------------------------         | --------------------- |
|POST    |/auth/signup     |No     |USBAT sign up                       |A new user account   |
|POST    |/auth/login      |No     |USBAT login                         |Access to the platform with your account   | 
|DELETE  |/auth/delete     |Yes    |USBAT delete their accout           |A 'deleted account' message   | 
|GET     |/auth/signup     |Yes    |USBAT check if it's logged in       |The user data   |

### Explore
|METHOD  |ENDPOINT                              |TOKEN  |DESCRIPTION                                                   |RETURNS                | 
| :----: | ------------------------------------ | :---: | ------------------------------------------------------------ | --------------------- |
|GET     |/explore                              |No     |USBAT see random user's publications                          |A list of random publications chronologically ordered   |
|GET     |/explore/search?query=word            |Yes    |USBAT search for a specific word                              |A list of publications with contains the word in their value "tag"   |
|GET     |/explore/filter/materials             |Yes    |USBAT filter the timeline in printer's materials impresions   |A list of seller's publications with printers can use this specific material   |
|GET     |/explore/filter/printers              |Yes    |USBAT filter the timeline in printer's models                 |A list of seller's publications that works with this specific printer   |
|GET     |/explore/filter/collectables          |Yes    |USBAT filter the timeline in collectables designs             |A list of seller's publication that designs have collectables purposes   |
|GET     |/explore/filter/technics              |Yes    |USBAT filter the timeline in technics designs                 |A list of seller's publication that designs have technics purposes   |
|GET     |/explore/filter/publications          |Yes    |USBAT filter the timeline with only publications              |Only shows publications on the timeline   |
|GET     |/explore/filter/sellers               |Yes    |USBAT filter the timeline in sellers                          |Only shows sellers on the timeline   |
|GET     |/explore/filter/sellers/publications  |Yes    |USBAT filter the timeline in sellers' publications            |Only shows sellers' on the timeline   |

### Groups
|METHOD  |ENDPOINT                      |TOKEN  |DESCRIPTION                             |RETURNS                | 
| :----: | ---------------------------- | :---: | -------------------------------------- | --------------------- |
|POST    |/groups                       |Yes    |USBAT create a new group                |A new user account   |
|GET     |/groups/:groupid              |Yes    |USBAT navigate on group timeline        |The user data   |
|POST    |/groups/:groupid/publications |Yes    |USBAT post a publication on the group   |A new user account   |

### Users
|METHOD  |ENDPOINT         |TOKEN  |DESCRIPTION                     |RETURNS                | 
| :----: | --------------- | :---: | ------------------------------ | --------------------- |
|GET     |/users/timeline  |Yes    |USBAT see the user's timeline   |Shows publications and comments of followed users   |
|GET     |/users/:userid   |Yes    |USBAT see the user's profile    |Shows other user's profile   |
|POST    |/users/comments  |Yes    |USBAT post a comment            |Shows publications and comments of followed users   |

## Sign up
POST
```
{{baseUrl}}/auth/signup
```
Example:
```
{
    "name": "Ganondorf Dragmire",
    "username": "ganon",
    "password": "disrespect",
    "email": "ganon@hyrule.com",
    "phone": 123456789
}
```
## Login
```
{{baseUrl}}/auth/login
```
```
{
    "email": "example@example.com",
    "password": "example"
}
```
## Profile
### Get your profile
GET
```
{{baseUrl}}/profile
```

### Edit profile
Edit your user profile with PATCH
```
{{baseUrl}}/profile
```
Example:
```
{
    "phone": 123456789
}
```

## Publications

### Get all publications
GET
```
{{baseUrl}}/publications
```
### Post a publication
Yo need to be logged in to make a new publication
POST
```
{{baseUrl}}/publications
```
Example:
```
{
    "title": "Test publication",
    "description": "This is a test publication"
}
```
## Comments
### Get all comments
GET
```
{{baseUrl}}/publications/{{publicationId}}/comment
```
### Add comment
POST
```
{{baseUrl}}/publications/{{publicationId}}/comment
```
Example:
```
{
    "description": "This is a test comment",
    "rate": 4
}
```
# Usage

As every Social Media, you're going to have a Profile with a follow/follower system, a Timeline to be always wondered by the publications and comments of your followed users, an Explore site to watch new publications of random people and Groups, to make great communities to support you in case of any doubt you would have.

# Roadmap

We would like to implement the following ideas in the future:
* Fully functional Groups.
* Private user profiles and groups.
* A Business profile.
* An awesome and colorful Front-end

# Authors

This project was created and developed by:
- [Álvaro Poncio Jiménez](https://github.com/aponcio)
- [Andrés Galván García](https://github.com/Adexuz7)
- [Manuel Alejandro González Afonso](https://github.com/ManuYuzu)

# License

MIT License.
