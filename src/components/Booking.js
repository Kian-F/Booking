import "date-fns";
import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import DatePicker from "./DatePicker";
import TimePickers from "./TimePickers";
import NumberOfParty from "./NumberOfParty";
import {makeStyles} from '@material-ui/core/styles'
import Button from "@material-ui/core/Button";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  TimePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((them)=>({
  root:{
    flexGrow:1,
  }
}))

class Booking extends Component {
  constructor() {
    super();

  }
 // const classes = useStyles();


  render() {
    return (
    

      <form>
        <React.Fragment>
          <CssBaseline />
          <Container>
            <Typography
              component="div"
              style={{ backgroundColor: "#cfe8fc", height: "50vh" }}
            ><div className='grid'>
              <Grid container spacing={12}>
                <Grid item xs={3}>
                  <DatePicker />
                  </Grid>
                  <Grid item xs={3}>
                  <TimePickers />
                  </Grid>
                  <Grid item xs={3}>
                  <NumberOfParty />
                  </Grid>
                  <Grid item xs={3}>
                  <Button variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
              </div>
            </Typography>
          </Container>
        </React.Fragment>
      </form>
    );
  }
}

export default Booking;
