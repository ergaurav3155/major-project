import React from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';

function Home() {
  React.useEffect(() => {
    document.title = "DRIK | Homepage";
  }, []);

  return (
    <>
      <Sidenav />
      <div className='w-[80%] h-full'>
        <Topnav />
      </div>
    </>
  );
}

export default Home;
