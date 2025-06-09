import Home from "../Home";
import EditSubscription from "../pages/EditSubscription";
import ProtectedRoute from "../components/ProtectedRoute"
import CreateSubscription from "../pages/CreateSubscription"
import SeeSubscription from "../pages/SeeSubscription"
import Login from "../pages/Login";
import MainContent from "../pages/MainContent";

export let Router = [
    {
        path: "/home/",
        element: <ProtectedRoute component={<Home />} />,
        children: [
            {
                path: "main",
                element: <MainContent />
            },
            {
                path: "createSubscription",
                element: <CreateSubscription />
            },
            {
                path: "seeSubscription",
                element: <SeeSubscription />
            },
            {
                path: "editSubscription/:id",
                element: <EditSubscription />
            }
        ],
    },

    {
        path: "/",
        element: <Login />
    }
];