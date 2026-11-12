import { ErrorState } from "@/components/ui";

export default function NotFound() {
  return (
    <ErrorState
      title="გვერდი ვერ მოიძებნა"
      description="გვერდი, რომელსაც ეძებ, არ არსებობს ან სხვა მისამართზე გადავიდა."
    />
  );
}
