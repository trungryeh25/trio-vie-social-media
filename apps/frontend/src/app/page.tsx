import { User } from "@shared/types/user";
import { formatDate } from "@shared/utils/formatDate";

export default function Page() {
  const user: User = { id: "1", name: "TrioVie", email: "hello@triovie.com" };
  return (
    <div>
      Hello, {user.name}! <br />
      Today: {formatDate(new Date())}
    </div>
  );
}
