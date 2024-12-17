import NoteBookIcon from "../assets/icons/Notebook.svg";
import NoteBookVerified from "../assets/icons/Notebook-verified.svg";
import starIcon from "../assets/icons/starIcon.svg";
import profileIcon from "../assets/icons/profile.svg";
import NotebookIcon1 from "../assets/icons/NotebookIcon-1.svg?react";
import NotebookIcon2 from "../assets/icons/NotebookIcon-2.svg?react";
import NotebookIcon3 from "../assets/icons/NotebookIcon-3.svg?react";
import NotebookIcon4 from "../assets/icons/NotebookIcon-4.svg?react";
import NotebookIcon5 from "../assets/icons/NotebookIcon-5.svg?react";

export const InfoCardData = [
  {
    title: "Enrolled Courses",
    description: "No of enrolled courses",
    value: 6,
    icon: NoteBookIcon,
  },
  {
    title: "Complete Courses",
    description: "No of completed courses",
    value: 3,
    icon: NoteBookVerified,
  },
  {
    title: "Total XP Earned",
    description: "No of XP earned",
    value: "1,043",
    unit: "XP",
    icon: starIcon,
  },
  {
    title: "Referrals",
    description: "Verified vs Unverified referrals",
    value: 15,
    total: 30,
    icon: profileIcon,
  },
];


