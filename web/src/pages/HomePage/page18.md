## ADD HELP MODAL

1. yarn rw g component HelpModal
2. create Help.md files

- This file contains the help text in markdown format

3. HelpModal component uses markdown-to-jsx to render the markdown content

- While we could use a constant to hold the Help text in this case, we use a separate file to demonstrate how to import a separate markdown file
- Note: there is different import syntax (Vite) if we are importing a markdown file from the public folder or from the components folders
- In our case, we are importing from the components folder

4. In order to easily format the markdown text, we use the tailwindcss/typography plugin

- Normally, tailwind clears default HTML styling.
- For our markdown content, we use the tailwind 'prose' class to format the markdown content (which has been converted to HTML) is a more readable format

5. HelpModal is called in the ShopNotesLayout

6. commit 'feat: add HelpModal component'
