
const cohortName = "2302-acc-pt-web-pt-e";
// Use the APIURL variable for fetch requests
// const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com';

const removePlayer = async (playerId) => {
    try {
        console.log("inside removePlayer: ", playerId)
       

        const response = await fetch(`${BASE_URL}/api/${cohortName}/players/${playerId}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }


            });
        console.log("after delete API")
        console.log(response)
        return response;

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};


export { removePlayer }