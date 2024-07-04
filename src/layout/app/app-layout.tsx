import * as react from "react";
interface Props {
  children: React.ReactNode;
}
export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div>
      <header>
        <h1>App Layout</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>�� 2022 Company Name</p>
      </footer>
    </div>
  );
};
