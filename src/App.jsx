import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import DashboardMainContent from './Components/DashboardMainContent';
import styles from './Components/sidebar.module.css';
import { Menu ,Search,Bell} from 'lucide-react';

function App() {
  return (
    <>
      <Header />
      <div className='row'>
        <a id={styles.menuId} className=" btn btn-white mt-4 position-absolute top-0 left-0 rounded-0" style={{ width: '48px' }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <Menu color='black' />
        </a>

        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="text-end my-3">
            <div className=" ps-4 py-2 border rounded d-inline"><Search size={22} />
              <input type="search" className='ps-3 border-0' placeholder="Search here..." style={{ width: '70%' }} />
            </div>
            <span className='border rounded ms-3 p-2'>
              <Bell color="blue" />
            </span>
          </div>
          <Sidebar />
        </div>

        <div className={`col-lg-2 col-md-3 bg-light p-2 rounded-4 ${styles.sidebar}`}>
          <Sidebar />
        </div>
        <div className='col'>
          <DashboardMainContent />
        </div>
      </div>
    </>
  )
}

export default App
