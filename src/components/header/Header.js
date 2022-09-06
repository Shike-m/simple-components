
export const Header = (props) => {
    return (
        <header className={"scr-header"}>
            {/* navigation flow buttons */}
            <nav>
                <ul className={"main-menu-nav"}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/button">Button</a></li> 
                </ul>
                
            </nav>
            <a href="#">
                <img src={props.imgUrl} alt={props.imgName ||"company Logo"} />
            </a>
            <h1>{props.headerTitle}</h1>
            <input placeholder={"Search..."} name={"searchBox"} />
        </header>
    )
}