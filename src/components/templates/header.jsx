import { useNavigate } from "react-router-dom";

const Header = () => {
   const navigate = useNavigate();

   return (
      <div className="navbar bg-primary shadow-sm py-4 px-24">
         <div className="flex-1">
            <button className="btn btn-primary px-2 sm:px-4" onClick={() => navigate("/")}>
               <h1 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2 text-base-100">
                  LinkUp!
               </h1>
            </button>
         </div>

         <div className="flex-none">
            <button className="btn btn-primary" onClick={() => navigate("/mentores")}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12.088 4.82a10 10 0 0 1 9.412 .314a1 1 0 0 1 .493 .748l.007 .118v13a1 1 0 0 1 -1.5 .866a8 8 0 0 0 -8 0a1 1 0 0 1 -1 0a8 8 0 0 0 -7.733 -.148l-.327 .18l-.103 .044l-.049 .016l-.11 .026l-.061 .01l-.117 .006h-.042l-.11 -.012l-.077 -.014l-.108 -.032l-.126 -.056l-.095 -.056l-.089 -.067l-.06 -.056l-.073 -.082l-.064 -.089l-.022 -.036l-.032 -.06l-.044 -.103l-.016 -.049l-.026 -.11l-.01 -.061l-.004 -.049l-.002 -.068v-13a1 1 0 0 1 .5 -.866a10 10 0 0 1 9.412 -.314l.088 .044l.088 -.044z"></path>
               </svg>
               Mentores
            </button>

            <button className="btn btn-primary" onClick={() => navigate("/suenos")}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M10.04 4.305c2.195 -.667 4.615 -.224 6.36 1.176c1.386 1.108 2.188 2.686 2.252 4.34l.003 .212l.091 .003c2.3 .107 4.143 1.961 4.25 4.27l.004 .211c0 2.407 -1.885 4.372 -4.255 4.482l-.21 .005h-11.878l-.222 -.008c-2.94 -.11 -5.317 -2.399 -5.43 -5.263l-.005 -.216c0 -2.747 2.08 -5.01 4.784 -5.417l.114 -.016l.07 -.181c.663 -1.62 2.056 -2.906 3.829 -3.518l.244 -.08z"></path>
               </svg>
               Sueños
            </button>

            <div className="dropdown dropdown-end">
               <div tabindex="0" role="button" class="btn btn-primary">
                  <button className="btn btn-primary">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z"></path>
                        <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"></path>
                     </svg>
                     Iniciar sesion
                  </button>
               </div>
               <ul
                  tabindex="0"
                  class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li>
                     <a onClick={() => navigate("/login")}>Iniciar Sesion</a>
                  </li>
                  <li>
                     <a onClick={() => navigate("/signupSelector")}>Registrarse</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>

   );
};

export default Header;