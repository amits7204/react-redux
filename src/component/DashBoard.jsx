import React, { useState, useEffect } from "react";
import { getSearchResult } from "../redux/action-redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {
  Card,
  makeStyles,
  CardMedia,
  Box,
  Typography,
  Divider,
  Tabs,
  Tab,
  TextField,
  Button,
  ButtonGroup,
  Grid,
  Paper,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { grey, red } from "@material-ui/core/colors";
import { Grade } from "@material-ui/icons";
import PhoneIcon from "@material-ui/icons/Phone";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const useStyles = makeStyles({
  root: {
    width: 800,
    margin: "auto",
    marginTop: 10,
  },
  rootPaper: {
    flexGrow: 1,
  },
  media: {
    height: 120,
    width: 120,
    borderRadius: 6,
    textAlign: "left",
    margin: 10,
  },
  fontColor: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 16,
    margin: 0,
    textAlign: "left",
  },
  fontLocation: {
    color: "red",
    fontWeight: "bold",
    fontSize: 24,
    margin: 0,
    textOverflow: "ellipsis",
    textAlign: "left",
  },
  rate: {
    textAlign: "left",
    height: 20,
    width: 20,
    marginTop: 6,
  },
  rating: {
    margin: 0,
    marginTop: 6,
  },
  typoGraphy: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
  },
});
export default function DashBoard() {
  const classes = useStyles();
  const [item, setItems] = useState("");
  const [value, setValue] = React.useState(0);
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.app.items);
  const isAuth = useSelector((state) => state.app.isAuth);
  const isAuthLogin = useSelector((state) => state.auth.isAuth);
  const [active, setActive] = useState(1);
  const totalPages = Math.ceil(items.length / 5);
  const history = useHistory();
  let offSet = (active - 1) * 5;
  console.log("OFFSET: ", offSet);
  console.log("isAuth: ", isAuth);
  const handleOnChange = (e) => {
    setItems(e.target.value);
  };
  const handleOnClick = () => {
    dispatch(getSearchResult({ item, order, sort, offSet }));
  };
  // useEffect(() => {
  //   if (!isAuthLogin) {
  //     history.push("/");
  //   }
  // });

  if (isAuth) {
    console.log("ITEMS: ", items);
  }
  const handleChangePaper = (event, newValue) => {
    setValue(newValue);
  };
  const handleOrder = (value) => {
    console.log("ORDER: ", value);
    setOrder(value);
  };

  const handleSort = (value) => {
    setSort(value);
  };

  const handlePagination = (e, value) => {
    setActive(value);
  };

  return (
    <>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => handleOrder("asc")}>asc</Button>
        <Button onClick={() => handleOrder("desc")}>desc</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => handleSort("cost")}>cost</Button>
        <Button onClick={() => handleSort("rating")}>rating</Button>
      </ButtonGroup>
      <br />
      <br />
      <TextField
        type="text"
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={handleOnChange}
      />
      <br />
      <br />
      {/* <input type="text" placeholder="Search food" onChange={handleOnChange} /> */}
      {/* <button onClick={handleOnClick}>Search</button> */}
      <Button onClick={handleOnClick} variant="outlined" color="primary">
        Search
      </Button>
      {items &&
        items
          .filter((item, index) => index >= offSet && index < offSet + 5)
          .map((item) => {
            return (
              <>
                <Card
                  key={item.restaurant.id}
                  className={classes.root}
                  variant="outlined"
                >
                  <Box
                    key={item.restaurant.id}
                    display="flex"
                    alignContent="flex-start"
                    p={1}
                    m={1}
                    // bgcolor="background.paper"
                    // css={{ maxWidth: 300, height: 200 }}
                  >
                    <CardMedia
                      className={classes.media}
                      image={
                        item.restaurant.thumb === ""
                          ? `${process.env.PUBLIC_URL}/photo.png`
                          : item.restaurant.thumb
                      }
                      title="Contemplative Reptile"
                    />
                    <Box mt={1}>
                      <p className={classes.fontColor}>
                        {item.restaurant.establishment[0]}
                      </p>
                      <p className={classes.fontLocation}>
                        {item.restaurant.location.city}
                      </p>
                      <Box css={{ display: "flex" }}>
                        <Grade className={classes.rate} />
                        <p className={classes.rating}>
                          {item.restaurant.user_rating.aggregate_rating}
                        </p>
                      </Box>
                      <Typography variant="h5" className={classes.typoGraphy}>
                        {item.restaurant.location.locality}
                      </Typography>
                      <Typography variant="h5" className={classes.typoGraphy}>
                        {item.restaurant.location.address}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography variant="h5" className={classes.typoGraphy}>
                      CUISINES: {item.restaurant.cuisines}
                    </Typography>
                    <Typography variant="h5" className={classes.typoGraphy}>
                      COST FOR TWO: {item.restaurant.average_cost_for_two}
                    </Typography>
                    <Typography variant="h5" className={classes.typoGraphy}>
                      HOURS: {item.restaurant.timings}
                    </Typography>
                  </Box>
                  <Paper square className={classes.rootPaper}>
                    <Tabs
                      variant="fullWidth"
                      indicatorColor="secondary"
                      value={value}
                      onChange={handleChangePaper}
                      textColor="secondary"
                      aria-label="icon label tabs example"
                    >
                      <Tab icon={<PhoneIcon />} label="CALL" />
                      <Tab icon={<MenuBookIcon />} label="VIEW MENU" />
                      <Tab icon={<ShoppingCartIcon />} label="ORDER NOW" />
                    </Tabs>
                  </Paper>
                </Card>
              </>
            );
          })}
      <Grid className={classes.root}>
        <Pagination
          page={active}
          count={totalPages}
          onChange={handlePagination}
          color="secondary"
        />
      </Grid>
    </>
  );
}
