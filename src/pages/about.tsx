import React from 'react';

const About: React.FC = () => {
  return (
    <main className='mx-auto max-w-[1440px] px-5 mt-4 text-center'>

          <section className="w-full h-40 flex flex-col items-start justify-center gap-2 mb-6" style={{ backgroundColor: '#F6F6F6', paddingBottom: '120px' }}>
            <h1 className="text-2xl font-semibold mt-28 mx-32"> About Me </h1>
            <div className="flex items-center gap-3 mx-32">
                <span className="text-slate-500"> Ecommerce </span>
                <img src="/images/Vector-right.png" alt="right-arrow" className="w-2 h-3" />
                <span> About Me </span>
            </div>
          </section>

          <div className="flex flex-col items-center justify-center text-left max-w-3xl mx-auto p-8 space-y-8" style={{ paddingBottom: '100px' }}>
              <p className="text-xl font-medium text-center text-gray-800">
                Hi, I'm Ana Kapanadze-Klein
              </p>
              <p className="text-lg text-center text-gray-600">
                a junior front-end developer with a passion for building responsive and user-friendly web applications.
              </p>
              <p className="text-lg text-center text-gray-600">
                I specialize in creating seamless, dynamic interfaces using modern web technologies.
              </p>

              <h2 className="text-lg text-center text-gray-700 font-semibold">
                For this website, I’ve utilized a range of skills and tools to bring it to life, including:
              </h2>

              <ul className="list-disc pl-6 space-y-4 text-lg max-w-2xl mx-auto text-gray-700">
                <li>HTML: Structuring and organizing content with semantic HTML elements.</li>
                <li>Tailwind CSS: Designing with a utility-first approach to create beautiful, customizable, and responsive layouts.</li>
                <li>TypeScript: Ensuring type safety and improving code quality for better maintainability.</li>
                <li>React: Building interactive and scalable UI components for smooth user experiences.</li>
                <li>React Router: Handling navigation between different pages of the site seamlessly.</li>
                <li>Redux Toolkit: Managing global state with ease and keeping track of application data flow.</li>
                <li>Local Storage: Storing data on the client-side to persist user settings and preferences.</li>
              </ul>

              <p className="text-lg text-center text-gray-600">
                I am constantly learning and improving my skills, and I'm excited to continue growing as a developer. Thanks for checking out my work!
              </p>
            </div>

    </main>
  );
};

export default About;
