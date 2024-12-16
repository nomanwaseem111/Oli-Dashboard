import React from "react";
const InfoCard = ({ title, description, value, unit, total, index, icon }) => {
  return (
    <div className="w-[298px] min-h-[137px] bg-[#25283D] rounded-[15px] p-[15px]">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-primary text-bold">{title}</h2>
          <p className="text-primary text-[12px]">{description}</p>
        </div>
        <img src={icon} alt="icon" />
      </div>
      <p
        className={`w-full ${index === 2 && "text-secondary"} text-[38px] ${
          index === 3 && "!text-green"
        } font-bold text-primary mt-[30px]`}
      >
        {value}
        <span className={`text-[20px] text-primary ${unit && "ml-2"}`}>
          {!total ? unit : `/${total}`}
        </span>
      </p>
    </div>
  );
};

export default InfoCard;
