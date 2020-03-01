const materials  = [
	{
		name: "Coal",
		source: "mining"
	}, {
		name: "Copper",
		source: "mining"
	}, {
		name: "Amber",
		source: "mining"
	}, {
		name: "Iron",
		source: "mining"
	}, {
		name: "Aluminum",
		source: "mining"
	}, {
		name: "Silver",
		source: "mining"
	}, {
		name: "Gold",
		source: "mining"
	}, {
		name: "Emerald",
		source: "mining"
	}, {
		name: "Platinum",
		source: "mining"
	}, {
		name: "Topaz",
		source: "mining"
	}, {
		name: "Ruby",
		source: "mining"
	}, {
		name: "Diamond",
		source: "mining"
	}, {
		name: "Sapphire",
		source: "mining"
	}, {
		name: "Amethyst",
		source: "mining"
	}, {
		name: "TitaniumOre",
		source: "mining"
	}, {
		name: "Alexandrite",
		source: "mining"
	}, {
		name: "Uranium",
		source: "mining"
	}, {
		name: "Obsidian",
		source: "mining"
	}, {
		name: "Helium3",
		source: "mining"
	}, {
		name: "CopperBar",
		source: "smelting",
		time: "10",
		toMake: [
			{
				thing: "Copper",
				quantity: "5"
			}
		]
	}, {
		name: "LutetiumBar",
		source: "smelting",
		time: "60",
		toMake: [
			{
				thing: "Lutetium",
				quantity: "5"
			}
		]
	},{
		name: "IronBar",
		source: "smelting",
		time: "15",
		toMake: [
			{
				thing: "Iron",
				quantity: "5"
			}
		]
	},  {
		name: "Glass",
		source: "smelting",
		time: "60",
		toMake: [
			{
				thing: "Silicon",
				quantity: "2"
			}
		]
	}, {
		name: "AluminumBar",
		source: "smelting",
		time: "15",
		toMake: [
			{
				thing: "Aluminum",
				quantity: "5"
			}
		]
	}, {
		name: "SteelBar",
		source: "smelting",
		time: "45",
		toMake: [
			{
				thing: "IronBar",
				quantity: "1"
			},
			{
				thing: "Graphite",
				quantity: "1"
			}
		]
	}, {
		name: "SilverBar",
		source: "smelting",
		time: "60",
		toMake: [
			{
				thing: "Silver",
				quantity: "5"
			}
		]
	}, {
		name: "Charcoal",
		source: "smelting",
		time: "60",
		batch: "50",
		toMake: [
			{
				thing: "Tree",
				quantity: "1"
			}
		]
	}, {
		name: "GoldBar",
		source: "smelting",
		time: "60",
		toMake: [
			{
				thing: "Gold",
				quantity: "5"
			}
		]
	}, {
		name: "SteelPlate",
		source: "smelting",
		time: "120",
		toMake: [
			{
				thing: "SteelBar",
				quantity: "5"
			}
		]
	}, {
		name: "SteelPipe",
		source: "smelting",
		time: "60",
		toMake: [
			{
				thing: "SteelPlate",
				quantity: "1"
			}
		]
	}, {
		name: "TitaniumBar",
		source: "smelting",
		time: "60",
		toMake: [
			{
				thing: "Titanium",
				quantity: "5"
			}
		]
	}, {
		name: "MagnetBar",
		source: "smelting",
		time: "60",
		toMake: [
			{
				thing: "Magnetite",
				quantity: "5"
			}
		]
	}, {
		name: "Graphite",
		source: "crafting",
		time: "5",
		value: "15",
		toMake: [
			{
				thing: "Coal",
				quantity: "5"
			}
		]
	}, {
		name: "Chipset",
		source: "crafting",
		time: "60",
		value: "40000",
		toMake: [
			{
				thing: "HydrochloricAcid",
				quantity: "1"
			}, {
				thing: "Circuit",
				quantity: "3"
			}, {
				thing: "SilverBar",
				quantity: "1"
			}
		]
	}, {
		name: "RocketA",
		source: "crafting",
		time: "1800",
		value: "100",
		toMake: [
			{
				thing: "SteelPlate",
				quantity: "50"
			}, {
				thing: "OpticFiber",
				quantity: "10"
			}, {
				thing: "SolarPanel",
				quantity: "1"
			}
		]
	}, {
		name: "RocketB",
		source: "crafting",
		time: "1800",
		value: "100",
		toMake: [
			{
				thing: "TitaniumBar",
				quantity: "10"
			}, {
				thing: "InsulatedWire",
				quantity: "100"
			}, {
				thing: "MoonStone",
				quantity: "1"
			}
		]
	}, {
		name: "CopperNail",
		source: "crafting",
		time: "20",
		batch: "10",
		value: "10",
		toMake: [
			{
				thing: "CopperBar",
				quantity: "1"
			}
		]

}, {
		name: "Wire",
		source: "crafting",
		time: "30",
		batch: "5",
		value: "15",
		toMake: [
			{
				thing: "CopperBar",
				quantity: "1"
			}
		]
	}, {
		name: "Battery",
		source: "crafting",
		time: "120",
		value: "200",
		toMake: [
			{
				thing: "Amber",
				quantity: "1"
			}, {
				thing: "IronBar",
				quantity: "1"
			}, {
				thing: "CopperBar",
				quantity: "5"
			}
		]
	}, {
		name: "Circuit",
		source: "crafting",
		time: "180",
		value: "2070",
		toMake: [
			{
				thing: "IronBar",
				quantity: "10"
			}, {
				thing: "Graphite",
				quantity: "50"
			}, {
				thing: "CopperBar",
				quantity: "20"
			}
		]
	}, {
		name: "Lamp",
		source: "crafting",
		time: "80",
		value: "760",
		toMake: [
			{
				thing: "Wire",
				quantity: "10"
			}, {
				thing: "Graphite",
				quantity: "20"
			}, {
				thing: "CopperBar",
				quantity: "5"
			}
		]
	}, {
		name: "Flask",
		source: "crafting",
		time: "60",
		value: "800",
		toMake: [
			{
				thing: "Glass",
				quantity: "1"
			}
		]
	}, {
		name: "AmberCharger",
		source: "crafting",
		time: "5",
		value: "4",
		toMake: [
			{
				thing: "Amber",
				quantity: "1"
			}
		]
	}, {
		name: "AluminumBottle",
		source: "crafting",
		time: "30",
		value: "55",
		toMake: [
			{
				thing: "AluminumBar",
				quantity: "1"
			}
		]
	}, {
		name: "AmberInsulation",
		source: "crafting",
		time: "20",
		value: "125",
		toMake: [
			{
				thing: "Amber",
				quantity: "10"
			}, {
				thing: "AluminumBottle",
				quantity: "1"
			}
		]
	}, {
		name: "InsulatedWire",
		source: "crafting",
		time: "200",
		value: "750",
		toMake: [
			{
				thing: "Wire",
				quantity: "1"
			}, {
				thing: "AmberInsulation",
				quantity: "1"
			}
		]
	}, {
		name: "AluminumTank",
		source: "crafting",
		time: "120",
		batch: "5",
		value: "450",
		toMake: [
			{
				thing: "AluminumBar",
				quantity: "3"
			}
		]
	}, {
		name: "Mirror",
		source: "crafting",
		time: "120",
		batch: "2",
		value: "450",
		toMake: [
			{
				thing: "Glass",
				quantity: "1"
			}, {
				thing: "SilverBar",
				quantity: "1"
			}
		]
	}, {
		name: "MirrorLaser",
		source: "crafting",
		time: "120",
		batch: "2",
		value: "5400",
		toMake: [
			{
				thing: "Battery",
				quantity: "1"
			}, {
				thing: "Lamp",
				quantity: "1"
			}, {
				thing: "Mirror",
				quantity: "3"
			}
		]
	}, {
		name: "GreenLaser",
		source: "crafting",
		time: "20",
		batch: "5",
		value: "400",
		toMake: [
			{
				thing: "PolishedEmerald",
				quantity: "1"
			}, {
				thing: "InsulatedWire",
				quantity: "1"
			}, {
				thing: "Lamp",
				quantity: "1"
			}
		]
	}, {
		name: "DiamondCutter",
		source: "crafting",
		time: "30",
		value: "5000",
		toMake: [
			{
				thing: "SteelPlate",
				quantity: "1"
			}, {
				thing: "PolishedDiamond",
				quantity: "5"
			}
		]
	}, {
		name: "Motherboard",
		source: "crafting",
		time: "1800",
		value: "17000",
		toMake: [
			{
				thing: "Silicon",
				quantity: "3"
			}, {
				thing: "Circuit",
				quantity: "3"
			}, {
				thing: "GoldBar",
				quantity: "1"
			}
		]
	}, {
		name: "SolidPropellant",
		source: "crafting",
		time: "1200",
		value: "27000",
		toMake: [
			{
				thing: "Rubber",
				quantity: "3"
			}, {
				thing: "AluminumBar",
				quantity: "10"
			}
		]
	}, {
		name: "Accumulator",
		source: "crafting",
		time: "180",
		value: "9000",
		toMake: [
			{
				thing: "Sodium",
				quantity: "20"
			}, {
				thing: "Sulfur",
				quantity: "20"
			}
		]
	}, {
		name: "SolarPanel",
		source: "crafting",
		time: "60",
		value: "69000",
		toMake: [
			{
				thing: "Rubber",
				quantity: "1"
			}, {
				thing: "Silicon",
				quantity: "10"
			}, {
				thing: "Glass",
				quantity: "50"
			}
		]
	}, {
		name: "Gear",
		source: "crafting",
		time: "80",
		toMake: [
			{
				thing: "DiamondCutter",
				quantity: "1"
			}, {
				thing: "TitaniumBar",
				quantity: "1"
			}
		]
	}, {
		name: "GasCylinder",
		source: "crafting",
		time: "180",
		batch: "3",
		value: "30000",
		toMake: [
			{
				thing: "SteelPlate",
				quantity: "1"
			}, {
				thing: "Plastic",
				quantity: "1"
			}, {
				thing: "AluminumTank",
				quantity: "1"
			}
		]
	}, {
		name: "Bomb",
		source: "crafting",
		time: "120",
		toMake: [
			{
				thing: "TitaniumBar",
				quantity: "5"
			}, {
				thing: "Gunpowder",
				quantity: "10"
			}
		]
	}, {
		name: "Compressor",
		source: "crafting",
		time: "180",
		toMake: [
			{
				thing: "RefinedOil",
				quantity: "2"
			}, {
				thing: "Rubber",
				quantity: "1"
			}, {
				thing: "IronBar",
				quantity: "5"
			}
		]
	}, {
		name: "OpticFiber",
		source: "crafting",
		time: "120",
		batch: "10",
		toMake: [
			{
				thing: "Silicon",
				quantity: "10"
			}, {
				thing: "Oxygen",
				quantity: "10"
			}, {
				thing: "Plastic",
				quantity: "1"
			}
		]
	}, {
		name: "DryIce",
		source: "crafting",
		time: "120",
		batch: "4",
		toMake: [
			{
				thing: "Compressor",
				quantity: "1"
			}, {
				thing: "GreenLaser",
				quantity: "10"
			}, {
				thing: "Graphite",
				quantity: "1000"
			}
		]
	}, {
		name: "OxygenCylinder",
		source: "crafting",
		time: "120",
		toMake: [
			{
				thing: "Compressor",
				quantity: "1"
			}, {
				thing: "GasCylinder",
				quantity: "1"
			}, {
				thing: "Oxygen",
				quantity: "5"
			}
		]
	}, {
		name: "Magnet",
		source: "crafting",
		time: "120",
		toMake: [
			{
				thing: "MagnetBar",
				quantity: "1"
			}
		]
	}, {
		name: "ElectricalEngine",
		source: "crafting",
		time: "300",
		toMake: [
			{
				thing: "InsulatedWire",
				quantity: "50"
			}, {
				thing: "Magnet",
				quantity: "1"
			}, {
				thing: "AluminumBar",
				quantity: "20"
			}
		]
	}, {
		name: "LCDMonitor",
		source: "crafting",
		time: "300",
		toMake: [
			{
				thing: "InsulatedWire",
				quantity: "20"
			}, {
				thing: "Silicon",
				quantity: "5"
			}, {
				thing: "SapphireGlas",
				quantity: "5"
			}
		]
	}, {
		name: "CleanWater",
		source: "chemistry",
		time: "600",
		value: "1200",
		toMake: [
			{
				thing: "Water",
				quantity: "1"
			}, {
				thing: "Flask",
				quantity: "1"
			}
		]
	}, {
		name: "HydrochloricAcid",
		source: "chemistry",
		time: "60",
		batch: "4",
		value: "12000",
		toMake: [
			{
				thing: "SulfuricAcid",
				quantity: "1"
			}, {
				thing: "SodiumChloride",
				quantity: "20"
			}
		]
	}, {
		name: "Hydrogen",
		source: "chemistry",
		time: "900",
		value: "400",
		batch: "2",
		byproduct: "Oxygen",
		toMake: [
			{
				thing: "CleanWater",
				quantity: "1"
			}
		]
	}, {
		name: "Rubber",
		source: "chemistry",
		time: "1800",
		value: "4000",
		batch: "2",
		toMake: [
			{
				thing: "Liana",
				quantity: "1"
			}
		]
	}, {
		name: "SulfuricAcid",
		source: "chemistry",
		time: "1800",
		value: "3500",
		toMake: [
			{
				thing: "CleanWater",
				quantity: "1"
			}, {
				thing: "Sulfur",
				quantity: "2"
			}
		]
	}, {
		name: "Ethanol",
		source: "chemistry",
		time: "1800",
		value: "4200",
		toMake: [
			{
				thing: "AluminumBottle",
				quantity: "1"
			}, {
				thing: "Grape",
				quantity: "2"
			}
		]
	}, {
		name: "RefinedOil",
		source: "chemistry",
		time: "1800",
		value: "16500",
		toMake: [
			{
				thing: "Flask",
				quantity: "1"
			}, {
				thing: "Hydrogen",
				quantity: "10"
			}, {
				thing: "Oil",
				quantity: "10"
			}
		]
	}, {
		name: "Plastic",
		source: "chemistry",
		time: "600",
		value: "40000",
		toMake: [
			{
				thing: "RefinedOil",
				quantity: "1"
			}, {
				thing: "Coal",
				quantity: "50"
			}, {
				thing: "GreenLaser",
				quantity: "1"
			}
		]
	}, {
		name: "Titanium",
		source: "chemistry",
		time: "20",
		batch: "50",
		toMake: [
			{
				thing: "SulfuricAcid",
				quantity: "1"
			}, {
				thing: "TitaniumOre",
				quantity: "100"
			}
		]
	}, {
		name: "DiethylEther",
		source: "chemistry",
		time: "60",
		toMake: [
			{
				thing: "SulfuricAcid",
				quantity: "1"
			}, {
				thing: "Ethanol",
				quantity: "1"
			}
		]
	}, {
		name: "Gunpowder",
		source: "chemistry",
		time: "120",
		batch: "20",
		toMake: [
			{
				thing: "DiethylEther",
				quantity: "1"
			}, {
				thing: "SulfuricAcid",
				quantity: "2"
			}, {
				thing: "Tree",
				quantity: "2"
			}
		]
	}, {
		name: "LiquidNitrogen",
		source: "chemistry",
		time: "120",
		batch: "4",
		toMake: [
			{
				thing: "AluminumBottle",
				quantity: "1"
			}, {
				thing: "Nitrogen",
				quantity: "2"
			}, {
				thing: "Compressor",
				quantity: "2"
			}
		]
	}, {
		name: "Magnetite",
		source: "chemistry",
		time: "360",
		toMake: [
			{
				thing: "GreenLaser",
				quantity: "5"
			}, {
				thing: "Oxygen",
				quantity: "5"
			}, {
				thing: "IronBar",
				quantity: "2"
			}
		]
	}, {
		name: "EnchancedHelium3",
		source: "chemistry",
		time: "1800",
		toMake: [
			{
				thing: "AluminumBottle",
				quantity: "1"
			}, {
				thing: "Helium3",
				quantity: "100"
			}, {
				thing: "Compressor",
				quantity: "1"
			}
		]
	}, {
		name: "Lutetium",
		source: "chemistry",
		time: "600",
		toMake: [
			{
				thing: "SulfuricAcid",
				quantity: "1"
			}, {
				thing: "LutetiumOre",
				quantity: "20"
			}
		]
	}, {
		name: "ToxicBomb",
		source: "chemistry",
		time: "120",
		toMake: [
			{
				thing: "SulfuricAcid",
				quantity: "10"
			}
		]
	}, {
		name: "Tree",
		source: "greenhouse",
		time: "1800",
		batch: "10",
		value: "193",
		toMake: [
			{
				thing: "TreeSeed",
				quantity: "1"
			}, {
				thing: "Water",
				quantity: "10"
			}
		]
	}, {
		name: "Liana",
		source: "greenhouse",
		time: "1800",
		toMake: [
			{
				thing: "LianaSeed",
				quantity: "1"
			}, {
				thing: "Water",
				quantity: "20"
			}
		]
	}, {
		name: "Grape",
		source: "greenhouse",
		time: "1800",
		batch: "2",
		toMake: [
			{
				thing: "GrapeSeed",
				quantity: "1"
			}, {
				thing: "Water",
				quantity: "15"
			}
		]
	}, {
		name: "PolishedAmber",
		source: "jewelCrafting",
		time: "30",
		value: "70",
		toMake: [
			{
				thing: "Amber",
				quantity: "5"
			}
		]
	}, {
		name: "PolishedEmerald",
		source: "jewelCrafting",
		time: "30",
		value: "160",
		toMake: [
			{
				thing: "Emerald",
				quantity: "5"
			}
		]
	}, {
		name: "PolishedTopaz",
		source: "jewelCrafting",
		time: "60",
		value: "70",
		toMake: [
			{
				thing: "Topaz",
				quantity: "5"
			}
		]
	}, {
		name: "PolishedRuby",
		source: "jewelCrafting",
		time: "60",
		value: "75",
		toMake: [
			{
				thing: "Ruby",
				quantity: "5"
			}
		]
	}, {
		name: "PolishedDiamond",
		source: "jewelCrafting",
		time: "60",
		value: "90",
		toMake: [
			{
				thing: "Diamond",
				quantity: "5"
			}
		]
	}, {
		name: "PolishedSapphire",
		source: "jewelCrafting",
		time: "60",
		value: "80",
		toMake: [
			{
				thing: "Sapphire",
				quantity: "5"
			}
		]
	}, {
		name: "PolishedAmethyst",
		source: "jewelCrafting",
		time: "60",
		value: "90",
		toMake: [
			{
				thing: "Amethyst",
				quantity: "5"
			}
		]
	}, {
		name: "PolishedAlexandrite",
		source: "jewelCrafting",
		time: "60",
		toMake: [
			{
				thing: "Alexandrite",
				quantity: "5"
			}
		]
	}, {
		name: "PolishedObsidian",
		source: "jewelCrafting",
		time: "60",
		toMake: [
			{
				thing: "Obsidian",
				quantity: "5"
			}
		]
	}, {
		name: "EmeraldRing",
		source: "jewelCrafting",
		time: "300",
		value: "450",
		toMake: [
			{
				thing: "PolishedEmerald",
				quantity: "1"
			}, {
				thing: "GoldBar",
				quantity: "1"
			}
		]
	}, {
		name: "AmberBracelet",
		source: "jewelCrafting",
		time: "120",
		value: "280",
		toMake: [
			{
				thing: "PolishedAmber",
				quantity: "1"
			}, {
				thing: "SilverBar",
				quantity: "1"
			}
		]
	}, {
		name: "MayaCalendar",
		source: "jewelCrafting",
		time: "120",
		toMake: [
			{
				thing: "GoldBar",
				quantity: "10"
			}, {
				thing: "SilverBar",
				quantity: "2"
			}
		]
	}, {
		name: "HairComb",
		source: "jewelCrafting",
		time: "120",
		toMake: [
			{
				thing: "SilverBar",
				quantity: "1"
			}, {
				thing: "PolishedAmethyst",
				quantity: "15"
			}, {
				thing: "PolishedAlexandrite",
				quantity: "10"
			}
		]
	}, {
		name: "ObsidianKnife",
		source: "jewelCrafting",
		time: "120",
		toMake: [
			{
				thing: "SilverBar",
				quantity: "1"
			}, {
				thing: "Tree",
				quantity: "2"
			}, {
				thing: "PolishedObsidian",
				quantity: "50"
			}
		]
	}, {
		name: "SapphireGlass",
		source: "jewelCrafting",
		time: "120",
		toMake: [
			{
				thing: "PolishedSapphire",
				quantity: "10"
			}
		]
	}, {
		name: "UraniumRod",
		source: "enrichment",
		time: "600",
		toMake: [
			{
				thing: "Uranium",
				quantity: "100"
			}, {
				thing: "Sodium",
				quantity: "50"
			}
		]
	}, {
		name: "Silicon",
		source: "chemicalMining",
		time: "600",
		batch: "5",
		value: "100"
	}, {
		name: "Sulfur",
		source: "chemicalMining",
		time: "600",
		batch: "5",
		value: "100"
	}, {
		name: "Sodium",
		source: "chemicalMining",
		time: "600",
		batch: "5",
		value: "100"
	}, {
		name: "Nitrogen",
		source: "chemicalMining",
		time: "600",
		batch: "3",
		value: "300"
	}, {
		name: "Oil",
		source: "OilPumping",
		value: "21"
	}, {
		name: "Water",
		source: "WaterCollection",
		value: "5"
	}, {
		name: "TreeSeed",
		source: "shop",
		value: "20"
	}, {
		name: "LianaSeed",
		source: "shop",
		value: "1000"
	}, {
		name: "GrapeSeed",
		source: "shop",
		value: "1200"
	}, {
		name: "Oxygen",
		source: "Hydrogen",
		value: "800"
	}, {
		name: "LutetiumOre",
		source: "asteroid",
		value: "500"
	}, {
		name: "SodiumChloride",
		source: "asteroid",
		value: "100"
	}, {
		name: "CosmicIce",
		source: "asterod",
		value: "100"
	}, {
		name: "MoonStone",
		source: "rare",
		value: "0"
	}
];