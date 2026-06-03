console.log("Program started")
const { fetchNotifications } = require("./services/notificationServices")

const {sortNotifications}=require("./utils/prioritySorter")

async function main() {
    try{
        const notifications= await fetchNotifications();

        const topTen=sortNotifications(
            notifications
        ).slice(0,10)
        console.table(topTen)
    }
    catch(err){
        console.error(err.message);
    }
    
}
main();