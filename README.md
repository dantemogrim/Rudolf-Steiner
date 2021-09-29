<img src="https://media.giphy.com/media/26UtCvTRqLIDdeWih1/giphy.gif?cid=ecf05e47vub0lpvoshlwle81hswnrcucrfxc6dwctdpfqmnq&rid=giphy.gif&ct=g">

# Rudolf Steiner

## Info

A collaborative mission to update the website for Ruben Steinerskolan in Göteborg.

---

## Instructions

After cloning down the directory do the following:

### Dependencies

From the root folder, type the following commands:

```
$ npm install
$ npm run build
$ composer install
```

### Database Connection

Make a duplicate of the `env.example` file (within root) and rename it `.env`.
within `DB_NAME=`, instead of `wordplate`, type out the name of your MySQL database connection.
In your `.env` file, head over to the URL mentioned on [line 11](https://wordplate.github.io/salt/) and copy and replace your result under the link.

### Server

From the root folder, start up a local server with:
`$ php -S localhost:8000 -t public/`

---

## WordPress Settings

Once you have your localhost up and running and passed sign up or login, set these changes from your Dashboard to get a better idea on how this project is structured:
_Can't find Dashboard? In your URL type: `localhost:8000/wp-admin`_.

### Menu

Start by creating the following pages:

- Aktuellt
- Ansökan
- Evenemang
- Föräldrar
- Hem
- Om Oss
  _Don't forget to publish these one by one._

Then go to Settings -> Reading

Create a new menu and give it the name `menu-bar`.
Then under menu settings check the following boxes:

- [x] "Auto add pages"
- [x] "Display location"
      _Save your changes and publish._

Add the following settings:
"Your homepage displays"

- A static page.
- Homepage: Hem
- Posts page: Aktuellt
  _Save your changes and publish._

## Links

Correct links by going to Settings -> Permalinks.

Choose the following:

- [x] Custom structure
- Within the input field choose `%postname%`.
  _Save your changes._

---

## Tools

- [Gutenberg](https://github.com/WordPress/gutenberg): for creating custom blocks.
- [Tailwind CSS](https://tailwindcss.com/): styling.
- [WordPlate](https://github.com/wordplate/wordplate#readme): WordPress wrapper for working locally.
- [WordPress](https://wordpress.org/): CMS.

---

## Creators

- [Dante Mogrim](https://github.com/dantemogrim)
- [Erik White](https://github.com/nausea87)
- [Hugo Sundberg](https://github.com/Hugocsundberg)

---

## License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
