import AdminPage from "../pages/AdminPage/AdminPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";


export const routes = [
    {
        path: '/',
        page: AdminPage

    },

    {
        path: '*',
        page: NotFoundPage

    },


]