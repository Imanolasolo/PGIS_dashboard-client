import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id : 1,
      Reclamante: "IPS EXAPMLE 1",
      Dirección: " Calle XX #XX-XX",
      Estado: "Activo",
    },
    {
      id : 2,
      Reclamante: "IPS EXAPMLE 2",
      Dirección: " Calle XX #XX-XX",
      Estado: "Inactivo",
    },
    {
      id : 3,
      Reclamante: "IPS EXAPMLE 3",
      Dirección: " Calle XX #XX-XX",
      Estado: "Activo",
    },
    {
      id : 4,
      Reclamante: "IPS EXAPMLE 4",
      Dirección: " Calle XX #XX-XX",
      Estado: "Activo",
    },
  ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">PSS ID</TableCell>
            <TableCell className="tableCell">Reclamante</TableCell>
            <TableCell className="tableCell">Dirección</TableCell>
            <TableCell className="tableCell">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.Reclamante}</TableCell>
              <TableCell className="tableCell">{row.Dirección}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.Estado}`}>{row.Estado}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default List
