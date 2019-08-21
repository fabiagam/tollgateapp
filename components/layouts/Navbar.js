import Link from 'next/link';

export default() => (
    <div className="container-fluid container-clearfix navbar-black">
          <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link href="/index"><a className="navbar-brand">Tollgate Web Portal</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/index"><b>Home <span className="sr-only">(current)</span></b></a>
            </li>
            <li className="nav-item">
                <Link href="/about"><a className="nav-link"><b>About</b></a></Link>
            </li>
            <li className="nav-item">
                <Link href="signup"><a className="nav-link"><b>Sign Up</b></a></Link>
            </li>
            </ul>
            </div>
        </nav>
    </div>
    </div>
);