import React from 'react';

const Contact: React.FC = () => {
  return (

    <main className='mx-auto max-w-[1440px] px-5 mt-4 text-center'>

          <section className="w-full h-40 flex flex-col items-start justify-center gap-2 mb-2" style={{ backgroundColor: '#F6F6F6', paddingBottom: '120px' }}>
            <h1 className="text-2xl font-semibold mt-28 mx-32"> Contact </h1>
            <div className="flex items-center gap-3 mx-32">
                <span className="text-slate-500"> Ecommerce </span>
                <img src="/images/Vector-right.png" alt="right-arrow" className="w-2 h-3" />
                <span> Contact </span>
            </div>
          </section>

        <div className="flex flex-col items-center justify-center text-left max-w-3xl mx-auto p-8 space-y-8">
          
          <p className="text-lg text-center text-gray-600">
            Thank you for visiting my store! I'm here to help with any questions or inquiries you may have. 
            If you have any feedback, questions, or suggestions, feel free to reach out to me:
          </p>
          
          <ul className="space-y-4 text-lg text-gray-700">
            <li><strong>Email:</strong> anakapanadzeklein@gmail.com </li>
            <li><strong>Phone:</strong> +995 599451135 </li>
          </ul>
        
        </div>

    </main>
  );
};

export default Contact;
