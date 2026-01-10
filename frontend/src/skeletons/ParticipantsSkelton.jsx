import './ParticipantsSkeleton.css';

export default function ParticipantsSkeleton() {
  return (
    <div className="skeleton-page">
      <h1 className="skeleton-title"></h1>

      <div className="skeleton-table">
        <div className="skeleton-header">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="skeleton-cell"></div>
          ))}
        </div>

        {Array.from({ length: 3 }).map((_, row) => (
          <div key={row} className="skeleton-row">
            {Array.from({ length: 10 }).map((_, col) => (
              <div key={col} className="skeleton-cell"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}