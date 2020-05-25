<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
    <img alt="Gatsby GastbyFire" src="./src/images/GatsbyFire.png" width="250" />
</p>
<h1 align="center">
  GatsbyFire
</h1>

A Gatsby Starter to build a complete webapp with Gatsby & Firebase by using the library [reactfire](https://firebaseopensource.com/projects/firebaseextended/reactfire/)

You can see the example running [here](https://gatsbyfire.netlify.app/)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new GatsbyFire app
    gatsby new my-gatbyfire-app https://github.com/GeorgeSteel/GatsbyFire
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatbyfire-app
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Create 2 files called: `.env.development` & `.env.production` in the root folder with the following content:

    ```
      GATSBY_FIREBASE_API_KEY=
      GATSBY_FIREBASE_AUTH_DOMAIN=
      GATSBY_FIREBASE_DATABASE_URL=
      GATSBY_FIREBASE_PROJECT_ID=
      GATSBY_FIREBASE_STORAGE_BUCKET=
      GATSBY_FIREBASE_MESSAGING_SENDER_ID=
      GATSBY_FIREBASE_APP_ID=
      GATSBY_FIREBASE_MEASUREMENT_ID=
    ```

    There you put your firebase' project credentials
    Now your site is now running at `http://localhost:8000`!

## 🧐 What's inside?

A quick look at the important components that you'll see in a Gatsby project.

1.  **`FirebaseUI`**: This is a simple login component based in [Firebase UI](https://firebaseopensource.com/projects/firebase/firebaseui-web-react/), but not the original, it's the localized version: [react-firebaseui-localized](https://github.com/greg-schrammel/react-firebaseui-localized#readme).

2.  **`PrivateRoute`**: This component prevents the access to the routes that you want to protect, if you use it, the only way to get access is by signing in.

3.  **`app.jsx`**: There you define all the endpoints of your app, or at least all the endpoints you want to make private. If wou want to create new public pages, I recomend you to just create a new file in the `pages` folder. For this I used [Reach Router](https://reach.tech/router)

4.  **`ReactFireContext`**: In that folder you will find the `wrapRootElement` component that contains the `FirebaseAppProvider`, you can edit it if you want but I wouldn't recommend it. The other file called `fireConfig.js` is where you put your firebase' project credentials.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
