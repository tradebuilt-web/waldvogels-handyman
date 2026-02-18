declare module "astro:actions" {
	type Actions = typeof import("/Users/lukeboyett/repos/landing-pages/waldvogels-handyman/src/actions/index.ts")["server"];

	export const actions: Actions;
}