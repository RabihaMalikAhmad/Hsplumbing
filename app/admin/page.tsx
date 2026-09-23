import { prisma } from "@/lib/prisma";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";

function formatDate(d: Date) {
  return d.toLocaleString("en-GB", { timeZone: "Europe/London" });
}

export default async function AdminPage() {
  const [bookings, enquiries] = await Promise.all([
    prisma.booking.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.enquiry.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ color: "#fff", fontSize: "1.4rem" }}>Reehal Plumbing &amp; Heating — Admin</h1>
          <LogoutButton />
        </div>
      </div>

      <div className="wrap" style={{ paddingTop: 32, paddingBottom: 64 }}>
        <h2>Bookings ({bookings.length})</h2>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Received</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Job type</th>
                <th>Preferred time</th>
                <th>Description</th>
                <th>Status</th>
                <th>Email sent</th>
                <th>Calendar</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={10}>No bookings yet.</td>
                </tr>
              )}
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td>{formatDate(b.createdAt)}</td>
                  <td>{b.name}</td>
                  <td>{b.phone}</td>
                  <td>{b.email ?? "—"}</td>
                  <td>{b.jobType}</td>
                  <td>{new Date(b.preferredAt).toLocaleString("en-GB", { timeZone: "Europe/London" })}</td>
                  <td>{b.description ?? "—"}</td>
                  <td>
                    <span className={`badge ${b.status}`}>{b.status}</span>
                  </td>
                  <td>{b.emailSent ? "Yes" : "No"}</td>
                  <td>{b.calendarEventId ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: 48 }}>General enquiries ({enquiries.length})</h2>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Received</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.length === 0 && (
                <tr>
                  <td colSpan={5}>No enquiries yet.</td>
                </tr>
              )}
              {enquiries.map((e) => (
                <tr key={e.id}>
                  <td>{formatDate(e.createdAt)}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.phone ?? "—"}</td>
                  <td>{e.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
