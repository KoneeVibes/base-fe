import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './page/authentication';
import { Dashboard } from './page/dashboard';
import { Settings } from './page/settings';
import { MakePost } from './page/post/create';
import { RouteProtector } from './config/routeProtector';
import { EditPost } from './page/post/edit';
import { PostHistory } from './page/post/history';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route element={<RouteProtector />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/makepost" element={<MakePost />} />
          <Route path="/editpost" element={<EditPost />} />
          <Route path="/posthistory" element={<PostHistory />} />

          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
