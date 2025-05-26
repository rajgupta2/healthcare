import { Search, CircleUser, Plus, Bell } from 'lucide-react';

function Header() {
  return (
    <>
      <div className='row pt-4 m-0'>
        <div className='col-lg-2 col-md-3 col-sm-8'>
          <p className='fs-3 ps-4'><span className='text-primary'>Health</span>care.</p>
        </div>
        <div className='col-lg-5 col-md-6' id="searchBox">
          <div className="text-end">
            <div className=" ps-4 py-2 border rounded d-inline"><Search size={22} />
              <input type="search" className='ps-3 border-0' placeholder="Search here..." style={{width:'70%'}}/>
            </div>
            <span className='border rounded ms-3 p-2'>
              <Bell color="blue" />
            </span>
          </div>
        </div>
        <div className='col-lg-5 col-md-3 col-sm-4 '>
          <div className="text-end">
            <span className='border rounded p-2 py-2' >
              <CircleUser color='orange' />
            </span>
            <span className='ms-3 border rounded p-2 bg-primary' >
              <Plus color="white" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;