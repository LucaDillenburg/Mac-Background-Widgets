// This is a simple example Widget to get you started with Übersicht.
// For the full documentation please visit:
// https://github.com/felixhageloh/uebersicht

// const { exec } = require('child_process');
import { exec } from 'child_process'

// You can modify this widget as you see fit, or simply delete this file to
// remove it.

// this is the shell command that gets executed every time this widget refreshes
export const command = "date +\"%d %b %Y\"";

// the refresh frequency in milliseconds
export const refreshFrequency = 10000000; // about 3h

// the CSS style for this widget, written using Emotion
// https://emotion.sh/
export const className = `
  top: 7%;
  right: 0;
  left: 0;
  width: 530px;
  margin: auto;
  color: #fff;
  font-family: Helvetica Neue;
  font-weight: 200;
  text-align: center;
  line-height: 1.5;

  .no-select::selection, .no-select *::selection {
    background-color: Transparent;
  }
  .no-select { /* Sometimes I add this too. */
    cursor: default;
  }

  h1 {
    font-size: 50px;
    margin: 16px 0 0px 0px;
  }

  span {
    font-size: 20px;
    font-style: normal;
  }

  img {
    filter: grayscale(100%);
    // width: 37px;
    height: 37px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .line {
    border-top: 1px solid #ffffffbb;
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 15px;
  }

  .verse {
      margin-top: 10px;
  }
`

const morningRoutineAction = () => {
    //     exec('open -u https://google.com');
    console.log(`morningRoutineAction: ${exec}`);
};
const legumoDartAction = () => {
    //     exec('open /Users/lucadillenburg/Documents/.legumo.code-workspace');
};
const legumoTypescriptAction = () => {
    //     exec('legumo; code server');
};
const uspAction = () => {
    //     exec('legumo; code server');
};

// render gets called after the shell command has executed. The command's output
// is passed in as a string.
export const render = ({ output }) => {
    return (
        <div className="no-select">
            <h1 className="no-select">{output}</h1>
            <div className="line" />
            <div className="no-select">
                <img src="sun.png" className="no-select" onClick={morningRoutineAction}></img> {/* Morning Routine: Safari */}
                <img src="dart.png" className="no-select"></img> {/* Legumo (dart): Code */}
                <img src="typescript.png" className="no-select"></img> {/* Legumo (server): Code */}
                <img src="usp.png" className="no-select" style={{ height: 27, paddingBottom: 5 }}></img> {/* USP: Code + Notion */}
            </div>
            <div className="verse">
                <span className="no-select">
                    "Antes, o seu prazer está na lei do Senhor, e na sua lei, medita de dia e de noite." Salmos 1:2
                </span>
            </div>
        </div>
    );
}

