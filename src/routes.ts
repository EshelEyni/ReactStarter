import { MainPage } from "./pages/main-page";

interface Route {
  path: string;
  component: () => JSX.Element;
  onlyHomePage?: boolean;
}

const routes: Route[] = [
  {
    path: "",
    component: MainPage,
  },
];

export { routes };
