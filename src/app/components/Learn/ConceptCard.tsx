"use client";

const ConceptCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6 w-full max-w-md">
      <h3 className="text-xl font-semibold text-[#00747a] mb-3">{title}</h3>
      <p className="text-md text-[#3DB8A0]">{description}</p>
    </div>
  );
};

export default ConceptCard;
