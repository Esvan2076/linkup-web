import { useState } from "react";
import { useRegisterUser } from "../../hooks/useUser";
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
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [successMessage, setSuccessMessage] = useState("");

   const { register } = useRegisterUser();

   const handleSubmit = async (e) => {
      e.preventDefault();
   

      if (!nombreCompleto || !correo || !password || !sobreMi || !ubicacion || !categoria || !sitioWeb || !edad) {
         setError("Todos los campos son obligatorios.");
         return;
      }

      const principalId = 23;

      const newUser = {
         nombreCompleto,
         correo,
         password,
         sobreMi,
         ubicacion,
         categoria,
         sitioWeb,
         edad,
         principalId
      };

      try {
         setLoading(true);
         setError(null);

         await register(newUser);

         setSuccessMessage("¡Registro exitoso! Ahora puedes iniciar sesión.");
      } catch (err) {
         setError("Error al registrar al usuario. Intenta nuevamente.");
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

         <Button text={loading ? "Registrando..." : "Registrarse"} type="submit" disabled={loading} />
      </form>
   );
};

export default SignupForm;
