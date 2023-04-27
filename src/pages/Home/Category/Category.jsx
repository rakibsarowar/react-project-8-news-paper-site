import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();

    const categoryNews = useLoaderData();


    return (
        <div>
                <h2>Category: {categoryNews.length}</h2>
                    {
                        categoryNews.map(news => <NewsCard
                        key={news.id}
                        news={news}
                        ></NewsCard>)
                    }
        </div>
    );
};

export default Category;