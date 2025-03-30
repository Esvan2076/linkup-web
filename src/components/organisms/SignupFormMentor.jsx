import { useState } from "react";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";

const SignupForm = () => {
   const [nombre, setNombre] = useState("");
   const [areaEspecializacion, setAreaEspecializacion] = useState("");
   const [tiempoRespuesta, setTiempoRespuesta] = useState("");
   const [sitioWeb, setSitioWeb] = useState("");
   const [sobreMi, setSobreMi] = useState("");
   const [imagenPerfilUrl, setImagenPerfilUrl] = useState(null);
   const [edad, setEdad] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí iría la lógica para manejar el registro del usuario
      const newUser = {
         nombre,
         areaEspecializacion,
         tiempoRespuesta,
         sitioWeb,
         sobreMi,
         imagenPerfilUrl,
         edad,
      };
      console.log(newUser);
   };

   return (
      <form onSubmit={handleSubmit} className="space-y-5">
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

         {/* Para la imagen de perfil, asumo que quieres cargarla como URL */}
         <InputField
            label="URL de imagen de perfil"
            type="url"
            id="imagenPerfilUrl"
            placeholder="Ingresa la URL de tu imagen de perfil (opcional)"
            value={imagenPerfilUrl}
            onChange={(e) => setImagenPerfilUrl(e.target.value)}
         />

         <Button text="Registrarse" onClick={handleSubmit} />
      </form>
   );
};

export default SignupForm;