import bbc from "@/images/certs/bbc-2025.jpg";
import bp from "@/images/certs/bp-2025.jpg";
import coc from "@/images/certs/coc-2025.jpg";
import epo from "@/images/certs/epo-2025.jpg";
import fsic from "@/images/certs/fsic-2025.jpg";
import mp from "@/images/certs/mp-2025.jpg";
import or from "@/images/certs/or-2025.jpg";

export const CERTS_INFO: {
	title: string;
	img: ImageMetadata;
	type: "certificate" | "permit" | "receipt";
}[] = [
	{ title: "Barangay Business Clearance", img: bbc, type: "certificate" },
	{ title: "Certificate of Conformance", img: coc, type: "certificate" },
	{ title: "Environmental Permit to Operate", img: epo, type: "permit" },
	{
		title: "Fire Safety Inspection Certificate",
		img: fsic,
		type: "certificate",
	},
	{ title: "Mayor's Permit", img: mp, type: "permit" },
	{ title: "Official Receipt", img: or, type: "receipt" },
	{ title: "Business Permit", img: bp, type: "permit" },
];
