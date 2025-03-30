import SignupMentor from "../organisms/SignupFormMentor";
import Header from "../templates/header";

const SignUpPage = () => {
   return (
      <div>
         <Header />
         <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-primary to-accent h-screen">
            <div className="p-8 rounded-lg shadow-lg w-1/4 bg-base-100">
               <h2 className="text-2xl font-bold text-center mb-4">Registrarse como mentor</h2>
               <SignupMentor />
            </div>
         </div>
      </div>

   );
};

export default SignUpPage;