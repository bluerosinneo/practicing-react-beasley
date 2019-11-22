import React from 'react';
import AlbumTitle from '../albumtitle/AlbumTitle';
import './Header.css';


function Header(props) {
    return (
        <div className="Header">
            <div>
                {/* <h1 className="AlbumTitle">
                    <button>Reveal Album Title</button>
                    <span>Night of the Salamander</span>
                </h1> */}
                <AlbumTitle />

                <h2>The new release from <strong>Beasley the Bard</strong></h2>

                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/beasley.png" alt="Beasley the Bard" />
            </div>
        </div>
    )
}

export default Header;

