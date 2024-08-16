import { contractAddress, publicClient } from "./src/lib/config";
import { abi } from "./src/utils/abi";

console.log("Event-tracker");

let previousLogs: string[] = []; // Store previous transaction hashes to avoid duplicates

async function fetchEvents() {
  try {
    while (true) { 
      const logs = await publicClient.getContractEvents({
        abi: abi,
        eventName: "TokensClaimed",
      });

      if (logs && logs.length > 0) {
        console.log(`Fetched ${logs.length} events:`);
        logs.forEach((log, index) => {
          if (!previousLogs.includes(log.transactionHash)) { 
            console.log(`New Event #${index + 1}`, log);
            previousLogs.push(log.transactionHash);

            if (previousLogs.length > 1000) {
              previousLogs.shift(); 
            }
          } else {
            console.log(`Duplicate event detected, skipping.`);
          }
        });
      } else {
        console.log("No TokensClaimed events found.");
      }

      await new Promise(resolve => setTimeout(resolve, 10000)); 
    }
  } catch (error) {
    console.error("Error fetching contract events:", error);
  }
}

fetchEvents();