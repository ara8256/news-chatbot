import "../css/sidebar.css"

const Sidebar = ({link})=>{

    return(
        <nav className="sidebar">
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
        </nav>


        // <>
        //     <button 
        //         className="btn btn-primary d-md-none" 
        //         type="button" 
        //         data-bs-toggle="offcanvas" 
        //         data-bs-target="#offcanvasSidebar" 
        //         aria-controls="offcanvasSidebar"
        //     >
        //         ☰ Menu
        //     </button>

        //     <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
        //         <div className="offcanvas-header">
        //             <h5 className="offcanvas-title" id="offcanvasSidebarLabel">Menu</h5>
        //             <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //         </div>
        //         <div className="offcanvas-body">
        //             <p>Links to <b>Articles</b> and <b>WebSites</b> related to this News.</p>
        //             {link && <a href={link}>Link to Site</a>}
        //             <button className="rounded-button btn btn-warning mt-3">Contact Us</button>
        //             <div className="text-section mt-3">
        //                 <p>Developed at <b>HPC Lab SEECS</b></p>
        //                 <p>This is the alpha version of this software. For any issue report  
        //                 <a style={{ color: 'blue', padding:'3px', textDecoration:'none'}} href="#" target="_blank">here</a></p>
        //             </div>
        //         </div>
        //     </div>

        //     <nav className="sidebar d-none d-md-block">
        //         <div>
        //             <p>Links to <b>Articles</b> and <b>WebSites</b> related to this News.</p>
        //         </div>
        //         <div>
        //             {link && <a href={link}>Link to Site</a>}
        //         </div>
        //         <button className="rounded-button btn btn-warning">Contact Us</button>
        //         <div className="text-section mt-3">
        //             <p>Developed at <b>HPC Lab SEECS</b></p>
        //             <p>This is the alpha version of this software. For any issue report  
        //             <a style={{ color: 'blue', padding:'3px', textDecoration:'none'}} href="#" target="_blank">here</a></p>
        //         </div>
        //     </nav>
        // </>
    )
}

export default Sidebar;