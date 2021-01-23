import Layout from './container/Layout/Layout.js';
import BurgerBuilderPage from './container/BurgerBuilderPage/BurgerBuilderPage.js';
import Checkout from './container/Checkout/Checkout.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={BurgerBuilderPage} />
      </Switch>
    </Layout>
  );
}

export default App;
