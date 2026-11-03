/*
 * Inventario de la venta de garaje.
 * Edita este archivo para cambiar nombres, precios, descripciones o marcar artículos como vendidos.
 *   price:       número en pesos colombianos, sin puntos ni comas (ej. 150000 se muestra como "$ 150.000")
 *   sold:        true muestra la etiqueta "Vendido"
 *   photos:      nombres de archivo dentro de la carpeta img/, la primera es la portada
 */
const SALE_ITEMS = Object.freeze([
  {
    id: "metal-fan",
    name: "Abanico de Metal",
    description: "30 pies cúbicos de aire.",
    price: 0,
    sold: false,
    photos: ["abanico_metal_30_pies_cubicos.jpeg"],
  },
  {
    id: "queen-bed-full-base",
    name: "Cama Queen - Base Cama Completa",
    description: "",
    price: 0,
    sold: false,
    photos: ["cama_queen_base_Cama_completa.jpeg"],
  },
  {
    id: "queen-bed-split-base",
    name: "Cama Queen - Base Cama Dividida",
    description: "",
    price: 0,
    sold: false,
    photos: ["Cama_queen_con_base_Cama.jpeg"],
  },
  {
    id: "queen-mattress",
    name: "Colchón Queen (sin la base)",
    description: "",
    price: 0,
    sold: false,
    photos: ["colchon_queen_sin_base_cama.jpeg"],
  },
  {
    id: "kids-desk",
    name: "Escritorio Infantil",
    description: "",
    price: 0,
    sold: false,
    photos: ["escritorio_infantil.jpeg", "escritorio_infantil_superior.jpeg"],
  },
  {
    id: "washing-machine",
    name: "Lavadora",
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
    name: "Mesa Alta de Centro Esquinero",
    description: "",
    price: 0,
    sold: false,
    photos: ["mesa_alta_de_centro_esquinero.jpeg", "mesa_alta_de_centro_esquinero_2.jpeg"],
  },
  {
    id: "kids-work-table",
    name: "Mesa de Trabajo Infantil",
    description: "",
    price: 0,
    sold: false,
    photos: ["mesa_trabajo_infantil.jpeg"],
  },
  {
    id: "refrigerator",
    name: "Nevera",
    description: "",
    price: 0,
    sold: false,
    photos: ["nevera.jpeg", "nevera_puerta.jpeg", "nevera_interior.jpeg"],
  },
  {
    id: "plastic-chair",
    name: "Silla de Plástico Rígido",
    description: "",
    price: 0,
    sold: false,
    photos: ["Silla_plástico_rigido.jpeg"],
  },
  {
    id: "sofa",
    name: "Sofá 3 Puestos",
    description: "",
    price: 0,
    sold: false,
    photos: ["Sofa_3_puestos_blanco.jpeg"],
  },
  {
    id: "caixun-tv",
    name: "Televisor Caixun 32\"",
    description: "",
    price: 0,
    sold: false,
    photos: ["televisor_caixun_32\".jpeg"],
  },
]);
