import { Route, Routes } from "react-router-dom";
import ArticleDetails from "../Pages/ArticleDetails/ArticleDetails";
import ArticleList from "../Pages/ArticleList/ArticlesList";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserProfile from "../Pages/UserProfile/UserProfile";

const IndexRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<ArticleList />} />
                <Route path="/:id" element={<ArticleDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
    )
}

export default IndexRouter;