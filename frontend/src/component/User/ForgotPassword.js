import React from 'react'
import MetaData from '../Layout/MetaData'

const ForgotPassword = () => {

    const [email, setEmail] = useState("");

const forgotPasswordSubmit=(e)=>{
    e.preventDefault();
    const myForm=new FormData()
    myForm.set("email",email)

}


  return (
   <>
   
   <MetaData title="Forgot Password" />
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Forgot Password</h2>

              <form
                className="forgotPasswordForm"
                onSubmit={forgotPasswordSubmit}
              >
                <div className="forgotPasswordEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Send"
                  className="forgotPasswordBtn"
                />
              </form>
            </div>
          </div>
   
   
   </>
  )
}

export default ForgotPassword