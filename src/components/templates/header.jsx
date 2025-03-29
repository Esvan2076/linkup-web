import { useNavigate } from "react-router-dom";

const Header = () => {
   const navigate = useNavigate();

   return (
      <div className="navbar bg-primary shadow-sm py-4 px-24">
         <div className="flex-1">
            <button className="btn btn-primary btn-xl">LinkUp!</button>
         </div>

         <div className="flex-none">
            <button className="btn btn-primary" onClick={() => navigate("/login")}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z"></path>
                  <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"></path>
               </svg>
            </button>

         </div>
      </div>

   );
};

export default Header;