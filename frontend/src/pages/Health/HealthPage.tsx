import { useEffect, useState } from "react";
import { getHealth } from "../../services/healthService";

function HealthPage() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const loadHealth = async () => {
      try {
        const data = await getHealth();
        setMessage(data.message);
      } catch {
        setMessage("Unable to connect to API");
      }
    };

    loadHealth();
  }, []);

  return (
    <div>
      <h1>Health Check</h1>
      <p>{message}</p>
    </div>
  );
}

export default HealthPage;