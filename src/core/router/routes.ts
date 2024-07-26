export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
  createAccount: "/create-account",
};
export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  editAccount: "/edit-account/:id",
  movements: "/movements/:id",
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
  createAccount: routesPrefixes.createAccount,
};
