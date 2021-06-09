import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import PageNotFound from "../pages/404";
import Delivery from "../pages/delivery";
import Guarantee from "../pages/guarantee";
import Pickup from "../pages/pickup";
import Contacts from "../pages/contacts";
import Sales from "../pages/sales";
import New from "../pages/new";
import Brands from "../pages/brands";
import Blog from "../pages/blog";
import Promo from "../pages/promo";
import Catalog from "../pages/catalog";

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route exact path="/delivery">
      <Delivery />
    </Route>

    <Route path="/guarantee">
      <Guarantee />
    </Route>

    <Route path="/pickup">
      <Pickup />
    </Route>

    <Route path="/contacts">
      <Contacts />
    </Route>

    <Route path="/new">
      <New />
    </Route>

    <Route path="/sales">
      <Sales />
    </Route>

    <Route path="/brands">
      <Brands />
    </Route>

    <Route path="/blog">
      <Blog />
    </Route>

    <Route path="/promo">
      <Promo />
    </Route>

    <Route path="/catalog">
      <Catalog />
    </Route>

    <Route path="*">
      <PageNotFound />
    </Route>
  </Switch>
);

export default Routes;
