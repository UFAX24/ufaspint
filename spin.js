// DATA
const rawData = [
    {
      "cmc_rank": 1,
      "ticker": "BTC",
      "name": "Bitcoin",
      "full_name": "Bitcoin (BTC)"
    },
    {
      "cmc_rank": 2,
      "ticker": "ETH",
      "name": "Ethereum",
      "full_name": "Ethereum (ETH)"
    },
    {
      "cmc_rank": 3,
      "ticker": "XRP",
      "name": "XRP",
      "full_name": "XRP (XRP)"
    },
    {
      "cmc_rank": 4,
      "ticker": "BCH",
      "name": "Bitcoin Cash",
      "full_name": "Bitcoin Cash (BCH)"
    },
    {
      "cmc_rank": 5,
      "ticker": "LTC",
      "name": "Litecoin",
      "full_name": "Litecoin (LTC)"
    },
    {
      "cmc_rank": 6,
      "ticker": "EOS",
      "name": "EOS",
      "full_name": "EOS (EOS)"
    },
    {
      "cmc_rank": 7,
      "ticker": "BNB",
      "name": "Binance Coin",
      "full_name": "Binance Coin (BNB)"
    },
    {
      "cmc_rank": 8,
      "ticker": "USDT",
      "name": "Tether",
      "full_name": "Tether (USDT)"
    },
    {
      "cmc_rank": 9,
      "ticker": "XLM",
      "name": "Stellar",
      "full_name": "Stellar (XLM)"
    },
    {
      "cmc_rank": 10,
      "ticker": "ADA",
      "name": "Cardano",
      "full_name": "Cardano (ADA)"
    },
    {
      "cmc_rank": 11,
      "ticker": "TRX",
      "name": "TRON",
      "full_name": "TRON (TRX)"
    },
    {
      "cmc_rank": 12,
      "ticker": "XMR",
      "name": "Monero",
      "full_name": "Monero (XMR)"
    },
    {
      "cmc_rank": 13,
      "ticker": "DASH",
      "name": "Dash",
      "full_name": "Dash (DASH)"
    },
    {
      "cmc_rank": 14,
      "ticker": "BSV",
      "name": "Bitcoin SV",
      "full_name": "Bitcoin SV (BSV)"
    },
    {
      "cmc_rank": 15,
      "ticker": "MIOTA",
      "name": "IOTA",
      "full_name": "IOTA (MIOTA)"
    },
    {
      "cmc_rank": 16,
      "ticker": "XTZ",
      "name": "Tezos",
      "full_name": "Tezos (XTZ)"
    },
    {
      "cmc_rank": 17,
      "ticker": "ATOM",
      "name": "Cosmos",
      "full_name": "Cosmos (ATOM)"
    },
    {
      "cmc_rank": 18,
      "ticker": "ETC",
      "name": "Ethereum Classic",
      "full_name": "Ethereum Classic (ETC)"
    },
    {
      "cmc_rank": 19,
      "ticker": "NEO",
      "name": "NEO",
      "full_name": "NEO (NEO)"
    },
    {
      "cmc_rank": 20,
      "ticker": "ONT",
      "name": "Ontology",
      "full_name": "Ontology (ONT)"
    },
    {
      "cmc_rank": 21,
      "ticker": "MKR",
      "name": "Maker",
      "full_name": "Maker (MKR)"
    },
    {
      "cmc_rank": 22,
      "ticker": "XEM",
      "name": "NEM",
      "full_name": "NEM (XEM)"
    },
    {
      "cmc_rank": 23,
      "ticker": "BAT",
      "name": "Basic Attention Token",
      "full_name": "Basic Attention Token (BAT)"
    },
    {
      "cmc_rank": 24,
      "ticker": "ZEC",
      "name": "Zcash",
      "full_name": "Zcash (ZEC)"
    },
    {
      "cmc_rank": 25,
      "ticker": "BTG",
      "name": "Bitcoin Gold",
      "full_name": "Bitcoin Gold (BTG)"
    },
    {
      "cmc_rank": 26,
      "ticker": "CRO",
      "name": "Crypto.com Chain",
      "full_name": "Crypto.com Chain (CRO)"
    },
    {
      "cmc_rank": 27,
      "ticker": "VET",
      "name": "VeChain",
      "full_name": "VeChain (VET)"
    },
    {
      "cmc_rank": 28,
      "ticker": "USDC",
      "name": "USD Coin",
      "full_name": "USD Coin (USDC)"
    },
    {
      "cmc_rank": 29,
      "ticker": "DOGE",
      "name": "Dogecoin",
      "full_name": "Dogecoin (DOGE)"
    },
    {
      "cmc_rank": 30,
      "ticker": "DCR",
      "name": "Decred",
      "full_name": "Decred (DCR)"
    },
    {
      "cmc_rank": 31,
      "ticker": "WAVES",
      "name": "Waves",
      "full_name": "Waves (WAVES)"
    },
    {
      "cmc_rank": 32,
      "ticker": "OMG",
      "name": "OmiseGO",
      "full_name": "OmiseGO (OMG)"
    },
    {
      "cmc_rank": 33,
      "ticker": "QTUM",
      "name": "Qtum",
      "full_name": "Qtum (QTUM)"
    },
    {
      "cmc_rank": 34,
      "ticker": "LINK",
      "name": "Chainlink",
      "full_name": "Chainlink (LINK)"
    },
    {
      "cmc_rank": 35,
      "ticker": "TUSD",
      "name": "TrueUSD",
      "full_name": "TrueUSD (TUSD)"
    },
    {
      "cmc_rank": 36,
      "ticker": "NANO",
      "name": "Nano",
      "full_name": "Nano (NANO)"
    },
    {
      "cmc_rank": 37,
      "ticker": "REP",
      "name": "Augur",
      "full_name": "Augur (REP)"
    },
    {
      "cmc_rank": 38,
      "ticker": "LSK",
      "name": "Lisk",
      "full_name": "Lisk (LSK)"
    },
    {
      "cmc_rank": 39,
      "ticker": "PAX",
      "name": "Paxos Standard Token",
      "full_name": "Paxos Standard Token (PAX)"
    },
    {
      "cmc_rank": 40,
      "ticker": "BCN",
      "name": "Bytecoin",
      "full_name": "Bytecoin (BCN)"
    },
    {
      "cmc_rank": 41,
      "ticker": "BCD",
      "name": "Bitcoin Diamond",
      "full_name": "Bitcoin Diamond (BCD)"
    },
    {
      "cmc_rank": 42,
      "ticker": "RVN",
      "name": "Ravencoin",
      "full_name": "Ravencoin (RVN)"
    },
    {
      "cmc_rank": 43,
      "ticker": "HOT",
      "name": "Holo",
      "full_name": "Holo (HOT)"
    },
    {
      "cmc_rank": 44,
      "ticker": "ZRX",
      "name": "0x",
      "full_name": "0x (ZRX)"
    },
    {
      "cmc_rank": 45,
      "ticker": "ICX",
      "name": "ICON",
      "full_name": "ICON (ICX)"
    },
    {
      "cmc_rank": 46,
      "ticker": "IOST",
      "name": "IOST",
      "full_name": "IOST (IOST)"
    },
    {
      "cmc_rank": 47,
      "ticker": "BTT",
      "name": "BitTorrent",
      "full_name": "BitTorrent (BTT)"
    },
    {
      "cmc_rank": 48,
      "ticker": "ABBC",
      "name": "ABBC Coin",
      "full_name": "ABBC Coin (ABBC)"
    },
    {
      "cmc_rank": 49,
      "ticker": "BTS",
      "name": "BitShares",
      "full_name": "BitShares (BTS)"
    },
    {
      "cmc_rank": 50,
      "ticker": "ZIL",
      "name": "Zilliqa",
      "full_name": "Zilliqa (ZIL)"
    },
    {
      "cmc_rank": 51,
      "ticker": "NPXS",
      "name": "Pundi X",
      "full_name": "Pundi X (NPXS)"
    },
    {
      "cmc_rank": 52,
      "ticker": "KMD",
      "name": "Komodo",
      "full_name": "Komodo (KMD)"
    },
    {
      "cmc_rank": 53,
      "ticker": "DGB",
      "name": "DigiByte",
      "full_name": "DigiByte (DGB)"
    },
    {
      "cmc_rank": 54,
      "ticker": "AE",
      "name": "Aeternity",
      "full_name": "Aeternity (AE)"
    },
    {
      "cmc_rank": 55,
      "ticker": "XVG",
      "name": "Verge",
      "full_name": "Verge (XVG)"
    },
    {
      "cmc_rank": 56,
      "ticker": "HT",
      "name": "Huobi Token",
      "full_name": "Huobi Token (HT)"
    },
    {
      "cmc_rank": 57,
      "ticker": "SC",
      "name": "Siacoin",
      "full_name": "Siacoin (SC)"
    },
    {
      "cmc_rank": 58,
      "ticker": "INB",
      "name": "Insight Chain",
      "full_name": "Insight Chain (INB)"
    },
    {
      "cmc_rank": 59,
      "ticker": "ENJ",
      "name": "Enjin Coin",
      "full_name": "Enjin Coin (ENJ)"
    },
    {
      "cmc_rank": 60,
      "ticker": "BTM",
      "name": "Bytom",
      "full_name": "Bytom (BTM)"
    },
    {
      "cmc_rank": 61,
      "ticker": "STEEM",
      "name": "Steem",
      "full_name": "Steem (STEEM)"
    },
    {
      "cmc_rank": 62,
      "ticker": "AOA",
      "name": "Aurora",
      "full_name": "Aurora (AOA)"
    },
    {
      "cmc_rank": 63,
      "ticker": "KCS",
      "name": "KuCoin Shares",
      "full_name": "KuCoin Shares (KCS)"
    },
    {
      "cmc_rank": 64,
      "ticker": "WTC",
      "name": "Waltonchain",
      "full_name": "Waltonchain (WTC)"
    },
    {
      "cmc_rank": 65,
      "ticker": "THR",
      "name": "ThoreCoin",
      "full_name": "ThoreCoin (THR)"
    },
    {
      "cmc_rank": 66,
      "ticker": "QBIT",
      "name": "Qubitica",
      "full_name": "Qubitica (QBIT)"
    },
    {
      "cmc_rank": 67,
      "ticker": "FCT",
      "name": "Factom",
      "full_name": "Factom (FCT)"
    },
    {
      "cmc_rank": 68,
      "ticker": "CNX",
      "name": "Cryptonex",
      "full_name": "Cryptonex (CNX)"
    },
    {
      "cmc_rank": 69,
      "ticker": "DAI",
      "name": "Dai",
      "full_name": "Dai (DAI)"
    },
    {
      "cmc_rank": 70,
      "ticker": "STRAT",
      "name": "Stratis",
      "full_name": "Stratis (STRAT)"
    },
    {
      "cmc_rank": 71,
      "ticker": "THETA",
      "name": "THETA",
      "full_name": "THETA (THETA)"
    },
    {
      "cmc_rank": 72,
      "ticker": "XIN",
      "name": "Mixin",
      "full_name": "Mixin (XIN)"
    },
    {
      "cmc_rank": 73,
      "ticker": "ZEN",
      "name": "Horizen",
      "full_name": "Horizen (ZEN)"
    },
    {
      "cmc_rank": 74,
      "ticker": "SNT",
      "name": "Status",
      "full_name": "Status (SNT)"
    },
    {
      "cmc_rank": 75,
      "ticker": "MCO",
      "name": "Crypto.com",
      "full_name": "Crypto.com (MCO)"
    },
    {
      "cmc_rank": 76,
      "ticker": "VEST",
      "name": "VestChain",
      "full_name": "VestChain (VEST)"
    },
    {
      "cmc_rank": 77,
      "ticker": "ARDR",
      "name": "Ardor",
      "full_name": "Ardor (ARDR)"
    },
    {
      "cmc_rank": 78,
      "ticker": "MAID",
      "name": "MaidSafeCoin",
      "full_name": "MaidSafeCoin (MAID)"
    },
    {
      "cmc_rank": 79,
      "ticker": "DGD",
      "name": "DigixDAO",
      "full_name": "DigixDAO (DGD)"
    },
    {
      "cmc_rank": 80,
      "ticker": "GNT",
      "name": "Golem",
      "full_name": "Golem (GNT)"
    },
    {
      "cmc_rank": 81,
      "ticker": "TRUE",
      "name": "TrueChain",
      "full_name": "TrueChain (TRUE)"
    },
    {
      "cmc_rank": 82,
      "ticker": "AION",
      "name": "Aion",
      "full_name": "Aion (AION)"
    },
    {
      "cmc_rank": 83,
      "ticker": "GXC",
      "name": "GXChain",
      "full_name": "GXChain (GXC)"
    },
    {
      "cmc_rank": 84,
      "ticker": "PAI",
      "name": "Project Pai",
      "full_name": "Project Pai (PAI)"
    },
    {
      "cmc_rank": 85,
      "ticker": "MONA",
      "name": "MonaCoin",
      "full_name": "MonaCoin (MONA)"
    },
    {
      "cmc_rank": 86,
      "ticker": "WAX",
      "name": "WAX",
      "full_name": "WAX (WAX)"
    },
    {
      "cmc_rank": 87,
      "ticker": "MXM",
      "name": "Maximine Coin",
      "full_name": "Maximine Coin (MXM)"
    },
    {
      "cmc_rank": 88,
      "ticker": "ELF",
      "name": "aelf",
      "full_name": "aelf (ELF)"
    },
    {
      "cmc_rank": 89,
      "ticker": "ARK",
      "name": "Ark",
      "full_name": "Ark (ARK)"
    },
    {
      "cmc_rank": 90,
      "ticker": "PPT",
      "name": "Populous",
      "full_name": "Populous (PPT)"
    },
    {
      "cmc_rank": 91,
      "ticker": "DENT",
      "name": "Dent",
      "full_name": "Dent (DENT)"
    },
    {
      "cmc_rank": 92,
      "ticker": "RLC",
      "name": "iExec RLC",
      "full_name": "iExec RLC (RLC)"
    },
    {
      "cmc_rank": 93,
      "ticker": "ABT",
      "name": "Arcblock",
      "full_name": "Arcblock (ABT)"
    },
    {
      "cmc_rank": 94,
      "ticker": "SAN",
      "name": "Santiment Network Token",
      "full_name": "Santiment Network Token (SAN)"
    },
    {
      "cmc_rank": 95,
      "ticker": "MANA",
      "name": "Decentraland",
      "full_name": "Decentraland (MANA)"
    },
    {
      "cmc_rank": 96,
      "ticker": "ETP",
      "name": "Metaverse ETP",
      "full_name": "Metaverse ETP (ETP)"
    },
    {
      "cmc_rank": 97,
      "ticker": "XZC",
      "name": "Zcoin",
      "full_name": "Zcoin (XZC)"
    },
    {
      "cmc_rank": 98,
      "ticker": "JCT",
      "name": "Japan Content Token",
      "full_name": "Japan Content Token (JCT)"
    },
    {
      "cmc_rank": 99,
      "ticker": "ELA",
      "name": "Elastos",
      "full_name": "Elastos (ELA)"
    },
    {
      "cmc_rank": 100,
      "ticker": "R",
      "name": "Revain",
      "full_name": "Revain (R)"
    },
    {
      "cmc_rank": 101,
      "ticker": "CLAM",
      "name": "Clams",
      "full_name": "Clams (CLAM)"
    },
    {
      "cmc_rank": 102,
      "ticker": "RDD",
      "name": "ReddCoin",
      "full_name": "ReddCoin (RDD)"
    },
    {
      "cmc_rank": 103,
      "ticker": "LOOM",
      "name": "Loom Network",
      "full_name": "Loom Network (LOOM)"
    },
    {
      "cmc_rank": 104,
      "ticker": "ORBS",
      "name": "Orbs",
      "full_name": "Orbs (ORBS)"
    },
    {
      "cmc_rank": 105,
      "ticker": "HC",
      "name": "HyperCash",
      "full_name": "HyperCash (HC)"
    },
    {
      "cmc_rank": 106,
      "ticker": "NULS",
      "name": "NULS",
      "full_name": "NULS (NULS)"
    },
    {
      "cmc_rank": 107,
      "ticker": "LRC",
      "name": "Loopring",
      "full_name": "Loopring (LRC)"
    },
    {
      "cmc_rank": 108,
      "ticker": "NEW",
      "name": "Newton",
      "full_name": "Newton (NEW)"
    },
    {
      "cmc_rank": 109,
      "ticker": "NAS",
      "name": "Nebulas",
      "full_name": "Nebulas (NAS)"
    },
    {
      "cmc_rank": 110,
      "ticker": "SOLVE",
      "name": "SOLVE",
      "full_name": "SOLVE (SOLVE)"
    },
    {
      "cmc_rank": 111,
      "ticker": "WICC",
      "name": "WaykiChain",
      "full_name": "WaykiChain (WICC)"
    },
    {
      "cmc_rank": 112,
      "ticker": "ETN",
      "name": "Electroneum",
      "full_name": "Electroneum (ETN)"
    },
    {
      "cmc_rank": 113,
      "ticker": "POWR",
      "name": "Power Ledger",
      "full_name": "Power Ledger (POWR)"
    },
    {
      "cmc_rank": 114,
      "ticker": "QASH",
      "name": "QASH",
      "full_name": "QASH (QASH)"
    },
    {
      "cmc_rank": 115,
      "ticker": "NET",
      "name": "NEXT",
      "full_name": "NEXT (NET)"
    },
    {
      "cmc_rank": 116,
      "ticker": "REPO",
      "name": "REPO",
      "full_name": "REPO (REPO)"
    },
    {
      "cmc_rank": 117,
      "ticker": "NEXO",
      "name": "Nexo",
      "full_name": "Nexo (NEXO)"
    },
    {
      "cmc_rank": 118,
      "ticker": "BRD",
      "name": "Bread",
      "full_name": "Bread (BRD)"
    },
    {
      "cmc_rank": 119,
      "ticker": "PART",
      "name": "Particl",
      "full_name": "Particl (PART)"
    },
    {
      "cmc_rank": 120,
      "ticker": "ODE",
      "name": "ODEM",
      "full_name": "ODEM (ODE)"
    },
    {
      "cmc_rank": 121,
      "ticker": "WAN",
      "name": "Wanchain",
      "full_name": "Wanchain (WAN)"
    },
    {
      "cmc_rank": 122,
      "ticker": "POLY",
      "name": "Polymath",
      "full_name": "Polymath (POLY)"
    },
    {
      "cmc_rank": 123,
      "ticker": "MOAC",
      "name": "MOAC",
      "full_name": "MOAC (MOAC)"
    },
    {
      "cmc_rank": 124,
      "ticker": "BNT",
      "name": "Bancor",
      "full_name": "Bancor (BNT)"
    },
    {
      "cmc_rank": 125,
      "ticker": "FUN",
      "name": "FunFair",
      "full_name": "FunFair (FUN)"
    },
    {
      "cmc_rank": 126,
      "ticker": "EURS",
      "name": "STASIS EURS",
      "full_name": "STASIS EURS (EURS)"
    },
    {
      "cmc_rank": 127,
      "ticker": "KNC",
      "name": "Kyber Network",
      "full_name": "Kyber Network (KNC)"
    },
    {
      "cmc_rank": 128,
      "ticker": "CSC",
      "name": "CasinoCoin",
      "full_name": "CasinoCoin (CSC)"
    },
    {
      "cmc_rank": 129,
      "ticker": "KIN",
      "name": "Kin",
      "full_name": "Kin (KIN)"
    },
    {
      "cmc_rank": 130,
      "ticker": "UGAS",
      "name": "UGAS",
      "full_name": "UGAS (UGAS)"
    },
    {
      "cmc_rank": 131,
      "ticker": "LA",
      "name": "LATOKEN",
      "full_name": "LATOKEN (LA)"
    },
    {
      "cmc_rank": 132,
      "ticker": "PIVX",
      "name": "PIVX",
      "full_name": "PIVX (PIVX)"
    },
    {
      "cmc_rank": 133,
      "ticker": "NRG",
      "name": "Energi",
      "full_name": "Energi (NRG)"
    },
    {
      "cmc_rank": 134,
      "ticker": "XPX",
      "name": "ProximaX",
      "full_name": "ProximaX (XPX)"
    },
    {
      "cmc_rank": 135,
      "ticker": "EKT",
      "name": "EDUCare",
      "full_name": "EDUCare (EKT)"
    },
    {
      "cmc_rank": 136,
      "ticker": "TOMO",
      "name": "TomoChain",
      "full_name": "TomoChain (TOMO)"
    },
    {
      "cmc_rank": 137,
      "ticker": "IOTX",
      "name": "IoTeX",
      "full_name": "IoTeX (IOTX)"
    },
    {
      "cmc_rank": 138,
      "ticker": "GBYTE",
      "name": "Obyte",
      "full_name": "Obyte (GBYTE)"
    },
    {
      "cmc_rank": 139,
      "ticker": "CENNZ",
      "name": "Centrality",
      "full_name": "Centrality (CENNZ)"
    },
    {
      "cmc_rank": 140,
      "ticker": "BCZERO",
      "name": "Buggyra Coin Zero",
      "full_name": "Buggyra Coin Zero (BCZERO)"
    },
    {
      "cmc_rank": 141,
      "ticker": "NXT",
      "name": "Nxt",
      "full_name": "Nxt (NXT)"
    },
    {
      "cmc_rank": 142,
      "ticker": "ENG",
      "name": "Enigma",
      "full_name": "Enigma (ENG)"
    },
    {
      "cmc_rank": 143,
      "ticker": "STORJ",
      "name": "Storj",
      "full_name": "Storj (STORJ)"
    },
    {
      "cmc_rank": 144,
      "ticker": "UNO",
      "name": "Unobtanium",
      "full_name": "Unobtanium (UNO)"
    },
    {
      "cmc_rank": 145,
      "ticker": "SYS",
      "name": "Syscoin",
      "full_name": "Syscoin (SYS)"
    },
    {
      "cmc_rank": 146,
      "ticker": "GUSD",
      "name": "Gemini Dollar",
      "full_name": "Gemini Dollar (GUSD)"
    },
    {
      "cmc_rank": 147,
      "ticker": "ECOREAL",
      "name": "Ecoreal Estate",
      "full_name": "Ecoreal Estate (ECOREAL)"
    },
    {
      "cmc_rank": 148,
      "ticker": "BIX",
      "name": "Bibox Token",
      "full_name": "Bibox Token (BIX)"
    },
    {
      "cmc_rank": 149,
      "ticker": "LAMB",
      "name": "Lambda",
      "full_name": "Lambda (LAMB)"
    },
    {
      "cmc_rank": 150,
      "ticker": "VERI",
      "name": "Veritaseum",
      "full_name": "Veritaseum (VERI)"
    },
    {
      "cmc_rank": 151,
      "ticker": "RIF",
      "name": "RIF Token",
      "full_name": "RIF Token (RIF)"
    },
    {
      "cmc_rank": 152,
      "ticker": "LKY",
      "name": "Linkey",
      "full_name": "Linkey (LKY)"
    },
    {
      "cmc_rank": 153,
      "ticker": "MFT",
      "name": "Mainframe",
      "full_name": "Mainframe (MFT)"
    },
    {
      "cmc_rank": 154,
      "ticker": "CMT",
      "name": "CyberMiles",
      "full_name": "CyberMiles (CMT)"
    },
    {
      "cmc_rank": 155,
      "ticker": "PAY",
      "name": "TenX",
      "full_name": "TenX (PAY)"
    },
    {
      "cmc_rank": 156,
      "ticker": "GRS",
      "name": "Groestlcoin",
      "full_name": "Groestlcoin (GRS)"
    },
    {
      "cmc_rank": 157,
      "ticker": "SXDT",
      "name": "Spectre.ai Dividend Token",
      "full_name": "Spectre.ai Dividend Token (SXDT)"
    },
    {
      "cmc_rank": 158,
      "ticker": "TFUEL",
      "name": "Theta Fuel",
      "full_name": "Theta Fuel (TFUEL)"
    },
    {
      "cmc_rank": 159,
      "ticker": "GAS",
      "name": "Gas",
      "full_name": "Gas (GAS)"
    },
    {
      "cmc_rank": 160,
      "ticker": "QKC",
      "name": "QuarkChain",
      "full_name": "QuarkChain (QKC)"
    },
    {
      "cmc_rank": 161,
      "ticker": "ILC",
      "name": "ILCoin",
      "full_name": "ILCoin (ILC)"
    },
    {
      "cmc_rank": 162,
      "ticker": "C20",
      "name": "CRYPTO20",
      "full_name": "CRYPTO20 (C20)"
    },
    {
      "cmc_rank": 163,
      "ticker": "FSN",
      "name": "Fusion",
      "full_name": "Fusion (FSN)"
    },
    {
      "cmc_rank": 164,
      "ticker": "LBA",
      "name": "Cred",
      "full_name": "Cred (LBA)"
    },
    {
      "cmc_rank": 165,
      "ticker": "APL",
      "name": "Apollo Currency",
      "full_name": "Apollo Currency (APL)"
    },
    {
      "cmc_rank": 166,
      "ticker": "CVC",
      "name": "Civic",
      "full_name": "Civic (CVC)"
    },
    {
      "cmc_rank": 167,
      "ticker": "BTX",
      "name": "Bitcore",
      "full_name": "Bitcore (BTX)"
    },
    {
      "cmc_rank": 168,
      "ticker": "MHC",
      "name": "#MetaHash",
      "full_name": "#MetaHash (MHC)"
    },
    {
      "cmc_rank": 169,
      "ticker": "ICN",
      "name": "Iconomi",
      "full_name": "Iconomi (ICN)"
    },
    {
      "cmc_rank": 170,
      "ticker": "CND",
      "name": "Cindicator",
      "full_name": "Cindicator (CND)"
    },
    {
      "cmc_rank": 171,
      "ticker": "LBTC",
      "name": "Lightning Bitcoin",
      "full_name": "Lightning Bitcoin (LBTC)"
    },
    {
      "cmc_rank": 172,
      "ticker": "UTK",
      "name": "UTRUST",
      "full_name": "UTRUST (UTK)"
    },
    {
      "cmc_rank": 173,
      "ticker": "DRGN",
      "name": "Dragonchain",
      "full_name": "Dragonchain (DRGN)"
    },
    {
      "cmc_rank": 174,
      "ticker": "CELR",
      "name": "Celer Network",
      "full_name": "Celer Network (CELR)"
    },
    {
      "cmc_rank": 175,
      "ticker": "AGI",
      "name": "SingularityNET",
      "full_name": "SingularityNET (AGI)"
    },
    {
      "cmc_rank": 176,
      "ticker": "META",
      "name": "Metadium",
      "full_name": "Metadium (META)"
    },
    {
      "cmc_rank": 177,
      "ticker": "TEL",
      "name": "Telcoin",
      "full_name": "Telcoin (TEL)"
    },
    {
      "cmc_rank": 178,
      "ticker": "ANT",
      "name": "Aragon",
      "full_name": "Aragon (ANT)"
    },
    {
      "cmc_rank": 179,
      "ticker": "CTXC",
      "name": "Cortex",
      "full_name": "Cortex (CTXC)"
    },
    {
      "cmc_rank": 180,
      "ticker": "EVR",
      "name": "Everus",
      "full_name": "Everus (EVR)"
    },
    {
      "cmc_rank": 181,
      "ticker": "ROX",
      "name": "Robotina",
      "full_name": "Robotina (ROX)"
    },
    {
      "cmc_rank": 182,
      "ticker": "DROP",
      "name": "Dropil",
      "full_name": "Dropil (DROP)"
    },
    {
      "cmc_rank": 183,
      "ticker": "WGR",
      "name": "Wagerr",
      "full_name": "Wagerr (WGR)"
    },
    {
      "cmc_rank": 184,
      "ticker": "VTC",
      "name": "Vertcoin",
      "full_name": "Vertcoin (VTC)"
    },
    {
      "cmc_rank": 185,
      "ticker": "TCT",
      "name": "TokenClub",
      "full_name": "TokenClub (TCT)"
    },
    {
      "cmc_rank": 186,
      "ticker": "INO",
      "name": "INO COIN",
      "full_name": "INO COIN (INO)"
    },
    {
      "cmc_rank": 187,
      "ticker": "EMC2",
      "name": "Einsteinium",
      "full_name": "Einsteinium (EMC2)"
    },
    {
      "cmc_rank": 188,
      "ticker": "MITH",
      "name": "Mithril",
      "full_name": "Mithril (MITH)"
    },
    {
      "cmc_rank": 189,
      "ticker": "QNT",
      "name": "Quant",
      "full_name": "Quant (QNT)"
    },
    {
      "cmc_rank": 190,
      "ticker": "MEDX",
      "name": "MediBloc [ERC20]",
      "full_name": "MediBloc [ERC20] (MEDX)"
    },
    {
      "cmc_rank": 191,
      "ticker": "BFT",
      "name": "BnkToTheFuture",
      "full_name": "BnkToTheFuture (BFT)"
    },
    {
      "cmc_rank": 192,
      "ticker": "TPAY",
      "name": "TokenPay",
      "full_name": "TokenPay (TPAY)"
    },
    {
      "cmc_rank": 193,
      "ticker": "DAC",
      "name": "Davinci Coin",
      "full_name": "Davinci Coin (DAC)"
    },
    {
      "cmc_rank": 194,
      "ticker": "GNO",
      "name": "Gnosis",
      "full_name": "Gnosis (GNO)"
    },
    {
      "cmc_rank": 195,
      "ticker": "RHOC",
      "name": "RChain",
      "full_name": "RChain (RHOC)"
    },
    {
      "cmc_rank": 196,
      "ticker": "SLT",
      "name": "Smartlands",
      "full_name": "Smartlands (SLT)"
    },
    {
      "cmc_rank": 197,
      "ticker": "GRIN",
      "name": "Grin",
      "full_name": "Grin (GRIN)"
    },
    {
      "cmc_rank": 198,
      "ticker": "HYN",
      "name": "Hyperion",
      "full_name": "Hyperion (HYN)"
    },
    {
      "cmc_rank": 199,
      "ticker": "GBC",
      "name": "Gold Bits Coin",
      "full_name": "Gold Bits Coin (GBC)"
    },
    {
      "cmc_rank": 200,
      "ticker": "SCC",
      "name": "STEM CELL COIN",
      "full_name": "STEM CELL COIN (SCC)"
    },
    {
      "cmc_rank": 201,
      "ticker": "S4F",
      "name": "S4FE",
      "full_name": "S4FE (S4F)"
    },
    {
      "cmc_rank": 202,
      "ticker": "MTL",
      "name": "Metal",
      "full_name": "Metal (MTL)"
    },
    {
      "cmc_rank": 203,
      "ticker": "NEBL",
      "name": "Neblio",
      "full_name": "Neblio (NEBL)"
    },
    {
      "cmc_rank": 204,
      "ticker": "NXS",
      "name": "Nexus",
      "full_name": "Nexus (NXS)"
    },
    {
      "cmc_rank": 205,
      "ticker": "DAPS",
      "name": "DAPS Token",
      "full_name": "DAPS Token (DAPS)"
    },
    {
      "cmc_rank": 206,
      "ticker": "WABI",
      "name": "Tael",
      "full_name": "Tael (WABI)"
    },
    {
      "cmc_rank": 207,
      "ticker": "COSM",
      "name": "Cosmo Coin",
      "full_name": "Cosmo Coin (COSM)"
    },
    {
      "cmc_rank": 208,
      "ticker": "REN",
      "name": "Ren",
      "full_name": "Ren (REN)"
    },
    {
      "cmc_rank": 209,
      "ticker": "B2G",
      "name": "Bitcoiin",
      "full_name": "Bitcoiin (B2G)"
    },
    {
      "cmc_rank": 210,
      "ticker": "SKY",
      "name": "Skycoin",
      "full_name": "Skycoin (SKY)"
    },
    {
      "cmc_rank": 211,
      "ticker": "EDO",
      "name": "Eidoo",
      "full_name": "Eidoo (EDO)"
    },
    {
      "cmc_rank": 212,
      "ticker": "STORM",
      "name": "Storm",
      "full_name": "Storm (STORM)"
    },
    {
      "cmc_rank": 213,
      "ticker": "ETZ",
      "name": "Ether Zero",
      "full_name": "Ether Zero (ETZ)"
    },
    {
      "cmc_rank": 214,
      "ticker": "OCN",
      "name": "Odyssey",
      "full_name": "Odyssey (OCN)"
    },
    {
      "cmc_rank": 215,
      "ticker": "HPB",
      "name": "High Performance Blockchain",
      "full_name": "High Performance Blockchain (HPB)"
    },
    {
      "cmc_rank": 216,
      "ticker": "DGTX",
      "name": "Digitex Futures",
      "full_name": "Digitex Futures (DGTX)"
    },
    {
      "cmc_rank": 217,
      "ticker": "DTR",
      "name": "Dynamic Trading Rights",
      "full_name": "Dynamic Trading Rights (DTR)"
    },
    {
      "cmc_rank": 218,
      "ticker": "NKN",
      "name": "NKN",
      "full_name": "NKN (NKN)"
    },
    {
      "cmc_rank": 219,
      "ticker": "MDA",
      "name": "Moeda Loyalty Points",
      "full_name": "Moeda Loyalty Points (MDA)"
    },
    {
      "cmc_rank": 220,
      "ticker": "TKN",
      "name": "TokenCard",
      "full_name": "TokenCard (TKN)"
    },
    {
      "cmc_rank": 221,
      "ticker": "EVX",
      "name": "Everex",
      "full_name": "Everex (EVX)"
    },
    {
      "cmc_rank": 222,
      "ticker": "AERGO",
      "name": "Aergo",
      "full_name": "Aergo (AERGO)"
    },
    {
      "cmc_rank": 223,
      "ticker": "TOP",
      "name": "TOP",
      "full_name": "TOP (TOP)"
    },
    {
      "cmc_rank": 224,
      "ticker": "VIA",
      "name": "Viacoin",
      "full_name": "Viacoin (VIA)"
    },
    {
      "cmc_rank": 225,
      "ticker": "GTO",
      "name": "Gifto",
      "full_name": "Gifto (GTO)"
    },
    {
      "cmc_rank": 226,
      "ticker": "BHP",
      "name": "BHPCoin",
      "full_name": "BHPCoin (BHP)"
    },
    {
      "cmc_rank": 227,
      "ticker": "XWC",
      "name": "WhiteCoin",
      "full_name": "WhiteCoin (XWC)"
    },
    {
      "cmc_rank": 228,
      "ticker": "HYC",
      "name": "HYCON",
      "full_name": "HYCON (HYC)"
    },
    {
      "cmc_rank": 229,
      "ticker": "XSPEC",
      "name": "Spectrecoin",
      "full_name": "Spectrecoin (XSPEC)"
    },
    {
      "cmc_rank": 230,
      "ticker": "MAN",
      "name": "Matrix AI Network",
      "full_name": "Matrix AI Network (MAN)"
    },
    {
      "cmc_rank": 231,
      "ticker": "ANKR",
      "name": "Ankr Network",
      "full_name": "Ankr Network (ANKR)"
    },
    {
      "cmc_rank": 232,
      "ticker": "BCV",
      "name": "BitCapitalVendor",
      "full_name": "BitCapitalVendor (BCV)"
    },
    {
      "cmc_rank": 233,
      "ticker": "IGNIS",
      "name": "Ignis",
      "full_name": "Ignis (IGNIS)"
    },
    {
      "cmc_rank": 234,
      "ticker": "PRS",
      "name": "PressOne",
      "full_name": "PressOne (PRS)"
    },
    {
      "cmc_rank": 235,
      "ticker": "EGT",
      "name": "Egretia",
      "full_name": "Egretia (EGT)"
    },
    {
      "cmc_rank": 236,
      "ticker": "RNT",
      "name": "OneRoot Network",
      "full_name": "OneRoot Network (RNT)"
    },
    {
      "cmc_rank": 237,
      "ticker": "REQ",
      "name": "Request",
      "full_name": "Request (REQ)"
    },
    {
      "cmc_rank": 238,
      "ticker": "UTT",
      "name": "United Traders Token",
      "full_name": "United Traders Token (UTT)"
    },
    {
      "cmc_rank": 239,
      "ticker": "KAN",
      "name": "BitKan",
      "full_name": "BitKan (KAN)"
    },
    {
      "cmc_rank": 240,
      "ticker": "IQ",
      "name": "Everipedia",
      "full_name": "Everipedia (IQ)"
    },
    {
      "cmc_rank": 241,
      "ticker": "RCN",
      "name": "Ripio Credit Network",
      "full_name": "Ripio Credit Network (RCN)"
    },
    {
      "cmc_rank": 242,
      "ticker": "CCCX",
      "name": "Clipper Coin",
      "full_name": "Clipper Coin (CCCX)"
    },
    {
      "cmc_rank": 243,
      "ticker": "FTM",
      "name": "Fantom",
      "full_name": "Fantom (FTM)"
    },
    {
      "cmc_rank": 244,
      "ticker": "NMR",
      "name": "Numeraire",
      "full_name": "Numeraire (NMR)"
    },
    {
      "cmc_rank": 245,
      "ticker": "CHX",
      "name": "Own",
      "full_name": "Own (CHX)"
    },
    {
      "cmc_rank": 246,
      "ticker": "GO",
      "name": "GoChain",
      "full_name": "GoChain (GO)"
    },
    {
      "cmc_rank": 247,
      "ticker": "SMART",
      "name": "SmartCash",
      "full_name": "SmartCash (SMART)"
    },
    {
      "cmc_rank": 248,
      "ticker": "QRL",
      "name": "Quantum Resistant Ledger",
      "full_name": "Quantum Resistant Ledger (QRL)"
    },
    {
      "cmc_rank": 249,
      "ticker": "LINA",
      "name": "LINA",
      "full_name": "LINA (LINA)"
    },
    {
      "cmc_rank": 250,
      "ticker": "XYO",
      "name": "XYO",
      "full_name": "XYO (XYO)"
    },
    {
      "cmc_rank": 251,
      "ticker": "ACT",
      "name": "Achain",
      "full_name": "Achain (ACT)"
    },
    {
      "cmc_rank": 252,
      "ticker": "RDN",
      "name": "Raiden Network Token",
      "full_name": "Raiden Network Token (RDN)"
    },
    {
      "cmc_rank": 253,
      "ticker": "BTU",
      "name": "BTU Protocol",
      "full_name": "BTU Protocol (BTU)"
    },
    {
      "cmc_rank": 254,
      "ticker": "POE",
      "name": "Po.et",
      "full_name": "Po.et (POE)"
    },
    {
      "cmc_rank": 255,
      "ticker": "FLO",
      "name": "FLO",
      "full_name": "FLO (FLO)"
    },
    {
      "cmc_rank": 256,
      "ticker": "GVT",
      "name": "Genesis Vision",
      "full_name": "Genesis Vision (GVT)"
    },
    {
      "cmc_rank": 257,
      "ticker": "DCN",
      "name": "Dentacoin",
      "full_name": "Dentacoin (DCN)"
    },
    {
      "cmc_rank": 258,
      "ticker": "SCRL",
      "name": "SCRL",
      "full_name": "SCRL (SCRL)"
    },
    {
      "cmc_rank": 259,
      "ticker": "MATIC",
      "name": "Matic Network",
      "full_name": "Matic Network (MATIC)"
    },
    {
      "cmc_rank": 260,
      "ticker": "EDR",
      "name": "Endor Protocol",
      "full_name": "Endor Protocol (EDR)"
    },
    {
      "cmc_rank": 261,
      "ticker": "TTC",
      "name": "TTC Protocol",
      "full_name": "TTC Protocol (TTC)"
    },
    {
      "cmc_rank": 262,
      "ticker": "QSP",
      "name": "Quantstamp",
      "full_name": "Quantstamp (QSP)"
    },
    {
      "cmc_rank": 263,
      "ticker": "OST",
      "name": "OST",
      "full_name": "OST (OST)"
    },
    {
      "cmc_rank": 264,
      "ticker": "CWV",
      "name": "CWV Chain",
      "full_name": "CWV Chain (CWV)"
    },
    {
      "cmc_rank": 265,
      "ticker": "SLS",
      "name": "SaluS",
      "full_name": "SaluS (SLS)"
    },
    {
      "cmc_rank": 266,
      "ticker": "SMT",
      "name": "SmartMesh",
      "full_name": "SmartMesh (SMT)"
    },
    {
      "cmc_rank": 267,
      "ticker": "NOAH",
      "name": "Noah Coin",
      "full_name": "Noah Coin (NOAH)"
    },
    {
      "cmc_rank": 268,
      "ticker": "CVT",
      "name": "CyberVein",
      "full_name": "CyberVein (CVT)"
    },
    {
      "cmc_rank": 269,
      "ticker": "PLC",
      "name": "PLATINCOIN",
      "full_name": "PLATINCOIN (PLC)"
    },
    {
      "cmc_rank": 270,
      "ticker": "PMA",
      "name": "PumaPay",
      "full_name": "PumaPay (PMA)"
    },
    {
      "cmc_rank": 271,
      "ticker": "CPT",
      "name": "Contents Protocol",
      "full_name": "Contents Protocol (CPT)"
    },
    {
      "cmc_rank": 272,
      "ticker": "TNB",
      "name": "Time New Bank",
      "full_name": "Time New Bank (TNB)"
    },
    {
      "cmc_rank": 273,
      "ticker": "CRPT",
      "name": "Crypterium",
      "full_name": "Crypterium (CRPT)"
    },
    {
      "cmc_rank": 274,
      "ticker": "AUTO",
      "name": "Cube",
      "full_name": "Cube (AUTO)"
    },
    {
      "cmc_rank": 275,
      "ticker": "BLOCK",
      "name": "Blocknet",
      "full_name": "Blocknet (BLOCK)"
    },
    {
      "cmc_rank": 276,
      "ticker": "BBR",
      "name": "Boolberry",
      "full_name": "Boolberry (BBR)"
    },
    {
      "cmc_rank": 277,
      "ticker": "PLA",
      "name": "PlayChip",
      "full_name": "PlayChip (PLA)"
    },
    {
      "cmc_rank": 278,
      "ticker": "OAX",
      "name": "OAX",
      "full_name": "OAX (OAX)"
    },
    {
      "cmc_rank": 279,
      "ticker": "HUM",
      "name": "Humanscape",
      "full_name": "Humanscape (HUM)"
    },
    {
      "cmc_rank": 280,
      "ticker": "NAV",
      "name": "NavCoin",
      "full_name": "NavCoin (NAV)"
    },
    {
      "cmc_rank": 281,
      "ticker": "ETHOS",
      "name": "Ethos",
      "full_name": "Ethos (ETHOS)"
    },
    {
      "cmc_rank": 282,
      "ticker": "LINDA",
      "name": "Linda",
      "full_name": "Linda (LINDA)"
    },
    {
      "cmc_rank": 283,
      "ticker": "TRIO",
      "name": "Tripio",
      "full_name": "Tripio (TRIO)"
    },
    {
      "cmc_rank": 284,
      "ticker": "VITE",
      "name": "VITE",
      "full_name": "VITE (VITE)"
    },
    {
      "cmc_rank": 285,
      "ticker": "MOC",
      "name": "Moss Coin",
      "full_name": "Moss Coin (MOC)"
    },
    {
      "cmc_rank": 286,
      "ticker": "MDS",
      "name": "MediShares",
      "full_name": "MediShares (MDS)"
    },
    {
      "cmc_rank": 287,
      "ticker": "EDC",
      "name": "EDC Blockchain",
      "full_name": "EDC Blockchain (EDC)"
    },
    {
      "cmc_rank": 288,
      "ticker": "RUFF",
      "name": "Ruff",
      "full_name": "Ruff (RUFF)"
    },
    {
      "cmc_rank": 289,
      "ticker": "DATA",
      "name": "Streamr DATAcoin",
      "full_name": "Streamr DATAcoin (DATA)"
    },
    {
      "cmc_rank": 290,
      "ticker": "SINS",
      "name": "SafeInsure",
      "full_name": "SafeInsure (SINS)"
    },
    {
      "cmc_rank": 291,
      "ticker": "SRN",
      "name": "SIRIN LABS Token",
      "full_name": "SIRIN LABS Token (SRN)"
    },
    {
      "cmc_rank": 292,
      "ticker": "BZ",
      "name": "Bit-Z Token",
      "full_name": "Bit-Z Token (BZ)"
    },
    {
      "cmc_rank": 293,
      "ticker": "CS",
      "name": "Credits",
      "full_name": "Credits (CS)"
    },
    {
      "cmc_rank": 294,
      "ticker": "NCASH",
      "name": "Nucleus Vision",
      "full_name": "Nucleus Vision (NCASH)"
    },
    {
      "cmc_rank": 295,
      "ticker": "XAS",
      "name": "Asch",
      "full_name": "Asch (XAS)"
    },
    {
      "cmc_rank": 296,
      "ticker": "IHT",
      "name": "IHT Real Estate Protocol",
      "full_name": "IHT Real Estate Protocol (IHT)"
    },
    {
      "cmc_rank": 297,
      "ticker": "BCO",
      "name": "BridgeCoin",
      "full_name": "BridgeCoin (BCO)"
    },
    {
      "cmc_rank": 298,
      "ticker": "GOT",
      "name": "ParkinGo",
      "full_name": "ParkinGo (GOT)"
    },
    {
      "cmc_rank": 299,
      "ticker": "MET",
      "name": "Metronome",
      "full_name": "Metronome (MET)"
    },
    {
      "cmc_rank": 300,
      "ticker": "KCASH",
      "name": "Kcash",
      "full_name": "Kcash (KCASH)"
    },
    {
      "cmc_rank": 301,
      "ticker": "BZNT",
      "name": "Bezant",
      "full_name": "Bezant (BZNT)"
    },
    {
      "cmc_rank": 302,
      "ticker": "FET",
      "name": "Fetch",
      "full_name": "Fetch (FET)"
    },
    {
      "cmc_rank": 303,
      "ticker": "APIS",
      "name": "APIS",
      "full_name": "APIS (APIS)"
    },
    {
      "cmc_rank": 304,
      "ticker": "MGD",
      "name": "MassGrid",
      "full_name": "MassGrid (MGD)"
    },
    {
      "cmc_rank": 305,
      "ticker": "BLZ",
      "name": "Bluzelle",
      "full_name": "Bluzelle (BLZ)"
    },
    {
      "cmc_rank": 306,
      "ticker": "SWFTC",
      "name": "SwftCoin",
      "full_name": "SwftCoin (SWFTC)"
    },
    {
      "cmc_rank": 307,
      "ticker": "VEE",
      "name": "BLOCKv",
      "full_name": "BLOCKv (VEE)"
    },
    {
      "cmc_rank": 308,
      "ticker": "LOC",
      "name": "LockTrip",
      "full_name": "LockTrip (LOC)"
    },
    {
      "cmc_rank": 309,
      "ticker": "B2B",
      "name": "B2BX",
      "full_name": "B2BX (B2B)"
    },
    {
      "cmc_rank": 310,
      "ticker": "PHX",
      "name": "Red Pulse Phoenix",
      "full_name": "Red Pulse Phoenix (PHX)"
    },
    {
      "cmc_rank": 311,
      "ticker": "FOAM",
      "name": "FOAM",
      "full_name": "FOAM (FOAM)"
    },
    {
      "cmc_rank": 312,
      "ticker": "SUB",
      "name": "Substratum",
      "full_name": "Substratum (SUB)"
    },
    {
      "cmc_rank": 313,
      "ticker": "PPC",
      "name": "Peercoin",
      "full_name": "Peercoin (PPC)"
    },
    {
      "cmc_rank": 314,
      "ticker": "VIBE",
      "name": "VIBE",
      "full_name": "VIBE (VIBE)"
    },
    {
      "cmc_rank": 315,
      "ticker": "XSN",
      "name": "Stakenet",
      "full_name": "Stakenet (XSN)"
    },
    {
      "cmc_rank": 316,
      "ticker": "TRAC",
      "name": "OriginTrail",
      "full_name": "OriginTrail (TRAC)"
    },
    {
      "cmc_rank": 317,
      "ticker": "PRO",
      "name": "Propy",
      "full_name": "Propy (PRO)"
    },
    {
      "cmc_rank": 318,
      "ticker": "XDN",
      "name": "DigitalNote",
      "full_name": "DigitalNote (XDN)"
    },
    {
      "cmc_rank": 319,
      "ticker": "SNM",
      "name": "SONM",
      "full_name": "SONM (SNM)"
    },
    {
      "cmc_rank": 320,
      "ticker": "TKY",
      "name": "THEKEY",
      "full_name": "THEKEY (TKY)"
    },
    {
      "cmc_rank": 321,
      "ticker": "DMT",
      "name": "DMarket",
      "full_name": "DMarket (DMT)"
    },
    {
      "cmc_rank": 322,
      "ticker": "EDG",
      "name": "Edgeless",
      "full_name": "Edgeless (EDG)"
    },
    {
      "cmc_rank": 323,
      "ticker": "DTA",
      "name": "DATA",
      "full_name": "DATA (DTA)"
    },
    {
      "cmc_rank": 324,
      "ticker": "SAFEX",
      "name": "Safe Exchange Coin",
      "full_name": "Safe Exchange Coin (SAFEX)"
    },
    {
      "cmc_rank": 325,
      "ticker": "ZCL",
      "name": "ZClassic",
      "full_name": "ZClassic (ZCL)"
    },
    {
      "cmc_rank": 326,
      "ticker": "UBQ",
      "name": "Ubiq",
      "full_name": "Ubiq (UBQ)"
    },
    {
      "cmc_rank": 327,
      "ticker": "SDA",
      "name": "SDChain",
      "full_name": "SDChain (SDA)"
    },
    {
      "cmc_rank": 328,
      "ticker": "KEY",
      "name": "Selfkey",
      "full_name": "Selfkey (KEY)"
    },
    {
      "cmc_rank": 329,
      "ticker": "PEPECASH",
      "name": "Pepe Cash",
      "full_name": "Pepe Cash (PEPECASH)"
    },
    {
      "cmc_rank": 330,
      "ticker": "INS",
      "name": "Insolar",
      "full_name": "Insolar (INS)"
    },
    {
      "cmc_rank": 331,
      "ticker": "TEN",
      "name": "Tokenomy",
      "full_name": "Tokenomy (TEN)"
    },
    {
      "cmc_rank": 332,
      "ticker": "LGO",
      "name": "LGO Exchange",
      "full_name": "LGO Exchange (LGO)"
    },
    {
      "cmc_rank": 333,
      "ticker": "DEX",
      "name": "DEX",
      "full_name": "DEX (DEX)"
    },
    {
      "cmc_rank": 334,
      "ticker": "NIX",
      "name": "NIX",
      "full_name": "NIX (NIX)"
    },
    {
      "cmc_rank": 335,
      "ticker": "ADX",
      "name": "AdEx",
      "full_name": "AdEx (ADX)"
    },
    {
      "cmc_rank": 336,
      "ticker": "BITCNY",
      "name": "bitCNY",
      "full_name": "bitCNY (BITCNY)"
    },
    {
      "cmc_rank": 337,
      "ticker": "ITC",
      "name": "IoT Chain",
      "full_name": "IoT Chain (ITC)"
    },
    {
      "cmc_rank": 338,
      "ticker": "SALT",
      "name": "SALT",
      "full_name": "SALT (SALT)"
    },
    {
      "cmc_rank": 339,
      "ticker": "NLG",
      "name": "Gulden",
      "full_name": "Gulden (NLG)"
    },
    {
      "cmc_rank": 340,
      "ticker": "DBC",
      "name": "DeepBrain Chain",
      "full_name": "DeepBrain Chain (DBC)"
    },
    {
      "cmc_rank": 341,
      "ticker": "DDD",
      "name": "Scry.info",
      "full_name": "Scry.info (DDD)"
    },
    {
      "cmc_rank": 342,
      "ticker": "AOG",
      "name": "smARTOFGIVING",
      "full_name": "smARTOFGIVING (AOG)"
    },
    {
      "cmc_rank": 343,
      "ticker": "DNT",
      "name": "district0x",
      "full_name": "district0x (DNT)"
    },
    {
      "cmc_rank": 344,
      "ticker": "BOX",
      "name": "BOX Token",
      "full_name": "BOX Token (BOX)"
    },
    {
      "cmc_rank": 345,
      "ticker": "DX",
      "name": "DxChain Token",
      "full_name": "DxChain Token (DX)"
    },
    {
      "cmc_rank": 346,
      "ticker": "BWX",
      "name": "Blue Whale EXchange",
      "full_name": "Blue Whale EXchange (BWX)"
    },
    {
      "cmc_rank": 347,
      "ticker": "MLN",
      "name": "Melon",
      "full_name": "Melon (MLN)"
    },
    {
      "cmc_rank": 348,
      "ticker": "ZRC",
      "name": "ZrCoin",
      "full_name": "ZrCoin (ZRC)"
    },
    {
      "cmc_rank": 349,
      "ticker": "PLR",
      "name": "Pillar",
      "full_name": "Pillar (PLR)"
    },
    {
      "cmc_rank": 350,
      "ticker": "DLT",
      "name": "Agrello",
      "full_name": "Agrello (DLT)"
    },
    {
      "cmc_rank": 351,
      "ticker": "MED",
      "name": "MediBloc [QRC20]",
      "full_name": "MediBloc [QRC20] (MED)"
    },
    {
      "cmc_rank": 352,
      "ticker": "DBET",
      "name": "DecentBet",
      "full_name": "DecentBet (DBET)"
    },
    {
      "cmc_rank": 353,
      "ticker": "SBD",
      "name": "Steem Dollars",
      "full_name": "Steem Dollars (SBD)"
    },
    {
      "cmc_rank": 354,
      "ticker": "LEO",
      "name": "LEOcoin",
      "full_name": "LEOcoin (LEO)"
    },
    {
      "cmc_rank": 355,
      "ticker": "BTN",
      "name": "BitNewChain",
      "full_name": "BitNewChain (BTN)"
    },
    {
      "cmc_rank": 356,
      "ticker": "LYM",
      "name": "Lympo",
      "full_name": "Lympo (LYM)"
    },
    {
      "cmc_rank": 357,
      "ticker": "SNGLS",
      "name": "SingularDTV",
      "full_name": "SingularDTV (SNGLS)"
    },
    {
      "cmc_rank": 358,
      "ticker": "LOKI",
      "name": "Loki",
      "full_name": "Loki (LOKI)"
    },
    {
      "cmc_rank": 359,
      "ticker": "LEND",
      "name": "ETHLend",
      "full_name": "ETHLend (LEND)"
    },
    {
      "cmc_rank": 360,
      "ticker": "EMC",
      "name": "Emercoin",
      "full_name": "Emercoin (EMC)"
    },
    {
      "cmc_rank": 361,
      "ticker": "BAY",
      "name": "BitBay",
      "full_name": "BitBay (BAY)"
    },
    {
      "cmc_rank": 362,
      "ticker": "DIME",
      "name": "Dimecoin",
      "full_name": "Dimecoin (DIME)"
    },
    {
      "cmc_rank": 363,
      "ticker": "OVC",
      "name": "OVCODE",
      "full_name": "OVCODE (OVC)"
    },
    {
      "cmc_rank": 364,
      "ticker": "BEAM",
      "name": "Beam",
      "full_name": "Beam (BEAM)"
    },
    {
      "cmc_rank": 365,
      "ticker": "QLC",
      "name": "QLC Chain",
      "full_name": "QLC Chain (QLC)"
    },
    {
      "cmc_rank": 366,
      "ticker": "PZM",
      "name": "PRIZM",
      "full_name": "PRIZM (PZM)"
    },
    {
      "cmc_rank": 367,
      "ticker": "1ST",
      "name": "FirstBlood",
      "full_name": "FirstBlood (1ST)"
    },
    {
      "cmc_rank": 368,
      "ticker": "SOC",
      "name": "All Sports",
      "full_name": "All Sports (SOC)"
    },
    {
      "cmc_rank": 369,
      "ticker": "LCC",
      "name": "Litecoin Cash",
      "full_name": "Litecoin Cash (LCC)"
    },
    {
      "cmc_rank": 370,
      "ticker": "CVNT",
      "name": "Content Value Network",
      "full_name": "Content Value Network (CVNT)"
    },
    {
      "cmc_rank": 371,
      "ticker": "GTC",
      "name": "Game.com",
      "full_name": "Game.com (GTC)"
    },
    {
      "cmc_rank": 372,
      "ticker": "PBT",
      "name": "Primalbase Token",
      "full_name": "Primalbase Token (PBT)"
    },
    {
      "cmc_rank": 373,
      "ticker": "VIB",
      "name": "Viberate",
      "full_name": "Viberate (VIB)"
    },
    {
      "cmc_rank": 374,
      "ticker": "ARN",
      "name": "Aeron",
      "full_name": "Aeron (ARN)"
    },
    {
      "cmc_rank": 375,
      "ticker": "VITAE",
      "name": "Vitae",
      "full_name": "Vitae (VITAE)"
    },
    {
      "cmc_rank": 376,
      "ticker": "AEON",
      "name": "Aeon",
      "full_name": "Aeon (AEON)"
    },
    {
      "cmc_rank": 377,
      "ticker": "TNT",
      "name": "Tierion",
      "full_name": "Tierion (TNT)"
    },
    {
      "cmc_rank": 378,
      "ticker": "PASC",
      "name": "Pascal Coin",
      "full_name": "Pascal Coin (PASC)"
    },
    {
      "cmc_rank": 379,
      "ticker": "MGO",
      "name": "MobileGo",
      "full_name": "MobileGo (MGO)"
    },
    {
      "cmc_rank": 380,
      "ticker": "FIII",
      "name": "Fiii",
      "full_name": "Fiii (FIII)"
    },
    {
      "cmc_rank": 381,
      "ticker": "WCT",
      "name": "Waves Community Token",
      "full_name": "Waves Community Token (WCT)"
    },
    {
      "cmc_rank": 382,
      "ticker": "MWAT",
      "name": "Restart Energy MWAT",
      "full_name": "Restart Energy MWAT (MWAT)"
    },
    {
      "cmc_rank": 383,
      "ticker": "SNX",
      "name": "Synthetix Network Token",
      "full_name": "Synthetix Network Token (SNX)"
    },
    {
      "cmc_rank": 384,
      "ticker": "JNT",
      "name": "Jibrel Network",
      "full_name": "Jibrel Network (JNT)"
    },
    {
      "cmc_rank": 385,
      "ticker": "RFR",
      "name": "Refereum",
      "full_name": "Refereum (RFR)"
    },
    {
      "cmc_rank": 386,
      "ticker": "ZIP",
      "name": "Zipper",
      "full_name": "Zipper (ZIP)"
    },
    {
      "cmc_rank": 387,
      "ticker": "CZR",
      "name": "CanonChain",
      "full_name": "CanonChain (CZR)"
    },
    {
      "cmc_rank": 388,
      "ticker": "CNN",
      "name": "Content Neutrality Network",
      "full_name": "Content Neutrality Network (CNN)"
    },
    {
      "cmc_rank": 389,
      "ticker": "GAME",
      "name": "GameCredits",
      "full_name": "GameCredits (GAME)"
    },
    {
      "cmc_rank": 390,
      "ticker": "LBC",
      "name": "LBRY Credits",
      "full_name": "LBRY Credits (LBC)"
    },
    {
      "cmc_rank": 391,
      "ticker": "PRG",
      "name": "Paragon",
      "full_name": "Paragon (PRG)"
    },
    {
      "cmc_rank": 392,
      "ticker": "GEN",
      "name": "DAOstack",
      "full_name": "DAOstack (GEN)"
    },
    {
      "cmc_rank": 393,
      "ticker": "TIOX",
      "name": "Trade Token X",
      "full_name": "Trade Token X (TIOX)"
    },
    {
      "cmc_rank": 394,
      "ticker": "CNUS",
      "name": "CoinUs",
      "full_name": "CoinUs (CNUS)"
    },
    {
      "cmc_rank": 395,
      "ticker": "DERO",
      "name": "Dero",
      "full_name": "Dero (DERO)"
    },
    {
      "cmc_rank": 396,
      "ticker": "PRE",
      "name": "Presearch",
      "full_name": "Presearch (PRE)"
    },
    {
      "cmc_rank": 397,
      "ticker": "GRID",
      "name": "Grid+",
      "full_name": "Grid+ (GRID)"
    },
    {
      "cmc_rank": 398,
      "ticker": "IPC",
      "name": "IPChain",
      "full_name": "IPChain (IPC)"
    },
    {
      "cmc_rank": 399,
      "ticker": "SPND",
      "name": "Spendcoin",
      "full_name": "Spendcoin (SPND)"
    },
    {
      "cmc_rank": 400,
      "ticker": "MTH",
      "name": "Monetha",
      "full_name": "Monetha (MTH)"
    },
    {
      "cmc_rank": 401,
      "ticker": "AGVC",
      "name": "AgaveCoin",
      "full_name": "AgaveCoin (AGVC)"
    },
    {
      "cmc_rank": 402,
      "ticker": "BURST",
      "name": "Burst",
      "full_name": "Burst (BURST)"
    },
    {
      "cmc_rank": 403,
      "ticker": "NMC",
      "name": "Namecoin",
      "full_name": "Namecoin (NMC)"
    },
    {
      "cmc_rank": 404,
      "ticker": "POA",
      "name": "POA Network",
      "full_name": "POA Network (POA)"
    },
    {
      "cmc_rank": 405,
      "ticker": "APPC",
      "name": "AppCoins",
      "full_name": "AppCoins (APPC)"
    },
    {
      "cmc_rank": 406,
      "ticker": "TAAS",
      "name": "TaaS",
      "full_name": "TaaS (TAAS)"
    },
    {
      "cmc_rank": 407,
      "ticker": "SPHR",
      "name": "Sphere",
      "full_name": "Sphere (SPHR)"
    },
    {
      "cmc_rank": 408,
      "ticker": "CPC",
      "name": "CPChain",
      "full_name": "CPChain (CPC)"
    },
    {
      "cmc_rank": 409,
      "ticker": "INCNT",
      "name": "Incent",
      "full_name": "Incent (INCNT)"
    },
    {
      "cmc_rank": 410,
      "ticker": "USDS",
      "name": "StableUSD",
      "full_name": "StableUSD (USDS)"
    },
    {
      "cmc_rank": 411,
      "ticker": "COVA",
      "name": "COVA",
      "full_name": "COVA (COVA)"
    },
    {
      "cmc_rank": 412,
      "ticker": "TUBE",
      "name": "BitTube",
      "full_name": "BitTube (TUBE)"
    },
    {
      "cmc_rank": 413,
      "ticker": "AVA",
      "name": "Travala.com",
      "full_name": "Travala.com (AVA)"
    },
    {
      "cmc_rank": 414,
      "ticker": "HYDRO",
      "name": "Hydro",
      "full_name": "Hydro (HYDRO)"
    },
    {
      "cmc_rank": 415,
      "ticker": "HLC",
      "name": "HalalChain",
      "full_name": "HalalChain (HLC)"
    },
    {
      "cmc_rank": 416,
      "ticker": "INT",
      "name": "Internet Node Token",
      "full_name": "Internet Node Token (INT)"
    },
    {
      "cmc_rank": 417,
      "ticker": "EOSDAC",
      "name": "eosDAC",
      "full_name": "eosDAC (EOSDAC)"
    },
    {
      "cmc_rank": 418,
      "ticker": "BLK",
      "name": "BlackCoin",
      "full_name": "BlackCoin (BLK)"
    },
    {
      "cmc_rank": 419,
      "ticker": "CPT",
      "name": "Cryptaur",
      "full_name": "Cryptaur (CPT)"
    },
    {
      "cmc_rank": 420,
      "ticker": "HLT",
      "name": "Esportbits",
      "full_name": "Esportbits (HLT)"
    },
    {
      "cmc_rank": 421,
      "ticker": "LRN",
      "name": "Loopring [NEO]",
      "full_name": "Loopring [NEO] (LRN)"
    },
    {
      "cmc_rank": 422,
      "ticker": "WPR",
      "name": "WePower",
      "full_name": "WePower (WPR)"
    },
    {
      "cmc_rank": 423,
      "ticker": "EVN",
      "name": "EvenCoin",
      "full_name": "EvenCoin (EVN)"
    },
    {
      "cmc_rank": 424,
      "ticker": "TERN",
      "name": "Ternio",
      "full_name": "Ternio (TERN)"
    },
    {
      "cmc_rank": 425,
      "ticker": "FST",
      "name": "1irstcoin",
      "full_name": "1irstcoin (FST)"
    },
    {
      "cmc_rank": 426,
      "ticker": "SWM",
      "name": "Swarm",
      "full_name": "Swarm (SWM)"
    },
    {
      "cmc_rank": 427,
      "ticker": "CDT",
      "name": "Blox",
      "full_name": "Blox (CDT)"
    },
    {
      "cmc_rank": 428,
      "ticker": "YOYOW",
      "name": "YOYOW",
      "full_name": "YOYOW (YOYOW)"
    },
    {
      "cmc_rank": 429,
      "ticker": "AMO",
      "name": "AMO Coin",
      "full_name": "AMO Coin (AMO)"
    },
    {
      "cmc_rank": 430,
      "ticker": "PPP",
      "name": "PayPie",
      "full_name": "PayPie (PPP)"
    },
    {
      "cmc_rank": 431,
      "ticker": "ZEL",
      "name": "ZelCash",
      "full_name": "ZelCash (ZEL)"
    },
    {
      "cmc_rank": 432,
      "ticker": "FUEL",
      "name": "Etherparty",
      "full_name": "Etherparty (FUEL)"
    },
    {
      "cmc_rank": 433,
      "ticker": "CHSB",
      "name": "SwissBorg",
      "full_name": "SwissBorg (CHSB)"
    },
    {
      "cmc_rank": 434,
      "ticker": "INK",
      "name": "Ink",
      "full_name": "Ink (INK)"
    },
    {
      "cmc_rank": 435,
      "ticker": "FOTA",
      "name": "Fortuna",
      "full_name": "Fortuna (FOTA)"
    },
    {
      "cmc_rank": 436,
      "ticker": "AEN",
      "name": "Aencoin",
      "full_name": "Aencoin (AEN)"
    },
    {
      "cmc_rank": 437,
      "ticker": "NIM",
      "name": "Nimiq",
      "full_name": "Nimiq (NIM)"
    },
    {
      "cmc_rank": 438,
      "ticker": "BOS",
      "name": "BOScoin",
      "full_name": "BOScoin (BOS)"
    },
    {
      "cmc_rank": 439,
      "ticker": "CAS",
      "name": "Cashaa",
      "full_name": "Cashaa (CAS)"
    },
    {
      "cmc_rank": 440,
      "ticker": "BEET",
      "name": "Beetle Coin",
      "full_name": "Beetle Coin (BEET)"
    },
    {
      "cmc_rank": 441,
      "ticker": "UTNP",
      "name": "Universa",
      "full_name": "Universa (UTNP)"
    },
    {
      "cmc_rank": 442,
      "ticker": "BOLT",
      "name": "BOLT",
      "full_name": "BOLT (BOLT)"
    },
    {
      "cmc_rank": 443,
      "ticker": "PNT",
      "name": "Penta",
      "full_name": "Penta (PNT)"
    },
    {
      "cmc_rank": 444,
      "ticker": "PI",
      "name": "PCHAIN",
      "full_name": "PCHAIN (PI)"
    },
    {
      "cmc_rank": 445,
      "ticker": "SEELE",
      "name": "Seele",
      "full_name": "Seele (SEELE)"
    },
    {
      "cmc_rank": 446,
      "ticker": "XST",
      "name": "Stealth",
      "full_name": "Stealth (XST)"
    },
    {
      "cmc_rank": 447,
      "ticker": "BITG",
      "name": "BitGreen",
      "full_name": "BitGreen (BITG)"
    },
    {
      "cmc_rank": 448,
      "ticker": "QUN",
      "name": "QunQun",
      "full_name": "QunQun (QUN)"
    },
    {
      "cmc_rank": 449,
      "ticker": "POLIS",
      "name": "Polis",
      "full_name": "Polis (POLIS)"
    },
    {
      "cmc_rank": 450,
      "ticker": "GNX",
      "name": "Genaro Network",
      "full_name": "Genaro Network (GNX)"
    },
    {
      "cmc_rank": 451,
      "ticker": "MTC",
      "name": "doc.com Token",
      "full_name": "doc.com Token (MTC)"
    },
    {
      "cmc_rank": 452,
      "ticker": "PLY",
      "name": "PlayCoin [ERC20]",
      "full_name": "PlayCoin [ERC20] (PLY)"
    },
    {
      "cmc_rank": 453,
      "ticker": "LUN",
      "name": "Lunyr",
      "full_name": "Lunyr (LUN)"
    },
    {
      "cmc_rank": 454,
      "ticker": "AMB",
      "name": "Ambrosus",
      "full_name": "Ambrosus (AMB)"
    },
    {
      "cmc_rank": 455,
      "ticker": "CBT",
      "name": "CommerceBlock",
      "full_name": "CommerceBlock (CBT)"
    },
    {
      "cmc_rank": 456,
      "ticker": "ONION",
      "name": "DeepOnion",
      "full_name": "DeepOnion (ONION)"
    },
    {
      "cmc_rank": 457,
      "ticker": "DOCK",
      "name": "Dock",
      "full_name": "Dock (DOCK)"
    },
    {
      "cmc_rank": 458,
      "ticker": "ECC",
      "name": "ECC",
      "full_name": "ECC (ECC)"
    },
    {
      "cmc_rank": 459,
      "ticker": "TRTL",
      "name": "TurtleCoin",
      "full_name": "TurtleCoin (TRTL)"
    },
    {
      "cmc_rank": 460,
      "ticker": "MRPH",
      "name": "Morpheus.Network",
      "full_name": "Morpheus.Network (MRPH)"
    },
    {
      "cmc_rank": 461,
      "ticker": "ZCO",
      "name": "Zebi",
      "full_name": "Zebi (ZCO)"
    },
    {
      "cmc_rank": 462,
      "ticker": "CREDO",
      "name": "Credo",
      "full_name": "Credo (CREDO)"
    },
    {
      "cmc_rank": 463,
      "ticker": "MOBI",
      "name": "Mobius",
      "full_name": "Mobius (MOBI)"
    },
    {
      "cmc_rank": 464,
      "ticker": "SIX",
      "name": "SIX",
      "full_name": "SIX (SIX)"
    },
    {
      "cmc_rank": 465,
      "ticker": "XPM",
      "name": "Primecoin",
      "full_name": "Primecoin (XPM)"
    },
    {
      "cmc_rank": 466,
      "ticker": "SHIFT",
      "name": "Shift",
      "full_name": "Shift (SHIFT)"
    },
    {
      "cmc_rank": 467,
      "ticker": "MTV",
      "name": "MultiVAC",
      "full_name": "MultiVAC (MTV)"
    },
    {
      "cmc_rank": 468,
      "ticker": "SNC",
      "name": "SunContract",
      "full_name": "SunContract (SNC)"
    },
    {
      "cmc_rank": 469,
      "ticker": "BCPT",
      "name": "BlockMason Credit Protocol",
      "full_name": "BlockMason Credit Protocol (BCPT)"
    },
    {
      "cmc_rank": 470,
      "ticker": "AST",
      "name": "AirSwap",
      "full_name": "AirSwap (AST)"
    },
    {
      "cmc_rank": 471,
      "ticker": "FTC",
      "name": "Feathercoin",
      "full_name": "Feathercoin (FTC)"
    },
    {
      "cmc_rank": 472,
      "ticker": "BPT",
      "name": "Blockport",
      "full_name": "Blockport (BPT)"
    },
    {
      "cmc_rank": 473,
      "ticker": "MXC",
      "name": "Machine Xchange Coin",
      "full_name": "Machine Xchange Coin (MXC)"
    },
    {
      "cmc_rank": 474,
      "ticker": "MDT",
      "name": "Measurable Data Token",
      "full_name": "Measurable Data Token (MDT)"
    },
    {
      "cmc_rank": 475,
      "ticker": "QCH",
      "name": "QChi",
      "full_name": "QChi (QCH)"
    },
    {
      "cmc_rank": 476,
      "ticker": "BOX",
      "name": "ContentBox",
      "full_name": "ContentBox (BOX)"
    },
    {
      "cmc_rank": 477,
      "ticker": "MRK",
      "name": "MARK.SPACE",
      "full_name": "MARK.SPACE (MRK)"
    },
    {
      "cmc_rank": 478,
      "ticker": "DCT",
      "name": "DECENT",
      "full_name": "DECENT (DCT)"
    },
    {
      "cmc_rank": 479,
      "ticker": "COSS",
      "name": "COSS",
      "full_name": "COSS (COSS)"
    },
    {
      "cmc_rank": 480,
      "ticker": "ECA",
      "name": "Electra",
      "full_name": "Electra (ECA)"
    },
    {
      "cmc_rank": 481,
      "ticker": "MER",
      "name": "Mercury",
      "full_name": "Mercury (MER)"
    },
    {
      "cmc_rank": 482,
      "ticker": "DIVI",
      "name": "Divi",
      "full_name": "Divi (DIVI)"
    },
    {
      "cmc_rank": 483,
      "ticker": "WWB",
      "name": "Wowbit",
      "full_name": "Wowbit (WWB)"
    },
    {
      "cmc_rank": 484,
      "ticker": "LYL",
      "name": "LoyalCoin",
      "full_name": "LoyalCoin (LYL)"
    },
    {
      "cmc_rank": 485,
      "ticker": "KORE",
      "name": "Kore",
      "full_name": "Kore (KORE)"
    },
    {
      "cmc_rank": 486,
      "ticker": "BTO",
      "name": "Bottos",
      "full_name": "Bottos (BTO)"
    },
    {
      "cmc_rank": 487,
      "ticker": "WIB",
      "name": "Wibson",
      "full_name": "Wibson (WIB)"
    },
    {
      "cmc_rank": 488,
      "ticker": "PST",
      "name": "Primas",
      "full_name": "Primas (PST)"
    },
    {
      "cmc_rank": 489,
      "ticker": "CBC",
      "name": "Cashbery Coin",
      "full_name": "Cashbery Coin (CBC)"
    },
    {
      "cmc_rank": 490,
      "ticker": "WET",
      "name": "WeShow Token",
      "full_name": "WeShow Token (WET)"
    },
    {
      "cmc_rank": 491,
      "ticker": "SPC",
      "name": "SpaceChain",
      "full_name": "SpaceChain (SPC)"
    },
    {
      "cmc_rank": 492,
      "ticker": "OPQ",
      "name": "Opacity",
      "full_name": "Opacity (OPQ)"
    },
    {
      "cmc_rank": 493,
      "ticker": "PTON",
      "name": "PTON",
      "full_name": "PTON (PTON)"
    },
    {
      "cmc_rank": 494,
      "ticker": "HTML",
      "name": "HTMLCOIN",
      "full_name": "HTMLCOIN (HTML)"
    },
    {
      "cmc_rank": 495,
      "ticker": "ZPT",
      "name": "Zeepin",
      "full_name": "Zeepin (ZPT)"
    },
    {
      "cmc_rank": 496,
      "ticker": "ATN",
      "name": "ATN",
      "full_name": "ATN (ATN)"
    },
    {
      "cmc_rank": 497,
      "ticker": "ADT",
      "name": "adToken",
      "full_name": "adToken (ADT)"
    },
    {
      "cmc_rank": 498,
      "ticker": "LXT",
      "name": "Litex",
      "full_name": "Litex (LXT)"
    },
    {
      "cmc_rank": 499,
      "ticker": "CSP",
      "name": "Caspian",
      "full_name": "Caspian (CSP)"
    },
    {
      "cmc_rank": 500,
      "ticker": "$PAC",
      "name": "PACcoin",
      "full_name": "PACcoin ($PAC)"
    }
  ];
  
  // DOM ELEMENTS
  const box = document.querySelector('.difficulty__buttons');
  const buttons = Array.from(document.getElementsByClassName('difficulty__button'));
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.closeBtn');
  let selection = document.querySelector('.current').value;
  
  // DATA
  let data = getData(selection);
  console.log(data)
  let top100 = [
    {
      "cmc_rank": 1,
      "ticker": "BTC",
      "name": "Bitcoin",
      "full_name": "Bitcoin (BTC)",
      "supply": 21000000,
      "price": 7066.424046,
      "vladimir_coins": 2100,
      "vladimir_costs": 14839490,
      "coins_per_pers": 0.002731
    },
    {
      "cmc_rank": 2,
      "ticker": "ETH",
      "name": "Ethereum",
      "full_name": "Ethereum (ETH)",
      "supply": 106048732.44,
      "price": 188.768102,
      "vladimir_coins": 10605,
      "vladimir_costs": 2001862,
      "coins_per_pers": 0.013789
    },
    {
      "cmc_rank": 3,
      "ticker": "XRP",
      "name": "XRP",
      "full_name": "XRP (XRP)",
      "supply": 100000000000,
      "price": 0.317099,
      "vladimir_coins": 10000000,
      "vladimir_costs": 3170991,
      "coins_per_pers": 13.002802
    },
    {
      "cmc_rank": 4,
      "ticker": "BCH",
      "name": "Bitcoin Cash",
      "full_name": "Bitcoin Cash (BCH)",
      "supply": 21000000,
      "price": 354.063884,
      "vladimir_coins": 2100,
      "vladimir_costs": 743534,
      "coins_per_pers": 0.002731
    },
    {
      "cmc_rank": 5,
      "ticker": "LTC",
      "name": "Litecoin",
      "full_name": "Litecoin (LTC)",
      "supply": 84000000,
      "price": 85.78854,
      "vladimir_coins": 8400,
      "vladimir_costs": 720624,
      "coins_per_pers": 0.010922
    },
    {
      "cmc_rank": 6,
      "ticker": "EOS",
      "name": "EOS",
      "full_name": "EOS (EOS)",
      "supply": 1011411073.56,
      "price": 5.36571,
      "vladimir_coins": 101141,
      "vladimir_costs": 542694,
      "coins_per_pers": 0.131512
    },
    {
      "cmc_rank": 7,
      "ticker": "BNB",
      "name": "Binance Coin",
      "full_name": "Binance Coin (BNB)",
      "supply": 189175490.24,
      "price": 23.386562,
      "vladimir_coins": 18918,
      "vladimir_costs": 442416,
      "coins_per_pers": 0.024598
    },
    {
      "cmc_rank": 8,
      "ticker": "USDT",
      "name": "Tether",
      "full_name": "Tether (USDT)",
      "supply": 3220057493.36,
      "price": 0.99718,
      "vladimir_coins": 322006,
      "vladimir_costs": 321098,
      "coins_per_pers": 0.418698
    },
    {
      "cmc_rank": 9,
      "ticker": "XLM",
      "name": "Stellar",
      "full_name": "Stellar (XLM)",
      "supply": 104962402033.84,
      "price": 0.100675,
      "vladimir_coins": 10496240,
      "vladimir_costs": 1056707,
      "coins_per_pers": 13.648053
    },
    {
      "cmc_rank": 10,
      "ticker": "ADA",
      "name": "Cardano",
      "full_name": "Cardano (ADA)",
      "supply": 45000000000,
      "price": 0.071899,
      "vladimir_coins": 4500000,
      "vladimir_costs": 323546,
      "coins_per_pers": 5.851261
    },
    {
      "cmc_rank": 11,
      "ticker": "TRX",
      "name": "TRON",
      "full_name": "TRON (TRX)",
      "supply": 99281283754.3,
      "price": 0.024411,
      "vladimir_coins": 9928128,
      "vladimir_costs": 242355,
      "coins_per_pers": 12.909349
    },
    {
      "cmc_rank": 12,
      "ticker": "XMR",
      "name": "Monero",
      "full_name": "Monero (XMR)",
      "supply": 16976901.8,
      "price": 75.479992,
      "vladimir_coins": 1698,
      "vladimir_costs": 128142,
      "coins_per_pers": 0.002207
    },
    {
      "cmc_rank": 13,
      "ticker": "DASH",
      "name": "Dash",
      "full_name": "Dash (DASH)",
      "supply": 18900000,
      "price": 129.787914,
      "vladimir_coins": 1890,
      "vladimir_costs": 245299,
      "coins_per_pers": 0.002458
    },
    {
      "cmc_rank": 14,
      "ticker": "BSV",
      "name": "Bitcoin SV",
      "full_name": "Bitcoin SV (BSV)",
      "supply": 21000000,
      "price": 57.376014,
      "vladimir_coins": 2100,
      "vladimir_costs": 120490,
      "coins_per_pers": 0.002731
    },
    {
      "cmc_rank": 15,
      "ticker": "MIOTA",
      "name": "IOTA",
      "full_name": "IOTA (MIOTA)",
      "supply": 2779530283,
      "price": 0.31143,
      "vladimir_coins": 277953,
      "vladimir_costs": 86563,
      "coins_per_pers": 0.361417
    },
    {
      "cmc_rank": 16,
      "ticker": "XTZ",
      "name": "Tezos",
      "full_name": "Tezos (XTZ)",
      "supply": 794001681.87,
      "price": 1.246603,
      "vladimir_coins": 79400,
      "vladimir_costs": 98980,
      "coins_per_pers": 0.103242
    },
    {
      "cmc_rank": 17,
      "ticker": "ATOM",
      "name": "Cosmos",
      "full_name": "Cosmos (ATOM)",
      "supply": 237928230.82,
      "price": 4.13307,
      "vladimir_coins": 23793,
      "vladimir_costs": 98337,
      "coins_per_pers": 0.030937
    },
    {
      "cmc_rank": 18,
      "ticker": "ETC",
      "name": "Ethereum Classic",
      "full_name": "Ethereum Classic (ETC)",
      "supply": 210000000,
      "price": 5.939436,
      "vladimir_coins": 21000,
      "vladimir_costs": 124728,
      "coins_per_pers": 0.027306
    },
    {
      "cmc_rank": 19,
      "ticker": "NEO",
      "name": "NEO",
      "full_name": "NEO (NEO)",
      "supply": 100000000,
      "price": 9.467467,
      "vladimir_coins": 10000,
      "vladimir_costs": 94675,
      "coins_per_pers": 0.013003
    },
    {
      "cmc_rank": 20,
      "ticker": "ONT",
      "name": "Ontology",
      "full_name": "Ontology (ONT)",
      "supply": 1000000000,
      "price": 1.210624,
      "vladimir_coins": 100000,
      "vladimir_costs": 121062,
      "coins_per_pers": 0.130028
    },
    {
      "cmc_rank": 21,
      "ticker": "MKR",
      "name": "Maker",
      "full_name": "Maker (MKR)",
      "supply": 1000000,
      "price": 567.849449,
      "vladimir_coins": 100,
      "vladimir_costs": 56785,
      "coins_per_pers": 0.00013
    },
    {
      "cmc_rank": 22,
      "ticker": "XEM",
      "name": "NEM",
      "full_name": "NEM (XEM)",
      "supply": 8999999999,
      "price": 0.0564,
      "vladimir_coins": 900000,
      "vladimir_costs": 50760,
      "coins_per_pers": 1.170252
    },
    {
      "cmc_rank": 23,
      "ticker": "BAT",
      "name": "Basic Attention Token",
      "full_name": "Basic Attention Token (BAT)",
      "supply": 1500000000,
      "price": 0.361392,
      "vladimir_coins": 150000,
      "vladimir_costs": 54209,
      "coins_per_pers": 0.195042
    },
    {
      "cmc_rank": 24,
      "ticker": "ZEC",
      "name": "Zcash",
      "full_name": "Zcash (ZEC)",
      "supply": 6521856.25,
      "price": 61.336609,
      "vladimir_coins": 652,
      "vladimir_costs": 40003,
      "coins_per_pers": 0.000848
    },
    {
      "cmc_rank": 25,
      "ticker": "BTG",
      "name": "Bitcoin Gold",
      "full_name": "Bitcoin Gold (BTG)",
      "supply": 21000000,
      "price": 21.710529,
      "vladimir_coins": 2100,
      "vladimir_costs": 45592,
      "coins_per_pers": 0.002731
    },
    {
      "cmc_rank": 26,
      "ticker": "CRO",
      "name": "Crypto.com Chain",
      "full_name": "Crypto.com Chain (CRO)",
      "supply": 100000000000,
      "price": 0.065307,
      "vladimir_coins": 10000000,
      "vladimir_costs": 653068,
      "coins_per_pers": 13.002802
    },
    {
      "cmc_rank": 27,
      "ticker": "VET",
      "name": "VeChain",
      "full_name": "VeChain (VET)",
      "supply": 86712634466,
      "price": 0.006317,
      "vladimir_coins": 8671263,
      "vladimir_costs": 54774,
      "coins_per_pers": 11.275072
    },
    {
      "cmc_rank": 28,
      "ticker": "USDC",
      "name": "USD Coin",
      "full_name": "USD Coin (USDC)",
      "supply": 327797776.94,
      "price": 0.998419,
      "vladimir_coins": 32780,
      "vladimir_costs": 32728,
      "coins_per_pers": 0.042623
    },
    {
      "cmc_rank": 29,
      "ticker": "DOGE",
      "name": "Dogecoin",
      "full_name": "Dogecoin (DOGE)",
      "supply": 119475615248.98,
      "price": 0.002696,
      "vladimir_coins": 11947562,
      "vladimir_costs": 32209,
      "coins_per_pers": 15.535178
    },
    {
      "cmc_rank": 30,
      "ticker": "DCR",
      "name": "Decred",
      "full_name": "Decred (DCR)",
      "supply": 21000000,
      "price": 27.50225,
      "vladimir_coins": 2100,
      "vladimir_costs": 57755,
      "coins_per_pers": 0.002731
    },
    {
      "cmc_rank": 31,
      "ticker": "WAVES",
      "name": "Waves",
      "full_name": "Waves (WAVES)",
      "supply": 100000000,
      "price": 2.397656,
      "vladimir_coins": 10000,
      "vladimir_costs": 23977,
      "coins_per_pers": 0.013003
    },
    {
      "cmc_rank": 32,
      "ticker": "OMG",
      "name": "OmiseGO",
      "full_name": "OmiseGO (OMG)",
      "supply": 140245398.25,
      "price": 1.702947,
      "vladimir_coins": 14025,
      "vladimir_costs": 23883,
      "coins_per_pers": 0.018236
    },
    {
      "cmc_rank": 33,
      "ticker": "QTUM",
      "name": "Qtum",
      "full_name": "Qtum (QTUM)",
      "supply": 107822406,
      "price": 2.455046,
      "vladimir_coins": 10782,
      "vladimir_costs": 26471,
      "coins_per_pers": 0.01402
    },
    {
      "cmc_rank": 34,
      "ticker": "LINK",
      "name": "Chainlink",
      "full_name": "Chainlink (LINK)",
      "supply": 1000000000,
      "price": 0.670999,
      "vladimir_coins": 100000,
      "vladimir_costs": 67100,
      "coins_per_pers": 0.130028
    },
    {
      "cmc_rank": 35,
      "ticker": "TUSD",
      "name": "TrueUSD",
      "full_name": "TrueUSD (TUSD)",
      "supply": 234148207.07,
      "price": 1.001106,
      "vladimir_coins": 23415,
      "vladimir_costs": 23441,
      "coins_per_pers": 0.030446
    },
    {
      "cmc_rank": 36,
      "ticker": "NANO",
      "name": "Nano",
      "full_name": "Nano (NANO)",
      "supply": 133248290,
      "price": 1.68786,
      "vladimir_coins": 13325,
      "vladimir_costs": 22490,
      "coins_per_pers": 0.017326
    },
    {
      "cmc_rank": 37,
      "ticker": "REP",
      "name": "Augur",
      "full_name": "Augur (REP)",
      "supply": 11000000,
      "price": 20.073789,
      "vladimir_coins": 1100,
      "vladimir_costs": 22081,
      "coins_per_pers": 0.00143
    },
    {
      "cmc_rank": 38,
      "ticker": "LSK",
      "name": "Lisk",
      "full_name": "Lisk (LSK)",
      "supply": 132000355,
      "price": 1.750465,
      "vladimir_coins": 13200,
      "vladimir_costs": 23106,
      "coins_per_pers": 0.017164
    },
    {
      "cmc_rank": 39,
      "ticker": "PAX",
      "name": "Paxos Standard Token",
      "full_name": "Paxos Standard Token (PAX)",
      "supply": 193450399.76,
      "price": 0.997508,
      "vladimir_coins": 19345,
      "vladimir_costs": 19297,
      "coins_per_pers": 0.025154
    },
    {
      "cmc_rank": 40,
      "ticker": "BCN",
      "name": "Bytecoin",
      "full_name": "Bytecoin (BCN)",
      "supply": 184470000000,
      "price": 0.000944,
      "vladimir_coins": 18447000,
      "vladimir_costs": 17408,
      "coins_per_pers": 23.986269
    },
    {
      "cmc_rank": 41,
      "ticker": "BCD",
      "name": "Bitcoin Diamond",
      "full_name": "Bitcoin Diamond (BCD)",
      "supply": 210000000,
      "price": 0.905133,
      "vladimir_coins": 21000,
      "vladimir_costs": 19008,
      "coins_per_pers": 0.027306
    },
    {
      "cmc_rank": 42,
      "ticker": "RVN",
      "name": "Ravencoin",
      "full_name": "Ravencoin (RVN)",
      "supply": 21000000000,
      "price": 0.047609,
      "vladimir_coins": 2100000,
      "vladimir_costs": 99978,
      "coins_per_pers": 2.730588
    },
    {
      "cmc_rank": 43,
      "ticker": "HOT",
      "name": "Holo",
      "full_name": "Holo (HOT)",
      "supply": 177619433541.14,
      "price": 0.001226,
      "vladimir_coins": 17761943,
      "vladimir_costs": 21781,
      "coins_per_pers": 23.095503
    },
    {
      "cmc_rank": 44,
      "ticker": "ZRX",
      "name": "0x",
      "full_name": "0x (ZRX)",
      "supply": 1000000000,
      "price": 0.278501,
      "vladimir_coins": 100000,
      "vladimir_costs": 27850,
      "coins_per_pers": 0.130028
    },
    {
      "cmc_rank": 45,
      "ticker": "ICX",
      "name": "ICON",
      "full_name": "ICON (ICX)",
      "supply": 800460000,
      "price": 0.336308,
      "vladimir_coins": 80046,
      "vladimir_costs": 26920,
      "coins_per_pers": 0.104082
    },
    {
      "cmc_rank": 46,
      "ticker": "IOST",
      "name": "IOST",
      "full_name": "IOST (IOST)",
      "supply": 21000000000,
      "price": 0.013003,
      "vladimir_coins": 2100000,
      "vladimir_costs": 27307,
      "coins_per_pers": 2.730588
    },
    {
      "cmc_rank": 47,
      "ticker": "BTT",
      "name": "BitTorrent",
      "full_name": "BitTorrent (BTT)",
      "supply": 990000000000,
      "price": 0.000728,
      "vladimir_coins": 99000000,
      "vladimir_costs": 72115,
      "coins_per_pers": 128.727741
    },
    {
      "cmc_rank": 48,
      "ticker": "ABBC",
      "name": "ABBC Coin",
      "full_name": "ABBC Coin (ABBC)",
      "supply": 1002169530.01,
      "price": 0.297482,
      "vladimir_coins": 100217,
      "vladimir_costs": 29813,
      "coins_per_pers": 0.13031
    },
    {
      "cmc_rank": 49,
      "ticker": "BTS",
      "name": "BitShares",
      "full_name": "BitShares (BTS)",
      "supply": 3600570502,
      "price": 0.054935,
      "vladimir_coins": 360057,
      "vladimir_costs": 19780,
      "coins_per_pers": 0.468175
    },
    {
      "cmc_rank": 50,
      "ticker": "ZIL",
      "name": "Zilliqa",
      "full_name": "Zilliqa (ZIL)",
      "supply": 12533042434.61,
      "price": 0.016097,
      "vladimir_coins": 1253304,
      "vladimir_costs": 20175,
      "coins_per_pers": 1.629647
    },
    {
      "cmc_rank": 51,
      "ticker": "NPXS",
      "name": "Pundi X",
      "full_name": "Pundi X (NPXS)",
      "supply": 266962422906.54,
      "price": 0.000653,
      "vladimir_coins": 26696242,
      "vladimir_costs": 17433,
      "coins_per_pers": 34.712596
    },
    {
      "cmc_rank": 52,
      "ticker": "KMD",
      "name": "Komodo",
      "full_name": "Komodo (KMD)",
      "supply": 200000000,
      "price": 1.151707,
      "vladimir_coins": 20000,
      "vladimir_costs": 23034,
      "coins_per_pers": 0.026006
    },
    {
      "cmc_rank": 53,
      "ticker": "DGB",
      "name": "DigiByte",
      "full_name": "DigiByte (DGB)",
      "supply": 21000000000,
      "price": 0.010734,
      "vladimir_coins": 2100000,
      "vladimir_costs": 22541,
      "coins_per_pers": 2.730588
    },
    {
      "cmc_rank": 54,
      "ticker": "AE",
      "name": "Aeternity",
      "full_name": "Aeternity (AE)",
      "supply": 309878470.5,
      "price": 0.459119,
      "vladimir_coins": 30988,
      "vladimir_costs": 14227,
      "coins_per_pers": 0.040293
    },
    {
      "cmc_rank": 55,
      "ticker": "XVG",
      "name": "Verge",
      "full_name": "Verge (XVG)",
      "supply": 16555000000,
      "price": 0.007492,
      "vladimir_coins": 1655500,
      "vladimir_costs": 12404,
      "coins_per_pers": 2.152614
    },
    {
      "cmc_rank": 56,
      "ticker": "HT",
      "name": "Huobi Token",
      "full_name": "Huobi Token (HT)",
      "supply": 500000000,
      "price": 2.404252,
      "vladimir_coins": 50000,
      "vladimir_costs": 120213,
      "coins_per_pers": 0.065014
    },
    {
      "cmc_rank": 57,
      "ticker": "SC",
      "name": "Siacoin",
      "full_name": "Siacoin (SC)",
      "supply": 40666577747,
      "price": 0.002862,
      "vladimir_coins": 4066658,
      "vladimir_costs": 11641,
      "coins_per_pers": 5.287795
    },
    {
      "cmc_rank": 58,
      "ticker": "INB",
      "name": "Insight Chain",
      "full_name": "Insight Chain (INB)",
      "supply": 10000000000,
      "price": 0.317484,
      "vladimir_coins": 1000000,
      "vladimir_costs": 317484,
      "coins_per_pers": 1.30028
    },
    {
      "cmc_rank": 59,
      "ticker": "ENJ",
      "name": "Enjin Coin",
      "full_name": "Enjin Coin (ENJ)",
      "supply": 1000000000,
      "price": 0.143229,
      "vladimir_coins": 100000,
      "vladimir_costs": 14323,
      "coins_per_pers": 0.130028
    },
    {
      "cmc_rank": 60,
      "ticker": "BTM",
      "name": "Bytom",
      "full_name": "Bytom (BTM)",
      "supply": 1407000000,
      "price": 0.102499,
      "vladimir_coins": 140700,
      "vladimir_costs": 14422,
      "coins_per_pers": 0.182949
    },
    {
      "cmc_rank": 61,
      "ticker": "STEEM",
      "name": "Steem",
      "full_name": "Steem (STEEM)",
      "supply": 338319718.18,
      "price": 0.319837,
      "vladimir_coins": 33832,
      "vladimir_costs": 10821,
      "coins_per_pers": 0.043991
    },
    {
      "cmc_rank": 62,
      "ticker": "AOA",
      "name": "Aurora",
      "full_name": "Aurora (AOA)",
      "supply": 10000000000,
      "price": 0.016843,
      "vladimir_coins": 1000000,
      "vladimir_costs": 16843,
      "coins_per_pers": 1.30028
    },
    {
      "cmc_rank": 63,
      "ticker": "KCS",
      "name": "KuCoin Shares",
      "full_name": "KuCoin Shares (KCS)",
      "supply": 179659415,
      "price": 1.10173,
      "vladimir_coins": 17966,
      "vladimir_costs": 19794,
      "coins_per_pers": 0.023361
    },
    {
      "cmc_rank": 64,
      "ticker": "WTC",
      "name": "Waltonchain",
      "full_name": "Waltonchain (WTC)",
      "supply": 100000000,
      "price": 2.156905,
      "vladimir_coins": 10000,
      "vladimir_costs": 21569,
      "coins_per_pers": 0.013003
    },
    {
      "cmc_rank": 65,
      "ticker": "THR",
      "name": "ThoreCoin",
      "full_name": "ThoreCoin (THR)",
      "supply": 100000,
      "price": 1036.232612,
      "vladimir_coins": 10,
      "vladimir_costs": 10362,
      "coins_per_pers": 0.000013
    },
    {
      "cmc_rank": 66,
      "ticker": "QBIT",
      "name": "Qubitica",
      "full_name": "Qubitica (QBIT)",
      "supply": 10000000,
      "price": 31.358384,
      "vladimir_coins": 1000,
      "vladimir_costs": 31358,
      "coins_per_pers": 0.0013
    },
    {
      "cmc_rank": 67,
      "ticker": "FCT",
      "name": "Factom",
      "full_name": "Factom (FCT)",
      "supply": 9463180.54,
      "price": 9.299112,
      "vladimir_coins": 946,
      "vladimir_costs": 8800,
      "coins_per_pers": 0.00123
    },
    {
      "cmc_rank": 68,
      "ticker": "CNX",
      "name": "Cryptonex",
      "full_name": "Cryptonex (CNX)",
      "supply": 210000000,
      "price": 1.534817,
      "vladimir_coins": 21000,
      "vladimir_costs": 32231,
      "coins_per_pers": 0.027306
    },
    {
      "cmc_rank": 69,
      "ticker": "DAI",
      "name": "Dai",
      "full_name": "Dai (DAI)",
      "supply": 84432204.25,
      "price": 0.988488,
      "vladimir_coins": 8443,
      "vladimir_costs": 8346,
      "coins_per_pers": 0.010979
    },
    {
      "cmc_rank": 70,
      "ticker": "STRAT",
      "name": "Stratis",
      "full_name": "Stratis (STRAT)",
      "supply": 99325434.17,
      "price": 0.830795,
      "vladimir_coins": 9933,
      "vladimir_costs": 8252,
      "coins_per_pers": 0.012915
    },
    {
      "cmc_rank": 71,
      "ticker": "THETA",
      "name": "THETA",
      "full_name": "THETA (THETA)",
      "supply": 1000000000,
      "price": 0.094424,
      "vladimir_coins": 100000,
      "vladimir_costs": 9442,
      "coins_per_pers": 0.130028
    },
    {
      "cmc_rank": 72,
      "ticker": "XIN",
      "name": "Mixin",
      "full_name": "Mixin (XIN)",
      "supply": 1000000,
      "price": 180.42708,
      "vladimir_coins": 100,
      "vladimir_costs": 18043,
      "coins_per_pers": 0.00013
    },
    {
      "cmc_rank": 73,
      "ticker": "ZEN",
      "name": "Horizen",
      "full_name": "Horizen (ZEN)",
      "supply": 21000000,
      "price": 12.426789,
      "vladimir_coins": 2100,
      "vladimir_costs": 26096,
      "coins_per_pers": 0.002731
    },
    {
      "cmc_rank": 74,
      "ticker": "SNT",
      "name": "Status",
      "full_name": "Status (SNT)",
      "supply": 6804870174,
      "price": 0.022637,
      "vladimir_coins": 680487,
      "vladimir_costs": 15404,
      "coins_per_pers": 0.884824
    },
    {
      "cmc_rank": 75,
      "ticker": "MCO",
      "name": "Crypto.com",
      "full_name": "Crypto.com (MCO)",
      "supply": 31587682.36,
      "price": 4.848609,
      "vladimir_coins": 3159,
      "vladimir_costs": 15316,
      "coins_per_pers": 0.004107
    },
    {
      "cmc_rank": 76,
      "ticker": "VEST",
      "name": "VestChain",
      "full_name": "VestChain (VEST)",
      "supply": 8848000000,
      "price": 0.010759,
      "vladimir_coins": 884800,
      "vladimir_costs": 9520,
      "coins_per_pers": 1.150488
    },
    {
      "cmc_rank": 77,
      "ticker": "ARDR",
      "name": "Ardor",
      "full_name": "Ardor (ARDR)",
      "supply": 998999495,
      "price": 0.074902,
      "vladimir_coins": 99900,
      "vladimir_costs": 7483,
      "coins_per_pers": 0.129898
    },
    {
      "cmc_rank": 78,
      "ticker": "MAID",
      "name": "MaidSafeCoin",
      "full_name": "MaidSafeCoin (MAID)",
      "supply": 452552412,
      "price": 0.162253,
      "vladimir_coins": 45255,
      "vladimir_costs": 7343,
      "coins_per_pers": 0.058844
    },
    {
      "cmc_rank": 79,
      "ticker": "DGD",
      "name": "DigixDAO",
      "full_name": "DigixDAO (DGD)",
      "supply": 2000000,
      "price": 36.197687,
      "vladimir_coins": 200,
      "vladimir_costs": 7240,
      "coins_per_pers": 0.00026
    },
    {
      "cmc_rank": 80,
      "ticker": "GNT",
      "name": "Golem",
      "full_name": "Golem (GNT)",
      "supply": 1000000000,
      "price": 0.072339,
      "vladimir_coins": 100000,
      "vladimir_costs": 7234,
      "coins_per_pers": 0.130028
    },
    {
      "cmc_rank": 81,
      "ticker": "TRUE",
      "name": "TrueChain",
      "full_name": "TrueChain (TRUE)",
      "supply": 100000000,
      "price": 0.853842,
      "vladimir_coins": 10000,
      "vladimir_costs": 8538,
      "coins_per_pers": 0.013003
    },
    {
      "cmc_rank": 82,
      "ticker": "AION",
      "name": "Aion",
      "full_name": "Aion (AION)",
      "supply": 309581662,
      "price": 0.206196,
      "vladimir_coins": 30958,
      "vladimir_costs": 6383,
      "coins_per_pers": 0.040254
    },
    {
      "cmc_rank": 83,
      "ticker": "GXC",
      "name": "GXChain",
      "full_name": "GXChain (GXC)",
      "supply": 100000000,
      "price": 1.046595,
      "vladimir_coins": 10000,
      "vladimir_costs": 10466,
      "coins_per_pers": 0.013003
    },
    {
      "cmc_rank": 84,
      "ticker": "PAI",
      "name": "Project Pai",
      "full_name": "Project Pai (PAI)",
      "supply": 1594461000,
      "price": 0.04246,
      "vladimir_coins": 159446,
      "vladimir_costs": 6770,
      "coins_per_pers": 0.207325
    },
    {
      "cmc_rank": 85,
      "ticker": "MONA",
      "name": "MonaCoin",
      "full_name": "MonaCoin (MONA)",
      "supply": 65729674.87,
      "price": 0.921117,
      "vladimir_coins": 6573,
      "vladimir_costs": 6054,
      "coins_per_pers": 0.008547
    },
    {
      "cmc_rank": 86,
      "ticker": "WAX",
      "name": "WAX",
      "full_name": "WAX (WAX)",
      "supply": 1850000000,
      "price": 0.063893,
      "vladimir_coins": 185000,
      "vladimir_costs": 11820,
      "coins_per_pers": 0.240552
    },
    {
      "cmc_rank": 87,
      "ticker": "MXM",
      "name": "Maximine Coin",
      "full_name": "Maximine Coin (MXM)",
      "supply": 16000000000,
      "price": 0.036334,
      "vladimir_coins": 1600000,
      "vladimir_costs": 58135,
      "coins_per_pers": 2.080448
    },
    {
      "cmc_rank": 88,
      "ticker": "ELF",
      "name": "aelf",
      "full_name": "aelf (ELF)",
      "supply": 1000000000,
      "price": 0.168648,
      "vladimir_coins": 100000,
      "vladimir_costs": 16865,
      "coins_per_pers": 0.130028
    },
    {
      "cmc_rank": 89,
      "ticker": "ARK",
      "name": "Ark",
      "full_name": "Ark (ARK)",
      "supply": 141487250,
      "price": 0.524313,
      "vladimir_coins": 14149,
      "vladimir_costs": 7418,
      "coins_per_pers": 0.018397
    },
    {
      "cmc_rank": 90,
      "ticker": "PPT",
      "name": "Populous",
      "full_name": "Populous (PPT)",
      "supply": 53252246,
      "price": 1.067192,
      "vladimir_coins": 5325,
      "vladimir_costs": 5683,
      "coins_per_pers": 0.006924
    },
    {
      "cmc_rank": 91,
      "ticker": "DENT",
      "name": "Dent",
      "full_name": "Dent (DENT)",
      "supply": 100000000000,
      "price": 0.00084,
      "vladimir_coins": 10000000,
      "vladimir_costs": 8403,
      "coins_per_pers": 13.002802
    },
    {
      "cmc_rank": 92,
      "ticker": "RLC",
      "name": "iExec RLC",
      "full_name": "iExec RLC (RLC)",
      "supply": 86999784.99,
      "price": 0.702832,
      "vladimir_coins": 8700,
      "vladimir_costs": 6115,
      "coins_per_pers": 0.011312
    },
    {
      "cmc_rank": 93,
      "ticker": "ABT",
      "name": "Arcblock",
      "full_name": "Arcblock (ABT)",
      "supply": 186000000,
      "price": 0.5709,
      "vladimir_coins": 18600,
      "vladimir_costs": 10619,
      "coins_per_pers": 0.024185
    },
    {
      "cmc_rank": 94,
      "ticker": "SAN",
      "name": "Santiment Network Token",
      "full_name": "Santiment Network Token (SAN)",
      "supply": 83337000,
      "price": 0.86307,
      "vladimir_coins": 8334,
      "vladimir_costs": 7193,
      "coins_per_pers": 0.010836
    },
    {
      "cmc_rank": 95,
      "ticker": "MANA",
      "name": "Decentraland",
      "full_name": "Decentraland (MANA)",
      "supply": 2644403343.16,
      "price": 0.051111,
      "vladimir_coins": 264440,
      "vladimir_costs": 13516,
      "coins_per_pers": 0.343847
    },
    {
      "cmc_rank": 96,
      "ticker": "ETP",
      "name": "Metaverse ETP",
      "full_name": "Metaverse ETP (ETP)",
      "supply": 100000000,
      "price": 0.74916,
      "vladimir_coins": 10000,
      "vladimir_costs": 7492,
      "coins_per_pers": 0.013003
    },
    {
      "cmc_rank": 97,
      "ticker": "XZC",
      "name": "Zcoin",
      "full_name": "Zcoin (XZC)",
      "supply": 21400000,
      "price": 6.927669,
      "vladimir_coins": 2140,
      "vladimir_costs": 14825,
      "coins_per_pers": 0.002783
    },
    {
      "cmc_rank": 98,
      "ticker": "JCT",
      "name": "Japan Content Token",
      "full_name": "Japan Content Token (JCT)",
      "supply": 2500000000,
      "price": 0.173517,
      "vladimir_coins": 250000,
      "vladimir_costs": 43379,
      "coins_per_pers": 0.32507
    },
    {
      "cmc_rank": 99,
      "ticker": "ELA",
      "name": "Elastos",
      "full_name": "Elastos (ELA)",
      "supply": 34441382.03,
      "price": 3.273497,
      "vladimir_coins": 3444,
      "vladimir_costs": 11274,
      "coins_per_pers": 0.004478
    },
    {
      "cmc_rank": 100,
      "ticker": "R",
      "name": "Revain",
      "full_name": "Revain (R)",
      "supply": 484450000,
      "price": 0.102341,
      "vladimir_coins": 48445,
      "vladimir_costs": 4958,
      "coins_per_pers": 0.062992
    }
  ];
  
  // PURE FUNCTIONS
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; 
  }
  
  // SYNC FUNCTIONS
  function render() {
      const padding   = { top: 20, right: 20, bottom: 20, left: 20};
      const width     = 500 - padding.left - padding.right;
      const height    = 500 - padding.top - padding.bottom;
      const radius    = Math.min(width, height) / 2;
      const spins     = 3;
      const degrees   = spins * 360;
      const color     = d3.scaleOrdinal(["#e5dff6","#e5f6df","#dfe5f6","#ebd4f3", "#f6f0df"]);
      let counter     = 0;
      let picked      = 1000;
  
      let fontSize;
      if(selection > 50) {
          fontSize = '10px';
      } else {
          fontSize = '18px';
      }
  
      let svg = d3.select('#chart').selectAll('svg').data([null]);
      svg = svg
          .enter().append('svg')
          .merge(svg)
          .data([data])
              .attr('width', 500)
              .attr('height', 500);
      
      const container = svg.append('g')
          .attr('class', 'chartcontainer')
          .attr('transform', `translate(${width/2 + padding.left},${height/2 + padding.top})`);
      
      const wheel = container.append('g')
          .attr('class', 'wheel');
      
      const pie = d3.pie().sort(null).value(function(d){return 1;});
      
      const arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);
      
      const arcs = wheel.selectAll('g.slice')
          .data(pie)
          .enter()
          .append('g')
              .attr('class', 'slice');
      
      arcs.append('path')
          .attr('fill', function(d,i){return color(i);})
          .attr('d', function(d){return arc(d);});
      
      arcs.append("text").attr("transform", function(d){
          d.innerRadius = 0;
          d.outerRadius = radius;
          d.angle = (d.startAngle + d.endAngle)/2;
          return `rotate(${(d.angle * 180 / Math.PI - 90)})translate(${d.outerRadius -10})`;
          })
              .attr("text-anchor", "end")
          .text( function(d, i) {
              console.log(data[i].ticker);
              return data[i].ticker;
          })
          .style('font-size', fontSize);
      
      // arrow
      svg.append('g')
              .attr('class', 'arrow')
              .attr('transform', `translate(${(width + padding.left + padding.right)/2 - 15}, 12)`)
          .append('path')
              .attr('d', `M0 0 H30 L 15 ${Math.sqrt(3)/2*30}Z`)
              .style('fill', '#000809');
      
      // push button
      const push = d3.select('#push');
      
      push.on('click', spin);
      
      // FUNCTIONS
      function spin(d){
          counter++;
      
          const piedegree         = 360 / data.length;
          const randomAssetIndex  = getRandomInt(0, data.length);
          const randomPieMovement = getRandomInt(1, piedegree);
          
          rotation = (data.length - randomAssetIndex) * piedegree - randomPieMovement + degrees;
      
          wheel.transition()
              .duration(3000)
              .attrTween('transform', rotTween)
              .ease(d3.easeCircleOut)
              .on('end', function(){
      
                  let result = d3.select('#result').data([null]);
                  result = result
                      .enter()
                      .append('text')
                          .attr('class', 'result')
                      .merge(result)
                          .text(data[randomAssetIndex].ticker)
                          .style('font-size', '30px')
                          .style('font-weight', '700');
                  
  
                  let name = d3.select('.spin-result-name').data([null]);
                  name = name
                  .enter()
                  .append('text')
                      .attr('class', '')
                  .merge(name)
                      .text(` ${top100[randomAssetIndex].name}`)
  
                  let rank = d3.select('.spin-result-rank').data([null]);
                  rank = rank
                  .enter()
                  .append('text')
                      .attr('class', '')
                  .merge(rank)
                      .text(` ${top100[randomAssetIndex].cmc_rank}`);
  
                  let price = d3.select('.spin-result-price').data([null]);
                  price = price
                  .enter()
                  .append('text')
                      .attr('class', '')
                  .merge(price)
                      .text(` $${top100[randomAssetIndex].price}`);
  
                  let vladimir = d3.select('.spin-result-vladimir').data([null]);
                  vladimir = vladimir
                  .enter()
                  .append('text')
                      .attr('class', '')
                  .merge(vladimir)
                      .text(` $${top100[randomAssetIndex].vladimir_costs}`);
  
                  let coins = d3.select('.spin-result-coins').data([null]);
                  coins = coins
                  .enter()
                  .append('text')
                      .attr('class', '')
                  .merge(coins)
                      .text(` ${top100[randomAssetIndex].coins_per_pers}`);
  
                  let details = d3.select('#modal').data([null]);
                  details = details
                      .enter()
                      .merge(details)
                          .style('display', 'block');
              });
      }
      
      function rotTween() {
          let i = d3.interpolate(0, rotation);
          return function(t) {
              return `rotate(${i(t)})`;
          };
      }
  }
  
  function getData(value) {
      let array = [];
  
      for(let i = 0; i < value; i++) {
          array.push(rawData[i]);
      }
  
      return array;
  }
  
  function updateSelection(e) {
      buttons.forEach(button => {
          button.classList.remove('current');
      });
  
      if(e.target.classList.contains('difficulty__button')) {
          e.target.classList.add('current');
      }
  
      selection = document.querySelector('.current').value;
      data = getData(selection);
      render();
  }
  
  function closeModal() {
      modal.style.display = 'none';
  }
  
  function outsideClick(e) {
      if(e.target == modal) {
          modal.style.display = 'none';
      }
  }
  
  // EVENT LISTENERS
  box.addEventListener('click', updateSelection);
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', outsideClick);
  window.onload = render;