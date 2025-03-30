export const registerUser = async (userData) => {
   try {
      const response = await fetch('http://apiproduccion-env.eba-cprgqr42.us-east-1.elasticbeanstalk.com:8080/api/auth/registrar/emprendedor', {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(userData),
      });

      if (!response.ok) {
         throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      return data; 
   } catch (error) {
      console.error("Error al registrar al usuario:", error);
      throw error; 
   }
};