import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { StartingPage } from "../Pages/StartingPage/StartingPage";
import { TheHobbitHome } from "../Pages/Hobbit/HobbitHome";
import { TheOneRingHome } from "../Pages/Lord-of-the-Rings/TheOneRingHome";
import { Journeys, IHeaderListItem } from "../types";

function App() {
  const [journey, setJourney] = useState<boolean>();
  const [journeyChoose, setJourneyChoose] = useState<Journeys>();

  useEffect(() => {
    let chosenJourney = sessionStorage.getItem("journey");
    if (chosenJourney === null) {
      setJourney(false);
      return;
    }
    setJourneyChoose(chosenJourney as Journeys);
  }, []);

  const handleJourneyChoose = (value: boolean) => {
    setJourney(true);
  };

  const headerListItems: IHeaderListItem[] = [
    {
      title: "Home",
      url: "home"
    },
    {
      title: "choose your journey",
      url: "choose-your-journey"
    },
    {
      title: "T.B.A",
      url: ""
    },
    {
      title: "T.B.A",
      url: ""
    }
  ];

  return (
    <Router>
      {!journey ? (
        <StartingPage handleChoose={handleJourneyChoose} />
      ) : (
        <div>
          <Header listItems={headerListItems} />
          <Switch>
            {journeyChoose === Journeys.HOBBIT && (
              <Route path="/hobbit">
                <TheHobbitHome />
              </Route>
            )}
            {journeyChoose === Journeys.LORD_OF_THE_RINGS && (
              <Route path="/lord-of-the-rings">
                <TheOneRingHome />
              </Route>
            )}
          </Switch>
          {/* footer */}
        </div>
      )}
    </Router>
  );
}

export default App;
