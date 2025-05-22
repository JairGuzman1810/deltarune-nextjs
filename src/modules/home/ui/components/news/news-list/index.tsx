import { deltaruneNews } from "./deltarune-news";
import { NewsListItem } from "./news-list-item";

// NewsList - Render a vertical list of news items from the deltaruneNews array
export const NewsList = () => {
  return (
    // Container for the list with max width, vertical layout, and spacing
    <div className="flex flex-col max-w-lg gap-4 mx-auto">
      {/* Map through deltaruneNews and render a NewsListItem for each */}
      {deltaruneNews.map((news) => (
        <NewsListItem key={news.id} {...news} />
      ))}
    </div>
  );
};
