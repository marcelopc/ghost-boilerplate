import debug from 'debug';

export default (tag, message)=>{

    if(!tag) return false;
    if(!message) return false;

    debug(tag)(message)
    return true;
};
