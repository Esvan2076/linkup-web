import { useState, useEffect } from 'react';
import Header from "../templates/header";
import Footer from '../templates/footer';

const MentorPage = () => {
   const [mentors, setMentors] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchMentors = async () => {
         try {
            // Conexión a la API 
            const response = await fetch('https://your-canister-id.ic0.app/api/mentors', {
               method: 'GET',
               headers: {
                  'Content-Type': 'application/json',
               }
            });

            if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Mapeo de datos según la estructura esperada de Motoko
            const formattedMentors = data.map((mentor, index) => ({
               id: mentor.id || index,
               nombre: mentor.name || 'Nombre no disponible',
               areaEspecializacion: mentor.specializationArea || 'Área no especificada',
               tiempoRespuesta: mentor.responseTime || 'No especificado',
               sitioWeb: mentor.website || '',
               edad: mentor.age || 0,
               imagen: mentor.image,
               descripcion: mentor.description || 'Este mentor no ha proporcionado una descripción.'
            }));

            setMentors(formattedMentors);
            setLoading(false);
         } catch (err) {
            console.error('Error fetching mentors:', err);
            setError(err.message);
            setLoading(false);
         }
      };

      fetchMentors();
   }, []);

   return (
      <div className="flex flex-col min-h-screen">
         <Header />

         <main className="flex-grow bg-base-100">
            {/* Hero Section */}
            <section className="py-16 bg-primary text-primary-content">
               <div className="container mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">Mentores Disponibles</h1>
                  <p className="text-xl max-w-2xl mx-auto">
                     Conecta con expertos dispuestos a compartir su conocimiento y experiencia contigo
                  </p>
               </div>
            </section>

            {/* Estado de carga */}
            {loading && (
               <div className="container mx-auto px-4 py-12 text-center">
                  <progress className="progress progress-primary w-56"></progress>
                  <p className="mt-4">Cargando mentores...</p>
               </div>
            )}

            {/* Mensaje de error */}
            {error && (
               <div className="container mx-auto px-4 py-12">
                  <div className="alert alert-error shadow-lg">
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Error al cargar los mentores: {error}</span>
                     </div>
                  </div>
               </div>
            )}

            {/* Listado de mentores */}
            {!loading && !error && (
               <section className="container mx-auto px-4 py-8">
                  {mentors.length === 0 ? (
                     <div className="text-center py-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">No hay mentores disponibles</h3>
                        <p className="mt-1 text-gray-500">Intenta nuevamente más tarde.</p>
                     </div>
                  ) : (
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mentors.map((mentor) => (
                           <div key={mentor.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                              <figure className="px-6 pt-6">
                                 <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                       <img src={mentor.imagen} alt={`Foto de ${mentor.nombre}`} />
                                    </div>
                                 </div>
                              </figure>
                              <div className="card-body items-center text-center">
                                 <h2 className="card-title">{mentor.nombre}</h2>
                                 <div className="badge badge-primary">{mentor.edad} años</div>
                                 <p className="font-semibold text-primary">{mentor.areaEspecializacion}</p>
                                 <p className="text-sm">{mentor.descripcion}</p>

                                 <div className="stats shadow my-4">
                                    <div className="stat">
                                       <div className="stat-title">Tiempo respuesta</div>
                                       <div className="stat-value text-sm">{mentor.tiempoRespuesta}</div>
                                    </div>
                                 </div>

                                 <div className="card-actions mt-4">
                                    {mentor.sitioWeb && (
                                       <a
                                          href={`https://${mentor.sitioWeb}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="btn btn-outline btn-sm"
                                       >
                                          Visitar sitio web
                                       </a>
                                    )}
                                    <button className="btn btn-primary btn-sm">Contactar</button>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  )}
               </section>
            )}
         </main>

         <Footer />
      </div>
   );
};

export default MentorPage;