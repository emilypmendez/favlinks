// FORM COMPONENT

import { useState } from 'react'

function Form(props) {

    const [linkName, setLinkName] = useState(''); // This is a placeholder for now
    const [linkURL, setLinkURL] = useState(''); // This is a placeholder for now

    let handleSubmit = (event) => {
        event.preventDefault()
        
        if (linkName.length === 0 || linkURL.length === 0) {
            alert('Please enter a link name and URL')
            return
        } else {
            console.log(linkName, linkURL)
            // Alert the user of the link name and URL
            alert('Link name: ' + linkName + ' Link URL: ' + linkURL)
            // Add the link to the table
            props.onNewSubmission({linkName: linkName, linkURL: linkURL})
            // Clear the form
            setLinkName('')
            setLinkURL('')
        }
    }

    let handleNameChange = (event) => {
        console.log(event.target.value)
        setLinkName(event.target.value)
    }

    let handleURLChange = (event) => {
        console.log(event.target.value)
        setLinkURL(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="link">Link Name</label>
            <input type="text" className="link-name" name="link" onChange={handleNameChange} value={linkName} />
            <br></br><br/>
            <label htmlFor="link">Link URL</label>
            <input type="text" className="link-name" name="link" onChange={handleURLChange} value={linkURL} />
            <br/>
            <br/>
            <br/>
            <button type="submit" className="submit-button" disabled={linkName === '' || linkURL === ''}>
                Submit
            </button>
        </form>
    )
}

export default Form