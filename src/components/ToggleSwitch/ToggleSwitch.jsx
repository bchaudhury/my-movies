import React from 'react';
import '../ToggleSwitch/ToggleSwitch.css';
import FaSun from '../../assets/Sun.svg';
import FaMoon from '../../assets/night.png';


const ToggleSwitch = () => {

    // State to manage the toggle switch
    // isOn: true for light mode, false for dark mode
    const [isOn, setIsOn] = React.useState(true);
    // Class to be applied based on the toggle state
    const toggleClass = isOn ? 'toggle-switch-on' : 'toggle-switch-off';
    // Icon to be displayed based on the toggle state
    const handleToggle = () => {
        setIsOn(!isOn);
        const body = document.querySelector('body');

        // Change the background color and text color based on the toggle state

        if (isOn) {
            body.style.backgroundColor = '#fff';
            body.style.color = '#000';
            body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        }
        else 
        {
            body.style.backgroundColor = '#333';
            body.style.color = '#fff';
            body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        }
        
    }

  return (
    <div className='toggle-switch' onClick={handleToggle}>
        <div className="toggle-switch-container">
            <div className={`toggle-switch-icon ${toggleClass}`}>
                <img src={isOn ? FaMoon : FaSun} alt="Toggle Icon" className='toggle-icon' />
            </div>
        </div>
    </div>
  )
}

export default ToggleSwitch;