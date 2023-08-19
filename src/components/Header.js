import { MenuIcon } from "@heroicons/react/outline"

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-discord_blue">
      <a href="/">
        <img src="https://upe.cs.fiu.edu/wp-content/uploads/sites/3/2018/12/Discord-LogoWordmark-White.png" alt="" className="w-32 h-12 object-contain"/>
      </a>
      <div className="hidden lg:flex  space-x-6 text-white">
        <a className="link">Download</a>
        <a className="link">Why Discord?</a>
        <a className="link">Nitro</a>
        <a className="link">Safety</a>
        <a className="link">Support</a>
      </div>
      <div className="flex space-x-4">
          <button className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none text-black hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap">
              Login
          </button>
        <MenuIcon className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
  )
}
