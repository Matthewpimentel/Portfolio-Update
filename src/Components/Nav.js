import './Nav.css';
const Nav = ({refToProjects}) => {
    console.log(refToProjects);
    const scrollToProjects = () => {
        if(refToProjects.current){
            refToProjects.current.scrollIntoView();
        }
    }

    return(
        <div className="nav">
            <h2>Matthew.dev</h2>
            <a>Home</a>
            <a onClick={scrollToProjects}>Projects</a>
            <a>Contact</a>
        </div>
    )
}

export default Nav;