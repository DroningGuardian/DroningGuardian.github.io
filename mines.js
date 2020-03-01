const mines = [
	{
		area: "1",	Coal: "100.00"
	}, {
		area: "2",	Coal: "70.00",	Copper: "30.00"
	}, {
		area: "3",	Coal: "59.50",	Copper: "28.33",	Iron: "9.17",	Amber: "2.50",	Gold: "0.50"
	}, {
		area: "4",	Coal: "54.25",	Copper: "32.50",	Iron: "10.25",	Amber: "2.25",	Gold: "0.75"
	}, {
		area: "5",	Coal: "49.00",	Copper: "36.67",	Iron: "11.33",	Amber: "2.00",	Gold: "1.00"
	}, {
		area: "6",	Coal: "43.75",	Copper: "40.83",	Iron: "12.42",	Amber: "1.75",	Gold: "1.25"
	}, {
		area: "7",	Copper: "45.00",	Coal: "38.50",	Iron: "13.50",	Gold: "1.50",	Amber: "1.50"
	}, {
		area: "8",	Copper: "49.17",	Coal: "33.25",	Iron: "14.58",	Gold: "1.75",	Amber: "1.25"
	}, {
		area: "9",	Copper: "53.33",	Coal: "28.00",	Iron: "15.67",	Gold: "2.00",	Amber: "1.00"
	}, {
		area: "10",	Copper: "57.50",	Coal: "16.75",	Gold: "2.25",	Amber: "0.75"
	}, {
		area: "11",	Copper: "61.67",	Iron: "17.83",	Coal: "17.50",	Gold: "2.50",	Amber: "0.50"
	}, {
		area: "12",	Copper: "65.83",	Iron: "18.92",	Coal: "12.25",	Gold: "2.75",	Amber: "0.25"
	}, {
		area: "13",	Copper: "100.00"
	}, {
		area: "14",	Copper: "70.00",	Iron: "30.00"
	}, {
		area: "15",	Copper: "58.33",	Iron: "19.50",	Amber: "10.00",	Coal: "5.83",	Aluminium: "3.33",	Gold: "2.50",	Silver: "0.50"
	}, {
		area: "16",	Copper: "52.50",	Iron: "19.25",	Amber: "15.00",	Coal: "5.25",	Aluminium: "5.00",	Gold: "2.25",	Silver: "0.75"
	}, {
		area: "17",	Copper: "46.67",	Amber: "20.00",	Iron: "19.00",	Aluminium: "6.67",	Coal: "4.67",	Gold: "2.00",	Silver: "1.00"
	}, {
		area: "18",	Copper: "40.83",	Amber: "25.00",	Iron: "18.75",	Aluminium: "8.33",	Coal: "4.08",	Gold: "1.75",	Silver: "1.25"
	}, {
		area: "19",	Copper: "35.00",	Amber: "30.00",	Iron: "18.50",	Aluminium: "10.00",	Coal: "3.50",	Silver: "1.50",	Gold: "1.50"
	}, {
		area: "20",	Amber: "35.00",	Copper: "29.17",	Iron: "18.25",	Aluminium: "11.67",	Coal: "2.92",	Silver: "1.75",	Gold: "1.25"
	}, {
		area: "21",	Amber: "40.00",	Copper: "23.33",	Iron: "18.00",	Aluminium: "13.33",	Coal: "2.33",	Silver: "2.00",	Gold: "1.00"
	}, {
		area: "22",	Amber: "45.00",	Iron: "17.75",	Copper: "17.50",	Aluminium: "15.00",	Silver: "2.25",	Coal: "1.75",	Gold: "0.75"
	}, {
		area: "23",	Amber: "50.00",	Iron: "17.50",	Aluminium: "16.67",	Copper: "11.67",	Silver: "2.50",	Coal: "1.17",	Gold: "0.50"
	}, {
		area: "24",	Amber: "55.00",	Aluminium: "18.33",	Iron: "17.25",	Copper: "5.83",	Silver: "2.75",	Coal: "0.58",	Gold: "0.25"
	}, {
		area: "25",	Amber: "100.00"
	}, {
		area: "26",	Amber: "70.00",	Aluminium: "30.00"
	}, {
		area: "27",	Amber: "50.00",	Aluminium: "26.67",	Iron: "19.17",	Silver: "4.17"
	}, {
		area: "28",	Amber: "45.00",	Aluminium: "30.00",	Iron: "20.25",	Silver: "4.75"
	}, {
		area: "29",	Amber: "40.00",	Aluminium: "33.33",	Iron: "21.33",	Silver: "5.33"
	}, {
		area: "30",	Aluminium: "36.67",	Amber: "35.00",	Iron: "22.42",	Silver: "5.92"
	}, {
		area: "31",	Aluminium: "40.00",	Amber: "30.00",	Iron: "23.50",	Silver: "6.50"
	}, {
		area: "32",	Aluminium: "43.33",	Amber: "25.00",	Iron: "24.58",	Silver: "7.08"
	}, {
		area: "33",	Aluminium: "46.67",	Iron: "25.67",	Amber: "20.00",	Silver: "7.67"
	}, {
		area: "34",	Aluminium: "50.00",	Iron: "26.75",	Amber: "15.00",	Silver: "8.25"
	}, {
		area: "35",	Aluminium: "53.33",	Iron: "27.83",	Amber: "10.00",	Silver: "8.83"
	}, {
		area: "36",	Aluminium: "56.67",	Iron: "28.92",	Silver: "9.42",	Amber: "5.00"
	}, {
		area: "37",	Aluminium: "100.00"
	}, {
		area: "38",	Aluminium: "70.00",	Iron: "30.00"
	}, {
		area: "39",	Aluminium: "50.00",	Iron: "25.00",	Silver: "11.17",	Gold: "10.00",	Emerald: "3.83"
	}, {
		area: "40",	Aluminium: "45.00",	Iron: "22.50",	Gold: "15.00",	Silver: "11.75",	Emerald: "5.75"
	}, {
		area: "41",	Aluminium: "40.00",	Iron: "20.00",	Gold: "20.00",	Silver: "12.33",	Emerald: "7.67"
	}, {
		area: "42",	Aluminium: "35.00",	Gold: "25.00",	Iron: "17.50",	Silver: "12.92",	Emerald: "9.58"
	}, {
		area: "43",	Gold: "30.00",	Aluminium: "30.00",	Iron: "15.00",	Silver: "13.50",	Emerald: "11.50"
	}, {
		area: "44",	Gold: "35.00",	Aluminium: "25.00",	Silver: "14.08",	Emerald: "13.42",	Iron: "12.50"
	}, {
		area: "45",	Gold: "40.00",	Aluminium: "20.00",	Emerald: "15.33",	Silver: "14.67",	Iron: "10.00"
	}, {
		area: "46",	Gold: "45.00",	Emerald: "17.25",	Silver: "15.25",	Aluminium: "15.00",	Iron: "7.50"
	}, {
		area: "47",	Gold: "50.00",	Emerald: "19.17",	Silver: "15.83",	Aluminium: "10.00",	Iron: "5.00"
	}, {
		area: "48",	Gold: "55.00",	Emerald: "21.08",	Silver: "16.42",	Aluminium: "5.00",	Iron: "2.50"
	}, {
		area: "49",	Gold: "100.00"
	}, {
		area: "50",	Gold: "70.00",	Emerald: "30.00"
	}, {
		area: "51",	Gold: "50.00",	Emerald: "25.83",	Silver: "14.17",	Ruby: "5.00",	Diamond: "3.33",	Topaz: "1.67"
	}, {
		area: "52",	Gold: "45.00",	Emerald: "27.25",	Silver: "12.75",	Ruby: "7.50",	Diamond: "5.00",	Topaz: "2.50"
	}, {
		area: "53",	Gold: "40.00",	Emerald: "28.67",	Silver: "11.33",	Ruby: "10.00",	Diamond: "6.67",	Topaz: "3.33"
	}, {
		area: "54",	Gold: "35.00",	Emerald: "30.08",	Ruby: "12.50",	Silver: "9.92",	Diamond: "8.33",	Topaz: "4.17"
	}, {
		area: "55",	Emerald: "31.50",	Gold: "30.00",	Ruby: "15.00",	Diamond: "10.00",	Silver: "8.50",	Topaz: "5.00"
	}, {
		area: "56",	Emerald: "32.92",	Gold: "25.00",	Ruby: "17.50",	Diamond: "11.67",	Silver: "7.08",	Topaz: "5.83"
	}, {
		area: "57",	Emerald: "34.33",	Ruby: "20.00",	Gold: "20.00",	Diamond: "13.33",	Topaz: "6.67",	Silver: "5.67"
	}, {
		area: "58",	Emerald: "35.75",	Ruby: "22.50",	Gold: "15.00",	Diamond: "15.00",	Topaz: "7.50",	Silver: "4.25"
	}, {
		area: "59",	Emerald: "37.17",	Ruby: "25.00",	Diamond: "16.67",	Gold: "10.00",	Topaz: "8.33",	Silver: "2.83"
	}, {
		area: "60",	Emerald: "38.58",	Ruby: "27.50",	Diamond: "18.33",	Topaz: "9.17",	Gold: "5.00",	Silver: "1.42"
	}, {
		area: "61",	Emerald: "100.00"
	}, {
		area: "62",	Emerald: "70.00",	Ruby: "30.00"
	}, {
		area: "63",	Emerald: "33.33",	Ruby: "31.67",	Diamond: "16.67",	Topaz: "13.33",	Sapphire: "3.33",	Amethyst: "1.67"
	}, {
		area: "64",	Ruby: "32.50",	Emerald: "30.00",	Topaz: "15.00",	Diamond: "15.00",	Sapphire: "5.00",	Amethyst: "2.50"
	}, {
		area: "65",	Ruby: "33.33",	Emerald: "26.67",	Topaz: "16.67",	Diamond: "13.33",	Sapphire: "6.67",	Amethyst: "3.33"
	}, {
		area: "66",	Ruby: "34.17",	Emerald: "23.33",	Topaz: "18.33",	Diamond: "11.67",	Sapphire: "8.33",	Amethyst: "4.17"
	}, {
		area: "67",	Ruby: "35.00",	Topaz: "20.00",	Emerald: "20.00",	Sapphire: "10.00",	Diamond: "5.00"
	}, {
		area: "68",	Ruby: "35.83",	Topaz: "21.67",	Emerald: "16.67",	Sapphire: "11.67",	Diamond: "8.33",	Amethyst: "5.83"
	}, {
		area: "69",	Ruby: "36.67",	Topaz: "23.33",	Sapphire: "13.33",	Emerald: "13.33",	Diamond: "6.67",	Amethyst: "6.67"
	}, {
		area: "70",	Ruby: "37.50",	Topaz: "25.00",	Sapphire: "15.00",	Emerald: "10.00",	Amethyst: "7.50",	Diamond: "5.00"
	}, {
		area: "71",	Ruby: "38.33",	Topaz: "26.67",	Sapphire: "16.67",	Amethyst: "8.33",	Emerald: "6.67",	Diamond: "3.33"
	}, {
		area: "72",	Ruby: "39.17",	Topaz: "28.33",	Sapphire: "18.33",	Amethyst: "9.17",	Emerald: "3.33",	Diamond: "1.67"
	}, {
		area: "73",	Ruby: "100.00"
	}, {
		area: "74",	Ruby: "70.00",	Topaz: "30.00"
	}, {
		area: "75",	Ruby: "33.33",	Topaz: "25.00",	Sapphire: "16.67",	Amethyst: "15.00",	Alexandrite: "4.50",	TitaniumOre: "3.33",	Uranium: "1.67",	Platinum: "0.50"
	}, {
		area: "76",	Ruby: "30.00",	Topaz: "22.50",	Amethyst: "17.50",	Sapphire: "15.00",	Alexandrite: "6.75",	TitaniumOre: "5.00",	Uranium: "2.50",	Platinum: "0.75"
	}, {
		area: "77",	Ruby: "26.67",	Topaz: "20.00",	Amethyst: "20.00",	Sapphire: "13.33",	Alexandrite: "9.00",	TitaniumOre: "6.67",	Uranium: "3.33",	Platinum: "1.00"
	}, {
		area: "78",	Ruby: "23.33",	Amethyst: "22.50",	Topaz: "17.50",	Sapphire: "11.67",	Alexandrite: "11.25",	TitaniumOre: "8.33",	Uranium: "4.17",	Platinum: "1.25"
	}, {
		area: "79",	Amethyst: "25.00",	Ruby: "20.00",	Topaz: "15.00",	Alexandrite: "13.50",	TitaniumOre: "10.00",	Sapphire: "10.00",	Uranium: "5.00",	Platinum: "1.50"
	}, {
		area: "80",	Amethyst: "27.50",	Ruby: "16.67",	Alexandrite: "15.75",	Topaz: "12.50",	TitaniumOre: "11.67",	Sapphire: "8.33",	Uranium: "5.83",	Platinum: "1.75"
	}, {
		area: "81",	Amethyst: "30.00",	Alexandrite: "18.00",	TitaniumOre: "13.33",	Ruby: "13.33",	Topaz: "10.00",	Uranium: "6.67",	Sapphire: "6.67",	Platinum: "2.00"
	}, {
		area: "82",	Amethyst: "32.50",	Alexandrite: "20.25",	TitaniumOre: "15.00",	Ruby: "10.00",	Uranium: "7.50",	Topaz: "7.50",	Sapphire: "5.00",	Platinum: "2.25"
	}, {
		area: "83",	Amethyst: "35.00",	Alexandrite: "22.50",	TitaniumOre: "16.67",	Uranium: "8.33",	Ruby: "6.67",	Topaz: "5.00",	Sapphire: "3.33",	Platinum: "2.50"
	}, {
		area: "84",	Amethyst: "37.50",	Alexandrite: "24.75",	TitaniumOre: "18.33",	Uranium: "9.17",	Ruby: "3.33",	Platinum: "2.75",	Topaz: "2.50",	Sapphire: "1.67"
	}, {
		area: "85", Amethyst: "100.00"
	}, {
		area: "86",	Amethyst: "70.00",	Alexandrite: "30.00"
	}, {
		area: "87",	Amethyst: "33.33",	Alexandrite: "22.50",	TitaniumOre: "18.33",	Obsidian: "10.00",	Uranium: "8.33",	Platinum: "3.00",	Diamond: "2.50",	Sapphire: "2.00"
	}, {
		area: "88",	Amethyst: "30.00",	Alexandrite: "20.25",	TitaniumOre: "17.50",	Obsidian: "15.00",	Uranium: "7.50",	Diamond: "3.75",	Sapphire: "3.00",	Platinum: "3.00"
	}, {
		area: "89",	Amethyst: "26.67",	Obsidian: "20.00",	Alexandrite: "18.00",	TitaniumOre: "16.67",	Uranium: "6.67",	Diamond: "5.00",	Sapphire: "4.00",	Platinum: "3.00"
	}, {
		area: "90",	Obsidian: "25.00",	Amethyst: "23.33",	TitaniumOre: "15.83",	Alexandrite: "15.75",	Diamond: "6.25",	Uranium: "5.83",	Sapphire: "5.00",	Platinum: "3.00"
	}, {
		area: "91",	Obsidian: "30.00",	Amethyst: "20.00",	TitaniumOre: "15.00",	Alexandrite: "13.50",	Diamond: "7.50",	Sapphire: "6.00",	Uranium: "5.00",	Platinum: "3.00"
	}, {
		area: "92",	Obsidian: "35.00",	Amethyst: "16.67",	TitaniumOre: "14.17",	Alexandrite: "11.25",	Diamond: "8.75",	Sapphire: "7.00",	Uranium: "4.17",	Platinum: "3.00"
	}, {
		area: "93",	Obsidian: "40.00",	TitaniumOre: "13.33",	Amethyst: "13.33",	Diamond: "10.00",	Alexandrite: "9.00",	Sapphire: "8.00",	Uranium: "3.33",	Platinum: "3.00"
	}, {
		area: "94",	Obsidian: "45.00",	TitaniumOre: "12.50",	Diamond: "11.25",	Amethyst: "10.00",	Sapphire: "9.00",	Alexandrite: "6.75",	Platinum: "3.00",	Uranium: "2.50"
	}, {
		area: "95",	Obsidian: "50.00",	Diamond: "12.50",	TitaniumOre: "11.67",	Sapphire: "10.00",	Amethyst: "6.67",	Alexandrite: "4.50",	Platinum: "3.00",	Uranium: "1.67"
	}, {
		area: "96",	Obsidian: "55.00",	Diamond: "13.75",	Sapphire: "11.00",	TitaniumOre: "10.83",	Amethyst: "3.33",	Platinum: "3.00",	Alexandrite: "2.25",	Uranium: "0.83"
	}, {
		area: "97",	Obsidian: "100.00"
	}, {
		area: "98",	Obsidian: "70.00",	Diamond: "30.00"
	}, {
		area: "99",	Obsidian: "50.00",	Diamond: "12.50",	Iron: "11.00",	Sapphire: "10.00",	TitaniumOre: "8.33",	Coal: "3.33",	Platinum: "2.50",	Silver: "2.00",	Helium3: "0.33"
	}, {
		area: "100",	Obsidian: "45.00",	Iron: "16.50",	Diamond: "11.25",	Sapphire: "9.00",	TitaniumOre: "7.50",	Coal: "5.00",	Silver: "3.00",	Platinum: "2.25",	Helium3: "0.50"
	}, {
		area: "101",	Obsidian: "40.00",	Iron: "22.00",	Diamond: "10.00",	Sapphire: "8.00",	TitaniumOre: "6.67",	Coal: "6.67",	Silver: "4.00",	Platinum: "2.00",	Helium3: "0.67"
	}, {
		area: "102",	Obsidian: "35.00",	Iron: "27.50",	Diamond: "8.75",	Coal: "8.33",	Sapphire: "7.00",	TitaniumOre: "5.83",	Silver: "5.00",	Platinum: "1.75",	Helium3: "0.83"
	}, {
		area: "103",	Iron: "33.00",	Obsidian: "30.00",	Coal: "10.00",	Diamond: "7.50",	Silver: "6.00",	Sapphire: "6.00",	TitaniumOre: "5.00",	Platinum: "1.50",	Helium3: "1.00"
	}, {
		area: "104",	Iron: "38.50",	Obsidian: "25.00",	Coal: "11.67",	Silver: "7.00",	Diamond: "6.25",	Sapphire: "5.00",	TitaniumOre: "4.17",	Platinum: "1.25",	Helium3: "1.17"
	}, {
		area: "105",	Iron: "44.00",	Obsidian: "20.00",	Coal: "13.33",	Silver: "8.00",	Diamond: "5.00",	Sapphire: "4.00",	TitaniumOre: "3.33",	Helium3: "1.33",	Platinum: "1.00"
	}, {
		area: "106",	Iron: "49.50",	Obsidian: "15.00",	Coal: "15.00",	Silver: "9.00",	Diamond: "3.75",	Sapphire: "3.00",	TitaniumOre: "2.50",	Helium3: "1.50",	Platinum: "0.75"
	}, {
		area: "107",	Iron: "55.00",	Coal: "16.67",	Silver: "10.00",	Obsidian: "10.00",	Diamond: "2.50",	Sapphire: "2.00",	TitaniumOre: "1.67",	Helium3: "1.67",	Platinum: "0.50"
	}, {
		area: "108",	Iron: "60.50",	Coal: "18.33",	Silver: "11.00",	Obsidian: "5.00",	Helium3: "1.83",	Diamond: "1.25",	Sapphire: "1.00",	TitaniumOre: "0.83",	Platinum: "0.25"
	}, {
		area: "109",	Iron: "66.00",	Coal: "20.00",	Silver: "12.00",	Helium3: "2.00"
	}, {
		area: "110",	Iron: "66.33",	Coal: "18.33",	Silver: "11.00",	Helium3: "4.33"
	}, {
		area: "111",	Iron: "66.67",	Coal: "16.67",	Silver: "10.00",	Helium3: "6.67"
	}, {
		area: "112",	Iron: "67.00",	Coal: "15.00",	Silver: "9.00",	Helium3: "9.00"
	}, {
		area: "113",	Iron: "67.33",	Coal: "13.33",	Helium3: "11.33",	Silver: "8.00"
	}, {
		area: "114",	Iron: "67.67",	Helium3: "13.67",	Coal: "11.67",	Silver: "7.00"
	}, {
		area: "115",	Iron: "68.00",	Helium3: "16.00",	Coal: "10.00",	Silver: "6.00"
	}, {
		area: "116",	Iron: "68.33",	Helium3: "18.33",	Coal: "8.33",	Silver: "5.00"
	}, {
		area: "117",	Iron: "68.67",	Helium3: "20.67",	Coal: "6.67",	Silver: "4.00"
	}, {
		area: "118",	Iron: "69.00",	Helium3: "23.00",	Coal: "5.00",	Silver: "3.00"
	}, {
		area: "119",	Iron: "100.00"
	}, {
		area: "120",	Iron: "50.00",	Coal: "50.00"
	}
];