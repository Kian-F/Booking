import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DatePicker = () => {
  const today = new Date();
  //today.getDay();
  today.getDate()
  const [selectedDate, setSelectedDate] = React.useState(new Date(today));


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getDate = (date) =>{
    console.log(date)
   return  date
   
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={ e => {handleDateChange(e); getDate(e)}}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
