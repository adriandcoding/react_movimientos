import { HeaderComponent, NavBarComponent } from "./components";
import { FooterComponent } from "./components/footer.component";
import classes from "./app-layout.module.css";

interface Props {
  children: React.ReactNode;
}
export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className={classes.bodyFlex}>
      <HeaderComponent />
      <NavBarComponent />
      <main>{children}</main>

      <FooterComponent />
    </div>
  );
};
