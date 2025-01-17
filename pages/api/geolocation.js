export default async function handler(req, res) {
    try {
        const response = await fetch(`https://ipinfo.io/json?token=${process.env.YOUR_API_TOKEN}`);
        if (!response.ok) {
            throw new Error("Failed to fetch geolocation data");
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching geolocation data:", error);
        res.status(500).json({ error: "Failed to fetch geolocation data" });
    }
}
