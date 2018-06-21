import people from './people.json';

const initialState ={
    people: people,
};

export default (state=initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}