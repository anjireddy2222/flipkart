import {menuTextLinks} from './Utils';

const TextNav = () => {

  const setClassNames = (isDropDown) =>{
    if( isDropDown == true){
       return "nav-link text-dark text-nav-item dropdown-toggle";
    }else{
       return "nav-link text-dark text-nav-item";
    }
  }

  const setUrl = (link) => {
    if (link.isDropDown == true) {
      return "#";
    } else {
      return link.url;
    }
  };

  const setDataToggle = (link) => {
    return link.isDropDown == true ? "dropdown" : "";
  };
  const setHasPopup = (link) => {
    return link.isDropDown == true ? "true" : "";
  };
  const setExpanded = (link) => {
    return link.isDropDown == true ? "false" : "";
  };


  return (
    <div className="container-fluid kart-shadow navbar navbar-expand-lg ">
      <div className="container">
        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuTextLinks.map((link, i) => (
              <li className="nav-item" key={i}>
                <a
                  className={setClassNames(link.isDropDown)}
                  href={setUrl(link)}
                  tabIndex="-1"
                  data-toggle={setDataToggle(link)}
                  aria-haspopup={setHasPopup(link)}
                  aria-expanded={setExpanded(link)}
                  id={"dropDownId" + i}>
                  {link.text}
                </a>
                {link.isDropDown && (
                  <div
                    className="dropdown-menu shadow border-0"
                    aria-labelledby={"dropDownId" + i}>
                    {link.dropDownValues.map((subLink, j) => (
                      <a href={subLink.url} className="dropdown-item" key={j}>
                        {subLink.text}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextNav;
