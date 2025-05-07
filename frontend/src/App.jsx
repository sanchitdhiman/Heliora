import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-blue-600 p-4">
                    <ul className="flex space-x-4 justify-center">
                        <li>
                            <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                        </li>
                        <li>
                            <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
                        </li>
                        <li>
                            <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="flex items-center justify-center h-screen">
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <h1 className="text-3xl font-bold text-blue-600">Welcome to Heliora</h1>
                                    <p className="mt-4 text-gray-600">Your Learning Management System</p>
                                </div>
                            </div>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;