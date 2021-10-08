import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";



const styles = {
  paperContainer: {
    zIndex: -1,
    height: "100vh",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)",
  },
};

export const LandingPage = (props) => {

  return (
    <>
      <Paper style={styles.paperContainer}>
        <Typography
          variant="h4"
          component="h4"
          style={{
            color: "inherit",
            margin: "50px 100px 100px 900px",
            fontFamily: "fantasy",
          }}
        >
          {/* trello */}
        </Typography>
      </Paper>
    </>
  );
};
