import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { StartingPage } from "../Pages/StartingPage/startingPage";
import { TheHobbitHome } from "../Pages/Hobbit/HobbitHome";
import { TheOneRingHome } from "../Pages/Lord-of-the-Rings/TheOneRingHome";
import { Journeys, IHeaderListItem } from "../types";
import { container, appContainer, buttonContainer, buttonAllStyle, button1Style, button2Style, button3Style } from "./styling";
import { Footer } from "../Components/Footer/Footer";
import { MovieDetailPage } from "../Pages/MovieDetailPage/MovieDetailPage";
import { Characters } from "../Pages/Characters/Characters";

const App = () => {
  const [journey, setJourney] = useState<boolean>();
  const [chosenJourney, setChosenJourney] = useState<Journeys>();

  useEffect(() => {
    let chosenJourney = sessionStorage.getItem("journey");
    if (chosenJourney !== null) {
      setJourney(true);
      setChosenJourney(chosenJourney as Journeys);
    }
  }, []);

  const handleJourneyChoose = (value: boolean, journey: Journeys) => {
    setJourney(true);
    setChosenJourney(journey);
  };

  const headerListItems: IHeaderListItem[] = [
    {
      title: "Home",
      url: `${chosenJourney}`,
    },
    {
      title: "Choose your journey",
      url: "journey",
    },
    {
      title: "Characters",
      url: "characters",
    },
    {
      title: "Guess the quote",
      url: "ss",
    },
  ];

  return (
    <div className={container}>
      <Router>
      {!journey 
      ? ( <StartingPage handleChoose={handleJourneyChoose} /> ) 
      : (
        <div className={appContainer}>
          <Header listItems={headerListItems} />
          <Switch>
            <Route path={`/${chosenJourney}/:id`}>
              <MovieDetailPage />
            </Route>
            <Route path="/characters">
              <Characters />
            </Route>
            <Route path="/journey">
              <StartingPage handleChoose={handleJourneyChoose} />
            </Route>
            <Route path="/hobbit">
              <TheHobbitHome />
            </Route>
            <Route path="/lord-of-the-rings">
              <TheOneRingHome />
            </Route>
            <Route path="/">
              <Redirect to={`/${chosenJourney}`} />
            </Route>
          </Switch>
          <div className={buttonContainer}>
              <button className={`${buttonAllStyle} ${button1Style}`}>Hobbiton</button>
              <button className={`${buttonAllStyle} ${button2Style}`}>Elvish</button>
              <button className={`${buttonAllStyle} ${button3Style}`}>Khuzdul</button>
            </div>
        </div>
      )}
    </Router>
    </div>
  );
}

export default App;
