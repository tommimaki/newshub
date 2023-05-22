
import React from 'react';
import { useParams } from 'react-router-dom';

const NewsArticlePage = () => {
    const { articleId } = useParams();
    console.log(articleId, 'idid')

    // Fetch the specific article data based on the articleId

    return (
        <div>
            <h2>News Article Page</h2>
            <p>Article ID: {articleId}</p>
            {/* Render the article content */}
        </div>
    );
};

export default NewsArticlePage;
