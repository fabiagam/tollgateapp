import Link from 'next/link';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

export default()=>(
    <div>
       <Navbar/>
                <div className="jumbotron">
                    <h1 className="display-3">About Tollgate Portal</h1>
                    <p className="lead">Description of about page goes here.</p>
                    <hr className="my-4"/>
                    
               </div>
       <Footer/> 
    </div>
);