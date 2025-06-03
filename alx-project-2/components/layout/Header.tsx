const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl">
          <a href="/">Daily Contents</a>
        </h3>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <a href="/index.tsx">home</a>
            </li>
            <li className="hover:underline">
              <a href="/alx-project-2/pages/about.tsx">about</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;