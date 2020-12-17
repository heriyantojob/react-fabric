import React, {useContext, useEffect, useState} from 'react'
import {TemplateItemList,TemplateItemListImage} from "../TemplateGlobalStyle"
import SimpleBarReact from "simplebar-react";
import handleClickItemBox from "../clickBoxItem"
import DesignCanvasContext from "../../../../../../store/Design/Canvas/DesignCanvasContext";
const endpoint = process.env.REACT_APP_URL_PIXABAY+"&safesearch=true";
const defaultNews= {
    status: "ok",
    totalResult: 0,
    articles: []
}

function TemplateBoxImageListComp(props) {
    console.log("masuk TemplateBoxImageListComp")
    const [news, setNews] = useState(defaultNews);
    const [page,setPage] = useState(1)
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [isRefresh, setRefresh] = useState(false)
    const [lastSearch,setLastSearch] = useState("");
    const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);
    const handleRefresh = () => {
        setNews(defaultNews)
        setPage(1)
        setLoading(false)
        setRefresh(false)
    }
    const handleScroll=(event)=>{

        if (
            event.target.scrollHeight - event.target.scrollTop <=
            event.target.clientHeight
        ) {
            ////bottom arrive... do something...
            setPage(c => c + 1)
        }
    }
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)

            let queryPlus =`${endpoint}&page=${page}`

            //if(props.querySearch.value.trim().length > 0){
            if(props.querySearch){
                console.log("query value ada")
                queryPlus +="&q="+props.querySearch
                if(lastSearch!==props.querySearch){
                    setNews(defaultNews)
                    setPage(1)
                    console.log("query last search berubah")
                }

            }
            setLastSearch(props.querySearch)
            //console.log("query plus ",queryPlus)


            try {


                        // `${endpoint}&page=${page}`

                const response = await fetch(queryPlus)
                const result = await response.json()
                setNews(current=>{
                    console.log("Result ",result.status)
                    return(
                        {
                            ...result,
                            articles: [...current.articles,...result.hits],
                            totalResult: result.total,
                            status: result.status
                        }

                    )
                })
                if(result.status !== "ok"){
                    throw new Error('error')
                }
            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    },[page,isRefresh,props.querySearch,!props.querySearch])
    return (
        <SimpleBarReact  onScroll={handleScroll} style={{

            maxHeight:"80%",
            marginTop:"10px"

        }}>

            {isLoading && <p> Loading...</p>}
            {/*{isError && <p> Can Not Load</p>}*/}
            <TemplateItemList>



                {news.articles.map((item, index) => (



                        <div key ={index} >
                            <TemplateItemListImage
                                src={item.previewURL}
                                 onClick={handleClickItemBox(
                                     {objectArr:[{type:"image",image:item.previewURL,objectValue:null}]},
                                        stateCanvas,
                                        dispatchCanvas
                                     )
                                 }
                                //
                            />
                            {/*<TemplateItemListImage*/}
                            {/*    src={item.largeImageURL}/>*/}
                        </div>


                ))}

                {/*{news.articles.length < parseInt(news.totalResult) ? (*/}
                {/*    <button disabled={isLoading} onClick={() => setPage(valueNext => valueNext + 1)}>*/}
                {/*        Load More*/}
                {/*    </button>*/}
                {/*) : null}*/}




                {/*<TemplateItemListImage*/}
                {/*    src="https://images.unsplash.com/photo-1589313919836-2440a3187a2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>*/}


            </TemplateItemList>



        </SimpleBarReact>

    )
}

export default TemplateBoxImageListComp
