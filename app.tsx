import * as React from 'react';
import UserPage from './src/components/UserPage';
import { Route, Routes } from 'react-router';
import AddUserForm from './src/components/AddUserForm';
function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<UserPage/>}/>
                <Route path='/add' element={<AddUserForm/>}/>

            </Routes>
        </div>
    );
}
export default App;