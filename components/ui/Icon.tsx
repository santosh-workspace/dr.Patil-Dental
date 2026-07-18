import {
  Stethoscope,
  Sparkles,
  Activity,
  Wrench,
  Shield,
  ShieldCheck,
  Smile,
  Crown,
  AlignHorizontalDistributeCenter,
  Award,
  GraduationCap,
  HeartHandshake,
  Clock,
  Microscope,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  ArrowUp,
  Check,
  Menu,
  X,
  Star,
  type LucideIcon,
} from "lucide-react";

/** Lucide is the single approved icon library (Component Rules). */
export const icons: Record<string, LucideIcon> = {
  Stethoscope,
  Sparkles,
  Activity,
  Wrench,
  Shield,
  ShieldCheck,
  Smile,
  Crown,
  AlignHorizontalDistributeCenter,
  Award,
  GraduationCap,
  HeartHandshake,
  Clock,
  Microscope,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  ArrowUp,
  Check,
  Menu,
  X,
  Star,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = icons[name] ?? Stethoscope;
  return <Cmp className={className} aria-hidden="true" />;
}
