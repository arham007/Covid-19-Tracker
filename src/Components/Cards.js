import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import CountUp from 'react-countup';
import Spinner from '../Spinner'


const Cards = ({data:{confirmed , recovered , lastUpdate , deaths}}) => {
 
   if (!confirmed){
       return <div style={{marginTop:"20px"}}> <Spinner  value="PropTypes.number.isRequired" /></div>
   }
    return (
        <>
    

            <Grid container  justify="space-around">
                <Grid item xs={12} style={{borderBottom:"10px solid rgba(0, 0, 255, 0.5)",marginTop:"30px"}} sm={3} component={Card} elevation={5}>
                    <CardContent  >
                        <Typography color="textSecondary" variant="h6" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                           <CountUp
                           start={0}
                           end={confirmed.value}
                           duration={5}
                           separator=","
                           />
                        </Typography>
                        <Typography color="textSecondary" variant="h6" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography color="textSecondary" variant="body2" >
                            Number of active cases of covid-19
                        </Typography>
                    </CardContent>

                </Grid>

                <Grid item xs={12} style={{borderBottom:"10px solid rgba(0, 255, 0, 0.5)",marginTop:"30px"}} sm={3} component={Card} elevation={5}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h6" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                          <CountUp
                           start={0}
                           end={recovered.value}
                           duration={5}
                           separator=","
                           />
                        </Typography>
                        <Typography color="textSecondary" variant="h6" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography color="textSecondary" variant="body2" >
                            Number of active cases of covid-19
                        </Typography>
                    </CardContent>

                </Grid>


                <Grid item xs={12} style={{borderBottom:"10px solid rgba(255, 0, 0, 0.5)",marginTop:"30px"}} sm={3} component={Card} elevation={5}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h6" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            <CountUp
                           start={0}
                           end={deaths.value}
                           duration={5}
                           separator=","
                           />
                        </Typography>
                        <Typography color="textSecondary" variant="h6" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography color="textSecondary" variant="body2" >
                            Number of active cases of covid-19
                        </Typography>
                    </CardContent>

                </Grid>

            </Grid>



        </>
    )
}

export default Cards;
