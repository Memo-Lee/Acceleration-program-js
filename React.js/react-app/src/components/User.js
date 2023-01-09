import PropTypes from "prop-types"; 
function User({name,surname,age,isLoggedIn,friends,address}) {
    if (!isLoggedIn) {
        return <div>Giriş Yapmadınız...</div>
    }
    return (
        <>
            <h1> 
                {`${name} ${surname} (${age})`}
            </h1>

            {address.title} {address.zip}
            <br/>
            <br/>
            {friends && friends.map((friends) => (
                    <div key={friends.id}>{friends.name}</div>
                ))
            }
        </>
        ); 
    }
User.propTypes = {
    name : PropTypes.string.isRequired,
    surname : PropTypes.string.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    age : PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
    friends : PropTypes.array.isRequired,
    address : PropTypes.shape({
        title: PropTypes.string,
        zip : PropTypes.number
    }),
};
User.defaultProps = {
    // app.js'den bir değer gönderilirse default alınmıyor.
    name : 'İsimsiz',
    isLoggedIn: false,
};
export default User;