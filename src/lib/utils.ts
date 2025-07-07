import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export async function imageSrcsToDataURIs(srcs: string[]): Promise<string[]> {
	return Promise.all(
		srcs.map((src) =>
			fetch(src)
				.then((res) => res.blob())
				.then(
					(blob) =>
						new Promise<string>((resolve, reject) => {
							const reader = new FileReader();
							reader.onloadend = () => {
								if (typeof reader.result === "string") resolve(reader.result);
								else reject(new Error("Failed to read as data URI"));
							};
							reader.onerror = reject;
							reader.readAsDataURL(blob);
						}),
				),
		),
	);
}
