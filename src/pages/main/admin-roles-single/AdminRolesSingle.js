import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./admin-roles-single.css";
import { useGetRolePermissions } from "../../../redux/actions/rolePermissionAction";

// Define sections and permissions here
const sections = [
  {
    id: "novel",
    title: "Novel Section",
    permissions: ["Create", "Edit", "Delete"],
  },
  {
    id: "user",
    title: "User Section",
    permissions: ["Create", "Edit", "Delete"],
  },
  // Add more sections as needed
];

function AdminRolesSingle() {
  const getRolePermissions = useGetRolePermissions();
  const location = useLocation();
  const state = location.state;
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // State management for checkboxes
  const [allChecked, setAllChecked] = useState(false);
  const [permissions, setPermissions] = useState({});
  console.log(permissions);

  const handleCheckAll = (sectionId, isChecked) => {
    setPermissions((prev) => ({
      ...prev,
      [sectionId]: sections
        .find((sec) => sec.id === sectionId)
        .permissions.reduce((acc, perm) => {
          acc[perm] = isChecked;
          return acc;
        }, {}),
    }));
  };

  const handleCheckPermission = (sectionId, permission, isChecked) => {
    setPermissions((prev) => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [permission]: isChecked,
      },
    }));
  };

  const handlePageCheckAll = (isChecked) => {
    setAllChecked(isChecked);
    setPermissions(
      sections.reduce((acc, section) => {
        acc[section.id] = section.permissions.reduce((pAcc, perm) => {
          pAcc[perm] = isChecked;
          return pAcc;
        }, {});
        return acc;
      }, {})
    );
  };

  const handleGetRolePermissions = async () => {
    try {
      setLoading(true);
      const response = await getRolePermissions(id);
      console.log("banny", response);

      if (
        response?.payload.status === 200 ||
        response?.payload.status === "success"
      ) {
        setErrorMessage("");
        return;
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage(error.response.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetRolePermissions();
  }, []);

  return (
    <div className="admin-roles-single">
      <h1 className="admin-roles-single__title">Roles for: {state?.type}</h1>
      <label className="admin-roles-single__page-check-all">
        <input
          type="checkbox"
          checked={allChecked}
          onChange={(e) => handlePageCheckAll(e.target.checked)}
        />
        Check All Section
      </label>
      <div className="admin-roles-single__section__wrap">
        {sections.map((section) => (
          <div key={section.id} className="admin-roles-single__section">
            <h3 className="admin-roles-single__section-title">
              {section.title}
            </h3>
            <label className="admin-roles-single__section-check-all">
              <input
                type="checkbox"
                checked={Object.values(permissions[section.id] || {}).every(
                  (checked) => checked
                )}
                onChange={(e) => handleCheckAll(section.id, e.target.checked)}
              />
              Check All
            </label>
            <div className="admin-roles-single__permissions">
              {section.permissions.map((perm) => (
                <label key={perm} className="admin-roles-single__permission">
                  {perm}
                  <input
                    type="checkbox"
                    checked={permissions[section.id]?.[perm] || false}
                    onChange={() =>
                      handleCheckPermission(
                        section.id,
                        perm,
                        !permissions[section.id]?.[perm]
                      )
                    }
                  />
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminRolesSingle;
