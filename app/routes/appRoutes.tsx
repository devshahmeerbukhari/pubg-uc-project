// appRouter.tsx
import LandingPage from "../page";
import AddPartnerPage from "../add-partner/page";
import UCPackagesPage from "../uc-packages/page";
import UCPackageDetailPage from "../uc-packages/[id]/page";
import { paths } from "./paths";

export const appRoutes = [
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: paths.partner.add.replace("/", ""),
        element: <AddPartnerPage />,
      },
      {
        path: paths.ucPackages.root.replace("/", ""),
        element: <UCPackagesPage />,
      },
      {
        path: "uc-packages/:id",
        element: <UCPackageDetailPage />,
      },
    ],
  },
];
