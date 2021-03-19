import './DockLeveller.css';
import headLogo from '../../images/logo/SPIMA.webp';
import { NavLink } from "react-router-dom";


function DockLeveller() {
    return (
        <>
            <div className='maindiv' >
                <div className='mainHeader' >
                    <img src={headLogo} alt='dockHead' />
                    <div className='headerText'>
                        <p>Your partner in Intralogistics solutions</p>
                    </div>
                    <div className='header2Text'>
                        <p>Online Tools</p>
                    </div>
                </div>
                <div className="main-head">
                    <NavLink exact activeClassName='headerActive' to='/' className="header1">PVC Strip Curtain Calculator</NavLink>
                    <NavLink exact activeClassName='headerActive' to='/dockleveller' className="header2">Dock Leveller</NavLink>
                </div>
                <h1 className='head'>DOCK LEVELLER</h1>
            </div>
        </>
    );
};


export default DockLeveller;