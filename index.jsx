// This is a simple example Widget to get you started with Übersicht.
// For the full documentation please visit:
// https://github.com/felixhageloh/uebersicht

import { run } from 'uebersicht';

// You can modify this widget as you see fit, or simply delete this file to
// remove it.

// this is the shell command that gets executed every time this widget refreshes
export const command = "date +\"%d %b %Y\"";

// the refresh frequency in milliseconds
export const refreshFrequency = 10000000; // about 3h

// the CSS style for this widget, written using Emotion
// https://emotion.sh/
export const className = `
  top: 9%;
  right: 0;
  left: 0;
  width: 500px;
  margin: auto;
  color: #fff;
  font-family: Helvetica Neue;
  font-weight: 200;
  text-align: center;
  line-height: 1.5;

  opacity: 0.7;

  .no-select::selection, .no-select *::selection {
    background-color: Transparent;
  }
  .no-select {
    cursor: default;
    pointer-events: none;
  }
  .select {
    pointer-events: auto;
  }

  h1 {
    font-size: 40px;
    margin: 0px 0px -5px 0px;
  }

  img {
    filter: grayscale(100%);
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .line {
    border-top: 1px solid #ffffffbb;
    margin-left: 70px;
    margin-right: 70px;
  }

  .verse {
      display: block;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      b {
          font-size: 22px;
          font-weight: 500;
      }
  }

  .phrase {
      font-size: 14px;
      font-style: bold;
      color: #eee;
  }
`

const morningRoutineAction = () => {
    run('open -u https://gmail.com https://edisciplinas.usp.br/calendar/view.php?view=month https://calendar.google.com');
    run('open -a Telegram');
    run('open -a Todoist');
};
const legumoDartAction = () => {
    run("open /Users/lucadillenburg/Documents/Legumo/front -a 'Visual Studio Code'");
};
const legumoTypescriptAction = () => {
    run("open /Users/lucadillenburg/Documents/Legumo/server -a 'Visual Studio Code'");
};
const uspAction = () => {
    try {
        run('open notion://www.notion.so/dillenburg/University-eef5a8de19cb4bd0ab40e674fcefd339 -a Notion');
    } catch (e) {
        console.log(e);
    }
};

// render gets called after the shell command has executed. The command's output
// is passed in as a string.
export const render = ({ output }) => {
    console.log('render');
    return (
        <div className="no-select">
            {/* <h1 className="no-select">{output}</h1> */}
            <h1 className="no-select">Seek Discomfort</h1>
            <div className="line" />
            <div style={{ height: '5px' }} />
            <span className="no-select verse">
                "Antes, o seu prazer está na lei do Senhor, e na sua lei, medita de dia e de noite." - <b>Salmos 1:2</b>
            </span>
            <div style={{ height: '20px' }} />
            <div className="no-select">
                <img src="images/education.svg" className="select" onClick={uspAction}></img>
                <img src="images/server.svg" className="select" onClick={legumoDartAction}></img>
                <img src="images/app.svg" className="select" onClick={legumoTypescriptAction} ></img>
            </div>
            {/* <span className="no-select phrase"><b>Lembrete:</b> 1% no dia, 37 vezes no ano</span> */}
        </div >
    );
}
