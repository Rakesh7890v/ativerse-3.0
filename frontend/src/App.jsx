import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomeSkeleton from "./skeletons/HomeSkeleton";
import ParticipantsSkeleton from "./skeletons/ParticipantsSkelton";

const HomePage = lazy(() => import("./HomePage"));
const Participants = lazy(() => import("./components/Participants"));

function App() {
  return (
    <Routes>
      <Route path="/"element={
        <Suspense fallback={<HomeSkeleton />}>
          <HomePage />
        </Suspense>
        }/>

      <Route path="/admin_rakesh" element={
        <Suspense fallback={<ParticipantsSkeleton />}>
          <Participants />
        </Suspense>
      }/>

    </Routes>
  );
}

export default App;
