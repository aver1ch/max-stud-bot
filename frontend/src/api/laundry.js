export async function getLaundryBookings() {
    const res = await fetch("/api/laundry");
    return res.json();
  }
  
  export async function addLaundryBooking(booking) {
    const res = await fetch("/api/laundry/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });
    return res.json();
  }
  
  export async function getDryerBookings() {
    const res = await fetch("/api/dryer");
    return res.json();
  }
  
  export async function addDryerBooking(booking) {
    const res = await fetch("/api/dryer/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });
    return res.json();
  }
  