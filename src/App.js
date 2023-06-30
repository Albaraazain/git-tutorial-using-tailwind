import React, { useState } from 'react';

const Step = ({ id, title, code, children }) => (
  <section className={`h-96 overflow-auto flex flex-col justify-center items-center px-5 bg-${id}`}>
    <h2 className="text-4xl mb-4">{title}</h2>
    <pre className="bg-black rounded text-white p-2 w-full text-center">
      <code>{code}</code>
    </pre>
    <p className="max-w-screen-lg my-10 text-2xl leading-relaxed">{children}</p>
  </section>
);

const Tutorial = () => {
  const [steps, setSteps] = useState([
    {
      id: 'block-create-two',
      title: 'Step 1: Setup React App',
      code: 'npx create-react-app tailwind-react-app',
      description: 'This will create a new React application named tailwind-react-app.'
    },
    // ... Other initial steps
  ]);

  const [newStep, setNewStep] = useState({
    id: '',
    title: '',
    code: '',
    description: '',
  });

  const addStep = () => {
    setSteps([...steps, newStep]);
    setNewStep({ id: '', title: '', code: '', description: '' });
  };

  const handleChange = e => {
    setNewStep({ ...newStep, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-serif text-center">
      <section className="min-h-screen flex flex-col justify-center items-center px-5 bg-white">
        <h1 className="text-5xl m-8">Creating a React App with Tailwind CSS: A Tutorial</h1>
        <p className="max-w-screen-lg my-10 text-2xl leading-relaxed">In this tutorial, we will be going through the process of creating a React application and configuring it with Tailwind CSS.</p>
      </section>

      {steps.map((step, index) => (
        <Step key={index} id={step.id} title={step.title} code={step.code}>
          {step.description}
        </Step>
      ))}

      <div className="m-8 p-2 flex flex-col items-center">
        <input className="m-2 p-2 border rounded" type="text" name="id" placeholder="Step ID" value={newStep.id} onChange={handleChange} />
        <input className="m-2 p-2 border rounded" type="text" name="title" placeholder="Step Title" value={newStep.title} onChange={handleChange} />
        <input className="m-2 p-2 border rounded" type="text" name="code" placeholder="Step Code" value={newStep.code} onChange={handleChange} />
        <textarea className="m-2 p-2 border rounded" name="description" placeholder="Step Description" value={newStep.description} onChange={handleChange} />
        <button onClick={addStep} className="m-2 p-2 bg-blue-500 text-white rounded">Add New Step</button>
      </div>
    </div>
  );
};

export default Tutorial;
