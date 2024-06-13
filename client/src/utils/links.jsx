import { FaHome } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { CiLogin } from "react-icons/ci";

const links = [
  {
    text: "Home",
    path: ".",
    icon: <FaHome />,
  },
  {
    text: "About",
    path: "about",
    icon: <MdOutlineContactSupport />,
  },
  {
    text: "Contact Us",
    path: ".",
    icon: <IoIosCall />,
  },
  {
    text: "login",
    path: "/login",
    icon: <CiLogin />,
  },
];

export default links;
