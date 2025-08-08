import icon from '../../assets/images/lendsqr-logo.svg'
import userNotification from '../../assets/images/user-notification-icon.png'
import arrowDown from '../../assets/images/dropdown.png'
import user from '../../assets/images/user-profile.png'
import search from '../../assets/images/search.png'


const nav = () => {
  return (
    <nav>
            <img src={icon} alt="lendsqr-logo" className='nav-icon'/>
            
            <div className='search-container'>
                <input type="text" placeholder='Search for anything' className='search-input'/>
                <button className='search-button'>
                    <img src={search} alt="search" className='search-icon'/>
                </button>
            </div>

            <div className='docs-and-user-container'>
                <a href="">Docs</a>
                
                <div className='user-container'>
                    <img src={userNotification} alt="user" className='user-icon'/>

                    <div className='user-profile'>
                        <img src={user} alt="user" className='user-profile-icon'/>
                        <p>Adedeji</p>
                        <img src={arrowDown} alt="arrow-down" className='arrow-down-icon'/>
                    </div>

                </div>
            </div>
        </nav>
  )
}

export default nav