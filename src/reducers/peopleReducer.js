import people from './people.json';

const initialState ={
    peope: people,
};

export default (state= initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}