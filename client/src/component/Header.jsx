import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='shadow-md bg-slate-200  '>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to='/'>
            <h1 className='font-bold text-lg sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Real</span>
                <span className='text-slate-700'>Estate</span>
            </h1>
          </Link>
          <div className='p-3 bg-slate-100 rounded-lg flex items-center'>
            <input type="text" placeholder='Search...' className='bg-transparent outline-none w-24 sm:w-64' />
            <FaSearch className="text-slate-700"/>
          </div>
          <ul className='hidden sm:flex gap-4'>
            <Link to='/'>
              <li className='text-slate-700 text-lg hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
              <li className='text-slate-700 text-lg hover:underline'>About</li>
            </Link>
            <Link to={'/signin'}>
              <li className='text-slate-700 text-lg hover:underline'>Sign In</li>
            </Link>
          </ul>
        </div>
    </div>
  )
}

export default Header