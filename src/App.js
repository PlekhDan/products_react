import {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Data from './Data.json';
import './App.css';


class App extends Component{

    state = {
        data: Data
    }

    render() {
        const { data } = this.state;
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Main data={data} />
                </div>
            </BrowserRouter>

        );
    }


}

export default App;
