import {Link} from 'react-router-dom'

function Nav() {
  return (
    <header className=' flex justify-between items-center w-[100%] bg-white text-black p-4'>
        <div className=" flex w-[90px]">
            <img src="https://logos-world.net/wp-content/uploads/2021/04/Volkswagen-Logo-1948-1960.png"/>
        </div>
        <nav>
            <ul className='flex space-x-5 '>
                <li><Link to="/">home</Link></li>
                <li><Link to="/Client">cliente</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav;