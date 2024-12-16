import React from "react";
import GrayStarIcon from "../../assets/icons/grayStar.svg?react";
import StarIcon from "../../assets/icons/starIcon.svg?react";
import Button from "../Common";

function CourseActivities() {
  return (
    <div className="block w-full mt-[30px] overflow-x-auto  bg-[#25283D] rounded-[15px]">
      <table className="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th className="px-4  text-primary align-middle py-3 text-xs font-semibold text-left  border-l-0 border-r-0 whitespace-nowrap">
              Course Name
            </th>
            <th className="px-4  text-primary align-middle py-3 text-xs font-semibold text-left  border-l-0 border-r-0 whitespace-nowrap">
              Start Date
            </th>

            <th className="px-4  text-primary align-middle py-3 text-xs font-semibold text-left  border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
              Progress
            </th>
            <th className="px-4  text-primary align-middle py-3 text-xs font-semibold text-left  border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
              Scores
            </th>
            <th className="px-4  text-primary align-middle py-3 text-xs font-semibold text-left  border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
              Earned XP
            </th>
            <th className="px-4  text-primary align-middle py-3 text-xs font-semibold text-left  border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#FFFFFF]">
          <tr className="text-gray-500">
            <th className="border-t-0 px-4 align-middle text-sm font-normal text-primary whitespace-nowrap p-4 text-left">
              Master Blockchain Technology with OLI
            </th>
            <td className="border-t-0 px-4 align-middle text-primary text-xs font-medium  whitespace-nowrap p-4">
              01-7-2024{" "}
            </td>
            <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
              <div className="flex items-center text-primary">
                <span className="mr-2 text-xs font-medium">30%</span>
                <div className="relative w-full">
                  <div className="w-full bg-gray-200 rounded-sm h-2">
                    <div
                      className="bg-secondary h-2 rounded-sm"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td className="w-[40px]  items-center h-[32px] px-[10px] py-[15px] bg-[#3B3E50] rounded-full text-[16px] text-primary">
              0
            </td>
            <td className=" flex justify-center items-center h-[32px] px-[10px] py-[15px] text-[16px] text-primary">
              <GrayStarIcon /> 0
            </td>
            <td className=" rounded-full text-[16px] text-primary">
              <Button title="Retake" />
            </td>
          </tr>
          <tr className="text-gray-500">
            <th className="border-t-0 px-4 align-middle text-sm text-primary font-normal whitespace-nowrap p-4 text-left">
              The Future of Cryptocurrencies{" "}
            </th>
            <td className="border-t-0 px-4 align-middle text-primary text-xs font-medium  whitespace-nowrap p-4">
              01-7-2024{" "}
            </td>
            <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
              <div className="flex items-center text-primary">
                <span className="mr-2 text-xs font-medium">24%</span>
                <div className="relative w-full">
                  <div className="w-full bg-gray-200 rounded-sm h-2">
                    <div
                      className="bg-secondary h-2 rounded-sm"
                      style={{ width: "24%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td className="w-[40px]  h-[32px] px-[10px] py-[15px] bg-[#3B3E50] rounded-full text-[16px] text-primary">
              0
            </td>
            <td className=" flex justify-center items-center h-[32px] px-[10px] py-[15px] text-[16px] text-primary">
              <GrayStarIcon /> 0
            </td>
            <td className=" rounded-full text-[16px] text-primary">
              <Button title="Retake" />
            </td>
          </tr>
          <tr className="text-gray-500">
            <th className="border-t-0 px-4 align-middle text-sm text-primary font-normal whitespace-nowrap p-4 text-left">
              Cryptocurrencies: The First Steps in Crypto
            </th>
            <td className="border-t-0 px-4 align-middle text-primary text-xs font-medium  whitespace-nowrap p-4">
              01-7-2024{" "}
            </td>
            <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
              <div className="flex items-center text-primary">
                <span className="mr-2 text-xs font-medium">18%</span>
                <div className="relative w-full">
                  <div className="w-full bg-gray-200 rounded-sm h-2">
                    <div
                      className="bg-secondary h-2 rounded-sm"
                      style={{ width: "18%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td className="w-[40px] h-[32px] px-[10px] py-[15px] bg-[#3B3E50] rounded-full text-[16px] text-primary">
              0
            </td>
            <td className=" flex justify-center items-center h-[32px] px-[10px] py-[15px] text-[16px] text-primary">
              <GrayStarIcon /> 0
            </td>
            <td className=" rounded-full text-[16px] text-primary">
              <Button title="Retake" />
            </td>
          </tr>
          <tr className="text-gray-500">
            <th className="border-t-0 px-4 align-middle text-primary text-sm font-normal whitespace-nowrap p-4 text-left">
              Future of Finance Masterclass
            </th>
            <td className="border-t-0 px-4 align-middle text-primary text-xs font-medium  whitespace-nowrap p-4">
              01-7-2024
            </td>
            <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
              <div className="flex items-center text-primary">
                <span className="mr-2 text-xs font-medium">12%</span>
                <div className="relative w-full">
                  <div className="w-full bg-gray-200 rounded-sm h-2">
                    <div
                      className="bg-green h-2 rounded-sm"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td className="w-[40px] h-[32px] px-[10px] py-[15px] bg-[#3B3E50] rounded-full text-[16px] text-primary">
              0
            </td>
            <td className=" flex justify-center items-center h-[32px] px-[10px] py-[15px] text-[16px] text-primary">
              <StarIcon /> 0
            </td>
            <td className=" rounded-full text-[16px] text-primary">
              <Button className={"!bg-[#1A1D2C]"} title="Retake" />
            </td>
          </tr>
          <tr className="text-gray-500">
            <th className="border-t-0 px-4 text-primary align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
              Value Investing: The Complete Financial Statement Analysis
            </th>
            <td className="border-t-0 px-4 align-middle text-xs font-medium text-primary whitespace-nowrap p-4">
              01-7-2024
            </td>
            <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
              <div className="flex items-center text-primary">
                <span className="mr-2 text-xs font-medium">9%</span>
                <div className="relative w-full">
                  <div className="w-full bg-gray-200 rounded-sm h-2">
                    <div
                      className="bg-green h-2 rounded-sm"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td className="w-[40px] h-[32px] px-[10px] py-[15px] bg-[#3B3E50] rounded-full text-[16px] text-primary">
              0
            </td>
            <td className=" flex justify-center items-center h-[32px] px-[10px] py-[15px] text-[16px] text-primary">
              <StarIcon /> 0
            </td>
            <td className=" rounded-full text-[16px] text-primary">
              <Button className={"!bg-[#1A1D2C]"} title="Retake" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CourseActivities;
