import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";



const TimePickers = () => {

    const date = new Date()
    
    const [selectedDate, setSelectDate] = useState(new Date(date.getTime()));

    const handleDateChange = (date) =>{
        setSelectDate(date)
    }



    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
            <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
      </Grid>
    </MuiPickersUtilsProvider >
        )
        }
export default TimePickers