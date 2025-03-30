import SignupForm from "../organisms/SIgnupForm";
import Header from "../templates/header";

const SignUpPage = () => {
   return (
      <div>
         <Header />
         <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-primary to-accent h-screen">
            <div className="p-8 rounded-lg shadow-lg w-1/4 bg-base-100">
               <h2 className="text-2xl font-bold text-center mb-4">Registrarse</h2>
               <SignupForm />
            </div>
         </div>
      </div>

   );
};

export default SignUpPage;