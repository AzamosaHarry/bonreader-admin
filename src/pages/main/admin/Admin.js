import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsAirplane } from "react-icons/bs";
import "./admin.css";
import AdminHeader from "../../../component/layout/header/AdminHeader";
import { logout } from "../../../services/authServices";
import { RiArrowRightSLine } from "react-icons/ri";

const NAV__ARRAY = [
  { id: 1, path: "/dashboard", name: "Dashboard" },
  { id: 2, path: "/novel", name: "Manage Novels" },
  { id: 3, path: "/genre", name: "Manage Genre" },
  { id: 4, path: "/review", name: "Chapters Review" },
  { id: 5, path: "/users", name: "Manage Users" },
  { id: 6, path: "/authors", name: "Manage Author" },
  { id: 7, path: "/subscriptions", name: "Manage Subscription" },
  { id: 8, path: "/coins", name: "Manage Coins" },
  { id: 9, path: "/withdrawals", name: "Manage Withdrawals" },
  { id: 10, path: "/admins", name: "Manage Admins" },
  { id: 11, path: "/contracts", name: "Manage Contract" },
  { id: 12, path: "/editorial-picks", name: "Editorial Picks" },
  { id: 13, path: "/tags", name: "Manage Tags" },
  { id: 14, path: "/roles", name: "Roles and Permissions" },
  { id: 15, path: "/settings", name: "Settings" },
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

  //   const handleLogout = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await logout();
  //     } catch (error) {
  //       console.error("Error logging out:", error);
  //     }
  //   };

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
                  <div
                    key={index}
                    onClick={() => {
                      setColorId(item.id);
                      handleNovelsClick();
                    }}
                    className={
                      colorId === item.id ? "admin__navbar__active" : ""
                    }
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      alignItems: "start",
                      justifyContent: "start",
                    }}
                    // }
                  >
                    <div className="admin__navbar__novels__display">
                      <BsAirplane
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
                    <div
                      className={`admin__navbar__novels__accordion${
                        isNovelsOpen ? " active" : ""
                      }`}
                    >
                      <h3 onClick={() => navigate("/novels")}>All Novels</h3>
                      <h3 onClick={() => navigate("/novels-approved")}>
                        Approved Novels
                      </h3>
                      <h3 onClick={() => navigate("/novels-new")}>
                        New Novels
                      </h3>
                      <h3 onClick={() => navigate("/novels-rejected")}>
                        Rejected Novels
                      </h3>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      navigate(item.path);
                      setColorId(item.id);
                      setIsNovelsOpen(false);
                    }}
                    className={
                      colorId === item.id ? "admin__navbar__active" : ""
                    }
                  >
                    <BsAirplane className="admin__navbar__icon" />
                    <h3>{item.name}</h3>{" "}
                  </div>
                );
              }
              return (
                <div
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setColorId(item.id);
                  }}
                  className={colorId === item.id ? "admin__navbar__active" : ""}
                >
                  {isNovel ? (
                    <div
                      className={
                        colorId === item.id
                          ? "admin__navbar__novels__wrap--active"
                          : "admin__navbar__novels__wrap"
                      }
                      // onClick={handleNovelsClick}
                    >
                      <div className="admin__navbar__novels__display">
                        <BsAirplane
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
                      <div
                        className={`admin__navbar__novels__accordion${
                          isNovelsOpen ? " active" : ""
                        }`}
                      >
                        <h3>All Novels</h3>
                        <h3>Approved Novels</h3>
                        <h3>New Novels</h3>
                        <h3>Rejected Novels</h3>
                      </div>
                    </div>
                  ) : (
                    <>
                      <BsAirplane className="admin__navbar__icon" />
                      <h3>{item.name}</h3>
                    </>
                  )}
                </div>
              );
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
