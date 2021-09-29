<img src="https://media.giphy.com/media/26UtCvTRqLIDdeWih1/giphy.gif?cid=ecf05e47vub0lpvoshlwle81hswnrcucrfxc6dwctdpfqmnq&rid=giphy.gif&ct=g">

# Rudolf Steiner

## :school: Info

A collaborative mission to update the website for Ruben Steinerskolan in Göteborg.

## :man_factory_worker: Backlog

**General:**

- [ ] Front page with paralax or image sequences.
- [ ] Footer menu with placeholder icons.
- [ ] Template for "Ansökan".
- [ ] Template for "Evenemang".
- [ ] Template for "Föräldrar".
- [ ] Template for "Kontakt".
- [ ] Template for "Om Oss".

**Gutenberg Block ideas:**

- [ ] CSS clip path/SVG blob where the user can type text on top.
- [ ] Ipsum
- [ ] Lorem

**Domain:**

- [ ] Add the school's texts.
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
within `DB_NAME=`, instead of `wordplate`, type out the name of your MySQL database connection.
In your `.env` file, head over to the URL mentioned on [line 11](https://wordplate.github.io/salt/) and copy and replace your result under the link.

### Server

From the root folder, start up a local server with:
`$ php -S localhost:8000 -t public/`

---

## :globe_with_meridians: WordPress Settings

Once you have your localhost up and running and passed sign up or login, set these changes from your Dashboard to get a better idea on how this project is structured:

> _Can't find Dashboard? In your URL type: `localhost:8000/wp-admin`_.

### Menu

**Start by creating the following pages:**

- Aktuellt
- Ansökan
- Evenemang
- Föräldrar
- Hem
- Om Oss

_Don't forget to publish these one by one._

**Then go to Appearence -> Menus (or Customize)**

Create a new menu and give it the name `menu-bar`.
Then under menu settings check the following boxes:

- [x] "Automatically add new top-level pages to this menu"
- [x] "Navigation"

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

_**Extra: Developer & Tailwind CSS specific color palette:**_

- Blue = `light-blue-700`
- Light Blue = `blue-50`
- Light Green = `light-green-100`
- Navy = `light-blue-900`
- Orange = `orange-200`
- Pinkish Grey = `red-100`
- Yellow = `yellow-200`

---

## :clamp: Tools

- [Gutenberg](https://github.com/WordPress/gutenberg): for creating custom blocks.
- [Tailwind CSS](https://tailwindcss.com/): styling.
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
