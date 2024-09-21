import lucide_home from "/src/component/SidebarComponet/icons/lucide_home.svg";
import clarity_arrowsline from "/src/component/SidebarComponet/icons/clarity_two-way-arrows-line.svg";
import Users from "/src/component/SidebarComponet/icons/Users.svg";
import AddressBook from "/src/component/SidebarComponet/icons/AddressBook.svg";
import solar_clipboardbroken from "/src/component/SidebarComponet/icons/solar_clipboard-broken.svg";

export const NavlinkSidebar = [
  {
    id: 1,
    label: "Dashboard",
    path: "/home/dashboard",
    icons: lucide_home,
  },
  {
    id: 2,
    label: "Transactions",
    path: "/home/transactions",
    icons: clarity_arrowsline,
  },
  {
    id: 3,
    label: "Staffs",
    path: "/home/staffs",
    icons: Users,
  },
  {
    id: 4,
    label: "customers ",
    path: "/home/customers",
    icons: AddressBook,
  },
  {
    id: 5,
    label: "accounts",
    path: "/home/accounts",
    icons: solar_clipboardbroken,
  },
];
