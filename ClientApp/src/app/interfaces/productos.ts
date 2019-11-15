export interface ProductoInterfaz {
    hard_drive: Harddrive;
    memory_gb: number;
    name: string;
    processor: string;
}

interface Harddrive {
    brand: string;
    capacity_gb: number;
    compatibility: string;
    model: string;
    weight_grams: number ;
}
