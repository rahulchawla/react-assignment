export class ProductInfo {
    constructor(
        public ProductRowId:number,
        public ProductId:string,
        public ProductName:string,
        public CategoryName: string,
        public Manufacturer:string,
        public Description:string,
        public BasePrice:number,
        public CanDelete:boolean
    ){}
}