export const routesPrefixes = {
  accountList: "/account-list",
  movements: "/movements",
  transfer: "/transfer",
};
export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  editAccount: "/edit-account/:id",
  movements: `${routesPrefixes.movements}/:id`,

  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
  createAccount: "/create-account",
};
