import {
  Magnet,
  ScanLine,
  Waves,
  Ribbon,
  Bone,
  Activity,
  Smile,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import type { Exam } from "@/content/exams";

const icons: Record<Exam["icon"], LucideIcon> = {
  magnet: Magnet,
  scan: ScanLine,
  waves: Waves,
  ribbon: Ribbon,
  bone: Bone,
  activity: Activity,
  smile: Smile,
  syringe: Syringe,
};

export function ExamIcon({
  name,
  className,
}: {
  name: Exam["icon"];
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.5} aria-hidden />;
}
