export default interface Products {
        _id: string,
        name: string,
        type: string,
        img: string,
        price: number,
        preparation: {
                entire: Boolean,
                withOutHeadGuts: Boolean,
                withOutThorn: Boolean,
                fillet: Boolean,
                slices:Boolean,
                fresh: Boolean,
                cooked: Boolean
        }
};
