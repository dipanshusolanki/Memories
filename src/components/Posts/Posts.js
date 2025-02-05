import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  // console.log(posts);

  if (!posts.length && !isLoading) {
    return "No Posts";
  }

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.container}
          alignItems="stretch"
          container
          spacing={3}
        >
          {posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
