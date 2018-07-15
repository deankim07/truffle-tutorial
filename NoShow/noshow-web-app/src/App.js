import React, { Component } from "react";
import "./App.css";

import { drizzleConnect } from "drizzle-react";
import { ContractData, ContractForm } from "drizzle-react-components";

class App extends Component {
    render() {
        const { drizzleStatus, accounts } = this.props;

        console.log(drizzleStatus);
        console.log(accounts);

        if (drizzleStatus.initialized) {
            return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">NoSow Practice</h1>
                    </header>
                    <div className="App-intro">
                        <ContractForm
                            contract="NoShow"
                            method="reservation"
                            labels={["To Address", "Amount to Send"]}
                        />
                    </div>
                    <div className="App-intro">
                        <ContractForm
                            contract="NoShow"
                            method="clientCome"
                            labels={["To Address", "Amount to Send"]}
                        />
                    </div>
                    <div className="App-intro">
                        <ContractForm
                            contract="NoShow"
                            method="withdraw"
                            labels={["To Address", "Amount to Send"]}
                        />
                    </div>
                </div>
            );
        }

        return <div>Loading dapp...</div>;
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        drizzleStatus: state.drizzleStatus,
        NoShow: state.contracts.NoShow
    };
};

const AppContainer = drizzleConnect(App, mapStateToProps);
export default AppContainer;