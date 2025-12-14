import { Routes, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import DetailPage from '@pages/DetailPage';
import Header from '@components/Header';

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto mt-[80px] bg-white px-4 pb-8 dark:bg-blue-950">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/country/:countryName" element={<DetailPage />} />

          <Route
            path="*"
            element={
              <p className="mt-10 text-center text-xl font-semibold">
                404 - 頁面不存在
              </p>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
