import { useState, useEffect } from "react";
import { getDryerBookings, addDryerBooking } from "../api/laundry.js";

export function useDryer() {
  const [queue, setQueue] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchQueue = async () => {
    setLoading(true);
    try {
      const data = await getDryerBookings();
      const grouped = {};
      data.forEach(b => {
        const m = b.machine;
        if (!grouped[m]) grouped[m] = [];
        grouped[m].push({
          name: b.student_name,
          date: b.start_time.split("T")[0],
          time: b.start_time.split("T")[1].slice(0,5)
        });
      });
      setQueue(grouped);
    } catch (e) {
      setError("Не удалось загрузить очередь сушки");
    } finally {
      setLoading(false);
    }
  };

  const addBookingAPI = async (booking) => {
    await addDryerBooking(booking);
    await fetchQueue();
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  return { queue, loading, error, addBookingAPI };
}
