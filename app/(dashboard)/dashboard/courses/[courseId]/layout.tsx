import { Sidebar } from "@/components/dashboard/Sidebar";
import getCourseById from "@/sanity/lib/courses/getCourseById";
import { redirect } from "next/navigation";

interface CourseLayoutProps {
  children: React.ReactNode;
  params: {
    courseId: string;
  };
}

export default async function CourseLayout({
  children,
  params,
}: CourseLayoutProps) {
  const course = await getCourseById(params.courseId);

  if (!course) {
    return redirect("/");
  }

  return (
    <div className="h-full relative">
      <Sidebar course={course} />
      <main className="h-full pl-[60px] lg:pl-80">
        <div className="h-full max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
