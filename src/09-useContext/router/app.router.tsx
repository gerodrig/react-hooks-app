import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { PrivateRoute } from "./PrivateRoute";
import { LoginPage } from "../pages/auth/LoginPage";



export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AboutPage />
    },
    {
        path: '/profile',
        // element: <ProfilePage />
        element: <PrivateRoute element={<ProfilePage />} />,
    },
    {
        path: '/login',
        // element: <ProfilePage />
        element: <LoginPage />
    },
    {
        path: '*',
        element: <Navigate to="/" />
    },
])