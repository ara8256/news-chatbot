import "../css/sidebar.css"

const Sidebar = ({link})=>{

    return(
        <div className="sidebar">
             <div>
                <p>Links to <b>Articles</b> and <b>WebSites</b> related to this News.</p>
            </div>
            <div>
            {link &&
            <a href={link}>Link to Site</a>
            }
            </div>
            
            <button className="rounded-button btn btn-warning">Contact Us</button>
            <div className="text-section">
            <p>Developed at <b>HPC Lab SEECS</b></p>
            <p>This is the alpha version of this software. For any issue report  
            <a style={{ color: 'blue', padding:'3px', textDecoration:'none'}} href="#" target="_blank">here</a></p>
        </div>
        </div>
    )
}

export default Sidebar;