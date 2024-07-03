import { appRoutes } from "@/core/router";
import React from "react";
import { Link, generatePath } from "react-router-dom";

export const AccountListPage: React.FC = () => {
  return (
    <>
      <h1>Account List Page</h1>
      <Link to={generatePath(appRoutes.movements, { id: "1" })}>
        Movimientos de la cuenta 1
      </Link>
      <br />
      <br />
      <br />

      <Link to={appRoutes.transfer}>Transferencias </Link>
      <br />
      <br />
      <br />

      <Link to={generatePath(appRoutes.transferFromAccount, { id: "1" })}>
        Transferencia cuenta 1
      </Link>
    </>
  );
};
