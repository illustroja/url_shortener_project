import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

/**
 * This is the LinksTableComponent template component!
 * @param {any} props for React Functional Component
 * @return {React.FC}: The JSX Code for BasicInfo profile  template component.
 */
export default function LinksTableComponent(props: any) {
const link_objs = [
  {url: "www.google.com", shortened: "goocom"}, 
  {url: "www.youtube.com", shortened: "youcom"}
];
return (
    <>    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row"><b>URL</b></TableCell>
            <TableCell align="right"><b>Shortened Link</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {link_objs.map((row) => (
            <TableRow
              key={row.url}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                <a href={"https://"+row.url}>{row.url}</a>
              </TableCell>
              <TableCell align="right"><a href={row.shortened}>{row.shortened}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
