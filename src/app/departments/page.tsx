import Departments from "@/pages/Departments";
import { Suspense } from "react";
export default function DepartmentsPage() {
  return (
 <Suspense fallback={null}>

    <Departments />;
 </Suspense>
  )
}
