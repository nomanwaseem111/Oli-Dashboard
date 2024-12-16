import NoteBookIcon from "../assets/icons/Notebook.svg";
import NoteBookVerified from "../assets/icons/Notebook-verified.svg";
import starIcon from "../assets/icons/starIcon.svg";
import profileIcon from "../assets/icons/profile.svg";

export const InfoCardData = [
  {
    title: "Enrolled Courses",
    description: "No of enrolled courses",
    value: 6,
    icon:NoteBookIcon
  },
  {
    title: "Complete Courses",
    description: "No of completed courses",
    value: 3,
    icon:NoteBookVerified

  },
  {
    title: "Total XP Earned",
    description: "No of XP earned",
    value: 1043,
    unit: "XP",
    icon:starIcon

  },
  {
    title: "Referrals",
    description: "Verified vs Unverified referrals",
    value: 15,
    total: 30,
    icon:profileIcon

  },
];
