import { useState, useEffect } from "react";
import { getMentors } from "../services/mentorService";

export const useMentors = () => {
   const [mentors, setMentors] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchMentors = async () => {
         try {
            const mentorsData = await getMentors();
            setMentors(mentorsData);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      fetchMentors();
   }, []);

   return { mentors, loading, error };
};

export const useRegisterMentor = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [successMessage, setSuccessMessage] = useState(null);

   const register = async (mentorData) => {
      setLoading(true);
      setError(null);
      setSuccessMessage(null);

      try {
         const response = await registerMentor(mentorData);
         setSuccessMessage("Mentor registrado exitosamente!");
         return response;
      } catch (err) {
         setError("Error al registrar al mentor. Por favor, inténtalo de nuevo.");
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