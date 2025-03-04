import React, {Component} from "react";
import Radium from "radium";
import {Bling as Gpt} from "react-gpt"; // eslint-disable-line import/no-unresolved
import "../log";
import styles from "./styles";

@Radium
class App extends Component {
    state = {
        color: "000000"
    };

    onClick = () => {
        this.setState({
            color: this.state.color === "000000" ? "ff0000" : "000000"
        });
    };

    render() {
        const {color} = this.state;
        return (
            <div>
                <button style={styles.button} onClick={this.onClick}>
                    Change content
                </button>
                <div style={styles.lb}>
                    <Gpt
                        adUnitPath="/4595/nfl.test.open"
                        content={`<a href="http://www.google.com" target="_blank"><img src="https://via.placeholder.com/728x90/${color}/FFFFFF?Text=Static Ad"></img></a>`}
                        slotSize={[728, 90]}
                        style={styles.adBorder}
                    />
                </div>
            </div>
        );
    }
}

export default App;
