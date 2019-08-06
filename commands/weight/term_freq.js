
module.exports = (text, keyword) => {
    
    let weight = 0,
    totalMatch = text.match(new RegExp(keyword, 'g'));
    
    // how does one or more total Match counts effect weight?
    if(totalMatch){
       weight += totalMatch.length;
    }
    
    return weight;
    
};
