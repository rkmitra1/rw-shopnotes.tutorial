## PRODUCTION - SETUP NETLIFY

In order to run our app in production, we need to set up a server. We will use [Netlify](https://www.netlify.com/) to host our app.

### configure Redwood app for Netlify

1. yarn rw setup deploy netlify
2. commit 'feat: setup netlify'
3. push to github

### configure Netlify

1. Create a Netlify account (or login if you already have one)
2. Click on the "Add new site" button
    - import from an existing project
    - deploy from gihub
    - select your repo
      - if no repo is found, select (configure the Netlify app on GitHub)
3. Select your repository
4. Click on the "Add Environment Variables" button
    - add key: DATABASE_URL value:(the string you copied from Railway)
    - add key: YARN_ENABLE_IMMUTABLE_INSTALLS value: false
5. Click on the "Deploy site" button

**YOUR SITE WILL BE UP AND RUNNING AT THIS POINT. IT WILL BE PUBLICLY ACCESSIBLE AT THE URL PROVIDED BY NETLIFY.**
