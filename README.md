# mern_scafolding

![image](https://i.ibb.co/H70H593/mern-scafolding.png")

## Setup

Bikin file `touch /mern_scafolding/api/.env` , daftar [mongodb](http://mongodb.com) dan isi konfigurasi:

```.env
MONGO = mongodb+srv://<username>:<password>@cluster0.nwouy.mongodb.net/?retryWrites=true&w=majority
```

Generate encryption `openssl rand base64 32` , example :

```.env
JWT=Ol4EZSIhoyijEhj7Nerq33WWDHRWfFJQpIBNZkGwYW0=
```

<br>

## Postman Testing

Cari file ini : `mern_scafolding.postman_collection.json`

File open `Ctrl-O` [ Upload Files ] , lalu `import`

<br>

## `npm install` dan `npm start`

- NodeJS ( express ) directory :
  `/mern_scafolding/api/`
- ReactJS directory :
  `/mern_scafolding/client/`
