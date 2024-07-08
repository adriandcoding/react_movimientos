import { HeaderComponent, NavBarComponent } from "./components";
import { FooterComponent } from "./components/footer.component";
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
      <FooterComponent />
    </div>
  );
};
