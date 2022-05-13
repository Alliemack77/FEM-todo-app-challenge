import sunIcon from '../images/icon-sun.svg'
import moonIcon from '../images/icon-moon.svg'


const Header = ({isDarkMode, setIsDarkMode}) => {

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }
 

  return (
      <header className='primary-header flex justify-between align-center'>
        <h1 className='text-white'>TODO</h1>
        <div className='mode-btn' onClick={toggleTheme}>
          <img src={isDarkMode ? sunIcon : moonIcon} alt='dark/light mode toggle'/>
        </div>
      </header>
  )
}

export default Header