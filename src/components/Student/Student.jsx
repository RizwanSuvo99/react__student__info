/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Student = ({ student: { name, score, percentage, imgUrl }, index }) => {
  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{index + 1}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8 rounded-full"
            src={imgUrl}
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{score}</td>
      <td className="p-5 text-sm md:text-xl text-center">{percentage}</td>
    </tr>
  );
};

export default Student;
