const HomePage = () => {
   return (
     <div className="min-h-screen bg-gray-100">
       {/* Hero Section */}
       <section className="text-center py-20 bg-primary text-white">
         <h1 className="text-4xl font-bold">Impulsa tu empresa con los mejores mentores</h1>
         <p className="text-lg mt-4">Encuentra expertos que te guiarán al éxito</p>
         <a href="/mentores" className="btn btn-accent mt-6">Ver mentores</a>
       </section>
 
       {/* Beneficios */}
       <section className="py-16 px-6 text-center">
         <h2 className="text-3xl font-bold">¿Por qué elegirnos?</h2>
         <div className="grid md:grid-cols-3 gap-6 mt-8">
           <div className="p-6 bg-white shadow-md rounded-lg">
             <h3 className="text-xl font-semibold">Mentoría Personalizada</h3>
             <p className="mt-2">Cada mentor se adapta a tus necesidades específicas.</p>
           </div>
           <div className="p-6 bg-white shadow-md rounded-lg">
             <h3 className="text-xl font-semibold">Flexibilidad de Horarios</h3>
             <p className="mt-2">Reserva sesiones según tu disponibilidad.</p>
           </div>
           <div className="p-6 bg-white shadow-md rounded-lg">
             <h3 className="text-xl font-semibold">Resultados Comprobados</h3>
             <p className="mt-2">Empresas como la tuya han crecido con nuestra ayuda.</p>
           </div>
         </div>
       </section>
 
       {/* Cómo Funciona */}
       <section className="bg-gray-200 py-16 text-center">
         <h2 className="text-3xl font-bold">¿Cómo funciona?</h2>
         <div className="grid md:grid-cols-3 gap-6 mt-8 px-6">
           <div className="p-6 bg-white shadow-md rounded-lg">
             <span className="text-4xl font-bold text-primary">1</span>
             <h3 className="text-xl font-semibold mt-2">Explora Mentores</h3>
             <p className="mt-2">Busca expertos en distintas áreas.</p>
           </div>
           <div className="p-6 bg-white shadow-md rounded-lg">
             <span className="text-4xl font-bold text-primary">2</span>
             <h3 className="text-xl font-semibold mt-2">Agenda tu sesión</h3>
             <p className="mt-2">Elige la fecha y hora que más te convenga.</p>
           </div>
           <div className="p-6 bg-white shadow-md rounded-lg">
             <span className="text-4xl font-bold text-primary">3</span>
             <h3 className="text-xl font-semibold mt-2">Recibe mentoría</h3>
             <p className="mt-2">Conéctate y obtén consejos personalizados.</p>
           </div>
         </div>
       </section>
 
       {/* Testimonios */}
       <section className="py-16 text-center">
         <h2 className="text-3xl font-bold">Testimonios</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
           <div className="p-6 bg-white shadow-md rounded-lg">
             <p>"Gracias a los mentores, mi empresa creció un 200% en 6 meses."</p>
             <h3 className="mt-2 font-semibold">- Juan Pérez, CEO de StartupX</h3>
           </div>
           <div className="p-6 bg-white shadow-md rounded-lg">
             <p>"La mejor inversión que he hecho para mi negocio."</p>
             <h3 className="mt-2 font-semibold">- Ana López, Fundadora de EcomFast</h3>
           </div>
           <div className="p-6 bg-white shadow-md rounded-lg">
             <p>"Excelente plataforma, mentores muy capacitados."</p>
             <h3 className="mt-2 font-semibold">- Carlos Rodríguez, Emprendedor</h3>
           </div>
         </div>
       </section>
     </div>
   );
 };
 
 export default HomePage;