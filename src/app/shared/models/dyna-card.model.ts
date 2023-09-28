export class DynaCardModel {
    SurfaceCard: any;
    SurfaceCardTime: any;
    SurfaceCardPosition: any;
    SurfaceCardLoad: any;
    DownholeCardPosition: any;
    DownholeCardLoad: any;
    DownholeCard: any;
    DownholeCardTime: any;
}


export class DynacardModel2 {
    id!: number;
    surface_Card!: string;
    surface_Card_Time!: string;
    surface_Card_Position!: number;
    surface_Card_Load!: number;
    downhole_Card_Position!: number;
    downhole_Card_Load!: number;
    downhole_Card!: string;
    downhole_Card_Time!: string;
    dynacard_Classification!: string;
    secondary_Classification!: string;
    confidence!: string
}

export interface CardDetailsModel extends FramesDynameter {	
    id: string;	
    pumpFillage_per: number;	
    SPM: number;	
    minPolishedRodLoad_lbs: number;	
    peakPolishedRodLoad_lbs: number;	
    surfaceStrokeLength_in: number;	
    downholeStrokeLength_in: number;	
    totalFluid_in: number;	
    notes: string;	
    cardName:string;	
}	
export interface DynaCardDetailsModel extends FramesDynameter {	
    id: string;	
    pumpFillage: number;	
    spm: number;	
    minPublishedRodLoad: number;	
    pickPublishedRodLoad: number;	
    surfaceStrokeLength: number;	
    downloadStroke: number;	
    totalFluid: number;	
    notes: string;	
    cardName:string;	
}

export interface Classification {
    name: string;
    count: number;
}

export interface DateRangeBubbleChart {
    from: string;
    to: string;
    classifications: Classification[];
}

export interface BubbleChartInfo {
    cards: DateRangeBubbleChart[];
    classification: Classification[];
}

export interface FramesDynameter {
    classification: string,
    frame: Date
}

export interface ClassficationInfo {
    id: number,
    type: string,
    value: number,
    symbolClass: string
}