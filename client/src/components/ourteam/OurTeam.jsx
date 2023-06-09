import React from 'react';

const OurTeam = () => {
  return (
    <div className="bg-gray-100 py-12" id="ourTeam">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12">Our Team</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg py-8 px-4 shadow-md text-center hover:bg-gradient-to-b hover:from-purple-600 hover:to-indigo-700 hover:text-white transition hover:scale-110 duration-500">
              <div className="w-32 h-32 py-2 bg-purple-700 rounded-full mx-auto mb-4">
                 <img src="img/Ben.png" alt="Team Member" className="w-28 h-28 object-cover rounded-full mx-auto" />
              </div>
              <h1 className="text-xl font-bold mb-2">Benaya Imanuela</h1>
              <p>Teknologi Informasi 22</p>
              <a className="fab fa-linkedin my-8 mx-2" href="https://www.linkedin.com/in/benaya-imanuela/"></a>
              <a className="fab fa-instagram mx-2" href="https://instagram.com/ebenaya_imanuela"></a>
              <a className="fa fa-envelope mx-2" href="mailto:benayaimanuela2004@mail.ugm.ac.id"></a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg py-8 px-4 shadow-md text-center hover:bg-gradient-to-b hover:from-purple-600 hover:to-indigo-700 hover:text-white transition hover:scale-110  duration-500">
              <div className="w-32 h-32 py-2 bg-purple-700 rounded-full mx-auto mb-4">
                <img src="img/ivan.png" alt="Team Member" className="w-28 h-28 object-cover rounded-full mx-auto" />
              </div>
              <h1 className="text-xl font-bold mb-2">Hizkia Joy Ivan</h1>
              <p>Teknologi Informasi 21</p>
              <a className="fab fa-linkedin my-8 mx-2" href="https://www.linkedin.com/in/hizkia-joy-ivan?originalSubdomain=id"></a>
              <a className="fab fa-instagram mx-2" href="https://instagram.com/ivanjoy17"></a>
              <a className="fa fa-envelope mx-2" href="mailto:joyivan6@gmail.com"></a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg py-8 px-4 shadow-md text-center hover:bg-gradient-to-b hover:from-purple-600 hover:to-indigo-700 hover:text-white transition hover:scale-110  duration-500">
              <div className="w-32 h-32 py-2 bg-purple-700 rounded-full mx-auto mb-4">
                <img src="img/Bulan.png" alt="Team Member" className="w-28 h-28 object-cover rounded-full mx-auto" />
              </div>
              <h1 className="text-xl font-bold mb-2">Bulan Aprilia Putri</h1>
              <p>Teknologi Informasi 22</p>
              <a className="fab fa-linkedin my-8 mx-2" href="https://www.linkedin.com/in/bulan-aprilia-putri-murela-26ab6724b/"></a>
              <a className="fab fa-instagram mx-2" href="https://instagram.com/bulanmurela"></a>
              <a className="fa fa-envelope mx-2" href="mailto:bulanapriliaputrimurela@mail.ugm.ac.id"></a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg py-8 px-4 shadow-md text-center hover:bg-gradient-to-b hover:from-purple-600 hover:to-indigo-700 hover:text-white transition hover:scale-110  duration-500">
              <div className="w-32 h-32 py-2 bg-purple-700 rounded-full mx-auto mb-4">
                <img src="img/della.png" alt="Team Member" className="w-28 h-28 object-cover rounded-full mx-auto" />
              </div>
              <h1 className="text-xl font-bold mb-2">Della Febi Alfian</h1>
              <p>Teknologi Informasi 22</p>
              <a className="fab fa-linkedin my-8 mx-2" href="https://www.linkedin.com/in/dellafebialfian"></a>
              <a className="fab fa-instagram mx-2" href="https://instagram.com/dellafebi"></a>
              <a className="fa fa-envelope mx-2" href="mailto:dellafebialfian@mail.ugm.ac.id"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
