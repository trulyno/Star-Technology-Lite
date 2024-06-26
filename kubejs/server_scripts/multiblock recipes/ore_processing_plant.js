
ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:ore_processing_plant'), [
        'GCG',
        'PLP',
        'WPW'
    ], {
        G: 'gtceu:tungsten_carbide_gear',
        C: '#gtceu:circuits/iv',
        P: 'gtceu:tungsten_carbide_plate',
        L: 'gtceu:iv_machine_hull',
        W: 'gtceu:platinum_single_cable'
    });

    event.recipes.gtceu.ore_processing_plant('iron_opp')
        .itemInputs('gtceu:crushed_iron_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:iron_dust')
        .chancedOutput('gtceu:iron_dust', 9500, 50)
        .chancedOutput('gtceu:small_nickel_dust', 6500, 100)
        .chancedOutput('gtceu:tiny_tin_dust', 5250, 50)
        .duration(160)
        .EUt(28);

    event.recipes.gtceu.ore_processing_plant('cassiterite_opp')
        .itemInputs('gtceu:crushed_iron_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:cassiterite_dust')
        .chancedOutput('gtceu:cassiterite_dust', 9500, 50)
        .chancedOutput('gtceu:bismuth_dust', 6500, 100)
        .chancedOutput('gtceu:tin_dust', 5250, 50)
        .duration(160)
        .EUt(28);

    event.recipes.gtceu.ore_processing_plant('copper_opp')
        .itemInputs('gtceu:crushed_copper_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:copper_dust')
        .chancedOutput('gtceu:copper_dust', 9500, 50)
        .chancedOutput('gtceu:gold_dust', 6500, 100)
        .chancedOutput('gtceu:nickel_dust', 5250, 50)
        .duration(160)
        .EUt(28);

    event.recipes.gtceu.ore_processing_plant('tin_opp')
        .itemInputs('gtceu:crushed_tin_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:tin_dust')
        .chancedOutput('gtceu:tin_dust', 9500, 50)
        .chancedOutput('gtceu:iron_dust', 6500, 100)
        .chancedOutput('gtceu:zinc_dust', 5250, 50)
        .duration(160)
        .EUt(28);

    event.recipes.gtceu.ore_processing_plant('sphalerite_opp')
        .itemInputs('gtceu:crushed_sphalerite_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:sphalerite_dust')
        .chancedOutput('gtceu:sphalerite_dust', 9500, 50)
        .chancedOutput('gtceu:gallium_dust', 6500, 100)
        .chancedOutput('gtceu:sulfur_dust', 5250, 50)
        .duration(160)
        .EUt(28);

    event.recipes.gtceu.ore_processing_plant('galena_opp')
        .itemInputs('gtceu:crushed_galena_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:galena_dust')
        .chancedOutput('gtceu:galena_dust', 9500, 50)
        .chancedOutput('gtceu:silver_dust', 6500, 100)
        .chancedOutput('gtceu:sulfur_dust', 5250, 50)
        .duration(160)
        .EUt(28);

    event.recipes.gtceu.ore_processing_plant('stibnite_opp')
        .itemInputs('gtceu:crushed_stibnite_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:stibnite_dust')
        .chancedOutput('gtceu:stibnite_dust', 9500, 50)
        .chancedOutput('gtceu:antimony_dust', 6500, 100)
        .chancedOutput('gtceu:sulfur_dust', 5250, 50)
        .duration(160)
        .EUt(28);


    function opp1(voltage, material, secondary, tertiary, quaternary) {
        event.recipes.gtceu.ore_processing_plant(`${material}_opp`)
            .itemInputs(`gtceu:crushed_${material}_ore`)
            .inputFluids(`${(voltage >= 512) ? 'gtceu:sodium_persulfate' : 'gtceu:distilled_water'} 100`)
            .itemOutputs(`gtceu:${material}_dust`)
            .chancedOutput(`gtceu:${material}_dust`, 7500, 150)
            .chancedOutput(`gtceu:${secondary}_dust`, 5500, 100)
            .chancedOutput(`gtceu:${tertiary}_dust`, 3250, 50)
            .chancedOutput(`gtceu:${quaternary}_dust`, 1750, 100)
            .duration(240)
            .EUt(voltage * 0.5);
    }

    opp1(32, 'silver', 'gold', 'lead', 'sulfur');
    opp1(32, 'gold', 'silver', 'copper', 'nickel');
    opp1(32, 'pentlandite', 'cobalt', 'iron', 'sulfur');
    opp1(32, 'rock_salt', 'salt', 'salt', 'borax');
    opp1(32, 'salt', 'rock_salt', 'rock_salt', 'borax');

    opp1(128, 'monazite', 'thorium', 'thorium', 'neodymium');
    opp1(128, 'lepidolite', 'lithium', 'lithium', 'caesium');
    opp1(128, 'pyrolusite', 'manganese', 'manganese', 'tantalite');
    opp1(128, 'cobaltite', 'cobalt', 'sulfur', 'cobalt');
    opp1(128, 'apatite', 'tricalcium_phosphate', 'tricalcium_phosphate', 'phosphate');
    

    opp1(512, 'bauxite', 'gallium', 'grossular', 'rutile');
    opp1(512, 'pitchblende', 'thorium', 'thorium', 'uraninite');
    opp1(512, 'ilmenite', 'iron', 'iron', 'rutile');
    opp1(512, 'molybdenite', 'molybdenum', 'sulfur', 'molybdenum');
    opp1(512, 'tantalite', 'manganese', 'niobium', 'niobium');
    opp1(512, 'pollucite', 'caesium', 'aluminium', 'aluminium');


    opp1(2048, 'cooperite', 'palladium', 'nickel', 'nickel');
    opp1(2048, 'bastnasite', 'neodymium', 'neodymium', 'rare_earth');
    opp1(2048, 'tungstate', 'silver', 'manganese', 'lithium');
    opp1(2048, 'scheelite', 'manganese', 'manganese', 'molybdenum');

    function opp2(voltage, material, secondary, tertiary, quaternary) {
        event.recipes.gtceu.ore_processing_plant(`${material}_opp`)
            .itemInputs(`gtceu:crushed_${material}_ore`)
            .inputFluids('gtceu:sodium_persulfate 500')
            .itemOutputs(`gtceu:${material}_dust`)
            .chancedOutput(`gtceu:${material}_dust`, 7500, 150)
            .chancedOutput(`gtceu:${secondary}_dust`, 5500, 100)
            .chancedOutput(`gtceu:${tertiary}_dust`, 3250, 50)
            .chancedOutput(`gtceu:${quaternary}_dust`, 1750, 100)
            .duration(320)
            .EUt(voltage * 0.75);
    }

});