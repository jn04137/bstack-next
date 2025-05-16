
export default function Navbar() {
    return(
        <div className="px-4 py-4 flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold"><a href="/">bstack</a></h1>
            <ul className="flex space-x-4 text-lg">
                <li><a href="/">home</a></li>
                <li><a href="/users">users</a></li>
                <li><a href="/teams">teams</a></li>
                <li><a href="#about">about</a></li>
            </ul>
        </div>
    )
}
