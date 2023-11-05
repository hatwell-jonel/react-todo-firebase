import {useState, useEffect} from 'react'
import light from "../assets/icon-sun.svg";
import dark from "../assets/icon-moon.svg";

function Header() {
  const [lightTheme, setLightTheme] = useState(false);

  const handleTheme = () => {
    setLightTheme(!lightTheme);
  };

  useEffect(() => {
    let theme = lightTheme ? 'light' : 'dark';
    document.querySelector('body').setAttribute('data-theme', theme);
  }, [lightTheme])
 
  return (
    <header className='header'>
      <h1 className='header__title'>TODO | jonel hatwell</h1>

      <button className='header__button' onClick={handleTheme}>
        {
          lightTheme ? (
            <>
              <img src={light} alt="" className='header__button-icon' />
              light mode
            </>
          ) : (
            <>
            <img src={dark} alt="" className='header__button-icon' />
            dark mode
          </>
          )
        }
      </button>
    </header>
  )
}

export default Header