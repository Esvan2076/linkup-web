import Header from "../templates/header";
import Footer from '../templates/footer';

const MentorPage = () => {
   return (
      <div>
         <Header />
         <div className="min-h-screen bg-gray-100">
            <div>
               <h2 className="text-2xl font-bold text-center mb-4">Mentores</h2>
            </div>
         </div>
         <Footer/>
      </div>
   );
};

export default MentorPage;