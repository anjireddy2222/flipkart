import {menuTextLinks} from './Utils';

const TextNav = () => {

  const setClassNames = (isDropDown) =>{
    if( isDropDown == true){
       return "nav-link text-dark text-nav-item dropdown-toggle";
    }else{
       return "nav-link text-dark text-nav-item";
    }
  }

  return (
    <div className="container-fluid kart-shadow navbar navbar-expand-lg ">
      <div className="container">
        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              menuTextLinks.map( (link, i) => 
                <li className="nav-item" key={i}>
                  <a
                    className={setClassNames(link.isDropDown)}
                    href="#"
                    tabIndex="-1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    id={ "dropDownId" + i }
                    >
                    { link.text }
                  </a>
                  { 
                    link.isDropDown && 
                    <div className="dropdown-menu"  aria-labelledby={ "dropDownId" + i } >
                      {
                        link.dropDownValues.map( (subLink, j) =>
                        <a href="#" className="dropdown-item" key={j}>
                          { subLink.text }
                        </a>  
                        )
                      }
                    </div>
                  }
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextNav;
