import Markdown from 'markdown-to-jsx'

import { MetaTags } from '@redwoodjs/web'

import content from '/page1.md?url&raw'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <Markdown>{content}</Markdown>
    </>
  )
}

export default HomePage
