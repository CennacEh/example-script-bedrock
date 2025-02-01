import { world, system } from "@minecraft/server";

system.runInterval(function() {
    world.sendMessage("Hello, World!")
}, 20)


