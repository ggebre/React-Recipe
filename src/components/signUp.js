import React, {useState} from 'react' 

function SignUp() {
    const [name, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>                
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <p><a href="www.google.com">Sign Up</a></p>
            </form>
        </div>
    )
}

export default SignUp