import CourseActivities from "./components/CourseActivities";
import Dashboard from "./components/Dashboard";
import NotebookIcon1 from "./assets/icons/NotebookIcon-1.svg?react";
import NotebookIcon2 from "./assets/icons/NotebookIcon-2.svg?react";
import NotebookIcon3 from "./assets/icons/NotebookIcon-3.svg?react";
import NotebookIcon4 from "./assets/icons/NotebookIcon-4.svg?react";
import NotebookIcon5 from "./assets/icons/NotebookIcon-5.svg?react";
import Badge1 from "./assets/icons/badge-1.svg?react";
import Badge2 from "./assets/icons/badge-2.svg?react";
import Badge3 from "./assets/icons/badge-3.svg?react";
import Badge4 from "./assets/icons/badge-4.svg?react";
function App() {
  const tableHeaders = [
    { label: "Course Name", key: "name" },
    { label: "Start Date", key: "startDate" },
    { label: "Progress", key: "progress" },
    { label: "Scores", key: "scores" },
    { label: "Earned XP", key: "earnedXP" },
    { label: "", key: "action" },
  ];

  const courseData = [
    {
      heading: "Course Activities",
      activities: [
        {
          name: "Master Blockchain Technology with OLI",
          startDate: "06-29-2024",
          progress: 20,
          scores: 0,
          earnedXP: 0,
          action: "Continue",
          icon: <NotebookIcon1 />,
        },
        {
          name: "The Future of Cryptocurrencies",
          startDate: "03-15-2024",
          progress: 20,
          scores: 0,
          earnedXP: 0,
          action: "Continue",
          icon: <NotebookIcon2 />,
        },
        {
          name: "Cryptocurrencies: The First Steps in Crypto",
          startDate: "02-29-2024",
          progress: 30,
          scores: 0,
          earnedXP: 0,
          action: "Continue",
          icon: <NotebookIcon3 />,
        },
        {
          name: "Future of Finance Masterclass",
          startDate: "01-12-2024",
          progress: 100,
          scores: 60,
          earnedXP: 20,
          action: "Retake",
          icon: <NotebookIcon4 />,
        },
        {
          name: "Value Investing: The Complete Financial Statement Analysis",
          startDate: "01-7-2024",
          progress: 100,
          scores: 80,
          earnedXP: 30,
          action: "Retake",
          icon: <NotebookIcon5 />,
        },
      ],
    },
  ];

  const referralHeaders = [
    { label: "Name", key: "name" },
    { label: "Status", key: "status" },
    { label: "Earned XP", key: "earnedXP" },
    { label: "", key: "action" },
  ];

  const leaderBoardHeaders = [
    { label: "#", key: "#" },
    { label: "User", key: "user" },
    { label: "Badge", key: "badge" },
    { label: "XP", key: "xp" },
  ];

  const referralData = [
    {
      heading: "Referrals",
      activities: [
        {
          name: "Robert Smith",
          status: "Verified",
          earnedXP: 10,
        },
        {
          name: "David Johnson",
          status: "Verified",
          earnedXP: 10,
        },
        {
          name: "James Carter",
          status: "Verified",
          earnedXP: 10,
        },
        {
          name: "Michael Thompson",
          status: "Verified",
          earnedXP: 10,
        },
        {
          name: "William Brown",
          status: "Unverified",
          earnedXP: 0,
          actions: "Re-Invite",
        },
      ],
    },
  ];

  const leaderBoardData = [
    {
      heading: "Leaderboard",

      activities: [
        {
          rank: 1,
          name: "Jordan Smith",
          badge: <Badge1 />,
          xp: "100K",
        },
        {
          rank: 2,
          name: "Taylor Johnson",
          badge: <Badge2 />,
          xp: "50K",
        },
        {
          rank: 3,
          name: "Morgan Brown",
          badge: <Badge3 />,
          xp: "10K",
        },
        {
          rank: 4,
          name: "Casey Williams",
          badge: <Badge3 />,
          xp: "10K",
        },
        {
          rank: 5,
          name: "Riley Davis",
          badge: <Badge4 />,
          xp: "5K",
        },
      ],
    },
  ];
  return (
    <div className="w-full bg-[#1A1D2C]  h-full p-10">
      <Dashboard />
      <CourseActivities tableHeaders={tableHeaders} courseData={courseData} />
      <div className="flex gap-x-[34px]">
        <CourseActivities
          className="w-[627px] h-[403px]"
          tableHeaders={referralHeaders}
          courseData={referralData}
        />
        <CourseActivities
          className="w-[627px] h-[403px]"
          tableHeaders={leaderBoardHeaders}
          courseData={leaderBoardData}
        />
      </div>
    </div>
  );
}

export default App;
