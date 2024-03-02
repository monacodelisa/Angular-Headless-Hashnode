![](/angular-hashnode/src/assets/animation/merge-animation.gif)

# Angular Headless Hashnode
## [![Discord](https://github.com/monacodelisa/icons-and-graphics/blob/main/icomoon/PNG/discord.png?raw=true)](https://discord.gg/3bS3xpCj) Open Source Project 

## Overview 

The **Angular Headless Hashnode Project** aims to seamlessly connect your Angular application to the Hashnode GraphQL database, providing a template for integrating Angular with a headless Hashnode setup.

In other words - this project is very much like the starter kit that Hashnode provides, except that this project uses Angular for the frontend and deployment is set to be done through Netlify.

## Project Goals

- Develop a flexible template for Angular integration with headless Hashnode.
- Connect the Angular app to Hashnode's GraphQL database to retrieve posts and blog data.
- Responsive layout improvements for different devices
- Support Angular v17 and up

## Existing Setup & Features

- [Appolo Angular](https://the-guild.dev/graphql/apollo-angular/docs) - GraphQL Client for Angular
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Material Symbols and Icons](https://fonts.google.com/icons)
- [Google Fonts](https://fonts.google.com/)

## LIVE VERSIONS

| [![angular headless hashnode dark](/angular-headless-hashnode-dark.jpg)](https://angular-hashnode.monacodelisa.com/) | [![angular headless hashnode light](/angular-headless-hashnode-light.jpg)](https://angular-hashnode.monacodelisa.com/) |
| - | - |                         

### You can see the live versions on the [DEMO SITE](https://angular.hdlshashnode.com/)                          

## Angular App Versions

#### `angular-v17` - has no UI libraries [LIVE](https://angular-v17.hdlshashnode.com/)                          
                       
#### `angular-v17-AnguMAT` - has Angular Material [LIVE](https://angular-v17-angumat.hdlshashnode.com/)     

#### `angular-v17-PrimeNG` - has PrimeNG [LIVE](https://angular-v17-primeng.hdlshashnode.com/)      


## Contributing

### Most of the open issues feature engaging YouTube videos, providing step-by-step guidance on implementing requirements. Dive in and contribute without hesitation – your skills are valued, and you can make a meaningful impact! Join us in building something great together.🌟

#### the default branch is `develop`!

### Fork the repository

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the `monacodelisa/angular-headles-hashnopde` repo.

### Working on Issues

1. In your local or forked repository, make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch develop
     ```

2. Create your patch, **including appropriate test cases**.

3. This is a monorepo that includes 6 versions of the app, make sure that you are working on the correct app version.

4. Follow our [Coding Rules](./CONTRIBUTING.md#coding-rules).

6. Commit your changes using a descriptive commit message as specified in [Commit Message Guidelines](./CONTRIBUTING.md/#commit-message-guidelines).

     ```shell
     git commit --all
     ```
    Note: the optional commit `--all` command line option will automatically "add" and "rm" edited files.

6. Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

7. In GitHub, send a pull request to `angular-headless-hashnode:develop`.

## Using the app with your Hashnode Blog

This app is still in its early stages, and it currently has limited features. At this point, I strongly encourage you to contribute to its development before actively using the app.

### Fork the repository

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the `monacodelisa/angular-headles-hashnopde` repo.

2. Go to your chosen app version, and inside the `graphql.operations.ts` file, replace the URL of the blog to point to your blog.

3. All three app versions can be deployed to Netlify or Vercel, so you just need to select an app version and deploy from an existing GitHub repo. (Your forked repo)

Be advised that a lot of features are yet to be implemented.

### Run locally

1. Clone this repository.

```bash
git clone https://github.com/your-username/angular-headless-hashnode.git
cd angular-headless-hashnode
```
2. Select one of the available [app versions](#angular-app-versions)
```
cd <chosen-app-version>
```

3. Install dependencies.

```
npm install
```

4. Run the app 

```
npm start
```

or 

```
ng serve
```

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://monacodelisa.com/"><img src="https://avatars.githubusercontent.com/u/64324417?v=4?s=100" width="100px;" alt="Esther White"/><br /><sub><b>Esther White</b></sub></a><br /><a href="#code-monacodelisa" title="Code">💻</a> <a href="#maintenance-monacodelisa" title="Maintenance">🚧</a> <a href="#review-monacodelisa" title="Reviewed Pull Requests">👀</a> <a href="#tutorial-monacodelisa" title="Tutorials">✅</a> <a href="#content-monacodelisa" title="Content">🖋</a> <a href="#ideas-monacodelisa" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-monacodelisa" title="Mentoring">🧑‍🏫</a> <a href="#design-monacodelisa" title="Design">🎨</a> <a href="#infra-monacodelisa" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cleancodecraft"><img src="https://avatars.githubusercontent.com/u/132580309?v=4?s=100" width="100px;" alt="cleancodecraft"/><br /><sub><b>cleancodecraft</b></sub></a><br /><a href="#infra-cleancodecraft" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#test-cleancodecraft" title="Tests">⚠️</a> <a href="#code-cleancodecraft" title="Code">💻</a> <a href="#blog-cleancodecraft" title="Blogposts">📝</a> <a href="#example-cleancodecraft" title="Examples">💡</a> <a href="#ideas-cleancodecraft" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-cleancodecraft" title="Mentoring">🧑‍🏫</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/czBalazs98"><img src="https://avatars.githubusercontent.com/u/53296597?v=4?s=100" width="100px;" alt="czBalazs98"/><br /><sub><b>czBalazs98</b></sub></a><br /><a href="#code-czBalazs98" title="Code">💻</a> <a href="#design-czBalazs98" title="Design">🎨</a> <a href="#ideas-czBalazs98" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jhonacs2"><img src="https://avatars.githubusercontent.com/u/75391330?v=4?s=100" width="100px;" alt="Jhonatan Soto"/><br /><sub><b>Jhonatan Soto</b></sub></a><br /><a href="#code-jhonacs2" title="Code">💻</a> <a href="#design-jhonacs2" title="Design">🎨</a> <a href="#security-jhonacs2" title="Security">🛡️</a> <a href="#ideas-jhonacs2" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/samplelittlered"><img src="https://avatars.githubusercontent.com/u/127144297?v=4?s=100" width="100px;" alt="Little Red Coding Hood"/><br /><sub><b>Little Red Coding Hood</b></sub></a><br /><a href="#code-samplelittlered" title="Code">💻</a> <a href="#blog-samplelittlered" title="Blogposts">📝</a> <a href="#content-samplelittlered" title="Content">🖋</a> <a href="#design-samplelittlered" title="Design">🎨</a> <a href="#security-samplelittlered" title="Security">🛡️</a> <a href="#ideas-samplelittlered" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://portfolio-latest-two.vercel.app/"><img src="https://avatars.githubusercontent.com/u/21971232?v=4?s=100" width="100px;" alt="Sashikumar Yadav"/><br /><sub><b>Sashikumar Yadav</b></sub></a><br /><a href="#code-yshashi" title="Code">💻</a> <a href="#design-yshashi" title="Design">🎨</a> <a href="#ideas-yshashi" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


This project follows the [all-contributors](https://allcontributors.org) specification.
Contributions of any kind are welcome!

## Celebrate Your Achievements!

If you've added exciting features or functionalities that the project currently lacks, we'd love to see what you've accomplished. Share your contributions, suggestions, or improvements to help enhance the overall app experience. Your input plays a crucial role in making the application even better, and we're eager to see the innovative strides you've taken!
