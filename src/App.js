import logo from './images/logo.svg';
import './App.css';
import data from './data.json';
import {useState} from "react";
function App() {

    const DayOfTheWeek = ({day,amount}) => {
        const isToday = new Date().toLocaleString("en-US", { "weekday": "short" }).toLowerCase() === day;
        const barColor = isToday ? 'spendingBarToday': 'spendingBar';
        const amountHeight = Math.round(amount);
        const [display,setDisplay] = useState(false);


        return <div className="day">
            <div className="amount" style={{visibility:display ? 'visible':'hidden'}}>${amount}</div>
            <div
                className={barColor}
                onMouseOver={() => setDisplay(true)}
                onMouseLeave={() => setDisplay(false)}
                style={{height: `${amountHeight*2}px`}}>
            </div>
            <p>{day}</p>
        </div>
    }

  return (
    <div className="App">
        <div className="balance">
            <div className="balanceTotal">
                <p>My balance</p>
                <h2>$921.48</h2>
            </div>
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="spending">
            <div className="spendingTitle">
                <h1>Spending - Last 7 days</h1>
            </div>
            <div className="weeklyChart">
                { data.map(d => <DayOfTheWeek  key={d.day} day={d.day} amount={d.amount}/>) }
            </div>

            <div className="monthlyTotal">
                <div className="thisMonth">
                    <p>Total this month</p>
                    <h1>$478.33</h1>
                </div>
                <div className="lastMonth">
                    <h4>+2.4%</h4>
                    <p>from last month</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
