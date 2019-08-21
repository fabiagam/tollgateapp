import Link from 'next/link';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

export default()=>(
    <div>
       <Navbar/>
                <div className="jumbotron">
                    <h1 className="display-3">Welcome to Demo Tollgate Portal</h1>
                    <p className="lead">Vehicle owners can register here to create a profile and setup a digital wallet account.</p>
                    <hr className="my-4"/>
                    <p>You will be provided with a QRCode ID that can be used to make digital payments.</p>
                    <p className="lead">
                        <Link href="/about"><a className="btn btn-primary btn-lg"  role="button">Learn more</a></Link>
                    </p>
               </div>
       <Footer/> 
    </div>
);