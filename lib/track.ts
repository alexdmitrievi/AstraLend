type TrackPayload = Record<string, unknown>;

export function track(eventName: string, payload?: TrackPayload) {
  if (typeof window === "undefined") {
    return;
  }

  const data = {
    event: eventName,
    timestamp: new Date().toISOString(),
    payload: payload ?? {},
  };

  console.info("[analytics]", data);
}
