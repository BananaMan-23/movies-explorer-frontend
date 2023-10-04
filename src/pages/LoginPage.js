import Login from '../components/Login/Login';

function LoginPage({ setIsLoggedIn }) {
    return (
        <main>
            <Login setIsLoggedIn={setIsLoggedIn} />
        </main>
    );
}

export default LoginPage;