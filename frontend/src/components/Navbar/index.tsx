import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

export function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">

                    <h1>DSMovie</h1>

                    <a href="https://github.com/vinicius-coder/">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/vinicius-coder</p>
                        </div>
                    </a>

                </div>
            </nav>
        </header>
    );
}