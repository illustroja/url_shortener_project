import React from 'react';
import { useEffect, useState } from "react";
import "./index.css"
import "./output.css"
import {TextField, Button,Typography, createTheme, ThemeProvider}from '@mui/material';
import LinksTableComponent from './components/LinksTableComponent';
import axios from 'axios';

const darkTheme = createTheme({
  palette:{
    mode: "dark",
  },
})
function App() {
  useEffect(() => {
    axios.get('http://localhost:3001/urls').then((res)=>{
      console.log("RESULTS ARE IN: ", res)
      setLinks(res.data)
    })
  }, []);
  function refresh(){
    axios.get('http://localhost:3001/urls').then((res)=>{
      console.log("RESULTS ARE IN: ", res)
      setLinks(res.data)
    })
  }

  const [links, setLinks] = useState([{id:"0000", original_url: "www.google.com", shortened_url: "goocom"}])
  const [url, setUrl] = useState("");

  function handleChange(value: string) {
    setUrl(value)
    console.log("url: ",url)

  }
  function deleteUrl(link: string){
    const url = 'http://localhost:3001/urls/'+link
    axios.delete(url,
    { data:{"original_url": link}}
    ).then((res)=>{
      console.log("Deleting: ", res)
      refresh()
    })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    console.log("url: ",url)
    axios.post('http://localhost:3001/urls/newUrl',{
      original_url:url,

    }).then((res)=>{
      console.log(res)
      refresh()
    }).catch((err)=>{
      console.log(err)
      alert("Duplicate URL Found!")
    })
  }
  return (
    <ThemeProvider theme={darkTheme}>
 <div className="flex justify-center items-center flex-col h-screen gap-8">
        <p>
          <Typography variant="h1" className="text-6xl" component="h2">URL Shortener
          </Typography>
        </p>
        <div className="flex flex-col gap-2">
          <TextField id="outlined-basic" label="Shorten this URL" variant="outlined" onChange={(e) => handleChange(e.target.value)}/> 
          <Button onClick={handleSubmit} variant="contained">Shorten!</Button>
          <LinksTableComponent Links={links} handleDelete={deleteUrl}/>
        </div>
    </div>
    </ThemeProvider>
   
  );
}

export default App;
