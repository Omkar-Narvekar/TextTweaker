// import React, {useState} from 'react'
// import PropTypes from 'prop-types'

// export default function Navbar(props) {

//   const [darkModeActive, setDarkModeActive] = useState(false);
//   const [greenModeActive, setGreenModeActive] = useState(false);

//   const handleToggleDarkMode = () => {
//     setDarkModeActive(!darkModeActive);
//     setGreenModeActive(false);
//     if (!darkModeActive) {
//       props.toggleModeDark();
//     }
//   };

//   const handleToggleGreenMode = () => {
//     setGreenModeActive(!greenModeActive);
//     setDarkModeActive(false);
//     if (!greenModeActive) {
//       props.toggleModeGreen();
//     }
//   };

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//     <div className="container-fluid">
//       <a className="navbar-brand" href="/">{props.title}</a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="/">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/">{props.about}</a>
//           </li>
//         </ul>

//           <div className={`form-check form-switch text-${props.mode === 'light'?'green':'light'}`}>
//             {/* <input className="form-check-input" onClick={props.toggleModeGreen} type="checkbox" id="flexSwitchCheckDefault1"/> */}
//             <input
//           className="form-check-input"
//           onClick={handleToggleGreenMode}
//           type="checkbox"
//           id="flexSwitchCheckDefault1"
//           disabled={darkModeActive}
//         />
//         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
//           </div>

//           <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
//             {/* <input className="form-check-input" onClick={props.toggleModeDark} type="checkbox" id="flexSwitchCheckDefault"/> */}
//             <input
//           className="form-check-input"
//           onClick={handleToggleDarkMode}
//           type="checkbox"
//           id="flexSwitchCheckDefault"
//           disabled={greenModeActive}
//         />
//         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
//           </div>
          
//         <form className="d-flex mx-3">
//           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//           <button className="btn btn-outline-success" type="submit">Search</button>
//         </form>
//       </div>
//     </div>
// </nav>
//   )
// }

// Navbar.propTypes = {
//     title : PropTypes.string,
//     about : PropTypes.string
// }