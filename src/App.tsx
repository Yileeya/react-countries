import {Routes, Route} from 'react-router-dom';

import HomePage from '@pages/HomePage';
import DetailPage from '@pages/DetailPage';
import Header from '@components/Header';

function App() {
    return (
        <div className="min-h-screen">
            <Header/>

            <main className="container mx-auto px-4 py-8">
                <Routes>

                    <Route path="/" element={<HomePage/>}/>

                    <Route path="/country/:countryName" element={<DetailPage/>}/>

                    <Route path="*"
                           element={<p className="text-xl text-center font-semibold mt-10">404 - 頁面不存在</p>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
