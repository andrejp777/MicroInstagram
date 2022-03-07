export interface Photo{
  albumId: number;
  id:number;
  title:string;
  url:string;
  thumbnailUrl:string;
}

export class NewPhoto{
  constructor(
    public albumId=0,
    public id=0,
    public title="",
    public url="",
    public thumbnailUrl=""
  ){}
}
