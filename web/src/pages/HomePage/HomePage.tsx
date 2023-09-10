import { useEffect, useState } from 'react'

import {
  FolderPlusIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import Markdown from 'markdown-to-jsx'

import { MetaTags } from '@redwoodjs/web'

// NOTE: REFACTORED TO DO THIS THE DUMB WAY BECAUSE NETLIFY DOESN'T SUPPPORT TOP-LEVEL AWAIT
// import page1 from './page1.md?raw'
// import page10 from './page10.md?raw'
// import page11 from './page11.md?raw'
// import page12 from './page12.md?raw'
// import page13 from './page13.md?raw'
// import page14 from './page14.md?raw'
// import page15 from './page15.md?raw'
// import page16 from './page16.md?raw'
// import page17 from './page17.md?raw'
// import page18 from './page18.md?raw'
// import page19 from './page19.md?raw'
// import page2 from './page2.md?raw'
// import page20 from './page20.md?raw'
// import page21 from './page21.md?raw'
// import page22 from './page22.md?raw'
// import page3 from './page3.md?raw'
// import page4 from './page4.md?raw'
// import page5 from './page5.md?raw'
// import page6 from './page6.md?raw'
// import page7 from './page7.md?raw'
// import page8 from './page8.md?raw'
// import page9 from './page9.md?raw'

// const pages = [
//   page1,
//   page2,
//   page3,
//   page4,
//   page5,
//   page6,
//   page7,
//   page8,
//   page9,
//   page10,
//   page11,
//   page12,
//   page13,
//   page14,
//   page15,
//   page16,
//   page17,
//   page18,
//   page19,
//   page20,
//   page21,
//   page22,
// ]

const pageName = [
  'page1',
  'page2',
  'page3',
  'page4',
  'page5',
  'page6',
  'page7',
  'page8',
  'page9',
  'page10',
  'page11',
  'page12',
  'page13',
  'page14',
  'page15',
  'page16',
  'page17',
  'page18',
  'page19',
  'page20',
  'page21',
  'page22',
  'page23',
  'page24',
]

// try after reconfigure vite.config.js
const pages = await Promise.all(
  pageName.map(async (page) => {
    const pagecontent = await import(`./${page}.md?raw`)
    return pagecontent.default
  })
)

const TableOfContents = ({ ids }) => {
  return (
    <div className="mx-2 mt-4 rounded-2xl border-2 bg-gray-100 p-4 md:mx-0 md:mx-auto md:w-3/4">
      <div className="pb-2 text-base font-bold md:text-2xl">
        Table of Contents
      </div>
      <ul className="prose list-disc px-4 px-8 text-xs md:text-base">
        {ids.map((id, index) => (
          <li key={id}>
            <a href={`#${id[0]}`}>
              {pageName[index].replace('page', '')} - {id[1]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const HomePage = () => {
  const [h2Ids, setH2Ids] = useState([]) //

  useEffect(() => {
    // get the ids of all h2 elements
    if (h2Ids.length === 0) {
      const h2s = document.querySelectorAll('h2')
      setH2Ids(Array.from(h2s).map((h2) => [h2.id, h2.textContent, h2, h2]))
    }
  }, [])

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {h2Ids && <TableOfContents ids={h2Ids} />}

      {/* // these are here so tailwind will add the styles to the build. They are included in the markdown */}
      <p className="-ml-4 ml-8 flex grid w-12 grid-cols-2 flex-row rounded-t-md rounded-t-md bg-blue-400 bg-gray-300 text-center text-red-500 text-white"></p>

      {pages.map((page, index) => (
        <div
          className="m-1 rounded-2xl bg-blue-500 p-4 md:m-4"
          key={'page' + index}
        >
          <div className="prose mx-auto max-w-none rounded-2xl bg-white px-4 pb-4 text-xs md:w-3/4 md:text-base">
            <Markdown
              options={{
                overrides: {
                  folderplusicon: {
                    component: FolderPlusIcon,
                  },
                  pluscircleicon: {
                    component: PlusCircleIcon,
                  },
                  questionmarkcircleicon: {
                    component: QuestionMarkCircleIcon,
                  },
                },
              }}
            >
              {page}
            </Markdown>
          </div>
        </div>
      ))}

      {/* The div below is to correct an error in Safari where some anchor links above don't work. */}
      <div id="dummyToMakeSafariWork">&nbsp;</div>
    </>
  )
}

export default HomePage
