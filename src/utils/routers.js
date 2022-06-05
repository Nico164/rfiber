import Wrapper from "../components/wrapper/wrapper";
import FeaturePage from "../pages/Features/features";
import LandingPage from "../pages/landing/Landing";
import NotFoundPage from "../pages/NotFound/NotFound";
import PricingPage from "../pages/pricing/pricing";
import ProjectPage from "../pages/Projects/Projects.jsx";
import UpdatePage from "../pages/Updates/Updates";

export const routes = [{
    path: "/",
    element: <Wrapper></Wrapper>,
    children: [
        { index: true, element: <LandingPage/> },
        { path: "home", element: <LandingPage/>},
        { path: "pricing", element: <PricingPage/>},
        { path: "features", element: <FeaturePage/>},
        { path: "projects", element: <ProjectPage/>},
        { path: "updates", element: <UpdatePage/>},

        { path: "*", element: <NotFoundPage/>}
    ]
}]