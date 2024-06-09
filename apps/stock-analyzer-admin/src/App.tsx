import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StockList } from "./stock/StockList";
import { StockCreate } from "./stock/StockCreate";
import { StockEdit } from "./stock/StockEdit";
import { StockShow } from "./stock/StockShow";
import { StockPriceList } from "./stockPrice/StockPriceList";
import { StockPriceCreate } from "./stockPrice/StockPriceCreate";
import { StockPriceEdit } from "./stockPrice/StockPriceEdit";
import { StockPriceShow } from "./stockPrice/StockPriceShow";
import { WatchlistList } from "./watchlist/WatchlistList";
import { WatchlistCreate } from "./watchlist/WatchlistCreate";
import { WatchlistEdit } from "./watchlist/WatchlistEdit";
import { WatchlistShow } from "./watchlist/WatchlistShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Stock Analyzer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Stock"
          list={StockList}
          edit={StockEdit}
          create={StockCreate}
          show={StockShow}
        />
        <Resource
          name="StockPrice"
          list={StockPriceList}
          edit={StockPriceEdit}
          create={StockPriceCreate}
          show={StockPriceShow}
        />
        <Resource
          name="Watchlist"
          list={WatchlistList}
          edit={WatchlistEdit}
          create={WatchlistCreate}
          show={WatchlistShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
