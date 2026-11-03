/*
 * Garage sale inventory.
 * Edit this file to change names, prices, descriptions, or mark items as sold.
 *   price:       number in dollars (0 shows as "$0.00")
 *   sold:        true shows a "Sold" badge
 *   photos:      file names inside the img/ folder, first one is the cover
 */
const SALE_ITEMS = Object.freeze([
  {
    id: "metal-fan",
    name: "Metal Fan",
    description: "30 cubic feet of air.",
    price: 0,
    sold: false,
    photos: ["abanico_metal_30_pies_cubicos.jpeg"],
  },
  {
    id: "queen-bed-full-base",
    name: "Queen Bed - Full Bed Base",
    description: "",
    price: 0,
    sold: false,
    photos: ["cama_queen_base_Cama_completa.jpeg"],
  },
  {
    id: "queen-bed-split-base",
    name: "Queen Bed - Split Bed Base",
    description: "",
    price: 0,
    sold: false,
    photos: ["Cama_queen_con_base_Cama.jpeg"],
  },
  {
    id: "queen-mattress",
    name: "Queen Mattress (no base)",
    description: "",
    price: 0,
    sold: false,
    photos: ["colchon_queen_sin_base_cama.jpeg"],
  },
  {
    id: "kids-desk",
    name: "Kids' Desk",
    description: "",
    price: 0,
    sold: false,
    photos: ["escritorio_infantil.jpeg", "escritorio_infantil_superior.jpeg"],
  },
  {
    id: "washing-machine",
    name: "Washing Machine",
    description: "",
    price: 0,
    sold: false,
    photos: [
      "lavadora_exterior.jpeg",
      "lavadora_tablero_control.jpeg",
      "Lavadora_interior.jpeg",
      "lavadora_etiqueta_energia.jpeg",
    ],
  },
  {
    id: "tall-corner-table",
    name: "Tall Corner Accent Table",
    description: "",
    price: 0,
    sold: false,
    photos: ["mesa_alta_de_centro_esquinero.jpeg", "mesa_alta_de_centro_esquinero_2.jpeg"],
  },
  {
    id: "kids-work-table",
    name: "Kids' Work Table",
    description: "",
    price: 0,
    sold: false,
    photos: ["mesa_trabajo_infantil.jpeg"],
  },
  {
    id: "refrigerator",
    name: "Refrigerator",
    description: "",
    price: 0,
    sold: false,
    photos: ["nevera.jpeg", "nevera_puerta.jpeg", "nevera_interior.jpeg"],
  },
  {
    id: "plastic-chair",
    name: "Rigid Plastic Chair",
    description: "",
    price: 0,
    sold: false,
    photos: ["Silla_plástico_rigido.jpeg"],
  },
  {
    id: "sofa",
    name: "3-Seat Sofa",
    description: "",
    price: 0,
    sold: false,
    photos: ["Sofa_3_puestos_blanco.jpeg"],
  },
  {
    id: "caixun-tv",
    name: "Caixun 32\" TV",
    description: "",
    price: 0,
    sold: false,
    photos: ["televisor_caixun_32\".jpeg"],
  },
]);
