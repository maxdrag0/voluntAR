import xMemoryDao from "./Memory/xMemoryDao.js"

class Factory{
    constructor(){}

    static factory = (modo)=>{
        if(modo==="memory"){
            return{
                xMemoryDao: new xMemoryDao(),
            }
        }
        if(modo==="sql"){
            return{
                xSqlDao: "sqlMethod",
            }
        }
    }
}