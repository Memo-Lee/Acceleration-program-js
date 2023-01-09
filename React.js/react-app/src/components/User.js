// props
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
export default User;