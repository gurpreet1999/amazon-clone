import React from 'react'
import MetaData from '../Layout/MetaData'

const ResetPassword = () => {



    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  

const resetPasswordSubmit=(e)=>{
e.preventDefault()
const myForm=new FormData()
myForm.set("password",password)
myForm.set("confirmPassword",confirmPassword)

}


  return (
   <>
     <MetaData title="Change Password" />
          <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
              <h2 className="resetPasswordHeading">Update Profile</h2>

              <form
                className="resetPasswordForm"
                onSubmit={resetPasswordSubmit}
              >
                <div>
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="resetPasswordBtn"
                />
              </form>
            </div>
          </div>
   
   
   </>
  )
}

export default ResetPassword