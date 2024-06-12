import { FaHome } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const links = [
  {
    text: "Home",
    path: ".",
    icon: <FaHome />,
  },
  {
    text: "About",
    path: "all-jobs",
    icon: <MdOutlineContactSupport />,
  },
  {
    text: "Contact Us",
    path: "stats",
    icon: <IoIosCall />,
  },
];

export default links;
