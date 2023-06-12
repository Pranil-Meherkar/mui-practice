import "../App.css";
import { Typography, Container, Paper, Box, Button } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@emotion/react";

function App() {
  //const theme = useTheme();
  return (
    <Container>
      <Paper
        width="30%"
        component={Box}
        p={2}
        my={3}
        elevation={5}
        //sx={{ backgroundColor: deepOrange[300] }}
      >
        <Typography variant="h1">hello</Typography>
        <Typography variant="subtitle1">
          hagah agsgajksa hasajvsja
        </Typography>
        <Button
          //color={theme.primary}
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
        >
          Read More
        </Button>
      </Paper>
    </Container>
  );
}

export default App;
