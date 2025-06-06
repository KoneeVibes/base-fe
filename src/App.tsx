import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './page/authentication';
import { Dashboard } from './page/dashboard';
import { Settings } from './page/settings';
import { MakeBlogPost } from './page/post/blog/create';
import { RouteProtector } from './config/routeProtector';
import { EditBlogPost } from './page/post/blog/edit';
import { BlogPostHistory } from './page/post/blog/history';
import { GalleryPostHistory } from './page/post/gallery/history';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route element={<RouteProtector />}>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* blog routes */}
          <Route path="/post/blog" element={<MakeBlogPost />} />
          <Route path="/post/blog/:id" element={<EditBlogPost />} />
          <Route path="/history/blog" element={<BlogPostHistory />} />

          {/* gallery routes */}
          <Route path="/history/gallery" element={<GalleryPostHistory />} />

          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
