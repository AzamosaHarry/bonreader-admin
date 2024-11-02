import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/auth/login/Login";
import ScrollToTop from "./utils/ScrollToTop";

import { ADMIN_ROLES } from "./config/adminRoles";
import PublicRoute from "./route/publicRoute";
import PrivateRoute from "./route/privateRoute";
import Admin from "./pages/main/admin/Admin";
import AdminDashboard from "./pages/main/admin-dashboard/AdminDashboard";
import AdminNovel from "./pages/main/admin-novels/AdminNovel";
import AdminGenre from "./pages/main/admin-genre/AdminGenre";
import AdminUsers from "./pages/main/users/AdminUsers";
import AdminAuthors from "./pages/main/authors/AdminAuthors";
import AdminSubscriptions from "./pages/main/admin-subscriptions/AdminSunscriptions";
import AdminCoins from "./pages/main/admin-coins/AdminCoins";
import AdminWithdrawals from "./pages/main/admin-withdrawals/admin-withdrawals";
import AdminAdmins from "./pages/main/admin-admins/AdminAdmins";
import AdminRoles from "./pages/main/admin-roles/AdminRoles";
import AdminTags from "./pages/main/admin-tags/AdminTag";
import AdminContracts from "./pages/main/admin-contracts/AdminContracts";
import AdminSettings from "./pages/main/admin-settings/AdminSettings";
import AdminEditorial from "./pages/main/admin-editorial/AdminEditorial";
import AdminReview from "./pages/main/admin-review/AdminReview";
import AdminRolesSingle from "./pages/main/admin-roles-single/AdminRolesSingle";
import AdminNewAdmin from "./pages/main/admin-new-admin/AdminNewAdmin";
import AdminProfile from "./pages/main/admin-profile/AdminProfile";
import AdminEditProfile from "./pages/main/admin-profile-edit/AdminProfileEdit";
import AdminAuthorsSingle from "./pages/main/admin-authors-single/AdminAuthorSingle";
import AdminSubscriptionsPlan from "./pages/main/admin-subscriptions-plan/AdminSubscriptionPlan";
import AdminCoinsNew from "./pages/main/admin-coins-new/AdminCoinsNew";
import AdminUserSingle from "./pages/main/admin-user-single/AdminUserSingle";
import AdminNovelsSingle from "./pages/main/admin-novels-single/AdminNovelSingle";
import AdminBookChapter from "./pages/main/admin-book-chapter/AdminBookChapter";
import AdminNovelsRejected from "./pages/main/admin-novels-rejected/AdminNovelsRejected";
import AdminNovelsApproved from "./pages/main/admin-novels-approved/AdminNovelsApproved";
import AdminNovelsNew from "./pages/main/admin-novels-new/AdminNovelsNew";
import ToasterContainer from "./component/toast/ToasterContainer";
import NotFound from "./pages/supplementary/not-found/notFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToasterContainer />
        <ScrollToTop />
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Login />} />
          </Route>

          {/* PRIVATE ROUTES */}
          <Route element={<PrivateRoute allowedRoles={ADMIN_ROLES} />}>
            <Route path="/" element={<Admin />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="novels" element={<AdminNovel />} />
              <Route path="novels-rejected" element={<AdminNovelsRejected />} />
              <Route path="novels-approved" element={<AdminNovelsApproved />} />
              <Route path="novels-new" element={<AdminNovelsNew />} />
              <Route path="novels/:id" element={<AdminNovelsSingle />} />
              <Route
                path="novels/:id/chapter/:chapterId"
                element={<AdminBookChapter />}
              />
              <Route path="genre" element={<AdminGenre />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="users/:id" element={<AdminUserSingle />} />
              <Route path="authors" element={<AdminAuthors />} />
              <Route path="authors/:id" element={<AdminAuthorsSingle />} />
              <Route path="subscriptions" element={<AdminSubscriptions />} />
              <Route
                path="subscriptions/plan"
                element={<AdminSubscriptionsPlan />}
              />
              <Route path="coins" element={<AdminCoins />} />
              <Route path="coins/new" element={<AdminCoinsNew />} />
              <Route path="withdrawals" element={<AdminWithdrawals />} />
              <Route path="admins" element={<AdminAdmins />} />
              <Route path="admins/create" element={<AdminNewAdmin />} />
              <Route path="withdrawals" element={<AdminWithdrawals />} />
              <Route path="roles" element={<AdminRoles />} />
              <Route path="admin-roles" element={<AdminRolesSingle />} />
              <Route path="tags" element={<AdminTags />} />
              <Route path="contracts" element={<AdminContracts />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="review" element={<AdminReview />} />
              <Route path="editorial-picks" element={<AdminEditorial />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="profile/edit" element={<AdminEditProfile />} />
            </Route>
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
