import { ReactComponent as DashboardIcon } from "../assets/icons/dashboard.svg";
import { ReactComponent as Orders } from "../assets/icons/orders.svg";
import { ReactComponent as Products } from "../assets/icons/products.svg";
import { ReactComponent as Categories } from "../assets/icons/categories.svg";
import { ReactComponent as Customers } from "../assets/icons/customers.svg";
import { ReactComponent as Reviews } from "../assets/icons/reviews.svg";
import { ReactComponent as Discounts } from "../assets/icons/discounts.svg";
import { ReactComponent as Analytics } from "../assets/icons/analytics.svg";
import { ReactComponent as Marketing } from "../assets/icons/marketing.svg";
import { ReactComponent as Settings } from "../assets/icons/settings.svg";

export type NavItem = {
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string;
};

export const sidebarNav: NavItem[] = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
  },
  { label: "Orders", icon: Orders, path: "/orders" },
  {
    label: "Products",
    icon: Products,
    path: "/products",
  },
  {
    label: "Categories",
    icon: Categories,
    path: "/categories",
  },
  {
    label: "Customers",
    icon: Customers,
    path: "/customers",
  },
  { label: "Reviews", icon: Reviews, path: "/reviews" },
  {
    label: "Discounts",
    icon: Discounts,
    path: "/discounts",
  },
  {
    label: "Analytics",
    icon: Analytics,
    path: "/analytics",
  },
  {
    label: "Marketing",
    icon: Marketing,
    path: "/marketing",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
