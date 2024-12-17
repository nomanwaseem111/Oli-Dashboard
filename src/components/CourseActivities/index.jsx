import React from "react";
import GrayStarIcon from "../../assets/icons/grayStar.svg?react";
import StarIcon from "../../assets/icons/starIcon.svg?react";
import Combo from "../../assets/icons/combo.svg?react";
import Button from "../Common";

function CourseActivities({ tableHeaders, courseData, className }) {
  return (
    <div
      className={`block w-[1288px] ${className} mt-[30px] h-[398px] overflow-x-auto course-activities bg-[#25283D] rounded-[15px]`}
    >
      <div className="w-full flex justify-between items-center p-[15px]">
        <h4 className="text-primary font-bold">{courseData[0].heading}</h4>
        <Button className="text-purple bg-transparent" title={"View All"} />
      </div>
      <hr  />
      <table className="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr className="border-b  border-white-20 h-[54px]">
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                className={`px-4 text-primary ${header.label === '#' && 'text-center'} align-middle py-3 text-[16px] font-bold text-left ${
                  header.label === "Badge" && "text-center"
                }`}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-500">
          {courseData[0]?.activities?.map((course, index) => (
            <tr key={index} className="text-gray-500 h-[54px]">
              {courseData[0].heading === "Leaderboard" && (
                <th className="text-primary">{course?.rank}</th>
              )}

              <th className="border-t-0  px-4 flex items-center gap-x-[12px] h-[54px] align-middle text-[16px] font-normal text-primary whitespace-nowrap text-left">
                {courseData[0].heading !== "Course Activities" && <Combo />}
                {course.icon} {course.name}
              </th>

              {courseData[0].heading === "Leaderboard" && (
                <th className="relative">
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    {course?.badge}
                  </div>
                </th>
              )}

              {courseData[0].heading === "Leaderboard" && (
                <th className="pl-4">
                  <div className="flex gap-x-[8px] items-center text-primary">
                    {" "}
                    <StarIcon /> {course?.xp}
                  </div>
                </th>
              )}
              {course?.startDate && (
                <td className="border-t-0 px-4 align-middle text-primary text-[16px] whitespace-nowrap">
                  {course?.startDate}
                </td>
              )}

              {course?.status && (
                <td>
                  <div
                    className={`border-t-0 flex justify-center items-center w-[86px] ${
                      course?.status === "Verified"
                        ? "bg-[#263847] text-[#2FC5A1]"
                        : "bg-[#3B2D40] text-[#FF5D5D] w-[105px]"
                    }  !h-[32px] rounded-[20px] align-middle  text-[16px] whitespace-nowrap`}
                  >
                    {course?.status}
                  </div>
                </td>
              )}

              {course.progress && (
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap">
                  <div className="flex items-center bg-[#3B3E50] w-[251px] gap-x-[10px] h-[31px] p-[10px] rounded-[20px] text-primary">
                    <span className="mr-2 text-[16px]">{course.progress}%</span>
                    <div className="relative w-full">
                      <div className="bg-gray-200 w-full rounded-[22px] h-[10px]">
                        <div
                          className={`${
                            course.progress === 100
                              ? "bg-green"
                              : "bg-[#FF8000]"
                          } w-[179.15px] h-[10px] rounded-[22px]`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              )}

              {courseData[0].heading === "Course Activities" && (
                <td className="relative w-[40px] text-center">
                  <div
                    className={` ${
                      index > 2 && course?.scores
                        ? "bg-[#3B3537] !text-[#FF9C00]"
                        : " bg-[#3B3E50] text-primary"
                    } absolute top-[50%]  left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full w-[40px] h-[32px] flex justify-center items-center text-primary`}
                  >
                    {course?.scores}
                  </div>
                </td>
              )}

              {courseData[0].heading === "Course Activities" && (
                <td className="flex justify-center gap-x-[8px] items-center h-[32px] w-[100px] text-[16px] text-primary">
                  {course.earnedXP > 0 ? <StarIcon /> : <GrayStarIcon />}
                  <span className="w-[20px]">{course.earnedXP}</span>
                </td>
              )}

              {courseData[0].heading !== "Course Activities" &&
                courseData[0].heading !== "Leaderboard" && (
                  <td className="flex justify-center gap-x-[8px] items-center h-[32px] relative  w-[100px] text-[16px] text-primary">
                    <div className="flex items-center gap-x-[8px]">
                      {course.earnedXP > 0 ? <StarIcon /> : <GrayStarIcon />}
                      <span className="w-[20px]">{course.earnedXP}</span>
                    </div>
                  </td>
                )}

              {course.action &&
                courseData[0].heading === "Course Activities" && (
                  <td className="rounded-full text-[16px] text-primary">
                    <Button
                      className={
                        course.action === "Retake"
                          ? "!bg-[#1A1D2C] w-[62px] text-[14px] h-[30px] px-[10px] rounded-[8px]"
                          : "text-primary text-[14px] w-[77px] h-[30px] rounded-[8px] px-[10px]"
                      }
                      title={course.action}
                    />
                  </td>
                )}

              {course.actions &&
                courseData[0].heading !== "Course Activities" && (
                  <td className="rounded-full text-[16px] text-primary">
                    <Button
                      className="!bg-[#1A1D2C] text-primary text-[14px] w-[76px] h-[30px] rounded-[8px]"
                      title={course.actions}
                    />
                  </td>
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseActivities;
