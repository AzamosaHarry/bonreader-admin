import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./admin.css";
import AdminHeader from "../../../component/layout/header/AdminHeader";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  MdDashboard,
  MdAdminPanelSettings,
  MdEditDocument,
  MdPayments,
} from "react-icons/md";
import { FaTag, FaBook, FaUserTie, FaCoins, FaUsers } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { GiCardPickup } from "react-icons/gi";
import { SiPrivateinternetaccess } from "react-icons/si";
import { MdPreview } from "react-icons/md";
import { PiBooksFill } from "react-icons/pi";
import { IoMdSettings, IoMdBookmarks } from "react-icons/io";
import { BiSolidBookAdd } from "react-icons/bi";
import { ImBook } from "react-icons/im";

const NAV__ARRAY = [
  { id: 1, path: "/dashboard", name: "Dashboard", icon: MdDashboard },
  { id: 2, path: "/novel", name: "Manage Novels", icon: FaBook },
  { id: 3, path: "/genre", name: "Manage Genre", icon: PiBooksFill },
  { id: 4, path: "/review", name: "Chapters Review", icon: MdPreview },
  { id: 5, path: "/users", name: "Manage Users", icon: FaUsers },
  { id: 6, path: "/authors", name: "Manage Author", icon: FaUserTie },
  {
    id: 7,
    path: "/subscriptions",
    name: "Manage Subscription",
    icon: MdPayments,
  },
  { id: 8, path: "/coins", name: "Manage Coins", icon: FaCoins },
  {
    id: 9,
    path: "/withdrawals",
    name: "Manage Withdrawals",
    icon: BsCreditCardFill,
  },
  {
    id: 10,
    path: "/admins",
    name: "Manage Admins",
    icon: MdAdminPanelSettings,
  },
  { id: 11, path: "/contracts", name: "Manage Contract", icon: MdEditDocument },
  {
    id: 12,
    path: "/editorial-picks",
    name: "Editorial Picks",
    icon: GiCardPickup,
  },
  { id: 13, path: "/tags", name: "Manage Tags", icon: FaTag },
  {
    id: 14,
    path: "/roles",
    name: "Roles and Permissions",
    icon: SiPrivateinternetaccess,
  },
  { id: 15, path: "/settings", name: "Settings", icon: IoMdSettings },
];

function Admin() {
  const navigate = useNavigate();
  const [colorId, setColorId] = useState(1);
  const [active, setActive] = useState(false);
  const [isNovelsOpen, setIsNovelsOpen] = useState(false);

  const handleNovelsClick = () => {
    setIsNovelsOpen(!isNovelsOpen);
  };

  const handleNav = (active) => {
    setActive(active);
  };

  return (
    <div className="admin">
      <AdminHeader handleNav={handleNav} />
      <div className="admin__container">
        <div className={active ? "admin__navbar active" : "admin__navbar"}>
          <section className="admin__navbar__section__two">
            {NAV__ARRAY.map((item, index) => {
              const isNovel = item.name === "Manage Novels";
              if (isNovel) {
                return (
                  <>
                    <div
                      key={index}
                      className={
                        colorId === item.id ? "admin__navbar__active" : ""
                      }
                    >
                      <div
                        className="admin__navbar__novels__display"
                        onClick={() => {
                          setColorId(item.id);
                          handleNovelsClick();
                        }}
                      >
                        <item.icon
                          className={
                            colorId === item.id
                              ? "admin__navbar__novels__display__icon--active"
                              : "admin__navbar__novels__display__icon"
                          }
                        />

                        <h2
                          className={
                            colorId === item.id
                              ? "admin__navbar__novels__display__text--active"
                              : "admin__navbar__novels__display__text"
                          }
                        >
                          {item.name}
                        </h2>

                        <RiArrowRightSLine
                          className={
                            colorId === item.id
                              ? "admin__navbar__novels__icon--active"
                              : "admin__navbar__novels__icon"
                          }
                        />
                      </div>
                    </div>

                    {isNovelsOpen && (
                      <div
                        className={`admin__navbar__novels__accordion${
                          isNovelsOpen ? " active" : ""
                        }`}
                      >
                        <h3 onClick={() => navigate("/novels")}>
                          <item.icon className="" />
                          All Novels
                        </h3>
                        <h3 onClick={() => navigate("/novels-approved")}>
                          <IoMdBookmarks className="" />
                          Approved Novels
                        </h3>
                        <h3 onClick={() => navigate("/novels-new")}>
                          <BiSolidBookAdd className="" />
                          New Novels
                        </h3>
                        <h3 onClick={() => navigate("/novels-rejected")}>
                          <ImBook className="" />
                          Rejected Novels
                        </h3>
                      </div>
                    )}
                  </>
                );
              } else {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      navigate(item.path);
                      setColorId(item.id);
                      // setIsNovelsOpen(false);
                    }}
                    className={
                      colorId === item.id ? "admin__navbar__active" : ""
                    }
                  >
                    <item.icon className="admin__navbar__icon" />
                    <h3>{item.name}</h3>{" "}
                  </div>
                );
              }
            })}
          </section>
        </div>
        <div className={active ? "admin__outlet active" : "admin__outlet"}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;
