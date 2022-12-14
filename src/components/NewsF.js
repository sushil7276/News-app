import React, { useEffect } from 'react'


export const NewsF = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = capitalizeFirstLetter(props.category);

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {

        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, [])


    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);

    };

    // const handlePrevClick = async () => {
    //     setPage(page -1);
    //     updateNews();
    // }

    // const handleNextClick = async () => {

    //     setPage(page +1);
    //     updateNews();

    // }

    return (
        <>
            <h1 className="text-center" style={{ margin: "35px 0px" }}>News - Top Headlines from {capitalizeFirstLetter(props.category)}</h1>
            {loading && <Spinner />}


            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className='row'>
                        {!loading && articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} autor={element.autor} date={element.publishedAt} />
                            </div>
                        })}

                    </div>
                </div>

            </InfiniteScroll>
            {/* <div className="d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>	&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next 	&rarr;</button>
        </div> */}

        </>
    )
}

NewsF.defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general"
}

NewsF.propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
