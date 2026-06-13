import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5678/webhook/newsone")
      .then((res) => res.json())
      .then((data) => {
        const newsData = data.news || [];
        setNews(newsData);
        setFilteredNews(newsData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = news.filter(
      (item) =>
        item.title
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.description
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

    setFilteredNews(filtered);
  }, [searchTerm, news]);

  return (
    <div className="container">
      <header className="header">
        <h1>📰 NewsOne</h1>
        <p>
          Stay updated with the latest news from trusted sources
        </p>
      </header>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search news..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>

      {loading ? (
        <div className="loading">
          <h2>Loading Latest News...</h2>
        </div>
      ) : (
        <>
          <div className="stats">
            Showing {filteredNews.length} Articles
          </div>

          <div className="news-grid">
            {filteredNews.map((item, index) => (
              <div
                className="news-card"
                key={index}
              >
                <div className="news-logo">
                  <span className="badge">
                    News #{index + 1}
                  </span>

                  <h2>NEWSONE</h2>
                </div>

                <div className="news-content">
                  <h3>{item.title}</h3>

                  <p>
                    {item.description
                      ? item.description.substring(
                          0,
                          180
                        ) + "..."
                      : "No description available"}
                  </p>

                  <div className="news-footer">
                    <span>
                      {item.publishedDate
                        ? new Date(
                            item.publishedDate
                          ).toLocaleDateString()
                        : "Unknown Date"}
                    </span>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;