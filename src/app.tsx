import { Router } from "./core/router";
import { ProfileProvider } from "./core/profile";

export const App = () => {
  return (
    <ProfileProvider>
      <Router />
    </ProfileProvider>
  );
};
