const TableRow = ({ feature, link, note }) => {

  return (
    <tr>
      <td>{feature}</td>
      <td><a href={link} target="_blank">link</a></td>
      <td>{note}</td>
    </tr>
  )
}

export default TableRow;
