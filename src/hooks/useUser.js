import { useState } from "react";
import { registerUser } from "../services/userService";

export const useRegisterUser = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [successMessage, setSuccessMessage] = useState("");

   const register = async (userData) => {
      setLoading(true);
      setError(null);
      setSuccessMessage(null);

      try {
         const response = await registerUser(userData);
         setSuccessMessage("¡Registro exitoso! Ahora puedes iniciar sesión.");
         return response;
      } catch (err) {
         setError("Error al registrar el usuario. Por favor, inténtalo de nuevo.");
      } finally {
         setLoading(false);
      }
   };

   return {
      loading,
      error,
      successMessage,
      register,
   };
};