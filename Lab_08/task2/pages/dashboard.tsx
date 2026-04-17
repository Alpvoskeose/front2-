import { GetServerSideProps } from "next";
import { User, Notification, getCurrentUser, getUserNotifications, getUserAnalytics } from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: { pageViews: number; sessions: number; bounceRate: number };
  currentTime: string;
}

export default function Dashboard({ user, notifications, analytics, currentTime }: DashboardProps) {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
        <p className="text-gray-600">Role: {user.role}</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded">Page Views: {analytics.pageViews.toLocaleString()}</div>
          <div className="bg-green-50 p-4 rounded">Sessions: {analytics.sessions.toLocaleString()}</div>
          <div className="bg-purple-50 p-4 rounded">Bounce Rate: {analytics.bounceRate.toFixed(1)}%</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notifications ({unreadCount} unread)</h2>
        <ul className="space-y-2">
          {notifications.map(notif => (
            <li key={notif.id} className={`p-3 rounded border ${notif.read ? "bg-gray-50" : "bg-yellow-50 font-medium"}`}>
              <span className="uppercase text-xs font-bold mr-2 text-gray-500">[{notif.type}]</span>
              {notif.message}
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-sm text-gray-400 mt-12">
        <p>Last updated: {currentTime}</p>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = getCurrentUser();
  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics(user.id);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};