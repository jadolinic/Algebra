import { ApartmanProvider } from "./context/Context";
import ListaApartmana from "./components/ListaApartmana";
import Filters from "./components/Filters";

const App = () => {
  return (
    <ApartmanProvider>
      <Filters />
      <ListaApartmana />
    </ApartmanProvider>
  );
};

export default App;
