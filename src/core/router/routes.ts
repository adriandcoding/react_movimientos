export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
  movements: "/movements",
};
export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  editAccount: "/edit-account/:id",
  movements: `${routesPrefixes.movements}/:id`,
  transfer: "/transfer",
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
  createAccount: "/create-account",
};
