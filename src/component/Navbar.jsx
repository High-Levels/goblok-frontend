import { Menubar } from 'primereact/menubar';

function Navbar() {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: '/'
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info',
      url: '/about'
    },
    {
      label: 'Contact',
      icon: 'pi pi-fw pi-envelope',
      url: '/contact'
    }
  ];

  return (
    <div>
      <div className="topbar">
        <div className="container">
          <Menubar model={items} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
