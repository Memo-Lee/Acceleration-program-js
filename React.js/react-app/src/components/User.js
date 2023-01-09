import PropTypes from "prop-types"; 
function User({name,surname,age,isLoggedIn,friends}) {
    return (
        <>
            <h1> 
                {isLoggedIn ? `${name} ${surname} (${age})`: "Giriş yapmadınız."}
            </h1>
            {
                friends.map((friends) => (
                    <div key={friends.id}>{friends.name}</div>
                ))
            }
        </>
        ); 
    }
User.propTypes = {
    name : PropTypes.string,
    surname : PropTypes.string,
    isLoggedIn : PropTypes.bool,
    age : PropTypes.number,
    friends : PropTypes.array
}
export default User;