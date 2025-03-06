
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route component={NotFound} />
    </Switch>
  );
}
