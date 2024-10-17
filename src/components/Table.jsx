// TABLE COMPONENT

import PropTypes from 'prop-types'

function Table(props) {

    Table.propTypes = {
        links: PropTypes.array.isRequired,
    }

    const rows = props.links.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.linkName}</td>
                <td>{row.linkURL}</td>
            </tr>
        )
    })

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Link Name</th>
                    <th>Link URL</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        </>
    )
}

export default Table