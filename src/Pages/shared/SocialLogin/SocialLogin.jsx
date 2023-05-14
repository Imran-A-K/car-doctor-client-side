import { useContext } from "react"
import { AuthContext } from "../../../Providers/AuthProvider"

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
        <div className="divider divider-horizontal">OR</div>
        <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
            G
        </button>
        </div>
    </div>
  )
}

export default SocialLogin