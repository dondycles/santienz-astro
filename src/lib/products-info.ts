import nafufil from "@/images/products/nafufil.webp";
import sl from "@/images/products/sl.webp";
import hf from "@/images/products/hf.webp";

export const PRODUCTS_INFO: {
  id: string;
  name: string;
  desc: string;
  highlights: string[];
  imgs: ImageMetadata[];
}[] = [
  {
    id: "ccrete-sl",
    name: "CCRETE SL",
    desc: "A heavy- duty polyurethane flooring system, two layer smooth finish polyurethane mortar system of high-grade polyurethane resin for concrete and similar substrates. The primer is a scratch coat of CCRETE Standard applied to a thickness of 2-3mm. The wearing layer of CCRETE Standard is then applied to a thickness of 2 mm minimum to 3 mm maximum. The product exhibits a very high level of resistance against a large number of acids, solvents and other chemicals as well as a high abrasion resistance combined with excellent hygienic properties.",
    highlights: ["Chemical Resistant", "Abrasion Resistant", "Hygienic"],
    imgs: [sl],
  },
  {
    id: "ccrete-hf",
    name: "CCRETE HF",
    desc: "A heavy-duty polyurethane flooring system, 4-component, slip resistant mortar system of high-grade polyurethane resin for concrete and similar  substrates. The product exhibits a very high level of resistance against a large number of  acids, solvents and other chemicals as well as a high abrasion resistance combined with  excellent hygienic properties.",
    highlights: ["Slip Resistant", "Chemical Resistant", "Hygienic"],
    imgs: [hf],
  },
  {
    id: "nafufil-km-250",
    name: "NAFUFIL-KM-250",
    desc: "A fire-resistant, fiber-reinforced PCC/SPCC concrete replacement for structural and non-structural repairs. This one-component material supports hand and wet spray application, offering high carbonation resistance and protection against de-icing salts and chlorides. It is statically allowable, non-flammable, and engineered for extreme conditions, meeting stringent fire resistance standards for maximum safety and durability.",
    highlights: [
      "Fire Resistant",
      "Spray/Hand Applied",
      "High Carbonation Resistance",
    ],
    imgs: [nafufil],
  },
  {
    id: "mc-screed-2500-mf",
    name: "MC SCREED 2500 MF",
    desc: `A self smoothing, polyurethane-cement hybrid flooring system, designed for industrial applications requiring high performance, durabiliy, and hygiene. It is a three-component system applied in 3-6mm thickness, offering excellent resistance to mechanical stress and aggressive chemicals. The product is solvent-free, and HACCP certifies, making it ideal for food and beverages processing areas. It features a matt finish for aesthetic flexibility and superior perfomance.
    
    This flooring system is engineered to withstand services temperature ranging from -10 degree celcius to 100 degree celcius, and also provides bacterial and fungal growth resistance, making it suitable for sterile and sensitive environments`,
    highlights: [
      "Wide Temp Resistance",
      "Solvent-Free",
      "Bacterial & Fungal Resistant",
    ],
    imgs: [],
  },
];
