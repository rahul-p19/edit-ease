export default async function getEventBySlug(slug: string) {
    const EVENT_URL = `${import.meta.env.BACKEND_URL}/api/events/${slug}`;
    const res = await fetch(EVENT_URL, { credentials: "include" });
    const data = await res.json();

    return data;
}
