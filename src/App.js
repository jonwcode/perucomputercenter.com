import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/header";
import StoreMap from "./components/header/storeMap";
import Hours from "./components/hours";
import Footer from "./components/footer";
import Card from "./components/Card";
import SlideShow from "./components/slideShow/slideShow";


function App() {

  const [mapViewable, setMapViewable] = useState(false);

  const toggleMapView = () => {

    console.log("Going here");
    setMapViewable(prevState => !prevState);
  }

  return (
    <Card>
      {mapViewable && <StoreMap toggleMapView={toggleMapView} />}
      <Header toggleMapView={toggleMapView} />
      <Hours />
      <SlideShow />
      <Footer />
    </Card>
  );
}

export default App;
