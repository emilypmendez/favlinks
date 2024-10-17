import { useState } from 'react'
import './App.css'
import Form from './components/Form.jsx'
import Table from './components/Table.jsx'

function App() {

  const [favLinks, setFavLinks] = useState([])

  let handleNewSubmission = (data) => {
    let newFavLinks = [...favLinks]
    setFavLinks([newFavLinks, data])
  }

  return (
    <>
      <h1>Submit your fav links!</h1>
      <p className="read-the-docs">
          Type in the name of the link and the URL of the link you want to add to the table. 
      </p>
      <div className="card">
        <Form onNewSubmission={handleNewSubmission} />
        <br />
        <Table links={favLinks}/>
      </div>
    </>
  )
}

export default App
