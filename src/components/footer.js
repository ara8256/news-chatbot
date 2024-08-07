import '../css/footer.css'
const Footer = (link) =>{
    return(

        <div className='foot'> 

            <button className="rounded-button btn btn-warning">Contact Us</button>
            <div className="text-section">
                <p>Developed at <b>HPC Lab SEECS</b></p>
                <p>This is the alpha version of this software. For any issue report
                    <a style={{ color: 'blue', padding: '3px', textDecoration: 'none' }} href="#" target="_blank">here</a></p>
            </div>
        </div>
)
};
export default Footer;