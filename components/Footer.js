import { GlobeIcon } from "@heroicons/react/solid"

const Footer = () => {
  return (
    <footer className="grid w-full divide-y-[2px] divide-gray-300 bg-green-100 text-sm text-gray-900">
        <div className="px-8 py-3">
            <p>Bangladesh</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
            <div className="flex items-center justify-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                <GlobeIcon className="h-5 mr-1 text-green-500"/>copyright Asif Ahmed Sahil | 2022
            </div>
            <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                <p>About</p>
                <p>Advertising</p>
                <p>Business</p>
                <p>How search work</p>
            </div>
            <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer