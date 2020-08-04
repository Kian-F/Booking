
import 'date-fns';
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import DatePicker from './DatePicker'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
}  from '@material-ui/pickers';


class Booking extends Component {
    constructor(){
        super();
    }
    render(){
        return(
        <React.Fragment>
            <CssBaseline/>
            <Container>
            <DatePicker/>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} />
            </Container>
        </React.Fragment>
        )

        
    }
}

export default Booking