import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  <div>
  <button onClick = {props.onClick}/>
  </div>
}
  
const Statistic = (props) => {
  return(
    <tr>
    <td> {props.text} </td>
    <td> {props.value} </td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
 
  const Total = good+neutral+bad
  const Avg = (good*1-bad*1)/Total
  const PercentPositive = good*100/Total
    
  if(Total == 0){
    return(
        <div>No feedback given</div>
      )
  }
  else {
    return(
      <table>
        <tbody>
    <Statistic text="good" value={good}/>
    <Statistic text="neutral" value={neutral}/>
    <Statistic text="bad" value={bad}/>
    <Statistic text="all" value={Total}/>
    <Statistic text="avg" value={Avg}/>
    <Statistic text="positive" value={PercentPositive}/>
      </tbody>
      </table>
  )
    }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
        <button onClick = {() => setGood(good+1)}>good</button>
        <button onClick = {() => setNeutral(neutral+1)}>neutral</button>
        <button onClick = {() => setBad(bad +1)}>bad</button>
          <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
  </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)