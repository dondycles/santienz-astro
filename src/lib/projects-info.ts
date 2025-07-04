import antarticImg1 from "@/images/projects/antartica/antartica-0.jpg";
import antarticImg2 from "@/images/projects/antartica/antartica-1.jpg";
import antarticImg3 from "@/images/projects/antartica/antartica-2.jpg";

import corpbayImg1 from "@/images/projects/corpbay/corpbay-0.jpg";

import decktaImg1 from "@/images/projects/deckta/deckta-0.jpg";
import decktaImg2 from "@/images/projects/deckta/deckta-1.jpg";
import decktaImg3 from "@/images/projects/deckta/deckta-2.jpg";
import decktaImg4 from "@/images/projects/deckta/deckta-3.jpg";
import decktaImg5 from "@/images/projects/deckta/deckta-4.jpg";
import decktaImg6 from "@/images/projects/deckta/deckta-5.jpg";

import delimondoImg1 from "@/images/projects/delimondo/delimondo-0.jpg";
import delimondoImg2 from "@/images/projects/delimondo/delimondo-1.jpg";
import delimondoImg3 from "@/images/projects/delimondo/delimondo-2.jpg";
import delimondoImg4 from "@/images/projects/delimondo/delimondo-3.jpg";

import firstLandImg1 from "@/images/projects/first-inland/first-inland-0.jpg";
import firstLandImg2 from "@/images/projects/first-inland/first-inland-1.jpg";

import fiveSImg1 from "@/images/projects/five-s/five-s-0.jpg";
import fiveSImg2 from "@/images/projects/five-s/five-s-1.jpg";
import fiveSImg3 from "@/images/projects/five-s/five-s-2.jpg";

import frabelleImg1 from "@/images/projects/frabelle/frabelle-0.jpg";
import frabelleImg2 from "@/images/projects/frabelle/frabelle-1.jpg";
import frabelleImg3 from "@/images/projects/frabelle/frabelle-2.jpg";

import jentecImg1 from "@/images/projects/jentec/jentec-0.jpg";
import jentecImg2 from "@/images/projects/jentec/jentec-1.jpg";
import jentecImg3 from "@/images/projects/jentec/jentec-2.jpg";

import metsImg1 from "@/images/projects/mets/mets-0.jpg";
import metsImg2 from "@/images/projects/mets/mets-1.jpg";
import metsImg3 from "@/images/projects/mets/mets-2.jpg";

import nordicImg1 from "@/images/projects/nordic/nordic-0.jpg";
import nordicImg2 from "@/images/projects/nordic/nordic-1.jpg";

import pinnacleImg1 from "@/images/projects/pinnacle/pinnacle-0.jpg";

import plxImg1 from "@/images/projects/plx/plx-0.jpg";

import pureImg1 from "@/images/projects/pure/pure-0.jpg";

import quaensaImg1 from "@/images/projects/quaensa/quaensa-0.jpg";
import quaensaImg2 from "@/images/projects/quaensa/quaensa-1.jpg";
import quaensaImg3 from "@/images/projects/quaensa/quaensa-2.jpg";

import royalCargoImg1 from "@/images/projects/royal-cargo/royal-cargo-0.jpg";
import royalCargoImg2 from "@/images/projects/royal-cargo/royal-cargo-1.jpg";
import royalCargoImg3 from "@/images/projects/royal-cargo/royal-cargo-2.jpg";
import royalCargoImg4 from "@/images/projects/royal-cargo/royal-cargo-3.jpg";

import royaleColdImg1 from "@/images/projects/royale-cold/royale-cold-0.jpg";
import royaleColdImg2 from "@/images/projects/royale-cold/royale-cold-1.jpg";

import sanMiguelImg1 from "@/images/projects/san-miguel/san-miguel-0.jpg";

import starksonImg1 from "@/images/projects/starkson/starkson-0.jpg";

import vikingImg1 from "@/images/projects/viking/viking-0.jpg";
import vikingImg2 from "@/images/projects/viking/viking-1.jpg";

import zuruImg1 from "@/images/projects/zuru/zuru-0.jpg";

const ANTARTICA_IMGS = [antarticImg1, antarticImg2, antarticImg3];

const CORPBAY_IMGS = [corpbayImg1];

const DECKTA_IMGS = [
  decktaImg1,
  decktaImg2,
  decktaImg3,
  decktaImg4,
  decktaImg5,
  decktaImg6,
];

const DELIMONDO_IMGS = [
  delimondoImg1,
  delimondoImg2,
  delimondoImg3,
  delimondoImg4,
];

const FIRST_LAND_IMGS = [firstLandImg1, firstLandImg2];

const FIVE_S_IMGS = [fiveSImg1, fiveSImg2, fiveSImg3];

const FRABELLE_IMGS = [frabelleImg1, frabelleImg2, frabelleImg3];

const JENTEC_IMGS = [jentecImg1, jentecImg2, jentecImg3];

const METS_IMGS = [metsImg1, metsImg2, metsImg3];

const NORDIC_IMGS = [nordicImg1, nordicImg2];

const PINNACLE_IMGS = [pinnacleImg1];

const PLX_IMGS = [plxImg1];

const PURE_IMGS = [pureImg1];

const QUAENSA_IMGS = [quaensaImg1, quaensaImg2, quaensaImg3];

const ROYAL_CARGO_IMGS = [
  royalCargoImg1,
  royalCargoImg2,
  royalCargoImg3,
  royalCargoImg4,
];

const ROYALE_COLD_IMGS = [royaleColdImg1, royaleColdImg2];

const SAN_MIGUEL_IMGS = [sanMiguelImg1];

const STARKSON_IMGS = [starksonImg1];

const VIKING_IMGS = [vikingImg1, vikingImg2];

const ZURU_IMGS = [zuruImg1];

export const PROJECT_INFO: {
  slug: string;
  title: string;
  imgs?: ImageMetadata[] | null;
  address?: string;
  sqm?: number;
  products: { title: string; id: string }[];
}[] = [
  {
    slug: "antartica-cold-storage",
    title: "Antartica Cold Storage",
    imgs: ANTARTICA_IMGS,
    address: "1618 Advincula Ave., Kawit, 4104 Cavite",
    sqm: 8000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "corpbay-realty-corp",
    title: "Corpbay Realty Corp",
    imgs: CORPBAY_IMGS,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "deckta-pacific-equities-inc",
    title: "Deckta Pacific Equities Inc",
    imgs: DECKTA_IMGS,
    address: "268 C Raymundo Avenue, Pasig City",
    sqm: 4000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "delimondo",
    title: "Delimondo",
    imgs: DELIMONDO_IMGS,
    address: "Tanza, Cavite",
    sqm: 6000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "first-inland-kingdom-cold-storage",
    title: "First Inland Kingdom Cold Storage",
    imgs: FIRST_LAND_IMGS,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "five-s-vehicle-inspection-center",
    title: "Five S Vehicle Inspection Center",
    imgs: FIVE_S_IMGS,
    address: "Cabanatuan, Nueva Ecija",
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "frabelle-group-of-companies",
    title: "Frabelle Group of Companies",
    imgs: FRABELLE_IMGS,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "jentec-storage-inc",
    title: "Jentec Storage Inc",
    imgs: JENTEC_IMGS,
    address: "C Raymundo Avenue, Pasig City",
    sqm: 6000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "mets-logistics-inc",
    title: "METS Logistics Inc",
    imgs: METS_IMGS,
    address: "Governor's Drive, Bancal, Carmona, Cavite",
    sqm: 20000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "nordic-atlantic-logistic-inc",
    title: "Nordic Atlantic Logistic Inc",
    imgs: NORDIC_IMGS,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "pinnacle-cold-storage-solution",
    title: "Pinnacle Cold Storage Solution",
    imgs: PINNACLE_IMGS,
    sqm: 8000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "plx-dry-and-cold-logistics-hub",
    title: "PLX Dry and Cold Logistics Hub",
    imgs: PLX_IMGS,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "pure-logistics-express-inc",
    title: "Pure Logistics Express Inc",
    imgs: PURE_IMGS,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "quaensa-foods-inc",
    title: "Quaensa Foods Inc",
    imgs: QUAENSA_IMGS,
    address: "Interior Provincial Road, Brgy. Pulong Gubat, Balagtas, Bulcan",
    sqm: 8000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "royal-cargo-inc",
    title: "Royal Cargo Inc",
    imgs: ROYAL_CARGO_IMGS,
    address: "North Hub Bulacan",
    sqm: 10000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "royale-cold-storage",
    title: "Royale Cold Storage",
    imgs: ROYALE_COLD_IMGS,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "san-miguel-foods-inc",
    title: "San Miguel Foods Inc",
    imgs: SAN_MIGUEL_IMGS,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "starkson-realty-inc",
    title: "Starkson Realty Inc",
    imgs: STARKSON_IMGS,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "viking-cold-storage",
    title: "Viking Cold Storage",
    imgs: VIKING_IMGS,
    sqm: 5000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "zuru-argo-industrial-corp",
    title: "Zuru Argo Industrial Corp",
    imgs: ZURU_IMGS,
    sqm: 5000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "aboitiz-power-plant",
    title: "Aboitiz Power Plant",
    address: "Magat, Isabela",
    sqm: 3500,
    products: [{ title: "Epoxy Coating", id: "epoxy-coating" }],
  },
  {
    slug: "ad-gothong",
    title: "Ad Gothong",
    address: "Mandaue City, Cebu",
    sqm: 125,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "andoks-manok",
    title: "Andoks Manok",
    address: "Batangas",
    sqm: 1200,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "angel-s-burger",
    title: "Angel's Burger",
    address: "Tayud, Consolacion Cebu City",
    sqm: 1500,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "alaska",
    title: "Alaska",
    address: "San Pedro, Laguna",
    sqm: 2000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "alcan-packaging-starpack",
    title: "Alcan Packaging Starpack",
    address: "Mapandan, Cainta Rizal",
    sqm: 1800,
    products: [{ title: "Epoxy Coating", id: "epoxy-coating" }],
  },
  {
    slug: "alpha-alleanza-manufacturing",
    title: "Alpha Alleanza Manufacturing",
    address: "Marilao Bulacan",
    sqm: 1200,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "alturas-ice-plant",
    title: "Alturas Ice Plant",
    address: "Bohol",
    sqm: 360,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "alturas-talibon",
    title: "Alturas Talibon",
    address: "Bohol",
    sqm: 770,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "american-home-dept",
    title: "American Home Dept",
    address: "Fairview Quezon City",
    sqm: 3500,
    products: [{ title: "Diamond Polish", id: "diamond-polish" }],
  },
  {
    slug: "american-power-corp",
    title: "American Power Corp.",
    address: "EPZA, Rosario Cavite",
    sqm: 1200,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "ankaciano-incorporated",
    title: "Ankaciano Incorporated",
    address: "Imus, Cavite",
    sqm: 180,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "amici-restaurant",
    title: "Amici Restaurant",
    address: "Makati City",
    sqm: 500,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "anna-s-breeders",
    title: "Anna's Breeders",
    address: "Toril, Davao City",
    sqm: 2000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "andoks",
    title: "Andoks",
    address: "Manila City",
    sqm: 400,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "asian-development-bank",
    title: "Asian Development Bank",
    address: "Ortigas, Mandaluyong",
    sqm: 405,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "a-tung-chingco-mfg-corp",
    title: "A Tung Chingco Mfg. Corp",
    address: "Zamboanga City",
    sqm: 1005,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "automated-technology-phil-inc",
    title: "Automated Technology Phil. Inc.",
    address: "Cabuyao, Laguna",
    sqm: 60,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "bread-of-life-ministry",
    title: "Bread of Life Ministry",
    address: "Quezon City",
    sqm: 1265,
    products: [
      { title: "Polyurethane Insulation", id: "polyurethane-insulation" },
    ],
  },
  {
    slug: "bristol-myers-squibb-phil-inc",
    title: "Bristol Myers Squibb (Phil.) Inc.",
    address: "Makati City",
    sqm: 800,
    products: [{ title: "Waterproofing", id: "waterproofing" }],
  },
  {
    slug: "bernabest-siomai-house",
    title: "Bernabest Siomai House",
    address: "Caloocan",
    sqm: 500,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "cabuyao-meat-processing",
    title: "Cabuyao Meat Processing",
    address: "Cabuyao, Laguna",
    sqm: 3000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "casa-verde-de-cebu",
    title: "Casa Verde de Cebu",
    address: "Cebu City, Cebu",
    sqm: 50,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "cdo-ice-plant",
    title: "CDO Ice Plant",
    address: "General Santos City",
    sqm: 1280,
    products: [{ title: "Epoxy Mortar", id: "epoxy-mortar" }],
  },
  {
    slug: "cebu-industrial-management-corp",
    title: "Cebu Industrial Management Corp.",
    address: "San Fernando, Pampanga",
    sqm: 7220,
    products: [{ title: "Epoxy Mortar", id: "epoxy-mortar" }],
  },
  {
    slug: "cebu-sherilyn",
    title: "Cebu Sherilyn",
    address: "Cebu City, Cebu",
    sqm: 1300,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
  {
    slug: "century-canning",
    title: "Century Canning",
    address: "Bicutan",
    sqm: 1000,
    products: [{ title: "Polyurethane Flooring", id: "polyurethane-flooring" }],
  },
];
