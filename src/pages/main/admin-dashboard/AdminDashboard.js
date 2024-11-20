import { FaPeopleGroup } from "react-icons/fa6";
import "./admin-dashboard.css";
import image1 from "../../../assets/ad__ds__one.png";
import image2 from "../../../assets/ad__ds__two.png";
import { FaChartLine, FaUserCircle } from "react-icons/fa";
import Loading from "../../../component/splash/loading/Loading";
import NoResult from "../../../component/splash/no-result/NoResult";
import { useNavigate } from "react-router-dom";
import { useGetDashboardData } from "../../../redux/actions/miscActions";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const getDashboardData = useGetDashboardData();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dashboardData, setDashboardData] = useState(null);
  const navigate = useNavigate();

  const BLOCKS = [
    {
      icon: FaPeopleGroup,
      title: "No of users",
      count: dashboardData?.summary?.num_users,
      bgColor: "#0009eb",
    },
    {
      icon: FaUserCircle,
      title: "Subscribed users",
      count: dashboardData?.summary?.subscribed_users,
      bgColor: "#D60000",
    },
    {
      icon: FaChartLine,
      title: "Ammount of subscription",
      count: dashboardData?.summary?.total_subscription_value,
      bgColor: "#008189",
    },
    {
      icon: FaPeopleGroup,
      title: "No of authors",
      count: dashboardData?.summary?.num_authors,
      bgColor: "#669933",
    },
    {
      icon: FaUserCircle,
      title: "Total contracts",
      count: dashboardData?.summary?.total_contracts,
      bgColor: "#4603B4",
    },
    {
      icon: FaChartLine,
      title: "Signed contracts",
      count: dashboardData?.summary?.signed_contracts,
      bgColor: "#00C5E0",
    },
    {
      icon: FaPeopleGroup,
      title: "Pending contracts",
      count: dashboardData?.summary?.pending_contracts,
      bgColor: "#DBA900",
    },
    {
      icon: FaUserCircle,
      title: "Published stories",
      count: dashboardData?.summary?.published_stories,
      bgColor: "#F20049",
    },
    {
      icon: FaChartLine,
      title: "Unpublished stories",
      count: dashboardData?.summary?.unpublished_stories,
      bgColor: "#7A4388",
    },
    {
      icon: FaPeopleGroup,
      title: "Pending chapters",
      count: dashboardData?.summary?.pending_chapters,
      bgColor: "#376DF7",
    },
    {
      icon: FaUserCircle,
      title: "No of admins",
      count: dashboardData?.summary?.num_admins,
      bgColor: "#294680",
    },
    {
      icon: FaChartLine,
      title: "No of gifts",
      count: dashboardData?.summary?.num_gifts,
      bgColor: "#53B997",
    },
  ];

  const handleGetDashboardData = async () => {
    try {
      setLoading(true);
      const response = await getDashboardData();
      setDashboardData(response.payload);
      console.log("get DashboardData", response.payload);
    } catch (err) {
      console.error("Error fetching DashboardData:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetDashboardData();
  }, []);

  return (
    <div className="ad__dashboard">
      <section className="ad__dashboard__sc__one">
        <h1>Dashboard</h1>
      </section>
      {loading ? (
        <Loading />
      ) : !dashboardData ? (
        <NoResult />
      ) : (
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
      )}
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
