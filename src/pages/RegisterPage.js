import Register from '../components/Register/Register';

const RegisterPage = ({ handleRegister, status, setStatus, isLoading }) => {
    return (
        <Register handleRegister={handleRegister} status={status} setStatus={setStatus} isLoading={isLoading} />
    );
};

export default RegisterPage;