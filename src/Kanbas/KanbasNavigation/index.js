import '../style.css';
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiBookAlt, BiSolidCalendar, BiVideoRecording, BiLogoCreativeCommons, BiHelpCircle } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlineInbox, AiOutlineHistory } from "react-icons/ai";
import { FaEllipsisVertical} from "react-icons/fa6";


function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [<BiUserCircle />, <AiOutlineDashboard />, <BiBookAlt />, <BiSolidCalendar />, <AiOutlineInbox />, <AiOutlineHistory />, <BiVideoRecording />, <BiLogoCreativeCommons />, <BiHelpCircle />];
  const { pathname } = useLocation();
  return (
    <div className="wd-navbar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2V8BuW7n0uy8uY8krUGiY5bXk0LN8RZe4cw&usqp=CAU" style={{width:150, height:150}}></img>
      <div className="list-group" style={{ width: 150 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {icons[index]}<br />
            {link}    
          </Link>
        ))}
      </div>
    </div>
  );
}
export default KanbasNavigation;