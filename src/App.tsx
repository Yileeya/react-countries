import { Routes, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import DetailPage from '@pages/DetailPage';
import Header from '@components/layout/Header';
import NoDataMessage from '@components/ui/NoDataMessage';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-blue-950">
      <Header />

      <main className="container mx-auto mt-[80px] flex-1 px-4 pb-8">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/country/:cca3Code" element={<DetailPage />} />

          <Route
            path="*"
            element={
              <NoDataMessage
                title="Oops! Page not found"
                description="We can’t seem to find the page you’re looking for."
                className="mx-auto my-20 md:max-w-[688px] xl:max-w-[1272px]"
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
