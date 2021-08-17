import {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import PageHeader from "./components/header/PageHeader";
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
                    <PageHeader/>
                    <Main data={data} />
                </div>
            </BrowserRouter>

        );
    }


}

export default App;
