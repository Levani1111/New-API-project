# Levani's  New-API-project Countries of the World

I built this API to be a simple and easy way for people to find out basic information about the countries of the world, with the abilitiy to search by country, capital and unique id.   I built this API using mongoose, express and node.js

# Getting Started

url: https://thawing-fjord-63020.herokuapp.com/

This will display all of the countries.

# URL and Paths

### GET

base url: https://thawing-fjord-63020.herokuapp.com/

| Method |      Path         | Description                                   |
| ------ | :------------:    | --------------------------------------------- |
| GET    |     /             | Show all countries                            |
| POST   |     /create       | Add a country                                 |
| GET    |   /name/{name}    | Show a country by its name                    |
| GET    | /capital/{capital}| Show a country by its capital                 |
| GET    |   /_id/{_id}      | Show a country by its ID                      |
| DELETE |    /remove/{_id}  | Delete a country by its ID                    |


# Output

Each will return json formatted like:
```
[
{
"currencies": [
{
"code": "GEL",
"name": "Georgian Lari",
"symbol": "ლ"
}
],
"languages": [
{
"iso639_1": "ka",
"iso639_2": "kat",
"name": "Georgian",
"nativeName": "ქართული"
}
],
"_id": "5e80eed30c9222000433153f",
"flag": "https://restcountries.eu/data/geo.svg",
"name": "Georgia",
"capital": "Tbilisi",
"population": 3720400,
"area": "69700",
"__v": 0
}
]
```

## Acknowledgements

* [Rest Countries API](https://restcountries.eu/)





