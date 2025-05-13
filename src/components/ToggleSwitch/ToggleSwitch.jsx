import React from 'react';
import '../ToggleSwitch/ToggleSwitch.css';
import FaSun from '../../assets/Sun.svg';
import FaMoon from '../../assets/Moon.svg';


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
        if (isOn) {
            body.style.backgroundColor = '#fff';
            body.style.color = '#000';
        }
        else if (!isOn)
        {
            body.style.backgroundColor = '#333';
            body.style.color = '#fff';
        }
        else {
            body.title = '';
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