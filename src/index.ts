function add(a: number, b: number): number {
	return a + b;
}

function subtract(a: number, b: number): number {
	return a - b;
}

const t = add(1, 2);
const u = subtract(1, 2);

export type Add = typeof add;
export type Subtract = typeof subtract;
