import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'pi-objects-column',
    route: '/dashboard',
  },
  {
    navCap: 'Project',
    divider: true
  },
  {
    displayName: 'All Project',
    iconName: 'pi-book',
    route: '/project/allProject',
  },
  {
    displayName: 'Add Project',
    iconName: 'pi-plus-circle',
    route: '/project/addProject',
  },
  {
    displayName: 'Estimates',
    iconName: 'pi-clock',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Project Details',
    iconName: 'pi-folder-open',
    route: '/ui-components/lists',
  },
  {
    navCap: 'Employees',
    divider: true
  },
  {
    displayName: 'All Employee',
    iconName: 'pi-users',
    route: '/authentication/login',
  },
  {
    displayName: 'Add Employee',
    iconName: 'pi-user-plus',
    route: '/authentication/register',
  },
  {
    displayName: 'Edit Employee',
    iconName: 'pi-user-edit',
    route: '/authentication/register',
  },
  {
    displayName: 'Employee Profile',
    iconName: 'pi-id-card',
    route: '/authentication/register',
  },
  {
    navCap: 'Leave Management',
    divider: true
  },
  {
    displayName: 'All Leave Request', 
    iconName: 'pi-calendar',
    route: '/extra/icons',
  },
  {
    displayName: 'Leave Balance',
    iconName: 'pi-qrcode',
    route: '/extra/sample-page',
  },
  {
    displayName: 'Leave Type',
    iconName: 'pi-qrcode',
    route: '',
  },
];
