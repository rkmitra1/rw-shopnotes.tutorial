## CREATE DATA MODEL

Our notes are stored in a ShopNote. Each ShopNote can have a list consisting of one or more Item.

Each item will have the following properties:

- name
- urgent (boolean value, can have any meaning you want)
- checked (boolean value, can have any meaning you want, like "purchased")

<br/>
**This is the model we will be using.**
<img src='/modelDiagram.png' className="w-1/2" />

1. modify schema.prisma

- add the ShopNote and Item models
- note how ShopNotes is related to Item in a one-to-many relationship
- we are will be using postgresql as our database. We need to create the database and run the migrations.
  - change provider in file
    - provider = "postgresql"

2. create development database

- psql
- create database shopnote_dev;

3. setup .env variables

- modify .env file in the project root directory
- add the following variables
  - DATABASE_URL="postgresql://postgres@localhost:5432/rw_build_shopnotes_dev?connection_limit=1"
  - TEST_DATABASE_URL="postgresql://postgres@localhost:5432/rw_build_shopnotes_test?connection_limit=1"

4. remember to source the .env file

- source .env

5. yarn prism migrate dev

6. commit 'feat: create ShopNote and Item models'
