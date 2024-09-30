import { FaPeopleGroup } from "react-icons/fa6";
import "./admin-dashboard.css";
import image1 from "../../../assets/ad__ds__one.png";
import image2 from "../../../assets/ad__ds__two.png";
import { FaChartLine, FaUserCircle } from "react-icons/fa";

function AdminDashboard() {
  const BLOCKS = [
    {
      icon: FaPeopleGroup,
      title: "No of users",
      count: 3000,
      bgColor: "#0009eb",
    },
    {
      icon: FaUserCircle,
      title: "Subscribed users",
      count: 3000,
      bgColor: "#D60000",
    },
    {
      icon: FaChartLine,
      title: "Ammount of subscription",
      count: "3000",
      bgColor: "#008189",
    },
    {
      icon: FaPeopleGroup,
      title: "No of authors",
      count: 3000,
      bgColor: "#669933",
    },
    {
      icon: FaUserCircle,
      title: "Total contracts",
      count: 3000,
      bgColor: "#4603B4",
    },
    {
      icon: FaChartLine,
      title: "Signed contracts",
      count: "3000",
      bgColor: "#00C5E0",
    },
    {
      icon: FaPeopleGroup,
      title: "Pending contracts",
      count: 3000,
      bgColor: "#DBA900",
    },
    {
      icon: FaUserCircle,
      title: "Published stories",
      count: 3000,
      bgColor: "#F20049",
    },
    {
      icon: FaChartLine,
      title: "Unpublished stories",
      count: "3000",
      bgColor: "#7A4388",
    },
    {
      icon: FaPeopleGroup,
      title: "Pending chapters",
      count: 3000,
      bgColor: "#376DF7",
    },
    {
      icon: FaUserCircle,
      title: "No of admins",
      count: 3000,
      bgColor: "#294680",
    },
    {
      icon: FaChartLine,
      title: "No of gifts",
      count: "3000",
      bgColor: "#53B997",
    },
  ];

  return (
    <div className="ad__dashboard">
      <section className="ad__dashboard__sc__one">
        <h1>Dashboard</h1>
      </section>
      <section className="ad__dashboard__sc__two">
        {BLOCKS.map((item, index) => {
          return (
            <div
              className={`ad__dashboard__sc__two__block ${
                index % 2 === 0 ? "ad__dashboard__sc__two__block--even" : ""
              }`}
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="ad__dashboard__sc__two__block__start">
                <item.icon className="ad__dashboard__sc__two__block__start__icon" />
              </div>
              <div className="ad__dashboard__sc__two__block__end">
                <h1>{item.title}</h1>
                <p>{item.count}</p>
              </div>
            </div>
          );
        })}
      </section>
      <section className="ad__dashboard__sc__three">
        <div className="ad__dashboard__sc__three__start">
          <p>Revenue generation per month</p>
          <img alt="" src={image1} />
        </div>
        <div className="ad__dashboard__sc__three__end">
          <p>Published novels vs Unpublished novels</p>
          <img alt="" src={image2} />
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
