import { world, system } from "@minecraft/server";

system.runInterval(() => {
    world.sendMessage("Hello, World!");
}, 20);


