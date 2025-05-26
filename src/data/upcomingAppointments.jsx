import { Eye ,ClipboardCheck,Heart, Brain} from "lucide-react";

const upcomingAppointments = [
  {
    day: "Thursday",
    events: [
      { time: "11:00 AM", title: "Health checkup complete", icon:<ClipboardCheck color='#753d85'/>},
      { time: "14:00 PM", title: "Ophthalmologist", icon: <Eye color='#753d85' />},
    ],
  },
  {
    day: "Saturday",
    events: [
      { time: "12:00 AM", title: "Cardiologist", icon: <Heart color="#c20000" /> },
      { time: "16:00 PM", title: "Neurologist", icon: <Brain color="#493a92" /> },
    ],
  },
];

export default upcomingAppointments;
