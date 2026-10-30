// Shared product catalog data, used by products.html, product-detail.html,
// search, favorites, and compare features.

const CATALOG = [
  // Toilets
  { id: 1, name: "Wall-Hung Toilet", category: "Toilets", price: 249, color: "White", size: "54", bidet: "Without bidet pipe", code: "166-003-109", stock: true,
    images: ["8142977", "7046006", "3741317"] },
  { id: 2, name: "Close-Coupled Toilet", category: "Toilets", price: 199, color: "White", size: "55", bidet: "Without bidet pipe", code: "166-003-110", stock: true,
    images: ["7046006", "7018255", "3741317"] },
  { id: 3, name: "Compact Corner Toilet", category: "Toilets", price: 219, color: "Matt Stone Grey", size: "56", bidet: "Without bidet pipe", code: "166-003-111", stock: true,
    images: ["3741317", "7018255", "8142977"] },
  { id: 4, name: "Smart Bidet Toilet", category: "Toilets", price: 599, color: "White", size: "63", bidet: "With bidet pipe", code: "166-003-112", stock: false,
    images: ["7018255", "8142977", "7046006"] },
  { id: 5, name: "Floor-Standing Toilet", category: "Toilets", price: 229, color: "Matt Black", size: "54", bidet: "Without bidet pipe", code: "166-003-113", stock: true,
    images: ["7046006", "3741317", "7018255"] },
  { id: 6, name: "Toilet with Bidet Pipe", category: "Toilets", price: 269, color: "White", size: "55", bidet: "With bidet pipe", code: "166-003-114", stock: true,
    images: ["3741317", "7046006", "8142977"] },

  // Washbasins
  { id: 7, name: "Countertop Basin", category: "Washbasins", price: 189, color: "White", size: "50", bidet: "", code: "166-004-201", stock: true,
    images: ["6045174", "29631655", "6782428"] },
  { id: 8, name: "Pedestal Basin", category: "Washbasins", price: 129, color: "White", size: "45", bidet: "", code: "166-004-202", stock: true,
    images: ["29631655", "6444979", "6045174"] },
  { id: 9, name: "Wall-Hung Basin", category: "Washbasins", price: 159, color: "Matt Sand Beige", size: "55", bidet: "", code: "166-004-203", stock: true,
    images: ["6782428", "6045174", "29631655"] },
  { id: 10, name: "Double Vanity Basin", category: "Washbasins", price: 349, color: "White", size: "100", bidet: "", code: "166-004-204", stock: true,
    images: ["6444979", "6782428", "29631655"] },
  { id: 11, name: "Pink Designer Basin", category: "Washbasins", price: 219, color: "Matt Sand Beige", size: "50", bidet: "", code: "166-004-205", stock: false,
    images: ["6045174", "6444979", "6782428"] },
  { id: 12, name: "Round Vessel Basin", category: "Washbasins", price: 175, color: "White", size: "42", bidet: "", code: "166-004-206", stock: true,
    images: ["29631655", "6045174", "6782428"] },

  // Furniture
  { id: 13, name: "Vanity Unit 600mm", category: "Furniture", price: 329, color: "White", size: "60", bidet: "", code: "166-005-301", stock: true,
    images: ["11701126", "6782580", "5860599"] },
  { id: 14, name: "Tall Storage Cabinet", category: "Furniture", price: 279, color: "Matt Black", size: "180", bidet: "", code: "166-005-302", stock: true,
    images: ["6782580", "5860599", "6585742"] },
  { id: 15, name: "Mirror Cabinet", category: "Furniture", price: 169, color: "White", size: "60", bidet: "", code: "166-005-303", stock: true,
    images: ["5860599", "6585742", "11701126"] },
  { id: 16, name: "Vanity Unit 900mm", category: "Furniture", price: 429, color: "White", size: "90", bidet: "", code: "166-005-304", stock: true,
    images: ["6585742", "11701126", "6782580"] },
  { id: 17, name: "Floating Wall Shelf", category: "Furniture", price: 89, color: "Matt Stone Grey", size: "80", bidet: "", code: "166-005-305", stock: true,
    images: ["11701126", "5860599", "6782580"] },
  { id: 18, name: "Freestanding Cabinet", category: "Furniture", price: 389, color: "White", size: "60", bidet: "", code: "166-005-306", stock: false,
    images: ["6782580", "6585742", "5860599"] },

  // Taps
  { id: 19, name: "Single Lever Mixer Tap", category: "Taps", price: 79, color: "Chrome", size: "", bidet: "", code: "166-006-401", stock: true,
    images: ["861414", "3616761", "19140578"] },
  { id: 20, name: "Bath Filler Tap", category: "Taps", price: 139, color: "Chrome", size: "", bidet: "", code: "166-006-402", stock: true,
    images: ["3616761", "19140578", "6782573"] },
  { id: 21, name: "Pull-Out Kitchen Tap", category: "Taps", price: 99, color: "Matt Black", size: "", bidet: "", code: "166-006-403", stock: true,
    images: ["19140578", "861414", "6782573"] },
  { id: 22, name: "Wall-Mounted Basin Tap", category: "Taps", price: 119, color: "Chrome", size: "", bidet: "", code: "166-006-404", stock: true,
    images: ["6782573", "861414", "3616761"] },
  { id: 23, name: "Thermostatic Bath Tap", category: "Taps", price: 189, color: "Matt Black", size: "", bidet: "", code: "166-006-405", stock: false,
    images: ["861414", "6782573", "19140578"] },
  { id: 24, name: "Freestanding Bath Tap", category: "Taps", price: 249, color: "Chrome", size: "", bidet: "", code: "166-006-406", stock: true,
    images: ["3616761", "6782573", "861414"] },

  // Shower Systems
  { id: 25, name: "Rainfall Shower Set", category: "Shower Systems", price: 159, color: "Chrome", size: "", bidet: "", code: "166-007-501", stock: true,
    images: ["1909656", "4194866", "4194865"] },
  { id: 26, name: "Handheld Shower Kit", category: "Shower Systems", price: 69, color: "Chrome", size: "", bidet: "", code: "166-007-502", stock: true,
    images: ["4194866", "4194865", "4194864"] },
  { id: 27, name: "Frameless Shower Enclosure", category: "Shower Systems", price: 459, color: "Chrome", size: "", bidet: "", code: "166-007-503", stock: true,
    images: ["4194865", "4194864", "1909656"] },
  { id: 28, name: "Thermostatic Shower Valve", category: "Shower Systems", price: 189, color: "Matt Black", size: "", bidet: "", code: "166-007-504", stock: true,
    images: ["4194864", "1909656", "4194866"] },
  { id: 29, name: "Square Shower Head", category: "Shower Systems", price: 99, color: "Matt Black", size: "", bidet: "", code: "166-007-505", stock: false,
    images: ["1909656", "4194865", "4194866"] },
  { id: 30, name: "Shower Bar Set", category: "Shower Systems", price: 119, color: "Chrome", size: "", bidet: "", code: "166-007-506", stock: true,
    images: ["4194866", "1909656", "4194864"] },

  // Tiles
  { id: 31, name: "Matte Ceramic Wall Tile", category: "Tiles", price: 24, color: "White", size: "30x60", bidet: "", code: "166-008-601", stock: true,
    images: ["11285486", "11285344", "11285334"], ext: "png" },
  { id: 32, name: "Stone-Look Floor Tile", category: "Tiles", price: 32, color: "Matt Stone Grey", size: "60x60", bidet: "", code: "166-008-602", stock: true,
    images: ["11285344", "11285334", "11285340"], ext: "png" },
  { id: 33, name: "Glass Mosaic Tile", category: "Tiles", price: 45, color: "White", size: "30x30", bidet: "", code: "166-008-603", stock: true,
    images: ["11285334", "11285340", "11285486"], ext: "png" },
  { id: 34, name: "Large Format Porcelain Tile", category: "Tiles", price: 38, color: "Matt Sand Beige", size: "60x120", bidet: "", code: "166-008-604", stock: true,
    images: ["11285340", "11285486", "11285344"], ext: "png" },
  { id: 35, name: "Hexagon Pattern Tile", category: "Tiles", price: 41, color: "Matt Black", size: "20x20", bidet: "", code: "166-008-605", stock: false,
    images: ["11285486", "11285334", "11285340"], ext: "png" },
  { id: 36, name: "Textured Wall Tile", category: "Tiles", price: 29, color: "White", size: "30x60", bidet: "", code: "166-008-606", stock: true,
    images: ["11285334", "11285486", "11285344"], ext: "png" },

  // Accessories
  { id: 37, name: "Soap Dispenser", category: "Accessories", price: 19, color: "Chrome", size: "", bidet: "", code: "166-009-701", stock: true,
    images: ["7262767", "4238996", "4210310"] },
  { id: 38, name: "Heated Towel Rail", category: "Accessories", price: 89, color: "Matt Black", size: "", bidet: "", code: "166-009-702", stock: true,
    images: ["4238996", "4210310", "12679"] },
  { id: 39, name: "Backlit Vanity Mirror", category: "Accessories", price: 139, color: "Chrome", size: "", bidet: "", code: "166-009-703", stock: true,
    images: ["4210310", "12679", "7262767"] },
  { id: 40, name: "Robe Hook Set", category: "Accessories", price: 14, color: "Chrome", size: "", bidet: "", code: "166-009-704", stock: true,
    images: ["12679", "7262767", "4238996"] },
  { id: 41, name: "Toilet Brush Holder", category: "Accessories", price: 22, color: "Matt Black", size: "", bidet: "", code: "166-009-705", stock: false,
    images: ["7262767", "12679", "4210310"] },
  { id: 42, name: "Wall-Mounted Soap Tray", category: "Accessories", price: 17, color: "Chrome", size: "", bidet: "", code: "166-009-706", stock: true,
    images: ["4210310", "4238996", "12679"] },

  // Toilets (more)
  { id: 43, name: "Rimless Wall-Hung Toilet", category: "Toilets", price: 279, color: "White", size: "56", bidet: "Without bidet pipe", code: "166-003-115", stock: true,
    images: ["8142977", "3741317", "7018255"] },
  { id: 44, name: "Short Projection Toilet", category: "Toilets", price: 209, color: "Matt Black", size: "54", bidet: "Without bidet pipe", code: "166-003-116", stock: true,
    images: ["7046006", "7018255", "8142977"] },
  { id: 45, name: "Comfort Height Toilet", category: "Toilets", price: 239, color: "White", size: "55", bidet: "Without bidet pipe", code: "166-003-117", stock: true,
    images: ["3741317", "8142977", "7046006"] },
  { id: 46, name: "Dual Flush Eco Toilet", category: "Toilets", price: 259, color: "Matt Sand Beige", size: "63", bidet: "With bidet pipe", code: "166-003-118", stock: false,
    images: ["7018255", "7046006", "3741317"] },

  // Washbasins (more)
  { id: 47, name: "Semi-Recessed Basin", category: "Washbasins", price: 169, color: "White", size: "45", bidet: "", code: "166-004-207", stock: true,
    images: ["6045174", "6782428", "29631655"] },
  { id: 48, name: "Trough Basin", category: "Washbasins", price: 299, color: "Matt Stone Grey", size: "80", bidet: "", code: "166-004-208", stock: true,
    images: ["6782428", "29631655", "6444979"] },
  { id: 49, name: "Oval Countertop Basin", category: "Washbasins", price: 199, color: "White", size: "55", bidet: "", code: "166-004-209", stock: true,
    images: ["29631655", "6444979", "6045174"] },
  { id: 50, name: "Compact Cloakroom Basin", category: "Washbasins", price: 119, color: "White", size: "40", bidet: "", code: "166-004-210", stock: false,
    images: ["6444979", "6045174", "6782428"] },

  // Furniture (more)
  { id: 51, name: "Slimline Vanity 450mm", category: "Furniture", price: 289, color: "White", size: "45", bidet: "", code: "166-005-307", stock: true,
    images: ["11701126", "6585742", "5860599"] },
  { id: 52, name: "Open Shelf Unit", category: "Furniture", price: 99, color: "Matt Black", size: "60", bidet: "", code: "166-005-308", stock: true,
    images: ["5860599", "6782580", "11701126"] },
  { id: 53, name: "Corner Vanity Unit", category: "Furniture", price: 319, color: "White", size: "50", bidet: "", code: "166-005-309", stock: true,
    images: ["6782580", "6585742", "5860599"] },
  { id: 54, name: "Freestanding Linen Cabinet", category: "Furniture", price: 349, color: "Matt Stone Grey", size: "40", bidet: "", code: "166-005-310", stock: true,
    images: ["6585742", "5860599", "6782580"] },

  // Taps (more)
  { id: 55, name: "Waterfall Basin Tap", category: "Taps", price: 129, color: "Chrome", size: "", bidet: "", code: "166-006-407", stock: true,
    images: ["861414", "19140578", "3616761"] },
  { id: 56, name: "Exposed Shower Mixer", category: "Taps", price: 159, color: "Matt Black", size: "", bidet: "", code: "166-006-408", stock: true,
    images: ["19140578", "6782573", "861414"] },
  { id: 57, name: "Mini Mono Basin Tap", category: "Taps", price: 69, color: "Chrome", size: "", bidet: "", code: "166-006-409", stock: true,
    images: ["3616761", "861414", "6782573"] },
  { id: 58, name: "Floor-Standing Bath Tap", category: "Taps", price: 329, color: "Chrome", size: "", bidet: "", code: "166-006-410", stock: false,
    images: ["6782573", "3616761", "19140578"] },

  // Shower Systems (more)
  { id: 59, name: "Concealed Shower Mixer", category: "Shower Systems", price: 219, color: "Chrome", size: "", bidet: "", code: "166-007-507", stock: true,
    images: ["1909656", "4194864", "4194866"] },
  { id: 60, name: "Twin Head Shower System", category: "Shower Systems", price: 279, color: "Chrome", size: "", bidet: "", code: "166-007-508", stock: true,
    images: ["4194864", "4194865", "1909656"] },
  { id: 61, name: "Sliding Door Shower Enclosure", category: "Shower Systems", price: 399, color: "Chrome", size: "", bidet: "", code: "166-007-509", stock: true,
    images: ["4194865", "1909656", "4194866"] },
  { id: 62, name: "Shower Tray 900x900", category: "Shower Systems", price: 149, color: "White", size: "", bidet: "", code: "166-007-510", stock: true,
    images: ["4194866", "4194864", "4194865"] },

  // Tiles (more)
  { id: 63, name: "Herringbone Pattern Tile", category: "Tiles", price: 48, color: "White", size: "15x60", bidet: "", code: "166-008-607", stock: true,
    images: ["11285334", "11285486", "11285340"], ext: "png" },
  { id: 64, name: "Terrazzo Effect Tile", category: "Tiles", price: 44, color: "Matt Sand Beige", size: "60x60", bidet: "", code: "166-008-608", stock: true,
    images: ["11285486", "11285340", "11285334"], ext: "png" },
  { id: 65, name: "Metro Brick Tile", category: "Tiles", price: 26, color: "White", size: "10x20", bidet: "", code: "166-008-609", stock: true,
    images: ["11285340", "11285334", "11285344"], ext: "png" },
  { id: 66, name: "Anti-Slip Floor Tile", category: "Tiles", price: 36, color: "Matt Stone Grey", size: "30x30", bidet: "", code: "166-008-610", stock: false,
    images: ["11285344", "11285340", "11285486"], ext: "png" },

  // Accessories (more)
  { id: 67, name: "Glass Shelf", category: "Accessories", price: 29, color: "Chrome", size: "", bidet: "", code: "166-009-707", stock: true,
    images: ["4238996", "7262767", "12679"] },
  { id: 68, name: "Toilet Roll Holder", category: "Accessories", price: 12, color: "Matt Black", size: "", bidet: "", code: "166-009-708", stock: true,
    images: ["12679", "4210310", "7262767"] },
  { id: 69, name: "Corner Shower Caddy", category: "Accessories", price: 24, color: "Chrome", size: "", bidet: "", code: "166-009-709", stock: true,
    images: ["4210310", "7262767", "4238996"] },
  { id: 70, name: "Bathroom Bin", category: "Accessories", price: 19, color: "Matt Black", size: "", bidet: "", code: "166-009-710", stock: true,
    images: ["7262767", "4210310", "12679"] },

  // Toilets (even more)
  { id: 71, name: "Back-to-Wall Toilet", category: "Toilets", price: 269, color: "White", size: "54", bidet: "Without bidet pipe", code: "166-003-119", stock: true,
    images: ["8142977", "7018255", "3741317"] },
  { id: 72, name: "Open-Back Toilet", category: "Toilets", price: 189, color: "White", size: "55", bidet: "Without bidet pipe", code: "166-003-120", stock: true,
    images: ["7046006", "3741317", "8142977"] },
  { id: 73, name: "High-Level Cistern Toilet", category: "Toilets", price: 349, color: "Matt Black", size: "56", bidet: "Without bidet pipe", code: "166-003-121", stock: true,
    images: ["3741317", "7018255", "7046006"] },
  { id: 74, name: "Low-Level Cistern Toilet", category: "Toilets", price: 299, color: "White", size: "55", bidet: "Without bidet pipe", code: "166-003-122", stock: true,
    images: ["7018255", "8142977", "7046006"] },
  { id: 75, name: "Macerator Toilet", category: "Toilets", price: 459, color: "White", size: "54", bidet: "With bidet pipe", code: "166-003-123", stock: false,
    images: ["8142977", "7046006", "7018255"] },
  { id: 76, name: "Children's Toilet", category: "Toilets", price: 159, color: "White", size: "42", bidet: "Without bidet pipe", code: "166-003-124", stock: true,
    images: ["7046006", "8142977", "3741317"] },

  // Washbasins (even more)
  { id: 77, name: "Furniture Basin 60cm", category: "Washbasins", price: 179, color: "White", size: "60", bidet: "", code: "166-004-211", stock: true,
    images: ["6045174", "29631655", "6444979"] },
  { id: 78, name: "Furniture Basin 80cm", category: "Washbasins", price: 219, color: "White", size: "80", bidet: "", code: "166-004-212", stock: true,
    images: ["29631655", "6782428", "6045174"] },
  { id: 79, name: "Cloakroom Corner Basin", category: "Washbasins", price: 139, color: "White", size: "35", bidet: "", code: "166-004-213", stock: true,
    images: ["6782428", "6444979", "29631655"] },
  { id: 80, name: "Freestanding Basin on Pedestal", category: "Washbasins", price: 259, color: "Matt Stone Grey", size: "50", bidet: "", code: "166-004-214", stock: true,
    images: ["6444979", "6045174", "6782428"] },
  { id: 81, name: "His and Hers Basin Set", category: "Washbasins", price: 389, color: "White", size: "100", bidet: "", code: "166-004-215", stock: true,
    images: ["6045174", "6782428", "6444979"] },
  { id: 82, name: "Shallow Depth Basin", category: "Washbasins", price: 149, color: "Matt Sand Beige", size: "45", bidet: "", code: "166-004-216", stock: false,
    images: ["29631655", "6444979", "6782428"] },

  // Furniture (even more)
  { id: 83, name: "Illuminated Mirror Cabinet", category: "Furniture", price: 229, color: "White", size: "70", bidet: "", code: "166-005-311", stock: true,
    images: ["5860599", "11701126", "6585742"] },
  { id: 84, name: "Wall-Hung Drawer Unit", category: "Furniture", price: 269, color: "Matt Black", size: "60", bidet: "", code: "166-005-312", stock: true,
    images: ["6782580", "5860599", "11701126"] },
  { id: 85, name: "Floor-Standing Drawer Unit", category: "Furniture", price: 309, color: "White", size: "60", bidet: "", code: "166-005-313", stock: true,
    images: ["11701126", "6782580", "6585742"] },
  { id: 86, name: "Laundry Hamper Cabinet", category: "Furniture", price: 199, color: "Matt Sand Beige", size: "40", bidet: "", code: "166-005-314", stock: true,
    images: ["6585742", "6782580", "5860599"] },
  { id: 87, name: "Vanity Unit with Worktop", category: "Furniture", price: 459, color: "White", size: "120", bidet: "", code: "166-005-315", stock: true,
    images: ["5860599", "6585742", "6782580"] },
  { id: 88, name: "Narrow Storage Tower", category: "Furniture", price: 179, color: "Matt Black", size: "30", bidet: "", code: "166-005-316", stock: false,
    images: ["6782580", "11701126", "5860599"] },

  // Taps (even more)
  { id: 89, name: "3-Hole Basin Set", category: "Taps", price: 219, color: "Chrome", size: "", bidet: "", code: "166-006-411", stock: true,
    images: ["861414", "3616761", "6782573"] },
  { id: 90, name: "Deck-Mounted Bath Mixer", category: "Taps", price: 179, color: "Chrome", size: "", bidet: "", code: "166-006-412", stock: true,
    images: ["3616761", "19140578", "861414"] },
  { id: 91, name: "Thermostatic Basin Mixer", category: "Taps", price: 199, color: "Matt Black", size: "", bidet: "", code: "166-006-413", stock: true,
    images: ["19140578", "861414", "3616761"] },
  { id: 92, name: "Eco Click Tap", category: "Taps", price: 89, color: "Chrome", size: "", bidet: "", code: "166-006-414", stock: true,
    images: ["6782573", "19140578", "861414"] },
  { id: 93, name: "Kitchen Mono Mixer", category: "Taps", price: 109, color: "Matt Black", size: "", bidet: "", code: "166-006-415", stock: true,
    images: ["861414", "6782573", "3616761"] },
  { id: 94, name: "Outdoor Garden Tap", category: "Taps", price: 39, color: "Chrome", size: "", bidet: "", code: "166-006-416", stock: false,
    images: ["3616761", "861414", "19140578"] },

  // Shower Systems (even more)
  { id: 95, name: "Walk-In Shower Panel", category: "Shower Systems", price: 329, color: "Chrome", size: "", bidet: "", code: "166-007-511", stock: true,
    images: ["4194865", "4194864", "1909656"] },
  { id: 96, name: "Shower Bath Screen", category: "Shower Systems", price: 159, color: "Chrome", size: "", bidet: "", code: "166-007-512", stock: true,
    images: ["1909656", "4194866", "4194865"] },
  { id: 97, name: "Digital Shower Controller", category: "Shower Systems", price: 389, color: "Matt Black", size: "", bidet: "", code: "166-007-513", stock: true,
    images: ["4194864", "1909656", "4194866"] },
  { id: 98, name: "Ceiling Shower Arm", category: "Shower Systems", price: 79, color: "Chrome", size: "", bidet: "", code: "166-007-514", stock: true,
    images: ["4194866", "4194865", "1909656"] },
  { id: 99, name: "Shower Niche Shelf Kit", category: "Shower Systems", price: 69, color: "White", size: "", bidet: "", code: "166-007-515", stock: true,
    images: ["1909656", "4194864", "4194865"] },
  { id: 100, name: "Slimline Shower Tray", category: "Shower Systems", price: 189, color: "White", size: "", bidet: "", code: "166-007-516", stock: false,
    images: ["4194865", "1909656", "4194864"] },

  // Tiles (even more)
  { id: 101, name: "Crackle Glaze Tile", category: "Tiles", price: 52, color: "White", size: "15x15", bidet: "", code: "166-008-611", stock: true,
    images: ["11285486", "11285334", "11285340"], ext: "png" },
  { id: 102, name: "Marble Effect Tile", category: "Tiles", price: 58, color: "White", size: "60x120", bidet: "", code: "166-008-612", stock: true,
    images: ["11285340", "11285486", "11285344"], ext: "png" },
  { id: 103, name: "Concrete Look Tile", category: "Tiles", price: 34, color: "Matt Stone Grey", size: "60x60", bidet: "", code: "166-008-613", stock: true,
    images: ["11285344", "11285334", "11285486"], ext: "png" },
  { id: 104, name: "Penny Round Mosaic", category: "Tiles", price: 46, color: "White", size: "30x30", bidet: "", code: "166-008-614", stock: true,
    images: ["11285334", "11285340", "11285344"], ext: "png" },
  { id: 105, name: "Wood Effect Plank Tile", category: "Tiles", price: 39, color: "Matt Sand Beige", size: "20x120", bidet: "", code: "166-008-615", stock: true,
    images: ["11285486", "11285344", "11285334"], ext: "png" },
  { id: 106, name: "Geometric Feature Tile", category: "Tiles", price: 61, color: "Matt Black", size: "20x20", bidet: "", code: "166-008-616", stock: false,
    images: ["11285340", "11285334", "11285486"], ext: "png" },

  // Accessories (even more)
  { id: 107, name: "Freestanding Toilet Brush", category: "Accessories", price: 18, color: "Matt Black", size: "", bidet: "", code: "166-009-711", stock: true,
    images: ["12679", "7262767", "4210310"] },
  { id: 108, name: "Double Robe Hook", category: "Accessories", price: 16, color: "Chrome", size: "", bidet: "", code: "166-009-712", stock: true,
    images: ["4210310", "12679", "4238996"] },
  { id: 109, name: "Soap and Lotion Set", category: "Accessories", price: 27, color: "Chrome", size: "", bidet: "", code: "166-009-713", stock: true,
    images: ["7262767", "4238996", "12679"] },
  { id: 110, name: "Bath Mat", category: "Accessories", price: 21, color: "White", size: "", bidet: "", code: "166-009-714", stock: true,
    images: ["4238996", "12679", "7262767"] },
  { id: 111, name: "Shower Curtain", category: "Accessories", price: 23, color: "White", size: "", bidet: "", code: "166-009-715", stock: true,
    images: ["4210310", "4238996", "7262767"] },
  { id: 112, name: "Toothbrush Tumbler", category: "Accessories", price: 9, color: "Chrome", size: "", bidet: "", code: "166-009-716", stock: true,
    images: ["12679", "4210310", "4238996"] },
];

const GBP_TO_ZAR_RATE = 24;
const zarFormatter = new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR" });

function formatPrice(basePrice) {
  return zarFormatter.format(basePrice * GBP_TO_ZAR_RATE);
}

function pexelsUrl(id, ext, w) {
  ext = ext || "jpeg";
  w = w || 500;
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=${w}`;
}

function getProductImages(product, w) {
  return product.images.map((id) => pexelsUrl(id, product.ext, w));
}

function getProductById(id) {
  return CATALOG.find((p) => p.id === Number(id));
}

function getCategorySlug(category) {
  const map = {
    "Toilets": "toilets", "Washbasins": "washbasins", "Furniture": "furniture",
    "Taps": "taps", "Shower Systems": "showers", "Tiles": "tiles", "Accessories": "accessories"
  };
  return map[category] || "";
}
