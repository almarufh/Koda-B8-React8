import React from 'react';
import { useNavigate } from 'react-router'; 
import AuthContext from '../context/AuthContext';

function Dashboard() {
    const { auth, setAuth } = React.useContext(AuthContext);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!auth?.statusActived) {
            navigate('/'); 
        }
    }, [auth, navigate]);

    function handleLogout() {
        setAuth({
            statusActived: false, 
            user: null 
        });
        navigate('/'); 
    }

    return (
        <div className="flex flex-col gap-4 items-center justify-center w-full h-screen">
            <span className="">Selamat Datang {auth?.user?.email}</span>
            <button 
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-md"
            >
                Logout
            </button>
        </div>
    );
}

export default Dashboard;