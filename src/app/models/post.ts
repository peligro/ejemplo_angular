export class Post
{
	constructor
	(
		public id: number,
		public categoria_id: number,
		public titulo : string,
		public slug: string,
		public foto: string,
		public detalle : string,
		public fecha : any
	)
	{
		
	}
}