export default function SiteHeader({ headerData, events }) {
  const {brandName, theme } = headerData;
  const { onThemeChangeClick } = events;
  return (
    <>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1>{brandName}</h1>
        </div>
        <div>
          <h1 role="button" onClick={() => onThemeChangeClick()} className="text-right">{theme === "dark" ? "☀️" : "🌙"}</h1>
        </div>
      </div>
      <br />
    </>
  );
}
