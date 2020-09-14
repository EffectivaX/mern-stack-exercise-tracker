import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercises from "./components/create-exercises.component";
import CreateUser from "./components/create-user.component";
import Footer from './components/footer.component';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPenSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faPenSquare, faTrashAlt)

function App() {
  return (
    <Router>
        <div className="container">
            <Navbar />
            <br />
            <Route path="/" exact component={ExerciseList} />
            <Route path="/edit/:id" exact component={EditExercise} />
            <Route path="/create" exact component={CreateExercises} />
            <Route path="/user" exact component={CreateUser} />
            <br />
            <Footer />
        </div>
    </Router>
  );
}

export default App;
