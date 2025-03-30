import { useState } from "react";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";
import { registerMentor } from "../../services/mentorService";  // Asegúrate de importar el servicio

const SignupForm = () => {
   const [nombre, setNombre] = useState("");
   const [areaEspecializacion, setAreaEspecializacion] = useState("");
   const [tiempoRespuesta, setTiempoRespuesta] = useState("");
   const [sitioWeb, setSitioWeb] = useState("");
   const [sobreMi, setSobreMi] = useState("");
   const [imagenPerfilUrl, setImagenPerfilUrl] = useState("");
   const [edad, setEdad] = useState("");
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [successMessage, setSuccessMessage] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      const principalId = Math.floor(1000000 + Math.random() * 9000000);

      // Crea el objeto con los datos del formulario
      const newMentor = {
         nombre,
         areaEspecializacion,
         tiempoRespuesta,
         sitioWeb,
         sobreMi,
         imagenPerfilUrl,
         edad,
         principalId,
      };

      try {
         setLoading(true);
         setError(null);

         // Llama a la función para registrar al mentor
         const result = await registerMentor(newMentor);

         // Aquí puedes manejar la respuesta del servidor (puedes mostrar un mensaje de éxito)
         setSuccessMessage("¡Registro exitoso! Ahora puedes iniciar sesión.");
         console.log(result);
      } catch (err) {
         setError("Error al registrar el mentor. Intenta nuevamente.");
         console.error(err);
      } finally {
         setLoading(false);
      }
   };

   return (
      <form onSubmit={handleSubmit} className="space-y-5">
         {successMessage && (
            <div className="alert alert-success">
               <span>{successMessage}</span>
            </div>
         )}

         {error && (
            <div className="alert alert-error">
               <span>{error}</span>
            </div>
         )}

         <InputField
            label="Nombre completo"
            type="text"
            id="nombre"
            placeholder="Ingresa tu nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
         />

         <InputField
            label="Área de especialización"
            type="text"
            id="areaEspecializacion"
            placeholder="Ingresa tu área de especialización"
            value={areaEspecializacion}
            onChange={(e) => setAreaEspecializacion(e.target.value)}
         />

         <InputField
            label="Tiempo de respuesta"
            type="text"
            id="tiempoRespuesta"
            placeholder="Ingresa tu tiempo de respuesta"
            value={tiempoRespuesta}
            onChange={(e) => setTiempoRespuesta(e.target.value)}
         />

         <InputField
            label="Sitio web"
            type="url"
            id="sitioWeb"
            placeholder="Ingresa tu sitio web"
            value={sitioWeb}
            onChange={(e) => setSitioWeb(e.target.value)}
         />

         <InputField
            label="Sobre mí"
            type="text"
            id="sobreMi"
            placeholder="Cuéntanos un poco sobre ti"
            value={sobreMi}
            onChange={(e) => setSobreMi(e.target.value)}
         />

         <InputField
            label="Edad"
            type="number"
            id="edad"
            placeholder="Ingresa tu edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
         />

         <InputField
            label="URL de imagen de perfil"
            type="url"
            id="imagenPerfilUrl"
            placeholder="Ingresa la URL de tu imagen de perfil (opcional)"
            value={imagenPerfilUrl}
            onChange={(e) => setImagenPerfilUrl(e.target.value)}
         />

         {/* Cambié el botón a tipo submit */}
         <Button text={loading ? "Cargando..." : "Registrarse"} type="submit" />

      </form>
   );
};

export default SignupForm;