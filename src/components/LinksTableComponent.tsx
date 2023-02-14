import React, { useState } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';
import axios from 'axios';

interface Link {
  _id?: string | any;
  original_url: string;
  shortened_url: string;

}

interface Props {
  Links: Link[];
  handleDelete: Function;
}


/**
 * This is the LinksTableComponent template component!
 * @param {Props} props for React Functional Component
 * @return {React.FC}: The JSX Code for BasicInfo profile  template component.
 */
export default function LinksTableComponent(props:Props) {

  function open(link: string){
    console.log('LINK: ', link)
    window.open("https://"+link, '_blank');
  }

  // const [links, setLinks] = useState([{original_url: "www.google.com", shortened_url: "goocom"}])

return (
    <>    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row"><b>URL</b></TableCell>
            <TableCell align="right"><b>Remove Link</b></TableCell>
            <TableCell align="right"><b>Shortened Link</b></TableCell>
             
          </TableRow>
        </TableHead>
        <TableBody>
          {props.Links.map((link: Link) => (
            <TableRow
              key={link.original_url}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="link" >
                <a href={"https://"+link.original_url}>{link.original_url}</a>
              </TableCell>
              <TableCell align="right">
                <Button onClick={() => props.handleDelete(link._id)} size="small" color="error" variant="contained">DELETE</Button>
              </TableCell>
              <TableCell align="right">
                <Button  onClick={() => open(link.original_url)} size="small" variant="contained">{link.shortened_url}</Button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
