import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthLayout from "./layout/AuthLayoute";
import AppLayoute from "./layout/AppLayoute";
import { AllUsers, CreatePost, Explore, Home, Saved } from "./components";
import {
  EditPost,
  PostDetails,
  Profile,
  ProtectedRoute,
  UpdateProfile,
} from "./pages";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });
  return (
    <div className="flex h-screen">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>

            {/* Protected route */}
            <Route
              element={
                <ProtectedRoute>
                  <AppLayoute />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/all-users" element={<AllUsers />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/update-post/:id" element={<EditPost />} />
              <Route path="/posts/:id" element={<PostDetails />} />
              <Route path="/profile/:id/*" element={<Profile />} />
              <Route path="/update-profile/:id" element={<UpdateProfile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
