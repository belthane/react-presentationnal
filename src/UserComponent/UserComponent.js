import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const UserComponentContainer = ({ user }) => {
  const classes = useStyles();

  return user ? (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Id: {user.id}
        </Typography>
        <Typography variant="h5" component="h2">
          {user.first_name} {user.last_name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {user.email}
        </Typography>
        <img alt="avatar" src={user.avatar} />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ) : (
    <p>Loading</p>
  );
};
export default UserComponentContainer;
