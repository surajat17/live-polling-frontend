import { Button, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setStudent, setTeacher } from "../reducers/role";

const Selection = () => {
  const dispatch = useDispatch();
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh" }}
    >
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => dispatch(setStudent())}
        >
          Student
        </Button>
        <Typography variant="subtitle2" align="center" color="textSecondary">
          Click here if you're a student
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => dispatch(setTeacher())}
        >
          Teacher
        </Button>
        <Typography variant="subtitle2" align="center" color="textSecondary">
          Click here if you're a teacher
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Selection;
