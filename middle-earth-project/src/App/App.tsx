import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { StartingPage } from "../Pages/StartingPage/StartingPage";
import { TheHobbitHome } from "../Pages/Hobbit/HobbitHome";
import { TheOneRingHome } from "../Pages/Lord-of-the-Rings/TheOneRingHome";
import { Journeys, IHeaderListItem } from "../types";
import { container, appContainer } from "./styling";
import { Footer } from "../Components/Footer/Footer";

const App = () => {
  const [journey, setJourney] = useState<boolean>();
  const [journeyChoose, setJourneyChoose] = useState<Journeys>();

  useEffect(() => {
    let chosenJourney = sessionStorage.getItem("journey");
    console.log(chosenJourney);
    if (chosenJourney !== null) {
      setJourney(true);
      setJourneyChoose(chosenJourney as Journeys);
    }
  }, []);

  const handleJourneyChoose = (value: boolean) => {
    setJourney(true);
  };

  const headerListItems: IHeaderListItem[] = [
    {
      title: "Home",
      url: `${journeyChoose}`,
    },
    {
      title: "choose your journey",
      url: "",
    },
    {
      title: "T.B.A",
      url: "",
    },
    {
      title: "T.B.A",
      url: "",
    },
  ];

  return (
    <div className={container}>
      <Router>
      {!journey ? (
        <StartingPage handleChoose={handleJourneyChoose} />
      ) : (
        <div className={appContainer}>
          <Header listItems={headerListItems} />
          <Switch>
            <Route path="/hobbit">
              <TheHobbitHome />
            </Route>
            <Route path="/lord-of-the-rings">
              <TheOneRingHome />
            </Route>
            <Route path="/">
              <Redirect to={`/${headerListItems[0].url}`} />
            </Route>
          </Switch>
          <Footer/>
        </div>
      )}
    </Router>
    </div>
  );
}

export default App;
