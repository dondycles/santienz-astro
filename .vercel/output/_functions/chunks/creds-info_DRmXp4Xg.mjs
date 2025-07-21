const bbc = new Proxy({"src":"/_astro/bbc-2025.BG7J2Jzv.jpg","width":1025,"height":1440,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/santienz-astro/src/images/certs/bbc-2025.jpg";
							}
							
							return target[name];
						}
					});

const bp = new Proxy({"src":"/_astro/bp-2025.BO_jmkDr.jpg","width":1600,"height":785,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/santienz-astro/src/images/certs/bp-2025.jpg";
							}
							
							return target[name];
						}
					});

const coc = new Proxy({"src":"/_astro/coc-2025.uMkCzwnY.jpg","width":1037,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/santienz-astro/src/images/certs/coc-2025.jpg";
							}
							
							return target[name];
						}
					});

const epo = new Proxy({"src":"/_astro/epo-2025.DwRCeiaK.jpg","width":1039,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/santienz-astro/src/images/certs/epo-2025.jpg";
							}
							
							return target[name];
						}
					});

const fsic = new Proxy({"src":"/_astro/fsic-2025.DfPyOPX4.jpg","width":1111,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/santienz-astro/src/images/certs/fsic-2025.jpg";
							}
							
							return target[name];
						}
					});

const mp = new Proxy({"src":"/_astro/mp-2025.BXxzpbLx.jpg","width":936,"height":1440,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/dev/santienz-astro/src/images/certs/mp-2025.jpg";
							}
							
							return target[name];
						}
					});

const CERTS_INFO = [
  { title: "Barangay Business Clearance", img: bbc, type: "certificate" },
  { title: "Certificate of Conformance", img: coc, type: "certificate" },
  {
    title: "Fire Safety Inspection Certificate",
    img: fsic,
    type: "certificate"
  },
  { title: "Business Permit", img: bp, type: "permit" },
  { title: "Environmental Permit to Operate", img: epo, type: "permit" },
  { title: "Mayor's Permit", img: mp, type: "permit" }
  // { title: "Official Receipt", img: or, type: "receipt" },
];

export { CERTS_INFO as C };
