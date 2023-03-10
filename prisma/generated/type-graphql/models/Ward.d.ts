import { User } from "../models/User";
import { WardCount } from "../resolvers/outputs/WardCount";
export declare class Ward {
    id: string;
    number: number;
    name: string;
    description?: string | null;
    Users?: User[];
    createdAt: Date;
    updatedAt: Date;
    _count?: WardCount | null;
}
