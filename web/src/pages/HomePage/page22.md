## STORYBOOK

<div className="aside py-4">
Using Storybook can be a very valuable tool to test and review you application component's design

David Price (Redwoodjs) has a excellent demo of design driven development on his [YouTube channel](https://www.youtube.com/watch?v=dWWFZV6ML3k)

**Alternatively, I find that using Redwoodjs hot-reloading in the development server, you can easy model and refactor your components in the actual component. Try both Storybook and Redwoodjs hot-reloading to see which works best for you.**

Regardless, I do set up Storybook in all my Redwoodjs projects, as I find it useful for specific components.

**Additionally, I find Storybook one of the easiest ways to review a components accessiblity.**

</div>

1. Using Storybook
    - yarn rw storybook
    - note: the first time you run this command it will add packages (like markdown-to-jsx) to your project

2. Testing accessibility

    a. in the Storybook browser window, click the "Accessibility" tab
    b. review any violations.
      - if you make changes to the component, you need to refresh. This can be done using the 'Tests completed' button in the bottom right corner of the Storybook browser window.
