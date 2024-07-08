import { HeaderComponent, NavBarComponent } from "./components";
interface Props {
  children: React.ReactNode;
}
export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div>
      <HeaderComponent />
      <NavBarComponent />
      <main>{children}</main>
      <footer>
        <p>2022 Company Name</p>
      </footer>
    </div>
  );
};
