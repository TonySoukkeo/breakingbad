import React from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

// Components
import Header from "../component/header/header.component";
import { default as CharacterShowcase } from "../pages/characters-showcase/characters-showcase.container";
import { default as Character } from "../pages/character/character.container";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterShowcase} />

        <Route path="/character/:id" component={Character} />
      </Switch>
    </>
  );
}

export default App;
