<img src="https://media.giphy.com/media/26UtCvTRqLIDdeWih1/giphy.gif?cid=ecf05e47vub0lpvoshlwle81hswnrcucrfxc6dwctdpfqmnq&rid=giphy.gif&ct=g">

# Rudolf Steiner

## :school: Info

A collaborative mission to update the website for Ruben Steinerskolan in Göteborg.

## :man_factory_worker: Backlog

**General:**

- [ ] Front page with paralax or image sequences.
- [ ] Footer menu with placeholder icons.
- [ ] Hamburger menu in Mobile view.
- [ ] Submenus in Desktop view.
- [ ] Submenus in Mobile view.
- [ ] Implement Antropos @font-face.
      _Template content for:_
  - [ ] "Ansökan".
  - [ ] "Undervisning".
  - [ ] "Föräldrar".
  - [ ] "Kontakt".
  - [ ] "Om Oss".

**Gutenberg Block ideas:**

- [ ] CSS clip path/SVG blob where the user can type text on top.
- [ ] Footer, social media icons?
- [ ] Staff members block?

**Domain:**

- [ ] Add the school's texts.
- [ ] Rsync + GitHub Actions workflow as FTP tool.
- [ ] Implement (new) logo.
- [ ] Implement custom blocks from plugins.
- [ ] Relevant image and database content.

## :pushpin: Instructions

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
Create a MySQL database connection with the db-name "wu20".
In your `.env` file, head over to the URL mentioned on [line 11](https://wordplate.github.io/salt/) and copy and replace your result under the link.

### Server

From the root folder, start up a local server with:
`$ php -S localhost:8000 -t public/`

---

## :globe_with_meridians: WordPress Settings

Once you have your localhost up and running and passed sign up or login, set these changes from your Dashboard to get a better idea on how this project is structured:

> _Can't find Dashboard? In your URL type: `localhost:8000/wp-admin`_.

**First go to "Appearance" -> "Themes" and set the active menu to "WU20".**

### Menu

**Go to Pages and add the following pages:**

- Hem
- Om Oss
- Undervisning
- Aktuellt
- Föräldrar
- Kontakt
- Ansökan

_Don't forget to publish these one by one._

**Then go to Appearence -> Menus (or Customize)**

Create a new menu and give it the name `header-menu`.
Select all pages except "Hem" to your new menu.
Then under "Menu Settings" check the following boxes:

- [x] "Header Menu"

_Save your changes and publish._

**Then go to Settings -> Reading**

Within the "Your homepage displays" options do the following:

- Check the box for "A static page (select below)".
- Select "Homepage" as "Hem".
- Select "Posts page" as "Aktuellt".

_Save your changes and publish._

### Links

**Correct links by going to Settings -> Permalinks.**

Choose the following:

- [x] Custom structure.
- Within the input field choose `%postname%`.

_Save your changes._

_**Optional: In Settings -> General.**_

- Set "Site Title" to "Rudolf Steinerskolan i Göteborg".
- Set "Tagline" to:
  > "Rudolf Steinerskolan i Göteborg är en waldorfskola med cirka 230 elever från förskoleklass upp till klass 9. Skolan grundades 1965 och erbjuder idag undervisning i egna vackra lokaler på Tallhöjdsgatan i Torpa."
- In "Timezone" switch to "Stockholm".
- Next to "Date Format" choose "Custom" and type "j F Y".
- In "Time Format" switch to `H:i`.
- _Extra optional: If you're not debugging/working change "Site Language" to "Svenska"._

---

## :clamp: Tools

- [Gutenberg](https://github.com/WordPress/gutenberg): for creating custom blocks.
- [WordPlate](https://github.com/wordplate/wordplate#readme): WordPress wrapper for working locally.
- [WordPress](https://wordpress.org/): CMS.

---

## :man_technologist: Creators

- [Dante Mogrim](https://github.com/dantemogrim)
- [Erik White](https://github.com/nausea87)
- [Hugo Sundberg](https://github.com/Hugocsundberg)

---

## :label: License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
