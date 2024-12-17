import React from "react";
import { InfoCardData } from "../../utils/mockData";
import InfoCard from "../InfoCard";
import StarIcon from "../../assets/icons/starIcon.svg?react";
import Button from "../Common";

function Dashboard() {
  return (
    <div className="w-full">
      <h2 className="text-[34px] font-bold text-primary">My Dashboard</h2>
      <div className="flex gap-[30px] mt-[30px]">
        <div className="w-[627px] min-h-[304px] flex gap-[30px] flex-wrap">
          {InfoCardData?.map((item, index) => (
            <InfoCard
              key={index}
              title={item?.title}
              description={item?.description}
              value={item?.value}
              unit={item?.unit}
              total={item?.total}
              index={index}
              icon={item.icon}
            />
          ))}
        </div>
        <div className="w-[631px] min-h-[304px] bg-custom-gradient rounded-[15px] p-[15px]">
          <h4 className="text-primary font-bold">My Wallet</h4>
          <div className="flex items-center mt-[30px] min-h-[36.34px]">
            <StarIcon />
            <p className="text-secondary font-bold w-[403.05px]  text-[28px] ml-[15px]">
              1,043 <span className="text-[20px] text-primary">XP</span>
            </p>
            <Button
              className="w-[131.61px] h-[34px] rounded-[8px] text-primary"
              title={"Swap XP to Oli"}
            />
          </div>
          <div className="mt-[26.66px] flex gap-x-[15px]">
            <div className="w-[293px] min-h-[110px] bg-[#401F65] rounded-[15px] p-[15px]">
              <h6 className="text-primary font-bold">My Oli Balance</h6>
              <p className="mt-[30px] text-primary flex items-start font-bold text-[38px]">
                <span className="text-[20px] mt-2.5">$</span>567
              </p>
            </div>
            <div className="w-[293px] min-h-[110px] bg-[#401F65] rounded-[15px] p-[15px]">
              <h6 className="text-primary font-bold">My ADA Balance</h6>
              <p className="mt-[30px] text-primary  flex items-start font-bold text-[38px]">
                <span className="text-[20px] mt-2.5">$</span>1,040
              </p>
            </div>
          </div>
          <div className="mt-[15px] flex items-center gap-x-[10px]">
            <Button
              className="w-[177.26px] h-[34px] text-primary rounded-[8px]"
              title={"Withdraw Oli Balance"}
            />
            <p className="text-[12px] text-primary">
              Withdraw your Oli balance securely to your selected address
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
