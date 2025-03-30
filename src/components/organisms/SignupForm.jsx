import { useState } from "react";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";

const SignupForm = () => {
   const [nombreCompleto, setNombreCompleto] = useState("");
   const [correo, setCorreo] = useState("");
   const [password, setPassword] = useState("");
   const [sobreMi, setSobreMi] = useState("");
   const [ubicacion, setUbicacion] = useState("");
   const [categoria, setCategoria] = useState("");
   const [sitioWeb, setSitioWeb] = useState("");
   const [edad, setEdad] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí iría la lógica para manejar el registro del usuario
      const newUser = {
         nombreCompleto,
         correo,
         sobreMi,
         ubicacion,
         categoria,
         sitioWeb,
         edad,
         password
      };
      console.log(newUser);
   };

   return (
      <form onSubmit={handleSubmit} className="space-y-5">
         <InputField
            label="Nombre completo"
            type="text"
            id="nombreCompleto"
            placeholder="Ingresa tu nombre completo"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
         />

         <InputField
            label="Correo electrónico"
            type="email"
            id="correo"
            placeholder="Ingresa tu correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
         />

         <InputField
            label="Contraseña"
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            label="Ubicación"
            type="text"
            id="ubicacion"
            placeholder="Ingresa tu ubicación"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
         />

         <InputField
            label="Categoría"
            type="text"
            id="categoria"
            placeholder="Ingresa tu categoría (ej. Hotelería)"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
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
            label="Edad"
            type="number"
            id="edad"
            placeholder="Ingresa tu edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
         />

         <Button text="Registrarse" onClick={handleSubmit} />
      </form>
   );
};

export default SignupForm;