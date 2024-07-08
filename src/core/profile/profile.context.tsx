import React from "react";
interface ProfileContext {
  username: string;
  setUserProfile: (username: string) => void;
}
const noUserLogin = "no-user";

export const UserContext = React.createContext<ProfileContext>({
  username: noUserLogin,
  setUserProfile: (): void => {},
});
interface Props {
  children: React.ReactNode;
}
export const ProfileProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [userProfile, setUserProfile] = React.useState(noUserLogin);
  return (
    <UserContext.Provider
      value={{
        username: userProfile,
        setUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): ProfileContext =>
  React.useContext(UserContext);
