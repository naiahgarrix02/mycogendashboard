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

export type ActionCard = {
  title: string;
  description: string;
  bg: string;
};

export type Stats = {
  title: string;
  value: string;
  subcopy: string;
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

export const actionCards = [
  {
    title: "Create Discount Code",
    description: "Set up percentage or fixed amount discounts",
    bg: "bg-[#E7F3FE]",
  },
  {
    title: "Email Campaign",
    description: "Send newsletters and promotional emails.",
    bg: "bg-[#FDF3DC]",
  },
  {
    title: "Announcement Banner",
    description: "Display website promotional messages.",
    bg: "bg-[#E7FAE7]",
  },
  {
    title: "Bundle Offers",
    description: "Create product bundles with special pricing.",
    bg: "bg-[#E8E7FC]",
  },
];

export const Stats = [
  {
    title: "Total Sales",
    value: "$54,890",
    subcopy: "12% increase from last month",
  },
  {
    title: "Orders",
    value: "1,429",
    subcopy: "12% increase from last month",
  },
  {
    title: "Average Order Value",
    value: "$38.42",
    subcopy: "12% increase from last month",
  },
  {
    title: "Returning Customers",
    value: "68%",
    subcopy: "12% increase from last month",
  },
  {
    title: "Cart Abandonment",
    value: "23.8%",
    subcopy: "12% increase from last month",
  },
  {
    title: "Product Views",
    value: "45,210",
    subcopy: "12% increase from last month",
  },
];