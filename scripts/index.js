import { world, system } from "@minecraft/server";

system.runInterval(function() {
    world.sendMessage("Hello, World!")
}, 20)

// minecraft/server is 1.17.0-beta
