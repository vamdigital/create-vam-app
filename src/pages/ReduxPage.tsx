import { useAppDispatch, useAppSelector } from "app/hooks";
import { fetchPosts, PostData } from "features/postsSlice";
import { useCallback } from "react";
import { useQuery } from "react-query";

export const ReduxPage = () => {
  const dispatch = useAppDispatch();
  const {
    posts: { status, data, error, postCount }
  } = useAppSelector((state) => state);

  const getPosts = useCallback(() => {
    if (postCount === 0) {
      dispatch(fetchPosts());
    }
  }, [postCount, dispatch]);

  const getPostQuery = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  const {
    data: posts,
    isLoading: isQueryLoading,
    isError,
    refetch
  } = useQuery<PostData[], Error>("posts", getPostQuery, {
    refetchOnWindowFocus: false,
    enabled: false
  });

  const handleQueryClick = () => {
    refetch();
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Redux Page</h2>
      <h3>Posts - RTK - only 10 for display </h3>
      {status === "loading" && <div> Loading posts...</div>}
      {status === "error" && <div> {error} </div>}
      {data && (
        <ul>
          {data.slice(0, 10).map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
			<hr />
      <button onClick={getPosts}>Get Posts</button>
      <h3> Users - React Query way </h3>
			{isQueryLoading && <div> Query Loading....</div>}
			{isError && <div>Error fetching your query... </div>}
			{posts && (
				<ul>
					{posts.slice(11, 20).map((post) => (
						<li key={post.id + 1}>
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</li>
					))}
				</ul>
			)}

      <button onClick={handleQueryClick}>Get Users</button>
    </div>
  );
};
