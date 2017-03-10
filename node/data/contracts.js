var contractData = require("../data/contracts.json");

module.exports = {
    getContract: function(id){
        var result = {};
        contractData.rows.forEach(function(item){
            if(item.contract_id === id || item.id === id){
                result = item;
            }
        });
        return result;
    },
    getContractList: function(){
        return { 
            contracts: contractData.rows
        };
    }
};