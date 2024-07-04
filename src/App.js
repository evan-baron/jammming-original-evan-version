import '../src/App.css';
import '../src/reset.css';
import Root from './components/root';
import HomePage from './pages/home/home';
import Profile from './pages/profile/profile';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <HomePage /> }/>
    <Route path="profile" element={ <Profile /> }/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
};

export default App;
