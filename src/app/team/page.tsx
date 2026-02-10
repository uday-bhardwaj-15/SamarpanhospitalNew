import Doctors from "@/pages/Doctors";
import { Suspense } from "react";

export default function DoctorsPage() {
  return (
 <Suspense fallback={null}>

    <Doctors />;
 </Suspense>
  ) 
}
