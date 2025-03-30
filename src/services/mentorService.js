const API_URL = "http://apiproduccion-env.eba-cprgqr42.us-east-1.elasticbeanstalk.com:8080/api/mentores";

export const getMentors = async () => {
   try {
      const response = await fetch('/api/mentores', {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      });

      if (!response.ok) {
         throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();

      return data.map(mentor => ({
         id: mentor.id,
         nombre: mentor.nombre || "Nombre no disponible",
         areaEspecializacion: mentor.areaEspecializacion || "Área no especificada",
         tiempoRespuesta: mentor.tiempoRespuesta || "No especificado",
         sitioWeb: mentor.sitioWeb || "",
         edad: mentor.edad || "Edad no disponible",
         imagen: mentor.imagenPerfilUrl || "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
         sobreMi: mentor.sobreMi || "Sin descripción.",
      }));
   } catch (error) {
      console.error("Error al obtener los mentores:", error);
      throw error;
   }
};