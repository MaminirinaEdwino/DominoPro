import './assets/footer.css'
import './assets/fontawesome-free-6.5.1-web/css/all.css'
import './assets/fontawesome-free-6.5.1-web/css/brands.css'
import './assets/fontawesome-free-6.5.1-web/css/all.min.css'
import facebook from './assets/fontawesome-free-6.5.1-web/svgs/brands/facebook-f.svg'
import git from './assets/fontawesome-free-6.5.1-web/svgs/brands/github.svg'

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="copyright" style={{ fontSize: '10px', marginLeft: '10px', marginTop:'5px'}}>
                    Copyright <span className="fas fa-copyright"></span> 2024 
                </div>

                <div className="contact">
                    <div className="contact1">
                        <img src={facebook} alt="" style={{width:'10px', marginTop:'2px'}} className='facebook'/>
                    </div>
                    <div className="contact1 ">
                        <img src={git} alt="" style={{ width: '20px' }} className='facebook' />
                    </div>
                </div>
            </div>
        </>
    )
}