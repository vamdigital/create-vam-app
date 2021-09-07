import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PostData = {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface PostState {
	data : PostData[];
	status: "idle" | "loading" | "error";
	error: string;
	postCount: number;
};

const initialState: PostState = {
  data: [],
  status: "idle",
  error: "",
  postCount: 0
};

export const fetchPosts = createAsyncThunk("fetch/posts", async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Error fetching the data");
  return response.json();
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getposts: (state, action: PayloadAction<PostData[]>) => {
      state.status = "idle";
      state.data = action.payload;
    },
    getPostCount: (state) => {
      state.postCount = state.data?.length > 0 ? state.data?.length : 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostData[]>) => {
      state.status = "idle";
      state.data = action.payload;
      state.postCount = state.data.length;
    });
  }

});

export const { getposts, getPostCount } = postSlice.actions;
export default postSlice.reducer;
