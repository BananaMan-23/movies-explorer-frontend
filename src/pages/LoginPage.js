import Login from '../components/Login/Login';

const LoginPage = ({ handleLogin, status, setStatus, isLoading }) => {
    return (
        <Login handleLogin={handleLogin} status={status} setStatus={setStatus} isLoading={isLoading} />
    );
};

export default LoginPage;