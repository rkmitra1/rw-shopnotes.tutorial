import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

/*** COMPONENT ***/
const MainLayout = ({ children }: ShopNoteLayoutProps) => {
  return (
    <>
      <header className="flex items-center justify-between bg-blue-700 px-2 py-4 md:px-8">
        <div className="flex items-center space-x-1">
          <div>
            <Link to={routes.home()}>
              <img
                src="ShopNotesIcon3.png
              "
                alt="logo"
                className="w-8 rounded-full bg-blue-100 md:mx-4 md:w-10"
              />
            </Link>
          </div>
          <h1 className="text-xl">
            <Link to={routes.home()} className="text-blue-100">
              ShopNotes Tutorial
            </Link>
          </h1>
        </div>
      </header>
      {children}
    </>
  )
}

export default MainLayout
