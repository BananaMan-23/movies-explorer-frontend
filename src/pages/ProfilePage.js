import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';

const ProfilePage = ({
    isLoggedIn,
    handleSignOut,
    status,
    setStatus,
    isLoading,
    handleUpdateUser,
    isEdit,
    setIsEdit,
}) => {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <Profile
                handleSignOut={handleSignOut}
                status={status}
                setStatus={setStatus}
                isLoading={isLoading}
                handleUpdateUser={handleUpdateUser}
                isEdit={isEdit}
                setIsEdit={setIsEdit} />
        </>
    );
};

export default ProfilePage;