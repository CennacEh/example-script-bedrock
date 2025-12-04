//Import world and system class
import { world, system } from "@minecraft/server";

//runInterval re-runs code inside callback till you stop it
system.runInterval(() => {
    world.sendMessage("Hello, World!"); //Send Hello world! in game chat
}, 20); //the 20 tells it to run every 1 second (20 ticks = 1 sec)


