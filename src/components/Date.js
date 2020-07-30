import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const date = () =>{
    const today = new Date();
    today.getDay();
    const [selectDate, setSelectedDate] = React.useState(new Date(today));

    const handleDateChange = (date)=>{
        setSelectedDate(date)
    }
}

export default date;