import React from 'react';

import './App.css';
import Customers from './components/Customers';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import AuthContextProvider from './contexts/AuthContext';
import CustomerContextProvider from './contexts/CustomerContext';
import { MovieContextProvider } from './contexts/MovieContext';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';

export function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CustomerContextProvider>
          <MovieContextProvider>
            <ProgressContextProvider>
              <ThemeContextProvider>
                <Navbar />
                <Movies />
                <Customers />
                <ToggleThemeBtn />
              </ThemeContextProvider>
            </ProgressContextProvider>
          </MovieContextProvider>
        </CustomerContextProvider>
      </AuthContextProvider>
    </div>
  );
}
/*
Step 1: create a typescript project, in the root folder <ReactJs>
    >> npx create-react-app <name of project, Eg: reactTypescript> --template typescript
    >> cd reactTypescript/
    >> npm install @types/react
    and then, install 'material Ui': 
    >> npm install @material-ui/core
    and then, install uuid to random id for an object
    >> npm install uuid
    >> npm install @types/uuid --save-dev
    and then (option): Load font into html (code in public.index.html)
Step 2: create NavBar.tsx (code in components.NavBar),
    change css in App.css (Code in App.css)
Step 3: useContext, 
    useContext basic
        - create a ProgressContext and put it into Navbar 
            (code in contexts.ProgressContext to configure the day and status,
                    and components.Navbar to display the day and status,
                    and App.tsx to cover the day and status)
    useContext basic with useState by using the function to change the state
        - create a ThemeContext and put it into Navbar (primary data)
            (code in contexts.ThemeContext to configure theme
                    components.Navbar to display theme,
                    and components.ToggleThemeBtn to control theme
                    and App.tsx to cover theme)
        - create a MovieContext and put it into Movies (object and array data)
            (code in contexts.MovieContext to configure movie
                    components.Movies to display movie and control movie
                    and App.tsx to cover movie)
    useContext advance to connect with API and display API:
        - create a CustomerContext and put it into Customer (object and array data)
            (code in contexts.CustomerContext to configure customer
                    components.Customer to display movie and control customer
                    and App.tsx to cover movie)
Step 4: useReducer: this is a store to save data -> called reducer (similar redux)
    useReducer basic
        (code in reducer.AuthReducer to configure store
                contexts.AuthContext to get data from reducer and configure them
                components.Navbar and components.Login to display Login Button and authentication
                and App.tsx to cover authentication)
    useReducer and useContext advance to connect with API and display API:
        - create a CustomerContext and put it into Customer (object and array data)
            (code in contexts.CustomerContext to configure customer
                    reducer.CustomerReducer to configure store
                    components.Customer to display customer and control customer
                    and App.tsx to cover customer)
*/
