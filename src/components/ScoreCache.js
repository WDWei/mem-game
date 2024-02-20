const LEAGUE_OF_MEM_SCORE_CACHE ='LEAGUE_OF_MEM_SCORE_CACHE'

export function getScoreCache() {

    let ScoreCache = {};

    try {
        const data = localStorage.getItem(LEAGUE_OF_MEM_SCORE_CACHE);
        if(data){
            ScoreCache=JSON.parse(data);
        }
    }
    catch(e){
        console.error(e.message);
    }
    console.log(ScoreCache)
    return ScoreCache;
}



export function setScoreCache(value) {

    const ScoreCache = getScoreCache();
    ScoreCache['bestScore'] = value;

    try {
        localStorage.setItem(LEAGUE_OF_MEM_SCORE_CACHE,JSON.stringify(ScoreCache))
    }
    catch(e){
        console.error(e.message);
    }
    
}