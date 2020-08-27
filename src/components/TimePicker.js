import "date-fns";
import React,{useState} from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";


const TimePicker =()=>{

    const date = new Date()
    console.log(date.getTime)
const[time, setTime] = useState(date.getTime);


    render(){ 
        return(
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
             <Grid container justify="space-around"></Grid>
        )

    }
}
export default TimePicker