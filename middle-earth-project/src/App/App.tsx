import React, { useState, useEffect, useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { StartingPage } from "../Pages/StartingPage/startingPage";
import { TheHobbitHome } from "../Pages/Hobbit/HobbitHome";
import { TheOneRingHome } from "../Pages/Lord-of-the-Rings/TheOneRingHome";
import { Journeys, IHeaderListItem, ActionType } from "../types";
import { MovieDetailPage } from "../Pages/MovieDetailPage/MovieDetailPage";
import { Characters } from "../Pages/Characters/Characters";
import { FontContext } from "../Context/FontContext";

//Page styles
const container = ` w-full h-screen overflow-y-scroll 
  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 hover:scrollbar-thumb-blue-200`;
const switchContainer = `box-border w-full h-full bg-wooden`;
const buttonContainer = `fixed top-6 right-5 hidden`;
const commonBtnStyle = `outline-none bg-button-context p-1 backdrop-filter backdrop-blur-sm font-semibold`;
const btnLeftStyle = `border border-black rounded-l-round`;
const btnMidStyle = `border-t border-b border-x-0 border-black`;
const btnRightStyle = `border border-black rounded-r-round`;

interface ReducerType{
  font: string;
}

function reducer (state :ReducerType , action: ActionType){ 
  switch (action) {
    case ActionType.PATRICK  : return {font: 'patrick'}
    case ActionType.ANIRON   : return {font: 'aniron'} 
    case ActionType.KHUZDUL  : return {font: 'khuzdul-erebor'}
    default: return state;
  }
}

const App = () => {
  const [font, dispatch] = useReducer(reducer, {font: 'patrick'})

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
    setJourney(value); // true
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
  ];

  return (
    <div className={container}>
      <Router> 
        {!journey ? (
          <StartingPage handleChoose={handleJourneyChoose} />
        ) : (
          <FontContext.Provider value={{ font: font, setFont: dispatch }}>
            <div className={switchContainer}>
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
                <button
                  className={`${commonBtnStyle} ${btnLeftStyle}`}
                  onClick={() => { dispatch( ActionType.ANIRON ) }}
                >
                  Hobbiton
                </button>
                <button
                  className={`${commonBtnStyle} ${btnMidStyle}`}
                  onClick={() => { dispatch( ActionType.PATRICK ) }}
                >
                  Normal
                </button>
                <button
                  className={`${commonBtnStyle} ${btnRightStyle}`}
                  onClick={() => { dispatch(ActionType.KHUZDUL ) }}
                >
                  Khuzdul
                </button>
              </div>
            </div>
          </FontContext.Provider>
        )}
      </Router>
    </div>
  );
};

export default App;
