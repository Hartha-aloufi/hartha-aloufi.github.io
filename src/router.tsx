import { createBrowserRouter } from 'react-router-dom';
import { Tafsir } from './pages/Tafsir/Tafsir';
import { Layout } from './components/Layout/Layout';
import { Video } from './pages/Video/Video';
import { Home } from './pages/Home/Home';

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/tafsir/:verseNumber/:book',
          element: <Tafsir />,
        },
        {
          path: '/shar7/:shar7Id/:verseNumber',
          element: <Video />,
        },
        { path: '*', element: <div>Not Foundddd</div> },
      ],
    },
  ],
  // { basename: '/Hujurat' },
);
