import "./HomeSkeleton.css";

const HomeSkeleton = () => {
  return (
    <div className="skeleton-page">
      <div className="skeleton-header">
        <div className="skeleton-logo shimmer"></div>
        <div className="skeleton-nav">
          <span className="shimmer"></span>
          <span className="shimmer"></span>
          <span className="shimmer"></span>
        </div>
      </div>

      <div className="skeleton-hero shimmer">
        <div className="skeleton-title"></div>
        <div className="skeleton-subtitle"></div>

        <div className="skeleton-info-row">
          <div className="skeleton-pill shimmer"></div>
          <div className="skeleton-pill shimmer"></div>
          <div className="skeleton-pill shimmer"></div>
        </div>

        <div className="skeleton-btn shimmer"></div>
      </div>
    </div>
  );
};

export default HomeSkeleton;