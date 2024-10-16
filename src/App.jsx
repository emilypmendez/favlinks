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
      <div className="card">
        <Form onNewSubmission={handleNewSubmission} />
        <br />
        
        <p className="read-the-docs">
          <Table links={favLinks}/>
        </p>
      </div>
    </>
  )
}

export default App
