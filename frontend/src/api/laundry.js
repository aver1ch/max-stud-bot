export async function getLaundryBookings(userId) {
    const url = userId ? `/api/laundry/user?student_id=${userId}` : "/api/laundry";
    const res = await fetch(url);
    return res.json();
  }
  
  export async function addLaundryBooking(booking) {
    const res = await fetch("/api/laundry/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
  
  export async function getDryerBookings(userId) {
    const url = userId ? `/api/dryer/user?student_id=${userId}` : "/api/dryer";
    const res = await fetch(url);
    return res.json();
  }
  
  export async function addDryerBooking(booking) {
    const res = await fetch("/api/dryer/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
  